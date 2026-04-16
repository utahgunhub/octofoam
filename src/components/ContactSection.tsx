import { Phone, Mail, MapPin, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type ContactSectionVariant = "home" | "page";

interface ContactSectionProps {
  variant?: ContactSectionVariant;
}

const ContactSection = ({ variant = "home" }: ContactSectionProps) => {
  const isHome = variant === "home";

  return (
  <section
    id={isHome ? "contact" : undefined}
    className={cn(
      "relative px-4 overflow-hidden",
      isHome
        ? "-mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[176px] pb-[160px] md:pt-[216px] md:pb-[200px]"
        : "py-16 md:py-20 bg-background",
    )}
  >
    {isHome ? (
      <div className="absolute inset-0">
        <img src="/octofoam-images/315866020_146550111455910_8963563536704620667_n-1920w.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
      </div>
    ) : null}
    <div className="container max-w-6xl mx-auto relative z-10">
      <div className={cn("grid lg:grid-cols-2 items-start", isHome ? "gap-16 lg:gap-24" : "gap-10 lg:gap-14")}>
        {/* Left: Headline + contact info */}
        <ScrollReveal variant="slideLeft">
        <div>
          <p className="text-[#5c97d0] font-bold uppercase tracking-[0.25em] mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 font-display leading-[1.1] tracking-tight">
            Ready to insulate your space?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md">
            Call or text us for a free estimate on spray foam insulation services. We&apos;ll get back to you quickly.
          </p>

          <div className="space-y-6">
            <a
              href="tel:3179670505"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center group-hover:bg-[#5c97d0]/20 transition-colors">
                <Phone size={22} className="text-[#5c97d0]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Call or Text</p>
                <p className="text-xl font-bold text-foreground">(317) 967-0505</p>
              </div>
            </a>
            <a
              href="mailto:info@octofoam.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center group-hover:bg-[#5c97d0]/20 transition-colors">
                <Mail size={22} className="text-[#5c97d0]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-lg font-bold text-foreground">info@octofoam.com</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#5c97d0]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-[#5c97d0]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Address</p>
                <p className="text-lg font-semibold text-foreground">
                  3581 W US Hwy 40, Greenfield, IN 46140
                </p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Right: Contact form */}
        <ScrollReveal variant="slideRight">
        <div
          id={variant === "page" ? "contact-form" : undefined}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-elevated border border-border/50 scroll-mt-28"
        >
          <h3 className="text-2xl font-extrabold text-foreground mb-6 font-display">
            Send us a message
          </h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="h-12 rounded-xl border-2 bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-semibold">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(317) 967-0505"
                  className="h-12 rounded-xl border-2 bg-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-12 rounded-xl border-2 bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project—attic, crawl space, metal building, roof coating..."
                className="min-h-[140px] rounded-xl border-2 bg-white resize-none"
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full sm:w-auto gap-2 rounded-xl h-14 px-10 text-base font-bold"
            >
              <Send size={20} />
              Send Message
            </Button>
          </form>
        </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
