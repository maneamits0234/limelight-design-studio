import "../styles/fonts.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PackagesSection } from "./components/PackagesSection";
import { BlogSection } from "./components/BlogSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { InstagramSection } from "./components/InstagramSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";

const sectionIds: Record<string, string> = {
  home: "home",
  about: "about",
  services: "services",
  portfolio: "portfolio",
  testimonials: "testimonials",
  blog: "blog",
  contact: "contact",
};

function scrollToSection(section: string) {
  const id = sectionIds[section] ?? section;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function App() {
  return (
    <div
      className="relative"
      style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#F9F8F6", overflowX: "hidden" }}
    >
      <style>{`
        html { scroll-behavior: smooth; }

        * { box-sizing: border-box; }

        ::selection {
          background-color: rgba(201, 168, 106, 0.3);
          color: #1F1F1F;
        }

        input::placeholder, textarea::placeholder {
          color: rgba(180, 179, 177, 0.5);
        }

        input:focus, textarea:focus, select:focus {
          border-color: rgba(201, 168, 106, 0.5) !important;
          outline: none;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.9s ease forwards;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1F1F1F; }
        ::-webkit-scrollbar-thumb { background: #C9A86A; }
        ::-webkit-scrollbar-thumb:hover { background: #b89558; }
      `}</style>

      <Header onNavClick={scrollToSection} />

      <main>
        <HeroSection onNavClick={scrollToSection} />
        <StatsSection />
        <AboutSection onNavClick={scrollToSection} />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <BeforeAfterSection />
        <ProcessSection />
        <TestimonialsSection />
        <PackagesSection />
        <BlogSection />
        <FAQSection />
        <CTASection onNavClick={scrollToSection} />
        <InstagramSection />
        <ContactSection />
      </main>

      <Footer onNavClick={scrollToSection} />
      <FloatingButtons onConsultClick={() => scrollToSection("contact")} />
    </div>
  );
}
