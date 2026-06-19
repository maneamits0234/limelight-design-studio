import { ArrowRight, MessageCircle } from "lucide-react";

const BG = "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc4MTMyMDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080";

export function CTASection({ onNavClick }: { onNavClick: (s: string) => void }) {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={BG} alt="Luxury interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(31,31,31,0.92) 0%, rgba(31,31,31,0.75) 100%)" }} />
      </div>

      {/* Gold border accents */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: "#C9A86A", opacity: 0.4 }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: "#C9A86A", opacity: 0.4 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
          <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
            Begin Your Journey
          </span>
          <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400, lineHeight: 1.2, marginBottom: "20px" }}>
          Let's Design Your<br />
          <span className="italic" style={{ color: "#C9A86A" }}>Dream Space</span>
        </h2>

        <p style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "18px", fontWeight: 300, lineHeight: 1.8, marginBottom: "48px", maxWidth: "560px", margin: "0 auto 48px" }}>
          Schedule a consultation with our design experts today. The first conversation is always complimentary.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavClick("contact")}
            className="group flex items-center gap-3 px-8 py-4 transition-all duration-300"
            style={{ backgroundColor: "#C9A86A", color: "#1F1F1F", fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", border: "none", cursor: "pointer" }}
          >
            Book Consultation
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="https://wa.me/919999999999?text=Hi! I'd like to discuss an interior design project."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:bg-[#25D366]/10"
            style={{ border: "1px solid rgba(37,211,102,0.5)", color: "#25D366", fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
