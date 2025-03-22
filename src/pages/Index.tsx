
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/footer";

const Index = () => {
  useEffect(() => {
    // Función para activar la animación al hacer scroll
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", revealElements);
    revealElements(); // Para activar elementos visibles al cargar
    
    return () => window.removeEventListener("scroll", revealElements);
  }, []);
  
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
