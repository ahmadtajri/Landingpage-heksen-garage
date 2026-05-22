import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  author: string;
  content: string;
  image?: string;
}

export function getAllBlogs(): Omit<BlogPost, "content">[] {
  // Pastikan folder blog ada
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  const blogs = files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      
      const { data, content } = matter(fileContent);

      // Cari URL gambar pertama dari content (format markdown ![alt](url))
      const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
      const image = imageMatch ? imageMatch[1] : undefined;

      return {
        slug,
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        date: data.date,
        author: data.author,
        image,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return blogs;
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
  const image = imageMatch ? imageMatch[1] : undefined;

  return {
    slug,
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    date: data.date,
    author: data.author,
    content,
    image,
  };
}
