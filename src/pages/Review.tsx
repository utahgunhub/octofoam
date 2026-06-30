import { FormEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Sparkles, Star } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-slc.jpg";

const GOOGLE_REVIEWS_URL = "https://g.page/r/CUPIA8rDe1CuEAE/review";

const EMAILJS_SERVICE_ID = "service_4s5lsdc";
const EMAILJS_PUBLIC_KEY = "LHhhab8fiZXeSNaGT";
const EMAILJS_TEMPLATE_ID = "template_d73jsr5";

const light = "hsl(170, 40%, 97%)";
const dark = "#5c97d0";
const mint = "#634390";

const Review = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [showLowRatingForm, setShowLowRatingForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStarClick = (value: number) => {
    setRating(value);
    if (value >= 4) {
      window.location.assign(GOOGLE_REVIEWS_URL);
      return;
    }
    setShowLowRatingForm(true);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === null || rating > 3) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          from_name: `${formData.firstName} ${formData.lastName}`.trim(),
          phone: formData.phone,
          email: formData.email,
          from_email: formData.email,
          message: `Rating: ${rating} out of 5 stars\n\n${formData.message}`,
          page_source: `Private review feedback (${rating}/5 stars)`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success("Thank you for your feedback. A member of our team will follow up with you soon.");
    } catch (error) {
      console.error("EmailJS send failed", error);
      toast.error("We couldn't send your message. Please call or text us at (317) 967-0505.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Leave a Review | Octofoam Central Indiana</title>
        <meta
          name="description"
          content="Rate your Octofoam spray foam insulation experience. Share feedback or leave a Google review for our Greenfield, IN team."
        />
        <link rel="canonical" href="/review" />
      </Helmet>

      <SiteHeader />

      <main>
        <section className="relative min-h-[44vh] md:min-h-[50vh] flex items-center overflow-hidden">
          <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

          <motion.div
            className="relative z-10 w-full px-4 pt-20 pb-32 md:pt-24 md:pb-36"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="container max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-bold text-white mb-6">
                <Sparkles className="h-4 w-4" aria-hidden />
                We appreciate you
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
                How did we <span className="text-primary">do?</span>
              </h1>
              <p className="text-base md:text-lg text-white/95 font-semibold max-w-2xl mx-auto">
                Your experience matters. If we insulated, coated, or leveled for you, a quick rating
                helps other Central Indiana homeowners—and honest feedback helps us stay sharp.
              </p>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-14 md:h-20 block">
              <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill={light} />
              <path d="M0,40 Q360,0 720,40 T1440,40" fill="none" stroke={mint} strokeOpacity="1" strokeWidth="6" />
            </svg>
          </div>
        </section>

        <section className="relative min-h-[50vh] overflow-hidden pb-16 md:pb-24 bg-background">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pointer-events-none"
            style={{
              transform: isClient ? `translateY(${scrollY * 0.2}px)` : undefined,
            }}
          />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-bounce"
              style={{ animationDuration: "4s" }}
            />
            <div
              className="absolute bottom-24 right-8 w-48 h-48 bg-[#5c97d0]/20 rounded-full blur-xl animate-bounce"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
            />
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/15 rounded-full blur-xl animate-pulse" />
          </div>

          <div className="relative container max-w-3xl mx-auto px-4 pt-8 md:pt-12">
            <ScrollReveal>
              <Card className="shadow-elevated border-2 border-[#5c97d0]/10 bg-white/90 backdrop-blur-sm rounded-3xl">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl sm:text-2xl text-[#5c97d0] font-display font-extrabold">
                    Rate your experience
                  </CardTitle>
                  <CardDescription className="text-base max-w-lg mx-auto pt-2">
                    Tap the stars that match your experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 pb-8">
                  <div className="rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/[0.08] via-[#5c97d0]/[0.06] to-secondary/[0.08] p-6 sm:p-8">
                    <div
                      className="flex justify-center gap-1 sm:gap-2 mb-3"
                      role="group"
                      aria-label="Rate your experience from 1 to 5 stars"
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => handleStarClick(value)}
                          className="p-2 sm:p-3 rounded-xl transition-all hover:scale-110 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          aria-label={`${value} star${value === 1 ? "" : "s"}`}
                        >
                          <Star
                            className={`w-11 h-11 sm:w-14 sm:h-14 ${
                              rating !== null && value <= rating
                                ? "fill-primary text-primary drop-shadow-sm"
                                : "text-muted-foreground/35"
                            }`}
                            strokeWidth={rating !== null && value <= rating ? 0 : 1.25}
                          />
                        </button>
                      ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                      {rating === null ? "Select 1 to 5 stars" : "Thank you!"}
                    </p>
                  </div>

                  {showLowRatingForm && rating !== null && rating <= 3 && (
                    <div className="border-t border-border pt-8 space-y-6 text-left">
                      <div className="h-1 rounded-full bg-gradient-to-r from-primary via-[#5c97d0] to-secondary" />
                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#5c97d0] font-display">
                          Let us make it right
                        </h2>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed">
                          We&apos;re sorry we missed the mark. Share what happened and we&apos;ll
                          reach out personally—usually within one business day.
                        </p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName" className="font-semibold">
                              First name *
                            </Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleChange}
                              className="mt-1 h-12 rounded-xl border-2"
                              autoComplete="given-name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName" className="font-semibold">
                              Last name *
                            </Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleChange}
                              className="mt-1 h-12 rounded-xl border-2"
                              autoComplete="family-name"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="font-semibold">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 h-12 rounded-xl border-2"
                            autoComplete="email"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="font-semibold">
                            Phone *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 h-12 rounded-xl border-2"
                            autoComplete="tel"
                          />
                        </div>
                        <div>
                          <Label htmlFor="message" className="font-semibold">
                            What can we improve? *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 resize-y min-h-[120px] rounded-xl border-2"
                            placeholder="Project address or details help us look up your job."
                          />
                        </div>
                        <Button
                          type="submit"
                          variant="hero"
                          size="lg"
                          className="w-full rounded-xl h-14 text-lg font-bold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending…" : "Send feedback"}
                        </Button>
                      </form>
                    </div>
                  )}

                  <p className="text-center text-sm text-muted-foreground">
                    Prefer to browse?{" "}
                    <Link
                      to="/"
                      className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80"
                    >
                      Back to home
                    </Link>{" "}
                    or{" "}
                    <Link
                      to="/gallery"
                      className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80"
                    >
                      see our work
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        <CurvedDivider topColor={light} bottomColor={dark} accentColor={mint} direction="down" transparentTop className="relative z-10" />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Review;
