import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/content/blogPosts";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-display text-foreground">
          HVAC <span className="text-gradient">Blog</span>
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
          Tips, tricks, and expert advice for your heating and cooling needs.
        </p>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="block bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow group text-left"
            >
              <span className="text-sm text-muted-foreground">{p.date}</span>
              <h2 className="text-xl font-bold mt-2 mb-3 font-display text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{p.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-[#5c97d0] group-hover:underline">
                Read article <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default Blog;
