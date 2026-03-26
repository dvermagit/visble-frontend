import { sanityClient, urlFor } from '@/lib/sanity.client';
import { blogBySlugQuery, allBlogSlugsQuery } from '@/lib/queries';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import CalendlyButton from '@/components/CalendlyButton';

export const revalidate = 60;
export const dynamicParams = true;
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityClient.fetch(allBlogSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return { title: 'Post Not Found' };
  }

  const post = await sanityClient.fetch(blogBySlugQuery, { slug });

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const description = post.seoDescription || post.excerpt || 'Read this article on Visble.ai';
  const baseUrl = 'https://visble.ai';

  return {
    title: post.seoTitle || `${post.title} | Visble.ai Blog`,
    description,
    keywords: post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'Visble.ai',
      images: post.coverImage
        ? [{ url: urlFor(post.coverImage).width(1200).height(630).url(), width: 1200, height: 630, alt: post.title }]
        : [],
      type: 'article',
      publishedTime: new Date(post.publishedAt).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : [],
    },
    alternates: { canonical: `${baseUrl}/blog/${slug}` },
    robots: { index: true, follow: true },
  };
}

// Extract headings from Portable Text for TOC
function extractHeadings(body: any[]) {
  const headings: { level: number; text: string; id: string }[] = [];
  
  body.forEach((block) => {
    if (block._type === 'block' && ['h2', 'h3', 'h4'].includes(block.style)) {
      const text = block.children
        ?.map((child: any) => child.text)
        .join('')
        .trim();
      
      if (text && !text.includes('Isha Sachdeva') && !text.includes('Founder')) {
        const level = parseInt(block.style.replace('h', ''));
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        
        headings.push({ level, text, id });
      }
    }
  });
  
  return headings;
}

function parseMarkdownTable(rawText: string) {
  // Split on the row boundary: "| |" pattern (closing pipe of one row + opening pipe of next)
  const rowStrings = rawText.split(/\|\s*\|/).map((s: string) => s.trim()).filter(Boolean);

  const rows = rowStrings
    .map((line: string) =>
      line.replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell: string) => cell.trim())
    )
    .filter((row: string[]) => !row.every((cell: string) => /^[-\s]+$/.test(cell)))
    .filter((row: string[]) => row.some((cell: string) => cell.length > 0));

  return rows;
}

