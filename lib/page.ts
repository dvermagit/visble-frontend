// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const pagesDirectory = path.join(process.cwd(), 'content/pages');

// export interface Page {
//   slug: string;
//   title: string;
//   content: string;
// }

// export function getPageBySlug(slug: string): Page | null {
//   try {
//     const fullPath = path.join(pagesDirectory, slug, 'index.md');
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const { data, content } = matter(fileContents);

//     return {
//       slug,
//       title: data.title || slug,
//       content,
//     };
//   } catch (error) {
//     console.error(`Error loading page ${slug}:`, error);
//     return null;
//   }
// }

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pagesDirectory = path.join(process.cwd(), 'content/pages');

export interface Page {
  slug: string;
  title: string;
  content: string;
}

export function getPageBySlug(slug: string): Page | null {
  try {
    const fullPath = path.join(pagesDirectory, slug, 'index.md');
    
    if (!fs.existsSync(fullPath)) {
      console.error(`Page not found: ${fullPath}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      content,
    };
  } catch (error) {
    console.error(`Error loading page ${slug}:`, error);
    return null;
  }
}

export function getAllPages(): Page[] {
  try {
    if (!fs.existsSync(pagesDirectory)) {
      return [];
    }

    const folderNames = fs.readdirSync(pagesDirectory);
    
    return folderNames
      .filter((folderName) => {
        const fullPath = path.join(pagesDirectory, folderName, 'index.md');
        return fs.existsSync(fullPath);
      })
      .map((folderName) => {
        const page = getPageBySlug(folderName);
        return page!;
      })
      .filter(Boolean);
  } catch (error) {
    console.error('Error getting all pages:', error);
    return [];
  }
}