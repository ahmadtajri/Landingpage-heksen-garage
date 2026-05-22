import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blogs
export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: `${blog.title} | Hexen Garage`,
    description: blog.description,
    keywords: blog.keywords,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  // Pisahkan konten dengan regex untuk menghapus image pertama yang sama dengan thumbnail (jika ada)
  // Ini menghindari gambar muncul 2x (sebagai header dan di dalam konten jika kita menggunakan tag image yang sama di markdown)
  // Untuk contoh ini, kita render semua markdown content langsung

  return (
    <>
      {/* Header Artikel */}
      <Section className="bg-brand-dark pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/artikel"
            className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Artikel
          </Link>
          
          <h1 className="mb-6 text-3xl font-extrabold md:text-5xl leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-brand-muted gap-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-brand-orange" />
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-brand-orange" />
              <span>{blog.author}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Konten Utama */}
      <Section className="bg-brand-black py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-invert prose-lg prose-orange max-w-none prose-img:rounded-xl prose-img:w-full prose-headings:text-brand-orange">
            <ReactMarkdown>
              {blog.content}
            </ReactMarkdown>
          </article>
        </div>
      </Section>
    </>
  );
}