const createPortableTextComponents = (headings: any[]): PortableTextComponents => ({
  block: {
    h1: ({ children, value }: any) => {
      const text = value.children?.map((c: any) => c.text).join('').trim();
      const heading = headings.find(h => h.text === text);
      return <h1 id={heading?.id} className="text-4xl font-bold text-gray-900 mb-6 mt-12">{children}</h1>;
    },
    h2: ({ children, value }: any) => {
      const text = value.children?.map((c: any) => c.text).join('').trim();
      const heading = headings.find(h => h.text === text);
      return <h2 id={heading?.id} className="text-3xl font-bold text-gray-900 mb-6 mt-12 pb-4 border-b border-gray-200">{children}</h2>;
    },
    h3: ({ children, value }: any) => {
      const text = value.children?.map((c: any) => c.text).join('').trim();
      const heading = headings.find(h => h.text === text);
      return <h3 id={heading?.id} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h3>;
    },
    h4: ({ children, value }: any) => {
      const text = value.children?.map((c: any) => c.text).join('').trim();
      const heading = headings.find(h => h.text === text);
      return <h4 id={heading?.id} className="text-xl font-bold text-gray-900 mb-3 mt-6">{children}</h4>;
    },
    normal: ({ children, value }: any) => {
      const rawText = (value?.children ?? []).map((c: any) => c.text ?? '').join('');

      if (rawText.trim().startsWith('|')) {
        const rows = parseMarkdownTable(rawText);
        if (rows.length >= 2) {
          const [headerRow, ...bodyRows] = rows;
          return (
            <div className="my-8 overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    {headerRow.map((cell: string, i: number) => (
                      <th key={i} className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row: string[], rowIndex: number) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell: string, cellIndex: number) => (
                        <td key={cellIndex} className="border border-gray-200 px-4 py-3 text-gray-700 align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }

      return <p className="text-gray-700 leading-relaxed mb-6 text-base">{children}</p>;
    },
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-purple-500 bg-purple-50 py-4 px-6 italic rounded-r my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="bg-gray-100 text-purple-600 px-2 py-1 rounded text-sm font-mono">{children}</code>,
    link: ({ children, value }: any) => {
      const isExternal = value?.href?.startsWith('http') && !value.href.includes('visble.ai');
      return (
        <a
          href={value?.href}
          className="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 underline-offset-2 transition-colors"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
          {isExternal && (
            <svg className="inline-block w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-gray-700 leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="text-gray-700 leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Blog image'}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    ),
    html: ({ value }: any) => (
      <div className="my-8 overflow-x-auto" dangerouslySetInnerHTML={{ __html: value.html }} />
    ),
    table: ({ value }: any) => (
      <div className="my-8 overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {value.rows?.map((row: any, rowIndex: number) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.cells?.map((cell: string, cellIndex: number) =>
                  rowIndex === 0 ? (
                    <th key={cellIndex} className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900 bg-gray-100 whitespace-nowrap">
                      {cell}
                    </th>
                  ) : (
                    <td key={cellIndex} className="border border-gray-200 px-4 py-3 text-gray-700 align-top">
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
});

export default async function BlogPost({ params }: any) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  const post = await sanityClient.fetch(blogBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.body);
  const portableTextComponents = createPortableTextComponents(headings);

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.seoDescription,
    image: post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : 'https://visble.ai/visble_logo.png',
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.publishedAt).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Isha Sachdeva',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'Visble.ai' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Visble.ai',
      logo: { '@type': 'ImageObject', url: 'https://visble.ai/visble_logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://visble.ai/blog/${slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://visble.ai' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://visble.ai/blogs' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://visble.ai/blog/${slug}` },
    ],
  };

  // Calculate read time
  const wordCount = post.body.reduce((count: number, block: any) => {
    if (block._type === 'block') {
      const text = block.children?.map((child: any) => child.text).join(' ') || '';
      return count + text.split(' ').length;
    }
    return count;
  }, 0);
  const readTime = Math.ceil(wordCount / 200);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white pt-16">
        <Header />

        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/blogs" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <article className="lg:col-span-8">
              <header className="mb-12">
                {post.category && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
                      {post.category}
                    </span>
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{post.title}</h1>

                <div className="flex items-center gap-4 mb-8 pb-8 border-b">
                  <img src="/images/blog/IMG_5768-e1751266201560.webp" alt="Isha Sachdeva" className="w-14 h-14 rounded-full object-cover"/>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Isha Sachdeva</div>
                    <div className="text-sm text-gray-600">Founder, visble.ai</div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="text-gray-400">•</span>
                    <span>{readTime} min read</span>
                  </div>
                </div>
              </header>

              {post.coverImage && (
                <div className="mb-12">
                  <img
                    src={urlFor(post.coverImage).width(1200).height(630).url()}
                    alt={post.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mb-6
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-200
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-li:text-gray-700 prose-li:leading-relaxed
                prose-img:rounded-lg prose-img:shadow-md
                prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:rounded-r
                prose-table:w-full prose-table:border-collapse prose-table:text-sm
                prose-thead:bg-gray-100
                prose-th:border prose-th:border-gray-200 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
                prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700 prose-td:align-top
                prose-tr:even:bg-gray-50">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>

              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm border border-purple-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Ready to boost your AI visibility?</h2>
                  <p className="text-gray-600 mb-6 text-lg">Get your website optimized for AI search engines like ChatGPT, Perplexity, and Gemini.</p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <CalendlyButton variant="blog" />
                  </div>
                </div>
              </div>
            </article>

            {headings.length > 0 && (
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Table of Contents
                    </h2>
                    <nav className="space-y-2">
                      {headings.map((heading, index) => (
                        <a
                          key={index}
                          href={`#${heading.id}`}
                          className={`block text-sm hover:text-purple-600 transition-all py-1 ${
                            heading.level === 2
                              ? 'font-bold text-gray-900 hover:translate-x-1'
                              : 'ml-4 text-gray-600 font-medium hover:translate-x-1'
                          } transition-transform`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="mt-6 bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-900 mb-3">Share this article</h3>
                    <div className="flex gap-2">
                      <a
                        href={`https://twitter.com/intent/tweet?url=https://visble.ai/blog/${slug}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors text-center text-sm font-medium"
                      >
                        Twitter
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://visble.ai/blog/${slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors text-center text-sm font-medium"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}