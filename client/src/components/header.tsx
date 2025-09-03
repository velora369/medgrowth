import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center" data-testid="logo">
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo-principal-sem-fundo.webp"
              alt="MedGrowth - Marketing Digital para Médicos - Logo principal"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 transition-all duration-300 ${
            isScrolling ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
          }`}>
            <button
              onClick={() => handleNavClick("#home")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("#quem-somos")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              data-testid="nav-about"
            >
              Quem Somos
            </button>
            <button
              onClick={() => handleNavClick("#servicos")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              data-testid="nav-services"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick("#casos-sucesso")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              data-testid="nav-cases"
            >
              Casos de Sucesso
            </button>
            <button
              onClick={() => handleNavClick("#contato")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              data-testid="nav-contact"
            >
              Contato
            </button>
          </div>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/5561996301406"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-medgrowth-cyan text-white px-6 py-3 rounded-full hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm"
            data-testid="header-whatsapp-cta"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            <span>Fale Conosco</span>
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            data-testid="mobile-menu-toggle"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        data-testid="mobile-menu"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo-principal-sem-fundo.webp"
                alt="MedGrowth - Marketing Digital para Médicos - Logo principal"
                className="h-8 w-auto"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              data-testid="mobile-menu-close"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="space-y-6">
            <button
              onClick={() => handleNavClick("#home")}
              className="block text-lg font-medium w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("#quem-somos")}
              className="block text-lg font-medium w-full text-left"
              data-testid="mobile-nav-about"
            >
              Quem Somos
            </button>
            <button
              onClick={() => handleNavClick("#servicos")}
              className="block text-lg font-medium w-full text-left"
              data-testid="mobile-nav-services"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick("#casos-sucesso")}
              className="block text-lg font-medium w-full text-left"
              data-testid="mobile-nav-cases"
            >
              Casos de Sucesso
            </button>
            <button
              onClick={() => handleNavClick("#contato")}
              className="block text-lg font-medium w-full text-left"
              data-testid="mobile-nav-contact"
            >
              Contato
            </button>

            <a
              href="https://wa.me/5561996301406"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-medgrowth-cyan text-white px-4 py-3 rounded-lg w-full justify-center mt-8"
              data-testid="mobile-whatsapp-cta"
            >
              <i className="fab fa-whatsapp"></i>
              <span>Fale Conosco Agora</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
