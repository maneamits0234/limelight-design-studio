import { ArrowRight } from "lucide-react";

const DESIGNER_IMG = "https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgxMzIwNzUzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const ROOM_IMG = "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc4MTMyMDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080";

export function AboutSection({ onNavClick }: { onNavClick: (s: string) => void }) {
  return (
    <section id="about" style={{ backgroundColor: "#F9F8F6" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image composition */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img src={DESIGNER_IMG} alt="Lead designer" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(31,31,31,0.4) 0%, transparent 60%)" }} />
            </div>
            {/* Floating accent box */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-36 overflow-hidden"
              style={{ border: "3px solid #C9A86A" }}
            >
              <img src={ROOM_IMG} alt="Interior project" className="w-full h-full object-cover" />
            </div>
            {/* Gold line accent */}
            <div className="absolute -top-4 -left-4 w-24 h-1" style={{ backgroundColor: "#C9A86A" }} />
            <div className="absolute -top-4 -left-4 w-1 h-24" style={{ backgroundColor: "#C9A86A" }} />
            {/* Experience badge */}
            <div
              className="absolute top-8 -right-8 hidden lg:flex flex-col items-center justify-center w-24 h-24"
              style={{ backgroundColor: "#C9A86A", transform: "rotate(-5deg)" }}
            >
              <span style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "26px", fontWeight: 700, lineHeight: 1 }}>10+</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#1F1F1F", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>Years of Excellence</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
                Our Story
              </span>
            </div>

            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2, marginBottom: "24px" }}>
              Crafting Spaces That<br />
              <span className="italic" style={{ color: "#C9A86A" }}>Inspire & Endure</span>
            </h2>

            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#555", fontSize: "16px", fontWeight: 300, lineHeight: 1.9, marginBottom: "20px" }}>
              Founded with a passion for creating extraordinary living environments, Limelight Design Studio has been transforming spaces across India for over a decade. Our team of visionary designers blends contemporary aesthetics with timeless elegance.
            </p>

            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#555", fontSize: "16px", fontWeight: 300, lineHeight: 1.9, marginBottom: "36px" }}>
              We believe every space tells a story — and we are dedicated to making that story uniquely yours. From concept to completion, our turnkey solutions ensure every detail reflects your personality and lifestyle.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {[
                { title: "Our Mission", body: "To create personalized, functional, and stunning spaces that exceed client expectations." },
                { title: "Our Philosophy", body: "Luxury is not about excess — it is about the perfect harmony of form and function." },
              ].map((item, i) => (
                <div key={i}>
                  <div className="h-px w-8 mb-3" style={{ backgroundColor: "#C9A86A" }} />
                  <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>{item.title}</h4>
                  <p style={{ fontFamily: "'Poppins', sans-serif", color: "#777", fontSize: "14px", fontWeight: 300, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavClick("contact")}
              className="group flex items-center gap-3 transition-all duration-300"
              style={{ color: "#C9A86A", fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer" }}
            >
              Learn More About Us
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
