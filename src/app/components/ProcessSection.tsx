const steps = [
  { num: "01", title: "Consultation", desc: "We begin with a comprehensive discovery session to understand your vision, lifestyle, budget, and timeline." },
  { num: "02", title: "Concept Design", desc: "Our designers craft a unique concept presentation with mood boards, spatial layouts, and design narratives." },
  { num: "03", title: "3D Visualization", desc: "Photorealistic renders bring your space to life, allowing complete visualization before execution begins." },
  { num: "04", title: "Material Selection", desc: "We guide you through an exclusive selection of premium materials, finishes, and furnishings." },
  { num: "05", title: "Execution", desc: "Our expert craftsmen and project managers transform the design into reality with precision and care." },
  { num: "06", title: "Final Handover", desc: "A meticulous walkthrough and snag-list review ensures every detail meets our luxury standard." },
];

export function ProcessSection() {
  return (
    <section style={{ backgroundColor: "#1F1F1F" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
              How We Work
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
            Our <span className="italic" style={{ color: "#C9A86A" }}>Design Process</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ backgroundColor: "rgba(201,168,106,0.2)", zIndex: 0 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center lg:items-center">
                {/* Number circle */}
                <div
                  className="relative z-10 w-24 h-24 flex flex-col items-center justify-center mb-6 flex-shrink-0"
                  style={{ border: "1px solid #C9A86A", backgroundColor: "#1F1F1F" }}
                >
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "10px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" }}>Step</span>
                  <span style={{ fontFamily: "'Playfair Display', serif", color: "#C9A86A", fontSize: "28px", fontWeight: 700, lineHeight: 1 }}>{step.num}</span>
                </div>

                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
