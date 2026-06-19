import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Essential",
    tagline: "A refined starting point",
    description: "Perfect for apartments and starter residences seeking elevated design.",
    features: [
      "1 consultation session",
      "2D floor plans",
      "Material recommendations",
      "Basic furniture selection",
      "Design concept presentation",
      "Email support",
    ],
    suitableFor: "Studio apartments, 1BHK",
    highlight: false,
  },
  {
    name: "Signature",
    tagline: "The complete experience",
    description: "Our most popular package — delivering end-to-end luxury design execution.",
    features: [
      "Unlimited consultations",
      "3D visualization (5 rooms)",
      "Custom furniture design",
      "Premium material selection",
      "Complete project execution",
      "Dedicated project manager",
      "90-day post-handover support",
    ],
    suitableFor: "2BHK, 3BHK, Penthouses",
    highlight: true,
  },
  {
    name: "Grand",
    tagline: "Absolute luxury, no limits",
    description: "An exclusive white-glove service for villas, estates, and commercial properties.",
    features: [
      "Everything in Signature",
      "International material sourcing",
      "Custom art curation",
      "Smart home integration",
      "Exterior & landscape design",
      "VIP client treatment",
      "1-year support & maintenance",
    ],
    suitableFor: "Villas, Hotels, Commercial",
    highlight: false,
  },
];

export function PackagesSection() {
  return (
    <section style={{ backgroundColor: "#1F1F1F" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
              Investment
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
            Design <span className="italic" style={{ color: "#C9A86A" }}>Packages</span>
          </h2>
          <p className="mt-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "16px", fontWeight: 300 }}>
            Tailored to your vision and budget. Exact pricing provided upon consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="relative flex flex-col p-10 transition-all duration-300"
              style={{
                backgroundColor: pkg.highlight ? "#C9A86A" : "rgba(255,255,255,0.03)",
                border: pkg.highlight ? "none" : "1px solid rgba(201,168,106,0.2)",
                transform: pkg.highlight ? "scale(1.03)" : "scale(1)",
              }}
            >
              {pkg.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1"
                  style={{ backgroundColor: "#1F1F1F" }}
                >
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "10px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: pkg.highlight ? "rgba(31,31,31,0.6)" : "#C9A86A", display: "block", marginBottom: "8px" }}>
                  {pkg.tagline}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "34px", fontWeight: 700, color: pkg.highlight ? "#1F1F1F" : "#F9F8F6", marginBottom: "12px" }}>
                  {pkg.name}
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.7, color: pkg.highlight ? "rgba(31,31,31,0.7)" : "#888" }}>
                  {pkg.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-8 flex-grow">
                {pkg.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check size={14} style={{ color: pkg.highlight ? "#1F1F1F" : "#C9A86A", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 300, color: pkg.highlight ? "rgba(31,31,31,0.85)" : "#b4b3b1", lineHeight: 1.5 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mb-6 px-4 py-2"
                style={{ backgroundColor: pkg.highlight ? "rgba(31,31,31,0.1)" : "rgba(201,168,106,0.08)", border: `1px solid ${pkg.highlight ? "rgba(31,31,31,0.15)" : "rgba(201,168,106,0.2)"}` }}
              >
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 400, color: pkg.highlight ? "rgba(31,31,31,0.7)" : "#888", letterSpacing: "0.1em" }}>
                  Best for: {pkg.suitableFor}
                </span>
              </div>

              <button
                className="group flex items-center justify-center gap-3 py-3.5 transition-all duration-300"
                style={{
                  backgroundColor: pkg.highlight ? "#1F1F1F" : "transparent",
                  color: pkg.highlight ? "#C9A86A" : "#C9A86A",
                  border: pkg.highlight ? "none" : "1px solid #C9A86A",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Request Detailed Quote
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
