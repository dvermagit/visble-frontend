import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  categories?: string[];
  coverImage?: string;
}

// Get all blog posts
export function getAllPosts(): Post[] {
  const folderNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = folderNames
    .filter((folderName) => {
      const fullPath = path.join(postsDirectory, folderName, 'index.md');
      return fs.existsSync(fullPath);
    })
    .map((folderName) => {
      const slug = folderName;
      const fullPath = path.join(postsDirectory, folderName, 'index.md');
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract first paragraph as excerpt if not provided
      const excerpt = data.excerpt || content.split('\n\n')[0].substring(0, 160);

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        excerpt,
        content,
        categories: data.categories || [],
        coverImage: data.coverImage || null,
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

// Get single post by slug
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, slug, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const excerpt = data.excerpt || content.split('\n\n')[0].substring(0, 160);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt,
      content,
      categories: data.categories || [],
      coverImage: data.coverImage || null,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

// Get posts by category
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => 
    post.categories?.some((cat) => 
      cat.toLowerCase() === category.toLowerCase()
    )
  );
}

// Get all unique categories
export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set<string>();
  
  allPosts.forEach((post) => {
    post.categories?.forEach((cat) => categories.add(cat));
  });
  
  return Array.from(categories);
}