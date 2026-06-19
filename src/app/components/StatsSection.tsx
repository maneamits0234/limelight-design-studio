import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Design Experts" },
];

const awards = [
  { name: "IIID Award", year: "2023" },
  { name: "Elle Decor", year: "2022" },
  { name: "AD 100", year: "2021" },
  { name: "Design Excellence", year: "2020" },
  { name: "Luxury Guild", year: "2019" },
];

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);
  return count;
}

function StatCard({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="flex flex-col items-center gap-2 p-8" style={{ borderRight: "1px solid rgba(201,168,106,0.15)" }}>
      <div className="flex items-baseline gap-1">
        <span style={{ fontFamily: "'Playfair Display', serif", color: "#C9A86A", fontSize: "56px", fontWeight: 700, lineHeight: 1 }}>{count}</span>
        <span style={{ fontFamily: "'Playfair Display', serif", color: "#C9A86A", fontSize: "36px", fontWeight: 400 }}>{suffix}</span>
      </div>
      <span style={{ fontFamily: "'Poppins', sans-serif", color: "#b4b3b1", fontSize: "12px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(201,168,106,0.15)", borderBottom: "1px solid rgba(201,168,106,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} suffix={s.suffix} label={s.label} isVisible={isVisible} />
          ))}
        </div>

        {/* Awards / Client Logos */}
        <div className="py-10 border-t" style={{ borderColor: "rgba(201,168,106,0.15)" }}>
          <p className="text-center mb-8" style={{ fontFamily: "'Poppins', sans-serif", color: "#b4b3b1", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Awards & Recognition
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {awards.map((a, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-1 cursor-default"
              >
                <span
                  className="transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#555", fontSize: "18px", fontWeight: 600 }}
                >
                  <span className="group-hover:text-[#C9A86A] transition-colors duration-300">{a.name}</span>
                </span>
                <span style={{ fontFamily: "'Poppins', sans-serif", color: "#444", fontSize: "10px", letterSpacing: "0.15em" }}>{a.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
