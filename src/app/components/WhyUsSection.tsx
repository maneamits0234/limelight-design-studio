import { useState } from "react";
import { UserCheck, DollarSign, Gem, Box, Clock, Layers, User, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: UserCheck, title: "Personalized Designs", desc: "Every project is uniquely tailored to your lifestyle, taste, and aspirations." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Clear, upfront pricing with no hidden costs — complete budget visibility throughout." },
  { icon: Gem, title: "Premium Materials", desc: "We source only from world-class suppliers and exclusive luxury brands." },
  { icon: Box, title: "3D Visualization", desc: "Photorealistic renders let you preview every detail before a single nail is hammered." },
  { icon: Clock, title: "On-Time Delivery", desc: "Strict project timelines with milestone-based tracking and regular updates." },
  { icon: Layers, title: "End-to-End Execution", desc: "From design concept to final handover — we manage every aspect seamlessly." },
  { icon: User, title: "Dedicated Project Manager", desc: "A single point of contact guiding you through every phase of your project." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Multi-stage quality checks ensuring every finish meets our luxury standard." },
];

export function WhyUsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#F9F8F6" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
                The Limelight Difference
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
              Why Discerning Clients<br />
              <span className="italic" style={{ color: "#C9A86A" }}>Choose Us</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}>
            We don't just design interiors — we create life-defining experiences. Our commitment to excellence at every stage is what sets us apart in the world of luxury design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isHovered = hovered === i;
            return (
              <div
                key={i}
                className="relative p-8 cursor-default transition-all duration-300"
                style={{
                  backgroundColor: isHovered ? "#1F1F1F" : "#FFFFFF",
                  border: isHovered ? "1px solid #C9A86A" : "1px solid rgba(203,192,177,0.3)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ backgroundColor: isHovered ? "rgba(201,168,106,0.15)" : "rgba(203,192,177,0.15)" }}
                >
                  <Icon size={22} style={{ color: "#C9A86A" }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: isHovered ? "#F9F8F6" : "#1F1F1F", marginBottom: "10px", transition: "color 0.3s" }}>
                  {reason.title}
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: isHovered ? "#b4b3b1" : "#777", transition: "color 0.3s" }}>
                  {reason.desc}
                </p>
                {isHovered && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#C9A86A" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
