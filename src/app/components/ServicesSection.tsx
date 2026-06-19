import { useState } from "react";
import { ArrowRight, Home, Bed, UtensilsCrossed, Building2, Store, Hotel, Truck, Box, Cuboid, ClipboardList, Sofa, Eye } from "lucide-react";

const services = [
  { icon: Home, title: "Living Room Design", category: "Residential", desc: "Elegant spaces that balance comfort and sophistication, tailored to your personality." },
  { icon: Bed, title: "Bedroom Design", category: "Residential", desc: "Serene sanctuaries crafted for rest, romance, and refined personal expression." },
  { icon: UtensilsCrossed, title: "Kitchen Design", category: "Residential", desc: "Functional, beautiful kitchens with premium finishes and smart storage solutions." },
  { icon: Building2, title: "Villa Design", category: "Residential", desc: "Complete villa interiors — from grand entryways to intimate private spaces." },
  { icon: Sofa, title: "Office Design", category: "Commercial", desc: "Productive, inspiring workspaces that reflect your brand identity and culture." },
  { icon: Store, title: "Retail Store Design", category: "Commercial", desc: "Compelling retail environments that enhance customer experience and drive sales." },
  { icon: UtensilsCrossed, title: "Restaurant Design", category: "Commercial", desc: "Atmospheric dining spaces that create memorable culinary journeys." },
  { icon: Hotel, title: "Hotel Design", category: "Commercial", desc: "Hospitality interiors that balance luxury, comfort, and operational excellence." },
  { icon: Truck, title: "Turnkey Solutions", category: "Turnkey", desc: "Complete end-to-end project delivery — design, procurement, and execution." },
  { icon: Box, title: "Furniture & Décor", category: "Turnkey", desc: "Curated furniture and art selections from exclusive global brands." },
  { icon: Eye, title: "3D Visualization", category: "Visualization", desc: "Photorealistic renders that let you experience your space before it is built." },
  { icon: ClipboardList, title: "Project Management", category: "Execution", desc: "Dedicated oversight ensuring quality, timeline, and budget adherence." },
];

export function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" style={{ backgroundColor: "#1F1F1F" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
              What We Offer
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
            Our <span className="italic" style={{ color: "#C9A86A" }}>Design Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(201,168,106,0.1)" }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === i;
            return (
              <div
                key={i}
                className="relative flex flex-col gap-4 p-8 cursor-pointer transition-all duration-400"
                style={{
                  backgroundColor: isHovered ? "#C9A86A" : "#1F1F1F",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-start justify-between">
                  <Icon
                    size={28}
                    style={{ color: isHovered ? "#1F1F1F" : "#C9A86A", transition: "color 0.3s" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "9px",
                      fontWeight: 400,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: isHovered ? "#1F1F1F" : "#555",
                      transition: "color 0.3s",
                    }}
                  >
                    {service.category}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: isHovered ? "#1F1F1F" : "#F9F8F6",
                      marginBottom: "10px",
                      transition: "color 0.3s",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: isHovered ? "#1F1F1F" : "#888",
                      transition: "color 0.3s",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-auto pt-4" style={{ borderTop: `1px solid ${isHovered ? "rgba(31,31,31,0.2)" : "rgba(201,168,106,0.15)"}`, transition: "border-color 0.3s" }}>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: isHovered ? "#1F1F1F" : "#C9A86A",
                      transition: "color 0.3s",
                    }}
                  >
                    Learn More
                  </span>
                  <ArrowRight size={12} style={{ color: isHovered ? "#1F1F1F" : "#C9A86A", transition: "color 0.3s" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
