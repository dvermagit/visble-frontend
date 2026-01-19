import { Post } from '@/lib/posts';

export function generateBlogSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://visble.ai/blog/${post.slug}/`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.coverImage
      ? `https://visble.ai${post.coverImage}`
      : undefined,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Visble.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Visble.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://visble.ai/logo.png"
      }
    },
    "keywords": post.categories?.join(", "),
    "articleSection": post.categories
  };
}
