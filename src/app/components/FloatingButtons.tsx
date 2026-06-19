import { MessageCircle, Phone, Calendar } from "lucide-react";

export function FloatingButtons({ onConsultClick }: { onConsultClick: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hi! I'd like to discuss an interior design project."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 transition-all duration-300 hover:pr-4"
        style={{
          backgroundColor: "#25D366",
          padding: "12px",
          borderRadius: "0",
          boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
          textDecoration: "none",
        }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={22} style={{ color: "#fff" }} />
        <span
          className="hidden group-hover:inline overflow-hidden transition-all duration-300"
          style={{ fontFamily: "'Poppins', sans-serif", color: "#fff", fontSize: "12px", fontWeight: 500, whiteSpace: "nowrap" }}
        >
          WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+919999999999"
        className="group flex items-center gap-2 transition-all duration-300 hover:pr-4"
        style={{
          backgroundColor: "#1F1F1F",
          border: "1px solid rgba(201,168,106,0.4)",
          padding: "12px",
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
        title="Call Us"
      >
        <Phone size={20} style={{ color: "#C9A86A" }} />
        <span
          className="hidden group-hover:inline overflow-hidden transition-all duration-300"
          style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "12px", fontWeight: 500, whiteSpace: "nowrap" }}
        >
          Call Us
        </span>
      </a>

      {/* Book Consultation */}
      <button
        onClick={onConsultClick}
        className="group flex items-center gap-2 transition-all duration-300 hover:pr-4 focus:outline-none"
        style={{
          backgroundColor: "#C9A86A",
          padding: "12px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(201,168,106,0.4)",
        }}
        title="Book Consultation"
      >
        <Calendar size={20} style={{ color: "#1F1F1F" }} />
        <span
          className="hidden group-hover:inline overflow-hidden transition-all duration-300"
          style={{ fontFamily: "'Poppins', sans-serif", color: "#1F1F1F", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}
        >
          Book
        </span>
      </button>
    </div>
  );
}
