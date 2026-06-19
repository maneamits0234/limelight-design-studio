import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    title: "2025 Luxury Interior Design Trends You Need to Know",
    category: "Design Trends",
    readTime: "5 min read",
    excerpt: "From organic textures to bold architectural statements, discover the defining aesthetics that are shaping the world's most prestigious interiors this year.",
    img: "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgxMzIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "June 10, 2025",
    featured: true,
  },
  {
    title: "Maximizing Small Spaces: The Art of Compact Luxury",
    category: "Small Spaces",
    readTime: "4 min read",
    excerpt: "Studio apartments and compact homes can achieve remarkable luxury with the right design principles and smart spatial planning.",
    img: "https://images.unsplash.com/photo-1757924461488-ef9ad0670978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc4MTMyMDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "May 28, 2025",
    featured: false,
  },
  {
    title: "The Perfect Modern Kitchen: Form Meets Function",
    category: "Kitchen Design",
    readTime: "6 min read",
    excerpt: "A kitchen should be the beating heart of any home — here's how to balance exquisite aesthetics with practical, efficient design.",
    img: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzgxMzIwNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "May 15, 2025",
    featured: false,
  },
];

export function BlogSection() {
  return (
    <section id="blog" style={{ backgroundColor: "#F9F8F6" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
                Insights
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
              Design <span className="italic" style={{ color: "#C9A86A" }}>Journal</span>
            </h2>
          </div>
          <button
            className="group flex items-center gap-2 focus:outline-none"
            style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "12px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer" }}
          >
            View All Articles
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured post */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="overflow-hidden aspect-[16/9] mb-6" style={{ backgroundColor: "#ddd" }}>
              <img
                src={posts[0].img}
                alt={posts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <Tag size={11} style={{ color: "#C9A86A" }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" }}>{posts[0].category}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={11} style={{ color: "#999" }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", color: "#999", fontSize: "11px", fontWeight: 300 }}>{posts[0].readTime}</span>
              </div>
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#aaa", fontSize: "11px", fontWeight: 300 }}>{posts[0].date}</span>
            </div>
            <h3 className="group-hover:text-[#C9A86A] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "26px", fontWeight: 600, lineHeight: 1.3, marginBottom: "12px" }}>
              {posts[0].title}
            </h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "15px", fontWeight: 300, lineHeight: 1.8 }}>
              {posts[0].excerpt}
            </p>
          </div>

          {/* Side posts */}
          <div className="flex flex-col gap-8">
            {posts.slice(1).map((post, i) => (
              <div key={i} className="group cursor-pointer flex gap-5">
                <div className="w-28 h-24 overflow-hidden flex-shrink-0">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag size={10} style={{ color: "#C9A86A" }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>{post.category}</span>
                  </div>
                  <h4 className="group-hover:text-[#C9A86A] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", color: "#1F1F1F", fontSize: "16px", fontWeight: 600, lineHeight: 1.4, marginBottom: "4px" }}>
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <Clock size={10} style={{ color: "#aaa" }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", color: "#aaa", fontSize: "11px", fontWeight: 300 }}>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
