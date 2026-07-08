import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft, Calendar, User, BookOpen, ArrowRight } from "lucide-react";
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

  // Get related blogs (exclude current)
  const allBlogs = getAllBlogs().filter(b => b.slug !== resolvedParams.slug).slice(0, 2);

  return (
    <>
      {/* Header Artikel */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand-orange/5 rounded-full blur-[150px]" />
          <div className="grain-overlay" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 pb-12 pt-32 max-w-4xl">
          <Link
            href="/artikel"
            className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 transition-colors mb-8 text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Kembali ke Artikel
          </Link>
          
          <h1 className="mb-6 text-3xl font-black md:text-5xl leading-tight text-white">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-brand-muted gap-6">
            <div className="flex items-center glass rounded-full px-3 py-1.5">
              <Calendar className="w-4 h-4 mr-2 text-brand-orange" />
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center glass rounded-full px-3 py-1.5">
              <User className="w-4 h-4 mr-2 text-brand-orange" />
              <span>{blog.author}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Konten Utama */}
      <Section className="bg-brand-black py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-invert prose-lg prose-orange max-w-none prose-img:rounded-2xl prose-img:w-full prose-headings:text-brand-light prose-headings:font-bold prose-a:text-brand-orange prose-blockquote:border-brand-orange/30 prose-code:text-brand-orange">
            <ReactMarkdown>
              {blog.content}
            </ReactMarkdown>
          </article>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Related Articles */}
      {allBlogs.length > 0 && (
        <Section className="bg-brand-dark">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-black mb-8">
              Artikel <span className="gradient-text">Lainnya</span>
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {allBlogs.map((related) => (
                <Link
                  key={related.slug}
                  href={`/artikel/${related.slug}`}
                  className="group glass rounded-2xl p-6 hover-lift transition-all"
                >
                  <div className="flex items-center text-xs text-brand-muted mb-3">
                    <Calendar className="w-3 h-3 mr-1.5 text-brand-orange/60" />
                    <time dateTime={related.date}>
                      {new Date(related.date).toLocaleDateString("id-ID", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors mb-2 line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="text-sm text-brand-muted line-clamp-2 mb-4">
                    {related.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-brand-orange gap-1">
                    Baca
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
