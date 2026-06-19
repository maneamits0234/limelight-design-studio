import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgxMzIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const HERO_IMG2 = "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgxMzIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "300+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "10+", label: "Design Experts" },
];

export function HeroSection({ onNavClick }: { onNavClick: (s: string) => void }) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY * 0.4;
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#1F1F1F" }}>
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <img
            src={HERO_IMG}
            alt="Luxury interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(31,31,31,0.92) 45%, rgba(31,31,31,0.4) 100%)" }} />
      </div>

      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "linear-gradient(180deg, transparent, #C9A86A, transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
                Luxury Interior Design Studio
              </span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", lineHeight: 1.1, marginBottom: "24px" }}>
              <span className="block" style={{ fontSize: "clamp(36px, 6vw, 76px)", fontWeight: 400 }}>Designing Spaces</span>
              <span className="block italic" style={{ fontSize: "clamp(36px, 6vw, 76px)", fontWeight: 400, color: "#C9A86A" }}>That Reflect</span>
              <span className="block" style={{ fontSize: "clamp(36px, 6vw, 76px)", fontWeight: 700 }}>Your Lifestyle</span>
            </h1>

            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "clamp(15px, 1.5vw, 18px)", fontWeight: 300, lineHeight: 1.8, maxWidth: "480px", marginBottom: "40px" }}>
              Luxury Residential & Commercial Interior Design Solutions Crafted with Creativity and Precision.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={() => onNavClick("contact")}
                className="group flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:gap-4"
                style={{ backgroundColor: "#C9A86A", color: "#1F1F1F", fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Book Free Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavClick("portfolio")}
                className="flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:border-[#C9A86A] hover:text-[#C9A86A]"
                style={{ border: "1px solid rgba(203,192,177,0.5)", color: "#cbc0b1", fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span style={{ fontFamily: "'Playfair Display', serif", color: "#C9A86A", fontSize: "28px", fontWeight: 700, lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: "#b4b3b1", fontSize: "11px", fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image stack */}
          <div className="hidden lg:block relative h-[600px]">
            <div className="absolute right-0 top-0 w-[85%] h-[70%] overflow-hidden" style={{ border: "1px solid rgba(201,168,106,0.2)" }}>
              <img src={HERO_IMG2} alt="Luxury living room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute left-0 bottom-0 w-[55%] h-[45%] overflow-hidden" style={{ border: "2px solid #C9A86A" }}>
              <img src="https://images.unsplash.com/photo-1663811397207-418a92396ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzgxMTkwMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Luxury bedroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Gold accent */}
            <div className="absolute top-8 -left-4 w-8 h-24" style={{ backgroundColor: "#C9A86A", opacity: 0.6 }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => onNavClick("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300 focus:outline-none"
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase" }}>Scroll</span>
        <ChevronDown size={16} style={{ color: "#C9A86A" }} className="animate-bounce" />
      </button>
    </section>
  );
}
