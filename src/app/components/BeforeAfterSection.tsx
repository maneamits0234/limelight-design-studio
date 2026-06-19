import { useState, useRef, useCallback } from "react";

const transformations = [
  {
    title: "Living Room Transformation",
    location: "Mumbai",
    before: "https://images.unsplash.com/photo-1688647063090-36f36f692d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgxMzIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgxMzIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    improvements: ["3x More Space", "Premium Lighting", "Custom Furniture"],
  },
  {
    title: "Master Bedroom Renovation",
    location: "Delhi",
    before: "https://images.unsplash.com/photo-1616594092403-fb65629b0a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzgxMTkwMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzgxMTkwMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    improvements: ["Luxury Finishes", "Walk-in Wardrobe", "Mood Lighting"],
  },
];

function ComparisonSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { dragging.current = true; };
  const handleMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX); };
  const handleMouseUp = () => { dragging.current = false; };
  const handleTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ userSelect: "none" }}
    >
      {/* After (bottom layer) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (clipped on top) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt="Before" className="absolute inset-0 h-full object-cover" style={{ width: `${100 / (position / 100)}%` }} />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 z-10"
        style={{ left: `${position}%`, backgroundColor: "#C9A86A", transform: "translateX(-50%)" }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full shadow-lg"
        style={{ left: `${position}%`, transform: "translate(-50%, -50%)", backgroundColor: "#C9A86A" }}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 10H14M6 10L9 7M6 10L9 13M14 10L11 7M14 10L11 13" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1" style={{ backgroundColor: "rgba(31,31,31,0.8)", border: "1px solid rgba(201,168,106,0.3)" }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "10px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase" }}>Before</span>
      </div>
      <div className="absolute top-4 right-4 z-10 px-3 py-1" style={{ backgroundColor: "rgba(201,168,106,0.9)" }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", color: "#1F1F1F", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>After</span>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = transformations[activeIndex];

  return (
    <section style={{ backgroundColor: "#F9F8F6" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
              Transformations
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
            Before & <span className="italic" style={{ color: "#C9A86A" }}>After</span>
          </h2>
          <p className="mt-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#777", fontSize: "16px", fontWeight: 300 }}>
            Drag the slider to reveal the transformation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-3 mb-6">
            {transformations.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="px-5 py-2.5 transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  backgroundColor: activeIndex === i ? "#1F1F1F" : "transparent",
                  color: activeIndex === i ? "#C9A86A" : "#555",
                  border: activeIndex === i ? "1px solid #1F1F1F" : "1px solid rgba(203,192,177,0.4)",
                }}
              >
                {t.title}
              </button>
            ))}
          </div>

          <ComparisonSlider before={current.before} after={current.after} />

          {/* Improvements */}
          <div className="flex flex-wrap gap-4 mt-6">
            {current.improvements.map((imp, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2" style={{ backgroundColor: "#1F1F1F" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A86A" }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "12px", fontWeight: 400, letterSpacing: "0.1em" }}>{imp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
