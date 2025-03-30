
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Updated function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    {
      name: "Inicio",
      sectionId: "hero"
    }, 
    {
      name: "Servicios",
      sectionId: "servicios"
    }, 
    {
      name: "Beneficios",
      sectionId: "beneficios"
    }, 
    {
      name: "Testimonios",
      sectionId: "testimonios"
    }, 
    {
      name: "Contacto",
      sectionId: "contacto"
    }
  ];

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="flex items-center"
        >
          <img alt="YonY Logo" src="/lovable-uploads/1a298c73-ad1f-4b8a-9518-869811bd5d7c.png" className="h-20 object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-gray-700 hover:text-primary transition-colors font-medium text-sm cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("contacto")}
            className="bg-primary hover:bg-primary/90 text-white rounded-md font-medium"
          >
            Solicitar Demo
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-base py-2 cursor-pointer text-left"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-white rounded-md w-full mt-2"
            >
              Solicitar Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
