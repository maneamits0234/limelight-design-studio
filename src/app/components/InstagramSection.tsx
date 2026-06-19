import { Instagram } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgxMzIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzgxMTkwMjg2fDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzgxMzIwNzUyfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1663811397207-418a92396ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzgxMTkwMjg2fDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc4MTMyMDc1M3ww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc4MTMyMDc1M3ww&ixlib=rb-4.1.0&q=80&w=400",
];

export function InstagramSection() {
  return (
    <section style={{ backgroundColor: "#F9F8F6" }} className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Instagram size={20} style={{ color: "#C9A86A" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#1F1F1F", fontSize: "14px", fontWeight: 500, letterSpacing: "0.1em" }}>
              @limelightdesignstudio.in
            </span>
          </div>
          <a
            href="#"
            style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
          >
            Follow Us
          </a>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {photos.map((photo, i) => (
            <a key={i} href="#" className="group relative aspect-square overflow-hidden block">
              <img src={photo} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75" loading="lazy" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={20} style={{ color: "#fff" }} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
