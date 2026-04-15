import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone, Star } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getBlogPost } from "@/content/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="py-24 px-4 text-center">
          <h1 className="text-2xl font-extrabold font-display text-foreground mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">That article may have moved or doesn’t exist.</p>
          <Button asChild variant="default" className="rounded-xl">
            <Link to="/blog">Back to blog</Link>
          </Button>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${post.title} | Peak HVAC Utah Blog`}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
      </Helmet>

      <SiteHeader />

      <main>
        <section className="bg-[#001c70] text-white pt-10 pb-16 md:pt-14 md:pb-20 px-4">
          <div className="container max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/85 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to blog
            </Link>
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">{post.date}</p>
            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold font-display leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-white/90 text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        <article className="px-4 py-14 md:py-20">
          <div className="container max-w-3xl mx-auto">
            {post.sections.map((section) => (
              <section key={section.heading} className="mb-12 md:mb-14 last:mb-0">
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#001c70] mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, pi) => (
                  <p key={pi} className="text-foreground/90 leading-relaxed mb-4 last:mb-0 text-base">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <section className="px-4 py-14 md:py-16 bg-muted/40 border-y border-border">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#001c70] mb-2 text-center">
              Frequently asked questions
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Utah-specific answers for homeowners along the Wasatch Front.
            </p>
            <Accordion type="single" collapsible className="w-full rounded-2xl border border-border bg-card px-2 md:px-4">
              {post.faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="px-4 py-14 md:py-20 bg-accent text-accent-foreground">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-center mb-2">
              What Utah homeowners say
            </h2>
            <p className="text-center text-accent-foreground/80 mb-12 max-w-lg mx-auto">
              Real feedback from neighbors who’ve worked with our team on heating and cooling.
            </p>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {post.testimonials.map((t, ti) => (
                <figure
                  key={`${post.slug}-t-${ti}`}
                  className="rounded-2xl bg-accent-foreground/10 border border-accent-foreground/15 p-6 flex flex-col"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <blockquote className="text-accent-foreground/90 leading-relaxed text-sm flex-1 mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm font-bold font-display">{t.author}</figcaption>
                  <p className="text-xs text-accent-foreground/70 mt-1">{t.context}</p>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:py-20">
          <div className="container max-w-2xl mx-auto">
            <div className="rounded-3xl border-2 border-[#001c70]/15 bg-card shadow-card px-8 py-10 md:px-12 md:py-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground mb-3">
                Need HVAC help in Utah?
              </h2>
              <p className="text-muted-foreground mb-8">
                Call for same-day service when available, or send a message—we serve Salt Lake County, Utah County, Davis
                County, and nearby communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="heroPink" size="lg" className="rounded-xl gap-2" asChild>
                  <a href="tel:8017382275">
                    <Phone size={18} /> (801) 738-2275
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl border-2 border-[#001c70] text-[#001c70] hover:bg-[#001c70]/5 gap-2" asChild>
                  <Link to="/contact">
                    Contact us <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default BlogPost;
