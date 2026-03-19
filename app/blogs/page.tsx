import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import { allBlogsQuery } from '@/lib/queries';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - AI Search Optimization Insights',
  description: 'Expert insights on AI search optimization, generative engine optimization (GEO), and getting cited by ChatGPT, Perplexity, and other AI engines.',
  keywords: 'AI SEO blog, GEO insights, AI search optimization tips, ChatGPT optimization',
  alternates: {
    canonical: 'https://visble.ai/blogs',
  },
  openGraph: {
    title: 'Blog - AI Search Optimization Insights | Visble.ai',
    description: 'Expert insights on AI search optimization and GEO',
    url: 'https://visble.ai/blogs',
    type: 'website',
  },
};

export default async function BlogsPage() {
  const posts: any[] = await sanityClient.fetch(allBlogsQuery);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Header Section */}
      <div className="bg-white border-b p-5">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Insights, guides, and the latest updates on AI search optimization and generative engine visibility.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found. Add one in Sanity Studio!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link 
                key={post._id} 
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Cover Image */}
                  {post.coverImage && (
                    <div className="relative h-56 w-full bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                      <img
                        src={urlFor(post.coverImage).width(600).height(400).fit('crop').url()}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category */}
                    {post.category && (
                      <div className="flex gap-2 mb-3">
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    {/* Date */}
                    <time className="text-sm text-gray-500 mb-3 block">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    
                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {/* Read More Link */}
                    <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Read article</span>
                      <svg 
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}