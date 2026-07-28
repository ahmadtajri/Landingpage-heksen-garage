import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Artikel | Hexen Garage",
  description: "Artikel dan tips seputar perawatan mobil, body repair, dan otomotif.",
  alternates: {
    canonical: "/artikel",
  },
};

export default function ArtikelPage() {
  const blogs = getAllBlogs();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand-orange/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-brand-red/5 rounded-full blur-[120px]" />
          <div className="grain-overlay" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 pb-12 pt-32">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-orange font-semibold uppercase tracking-widest mb-6">
            <BookOpen className="h-3.5 w-3.5" />
            Blog
          </span>
          <h1 className="text-4xl font-black md:text-6xl mb-4">
            Artikel & <span className="gradient-text">Tips</span>
          </h1>
          <p className="max-w-xl text-lg text-brand-muted">
            Informasi seputar body repair dan perawatan kendaraan dari Hexen Garage.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <Section className="bg-brand-black py-16">
        <div className="container mx-auto px-4">
          {blogs.length === 0 ? (
            <div className="text-center text-brand-muted py-20">
              <div className="glass rounded-2xl p-12 max-w-md mx-auto">
                <BookOpen className="h-12 w-12 text-brand-orange mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold text-brand-light mb-2">Belum Ada Artikel</p>
                <p>Pantau terus untuk tips terbaru seputar perawatan mobil!</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <article
                  key={blog.slug}
                  className="flex flex-col overflow-hidden rounded-2xl glass hover:border-brand-orange/40 transition-all duration-300 group hover-lift"
                >
                  <Link href={`/artikel/${blog.slug}`} className="block relative h-52 overflow-hidden">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-red/20 to-brand-orange/20 flex items-center justify-center">
                        <BookOpen className="h-10 w-10 text-brand-orange/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-50" />
                  </Link>
                  
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center text-xs text-brand-muted mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1.5 text-brand-orange/60" />
                        <time dateTime={blog.date}>
                          {new Date(blog.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1.5 text-brand-orange/60" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                    
                    <Link href={`/artikel/${blog.slug}`} className="block mb-3">
                      <h2 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                    </Link>
                    
                    <p className="text-brand-muted text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {blog.description}
                    </p>
                    
                    <Link
                      href={`/artikel/${blog.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-brand-orange hover:text-brand-orange/80 transition-all mt-auto gap-2 group/link"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
