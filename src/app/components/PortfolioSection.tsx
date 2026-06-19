import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Office", "Commercial", "Villa"];

const projects = [
  { id: 1, title: "The Meridian Residence", location: "Mumbai, Maharashtra", category: "Living Room", img: "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgxMzIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080", tall: true },
  { id: 2, title: "Azure Penthouse", location: "Delhi, NCR", category: "Bedroom", img: "https://images.unsplash.com/photo-1663811397207-418a92396ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzgxMTkwMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080", tall: false },
  { id: 3, title: "Casa Bianca Villa", location: "Goa, India", category: "Villa", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc4MTMyMDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080", tall: false },
  { id: 4, title: "The Ivory Kitchen", location: "Bangalore, Karnataka", category: "Kitchen", img: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzgxMzIwNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080", tall: true },
  { id: 5, title: "Serenity Master Suite", location: "Hyderabad, Telangana", category: "Bedroom", img: "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzgxMTkwMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080", tall: false },
  { id: 6, title: "Luminary Office Tower", location: "Pune, Maharashtra", category: "Office", img: "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc4MTMyMDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080", tall: false },
  { id: 7, title: "Grand Arches Living", location: "Chennai, Tamil Nadu", category: "Living Room", img: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgxMzIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080", tall: true },
  { id: 8, title: "The Amber Kitchen", location: "Ahmedabad, Gujarat", category: "Kitchen", img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzgxMzIwNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080", tall: false },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" style={{ backgroundColor: "#1F1F1F" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
                Our Work
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
              Featured <span className="italic" style={{ color: "#C9A86A" }}>Projects</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  backgroundColor: activeCategory === cat ? "#C9A86A" : "transparent",
                  color: activeCategory === cat ? "#1F1F1F" : "#888",
                  border: activeCategory === cat ? "1px solid #C9A86A" : "1px solid rgba(136,136,136,0.3)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden break-inside-avoid group cursor-pointer"
              style={{ marginBottom: "16px" }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-400"
                style={{
                  background: hovered === project.id
                    ? "linear-gradient(to top, rgba(31,31,31,0.95) 0%, rgba(31,31,31,0.4) 60%, transparent 100%)"
                    : "linear-gradient(to top, rgba(31,31,31,0.7) 0%, transparent 60%)",
                }}
              >
                <div className="flex items-end justify-between">
                  <div>
                    <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "10px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                      {project.category}
                    </span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "20px", fontWeight: 600, lineHeight: 1.2 }}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={11} style={{ color: "#b4b3b1" }} />
                      <span style={{ fontFamily: "'Poppins', sans-serif", color: "#b4b3b1", fontSize: "12px", fontWeight: 300 }}>
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {hovered === project.id && (
                    <div
                      className="flex items-center justify-center w-10 h-10 flex-shrink-0"
                      style={{ backgroundColor: "#C9A86A" }}
                    >
                      <ArrowUpRight size={18} style={{ color: "#1F1F1F" }} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
