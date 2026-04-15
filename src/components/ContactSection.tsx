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
        ? "-mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-[176px] pb-[80px] md:pt-[216px] md:pb-[120px]"
        : "relative -mt-[80px] -mb-[80px] md:-mt-[120px] md:-mb-[120px] pt-24 md:pt-32 pb-24 md:pb-32 lg:pb-36",
    )}
  >
    <div className="absolute inset-0">
      <img src="/background-4.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.92)" }} />
    </div>
    <div className="container max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Headline + contact info */}
        <ScrollReveal variant="slideLeft">
        <div>
          <p className="text-[#001c70] font-bold uppercase tracking-[0.25em] mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 font-display leading-[1.1] tracking-tight">
            Ready to fix your HVAC?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md">
            Same-day service available. Fill out the form and we&apos;ll get back to you within an hour—or call now for immediate help.
          </p>

          <div className="space-y-6">
            <a
              href="tel:8017382275"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#001c70]/10 flex items-center justify-center group-hover:bg-[#001c70]/20 transition-colors">
                <Phone size={22} className="text-[#001c70]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Call Now</p>
                <p className="text-xl font-bold text-foreground">(801) 738-2275</p>
              </div>
            </a>
            <a
              href="mailto:Hummingbirdhomes22@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#001c70]/10 flex items-center justify-center group-hover:bg-[#001c70]/20 transition-colors">
                <Mail size={22} className="text-[#001c70]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-lg font-bold text-foreground">Hummingbirdhomes22@gmail.com</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#001c70]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-[#001c70]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Address</p>
                <p className="text-lg font-semibold text-foreground">
                  Salt Lake City, UT
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
                  placeholder="(801) 738-2275"
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
                placeholder="Tell us about your HVAC needs—repair, installation, maintenance..."
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
