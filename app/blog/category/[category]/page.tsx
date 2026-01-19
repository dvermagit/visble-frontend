import { getPostsByCategory, getAllCategories } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryName = decodeURIComponent(params.category);
  
  return {
    title: `${categoryName} - Blog - Visble AI`,
    description: `Articles about ${categoryName}`,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = decodeURIComponent(params.category);
  const posts = getPostsByCategory(categoryName);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-4">Category: {categoryName}</h1>
      <p className="text-gray-600 mb-12">{posts.length} articles</p>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              {post.coverImage && (
                <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                  <img
                    src={`/images/blog/${post.coverImage}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <time className="text-gray-600 text-sm block mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                
                {post.excerpt && (
                  <p className="text-gray-700 line-clamp-3 mb-4">{post.excerpt}</p>
                )}
                
                <span className="text-blue-600 font-medium group-hover:underline">
                  Read more →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}