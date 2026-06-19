import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How long does a typical interior design project take?", a: "Project timelines vary based on scope and complexity. A single room redesign typically takes 4–8 weeks, while a complete villa or large apartment can take 4–8 months. We provide a detailed project timeline during the initial consultation." },
  { q: "Do you handle the complete execution or just design?", a: "We offer complete turnkey solutions — from initial concept design through material procurement, contractor management, and final handover. You can choose design-only or full execution based on your preference." },
  { q: "What is your minimum project budget?", a: "Our Signature package is tailored for projects with a minimum furniture and fit-out budget of ₹15 lakhs. Exact pricing depends on your space, scope, and material selections. We provide a detailed quote after an initial consultation." },
  { q: "Can I see my space in 3D before execution begins?", a: "Absolutely. All our Signature and Grand packages include photorealistic 3D visualization. You will see every room, material, and furniture piece rendered before a single item is purchased." },
  { q: "Do you work outside your city?", a: "Yes. We have successfully delivered projects across India including Mumbai, Delhi, Bangalore, Goa, Hyderabad, and Chennai. For outstation projects, we have established local partners and our senior designers make regular site visits." },
  { q: "How do you ensure the project stays within budget?", a: "We provide complete cost transparency from the start. Every design decision is tied to a budget impact, and you approve all purchases before they are made. Our dedicated project managers track every rupee spent." },
  { q: "Do you provide a warranty for the work done?", a: "Yes. All our execution work comes with a standard 1-year workmanship warranty. Grand package clients receive a comprehensive 2-year support and maintenance agreement." },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: "#1F1F1F" }} className="py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
              FAQ
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
            Frequently Asked <span className="italic" style={{ color: "#C9A86A" }}>Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{ borderBottom: "1px solid rgba(201,168,106,0.15)" }}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 py-6 text-left focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      fontWeight: isOpen ? 600 : 400,
                      color: isOpen ? "#C9A86A" : "#F9F8F6",
                      lineHeight: 1.4,
                      transition: "color 0.3s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: isOpen ? "#C9A86A" : "transparent", border: `1px solid ${isOpen ? "#C9A86A" : "rgba(201,168,106,0.4)"}` }}
                  >
                    {isOpen ? <Minus size={14} style={{ color: "#1F1F1F" }} /> : <Plus size={14} style={{ color: "#C9A86A" }} />}
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p className="pb-6" style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "15px", fontWeight: 300, lineHeight: 1.8 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
