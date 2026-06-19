import { MessageCircle, Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Services", section: "services" },
  { label: "Portfolio", section: "portfolio" },
  { label: "Testimonials", section: "testimonials" },
  { label: "Blog", section: "blog" },
  { label: "Contact", section: "contact" },
];

const services = ["Residential Design", "Commercial Design", "Villa Design", "Turnkey Solutions", "3D Visualization", "Project Management"];

export function Footer({ onNavClick }: { onNavClick: (s: string) => void }) {
  return (
    <footer style={{ backgroundColor: "#111111", borderTop: "1px solid rgba(201,168,106,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span style={{ fontFamily: "'Playfair Display', serif", color: "#C9A86A", fontSize: "26px", fontWeight: 700, letterSpacing: "0.08em", lineHeight: 1 }}>LIMELIGHT</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#555", fontSize: "9px", fontWeight: 300, letterSpacing: "0.35em", marginTop: "4px" }}>DESIGN STUDIO</span>
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "13px", fontWeight: 300, lineHeight: 1.8, marginBottom: "20px" }}>
              Crafting extraordinary spaces that reflect your unique lifestyle and aspirations. Over a decade of luxury design excellence.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200 hover:border-[#C9A86A] hover:text-[#C9A86A]"
                  style={{ border: "1px solid #333", color: "#555" }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "10px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavClick(link.section)}
                    className="transition-colors duration-200 hover:text-[#C9A86A] focus:outline-none text-left"
                    style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "13px", fontWeight: 300, background: "none", border: "none", cursor: "pointer" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "10px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "13px", fontWeight: 300 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "10px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { Icon: Phone, text: "+91 99999 99999" },
                { Icon: Mail, text: "hello@limelightdesignstudio.in" },
                { Icon: MapPin, text: "Studio 4A, Bandra West, Mumbai 400050" },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon size={14} style={{ color: "#C9A86A", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "13px", fontWeight: 300, lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-1"
                style={{ color: "#25D366", fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 400, textDecoration: "none" }}
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1a1a1a" }} className="px-6 lg:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span style={{ fontFamily: "'Poppins', sans-serif", color: "#444", fontSize: "12px", fontWeight: 300 }}>
            © 2025 Limelight Design Studio. All rights reserved.
          </span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" style={{ fontFamily: "'Poppins', sans-serif", color: "#444", fontSize: "12px", fontWeight: 300, textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
