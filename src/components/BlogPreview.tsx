import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";
import { blogPosts } from "@/content/blogPosts";

const previewPosts = blogPosts.slice(0, 3);

const BlogPreview = () => (
  <section className="relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[120px] pb-[120px] md:pt-[160px] md:pb-[160px] px-4 overflow-hidden">
    <div className="absolute inset-0">
      <img src="/octofoam-images/289453257_104288205666314_772272062305272624_n-1920w.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
    </div>
    <div className="container max-w-6xl mx-auto relative z-10">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 font-display text-foreground">
          Read Our Latest <span className="text-gradient">Tips & Tricks</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Stay informed with the Octofoam blog
        </p>
      </ScrollReveal>
      <ScrollRevealStagger className="grid md:grid-cols-3 gap-8">
        {previewPosts.map((p) => (
          <ScrollRevealItem key={p.slug}>
            <Link
              to={`/blog/${p.slug}`}
              className="block bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow group text-left h-full"
            >
              <span className="text-sm text-muted-foreground">{p.date}</span>
              <h3 className="text-lg font-bold mt-2 mb-3 font-display text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{p.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-[#5c97d0] group-hover:underline">
                Read more <ArrowRight size={16} />
              </span>
            </Link>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
      <ScrollReveal>
      <div className="text-center mt-10">
        <Button variant="default" size="lg" className="rounded-xl gap-2" asChild>
          <Link to="/blog">
            View All Blogs <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BlogPreview;
