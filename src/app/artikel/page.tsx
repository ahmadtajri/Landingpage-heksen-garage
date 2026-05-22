import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Artikel | Hexen Garage",
  description: "Artikel dan tips seputar perawatan mobil, body repair, dan otomotif.",
};

export default function ArtikelPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <Section className="bg-brand-dark pt-32 pb-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Artikel & Tips</h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-muted">
            Informasi seputar body repair dan perawatan kendaraan dari Heksen Garage.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-black py-16">
        <div className="container mx-auto px-4">
          {blogs.length === 0 ? (
            <div className="text-center text-brand-muted py-20">
              <p>Belum ada artikel saat ini. Pantau terus untuk tips terbaru!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <article
                  key={blog.slug}
                  className="flex flex-col overflow-hidden rounded-2xl bg-brand-dark border border-brand-dark hover:border-brand-orange transition-colors group"
                >
                  <Link href={`/artikel/${blog.slug}`} className="block relative h-48 overflow-hidden">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                        Hexen Garage
                      </div>
                    )}
                  </Link>
                  
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center text-xs text-brand-muted mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <time dateTime={blog.date}>
                          {new Date(blog.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                    
                    <Link href={`/artikel/${blog.slug}`} className="block mb-3">
                      <h2 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                    </Link>
                    
                    <p className="text-brand-muted text-sm line-clamp-3 mb-6 flex-1">
                      {blog.description}
                    </p>
                    
                    <Link
                      href={`/artikel/${blog.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors mt-auto"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}

