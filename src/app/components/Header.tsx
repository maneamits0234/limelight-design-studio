import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = ["Home", "About", "Services", "Portfolio", "Testimonials", "Blog", "Contact"];

export function Header({ onNavClick }: { onNavClick: (section: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(31,31,31,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,106,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => onNavClick("home")}
          className="flex flex-col items-start gap-0 focus:outline-none"
        >
          <span style={{ fontFamily: "'Playfair Display', serif", color: "#C9A86A", fontSize: "22px", fontWeight: 700, letterSpacing: "0.08em", lineHeight: 1 }}>
            LIMELIGHT
          </span>
          <span style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "9px", fontWeight: 300, letterSpacing: "0.35em", lineHeight: 1, marginTop: "3px" }}>
            DESIGN STUDIO
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => onNavClick(link.toLowerCase())}
              className="transition-colors duration-200 hover:text-[#C9A86A] focus:outline-none"
              style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "12px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-[#25D366]/20"
            style={{ border: "1px solid rgba(37,211,102,0.4)" }}
          >
            <MessageCircle size={18} style={{ color: "#25D366" }} />
          </a>
          <button
            onClick={() => onNavClick("contact")}
            className="px-6 py-2.5 transition-all duration-300 hover:bg-[#C9A86A]/90"
            style={{
              backgroundColor: "#C9A86A",
              color: "#1F1F1F",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#cbc0b1" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden py-6 px-6"
          style={{ backgroundColor: "rgba(31,31,31,0.98)", borderTop: "1px solid rgba(201,168,106,0.15)" }}
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => { onNavClick(link.toLowerCase()); setMenuOpen(false); }}
                className="text-left transition-colors duration-200 hover:text-[#C9A86A] focus:outline-none"
                style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "13px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => { onNavClick("contact"); setMenuOpen(false); }}
              className="mt-3 px-6 py-3 text-center"
              style={{ backgroundColor: "#C9A86A", color: "#1F1F1F", fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Book Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
