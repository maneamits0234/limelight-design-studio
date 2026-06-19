import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Mehta",
    project: "3BHK Residence, Mumbai",
    review: "Limelight Design Studio transformed our apartment into a space we never wanted to leave. The attention to detail, the quality of materials, and the professionalism of the team were beyond our expectations. Every corner reflects our personality perfectly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgxMzIwNzU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Rajesh & Sunita Kapoor",
    project: "Villa Interior, Goa",
    review: "From the first consultation to the final handover, the experience was seamless. The 3D visualizations were stunning and the final result exceeded even those. Our villa is now featured in a luxury travel magazine!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1771072427512-74602f4fb49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgxMzIwNzU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Arjun Sharma",
    project: "Corporate Office, Bangalore",
    review: "Our office redesign completely transformed our company culture. Employees are more productive and clients are always impressed. Limelight Design Studio understood our brand identity and translated it into a workspace that speaks volumes.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgxMzIwNzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section id="testimonials" style={{ backgroundColor: "#F9F8F6" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
              Client Stories
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
            What Our Clients <span className="italic" style={{ color: "#C9A86A" }}>Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            key={current}
            className="grid lg:grid-cols-5 gap-12 items-center p-10 lg:p-14"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(203,192,177,0.3)" }}
          >
            {/* Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-60 h-72 overflow-hidden" style={{ border: "3px solid #C9A86A" }}>
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Gold quote */}
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#C9A86A", fontSize: "80px", lineHeight: 0.8, marginBottom: "16px", opacity: 0.4 }}>"</div>

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#C9A86A" style={{ color: "#C9A86A" }} />
                ))}
              </div>

              <p style={{ fontFamily: "'Playfair Display', serif", color: "#333", fontSize: "20px", fontWeight: 400, lineHeight: 1.7, fontStyle: "italic", marginBottom: "28px" }}>
                "{t.review}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1" style={{ backgroundColor: "#C9A86A", maxWidth: "40px" }} />
                <div>
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: "#1F1F1F", fontSize: "15px", fontWeight: 600, display: "block" }}>{t.name}</span>
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "12px", fontWeight: 300, letterSpacing: "0.1em" }}>{t.project}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300"
                  style={{ width: i === current ? "32px" : "8px", height: "8px", backgroundColor: i === current ? "#C9A86A" : "rgba(201,168,106,0.3)", border: "none", cursor: "pointer" }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-[#1F1F1F]"
                style={{ border: "1px solid rgba(31,31,31,0.2)", backgroundColor: "transparent" }}
              >
                <ChevronLeft size={20} style={{ color: "#333" }} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: "#C9A86A" }}
              >
                <ChevronRight size={20} style={{ color: "#1F1F1F" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
