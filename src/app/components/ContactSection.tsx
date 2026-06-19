import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Instagram, Facebook, Linkedin } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(201,168,106,0.2)",
    color: "#F9F8F6",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Poppins', sans-serif",
    color: "#b4b3b1",
    fontSize: "11px",
    fontWeight: 400,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section id="contact" style={{ backgroundColor: "#1F1F1F" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#C9A86A", fontSize: "11px", fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase" }}>
              Get In Touch
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#C9A86A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2 }}>
            Start Your <span className="italic" style={{ color: "#C9A86A" }}>Project</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-14">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {[
              { icon: Phone, label: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999" },
              { icon: Mail, label: "Email Us", value: "hello@limelightdesignstudio.in", href: "mailto:hello@limelightdesignstudio.in" },
              { icon: MapPin, label: "Visit Us", value: "Studio 4A, Design District, Bandra West, Mumbai 400050", href: "#" },
              { icon: Clock, label: "Business Hours", value: "Mon–Sat: 10:00 AM – 7:00 PM", href: undefined },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ border: "1px solid rgba(201,168,106,0.3)", backgroundColor: "rgba(201,168,106,0.05)" }}>
                    <Icon size={18} style={{ color: "#C9A86A" }} />
                  </div>
                  <div>
                    <span style={{ ...labelStyle, marginBottom: "4px" }}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "15px", fontWeight: 300, textDecoration: "none", lineHeight: 1.6 }}>{item.value}</a>
                    ) : (
                      <span style={{ fontFamily: "'Poppins', sans-serif", color: "#cbc0b1", fontSize: "15px", fontWeight: 300, lineHeight: 1.6 }}>{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919999999999?text=Hi! I'd like to discuss an interior design project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 transition-all duration-300 hover:bg-[#25D366]/15 w-fit"
              style={{ border: "1px solid rgba(37,211,102,0.4)", textDecoration: "none" }}
            >
              <MessageCircle size={18} style={{ color: "#25D366" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#25D366", fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em" }}>Chat on WhatsApp</span>
            </a>

            {/* Social */}
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(201,168,106,0.15)" }}>
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:border-[#C9A86A]"
                  style={{ border: "1px solid rgba(201,168,106,0.25)", color: "#888" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16" style={{ border: "1px solid rgba(201,168,106,0.2)" }}>
                <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: "#C9A86A" }}>
                  <Send size={24} style={{ color: "#1F1F1F" }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F9F8F6", fontSize: "24px", fontWeight: 600 }}>Message Received</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "14px", fontWeight: 300, textAlign: "center", maxWidth: "300px" }}>
                  Thank you for reaching out. Our design team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input style={inputStyle} placeholder="Priya Mehta" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" style={inputStyle} placeholder="priya@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input style={inputStyle} placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Project Type</label>
                    <select
                      style={{ ...inputStyle, cursor: "pointer" }}
                      value={form.projectType}
                      onChange={e => setForm({ ...form, projectType: e.target.value })}
                    >
                      <option value="" style={{ backgroundColor: "#1F1F1F" }}>Select type</option>
                      <option value="residential" style={{ backgroundColor: "#1F1F1F" }}>Residential</option>
                      <option value="commercial" style={{ backgroundColor: "#1F1F1F" }}>Commercial</option>
                      <option value="villa" style={{ backgroundColor: "#1F1F1F" }}>Villa / Bungalow</option>
                      <option value="other" style={{ backgroundColor: "#1F1F1F" }}>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Approximate Budget</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }} value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                    <option value="" style={{ backgroundColor: "#1F1F1F" }}>Select range</option>
                    <option value="15-30" style={{ backgroundColor: "#1F1F1F" }}>₹15 – ₹30 Lakhs</option>
                    <option value="30-60" style={{ backgroundColor: "#1F1F1F" }}>₹30 – ₹60 Lakhs</option>
                    <option value="60-1cr" style={{ backgroundColor: "#1F1F1F" }}>₹60 Lakhs – ₹1 Crore</option>
                    <option value="1cr+" style={{ backgroundColor: "#1F1F1F" }}>₹1 Crore+</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tell Us About Your Project</label>
                  <textarea
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Share your vision, space size, location, and any specific requirements..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 py-4 transition-all duration-300 hover:bg-[#C9A86A]/90"
                  style={{ backgroundColor: "#C9A86A", color: "#1F1F1F", fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", cursor: "pointer" }}
                >
                  Send Your Enquiry
                  <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
