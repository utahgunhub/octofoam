import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CurvedDivider from "@/components/CurvedDivider";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-slc.jpg";

const dark = "#5c97d0";
const white = "#ffffff";
const mint = "#634390";
const purpleCtaClass = "bg-[#634390] hover:bg-[#52367a] text-white";

const galleryImages = [
  {
    src: "/octofoam-images/attic+insulation+BUTTON+image+-+octofoam-1920w.webp",
    alt: "Spray foam attic insulation project",
  },
  {
    src: "/octofoam-images/crawl+space+BUTTON+image+-+octofoam-1920w.webp",
    alt: "Spray foam crawl space insulation",
  },
  {
    src: "/octofoam-images/metal+Building+BUTTON+image+-+octo-1920w.webp",
    alt: "Spray foam metal building insulation",
  },
  {
    src: "/octofoam-images/concrete+lifting+BUTTON+image+-+octofoam-1920w.webp",
    alt: "Polyurethane foam concrete lifting and leveling",
  },
  {
    src: "/octofoam-images/rigwithbarn1+-+octofoam-1920w.webp",
    alt: "Octofoam rig at agricultural insulation project",
  },
  {
    src: "/octofoam-images/315866020_146550111455910_8963563536704620667_n-1920w.webp",
    alt: "Commercial spray foam roofing work",
  },
  {
    src: "/octofoam-images/289453257_104288205666314_772272062305272624_n-1920w.webp",
    alt: "Protective roof coating application",
  },
  {
    src: "/octofoam-images/bigstock-Roof-Insulation-In-Attic-With--469350977-1920w.webp",
    alt: "Attic roof deck insulation close-up",
  },
  {
    src: "/octofoam-images/Mw4vo4B04MCL0YcVDS5AGINAw.webp",
    alt: "Spray foam installation detail",
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, closeLightbox, showNext, showPrev]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gallery | Octofoam Central Indiana</title>
        <meta
          name="description"
          content="View Octofoam project photos including attic insulation, crawl space sealing, SPF roofing, metal building insulation, and concrete lifting in Central Indiana."
        />
        <link rel="canonical" href="/gallery" />
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
              <p className="text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Gallery</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-4">
                Octofoam <span className="text-primary">Project Gallery</span>
              </h1>
              <p className="text-base md:text-lg text-white/95 font-semibold max-w-3xl mx-auto mb-8 uppercase tracking-wide">
                Real work across Central Indiana
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="heroPink" size="lg" className={`rounded-xl shadow-elevated gap-2 ${purpleCtaClass}`} asChild>
                  <a href="tel:3179670505">
                    <Phone size={18} /> (317) 967-0505
                  </a>
                </Button>
                <Button variant="hero" size="lg" className="rounded-xl shadow-elevated gap-2" asChild>
                  <Link to="/contact">
                    <Calendar size={18} /> Get a quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-14 md:h-20 block">
              <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="#5c97d0" />
              <path d="M0,40 Q360,0 720,40 T1440,40" fill="none" stroke="#634390" strokeOpacity="1" strokeWidth="6" />
            </svg>
          </div>
        </section>

        <section className="bg-[#5c97d0] pt-8 pb-14 md:pt-10 md:pb-16 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <figure key={image.src} className="rounded-2xl bg-white border border-white/20 shadow-card overflow-hidden">
                  <button type="button" className="w-full text-left" onClick={() => setActiveIndex(index)}>
                    <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" loading="lazy" />
                    <figcaption className="px-4 py-3 text-[#5c97d0] text-sm font-semibold">{image.alt}</figcaption>
                  </button>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <CurvedDivider topColor={dark} bottomColor={dark} accentColor={mint} direction="up" className="relative z-10" />
      </main>

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-2 right-2 z-20 rounded-full bg-black/60 text-white p-2 hover:bg-black/80 transition-colors"
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 text-white p-2 hover:bg-black/80 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 text-white p-2 hover:bg-black/80 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={26} />
            </button>

            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="w-full max-h-[82vh] object-contain rounded-xl"
            />
            <p className="text-center text-white/95 text-sm md:text-base mt-3">
              {galleryImages[activeIndex].alt} ({activeIndex + 1}/{galleryImages.length})
            </p>
          </div>
        </div>
      ) : null}

      <SiteFooter />
    </div>
  );
};

export default Gallery;
