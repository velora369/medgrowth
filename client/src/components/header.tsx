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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-medgrowth-cyan shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0" data-testid="logo">
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo-principal-sem-fundo.webp"
              alt="MedGrowth - Marketing Digital para Médicos - Logo principal"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation - Centralized */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className={`flex items-center space-x-8 transition-all duration-300 ${
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
                Depoimentos
              </button>
              <button
                onClick={() => handleNavClick("#contato")}
                className="text-sm font-medium hover:text-medgrowth-cyan transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                data-testid="nav-contact"
              >
                Contato
              </button>
            </div>
          </div>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/5561996301406"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-medgrowth-cyan text-white px-6 py-3 rounded-full hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm flex-shrink-0"
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
        className={`md:hidden fixed inset-0 w-screen h-screen transition-transform duration-300 ${
          isMobileMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        style={{
          backgroundColor: '#ffffff',
          zIndex: 9999,
          opacity: 1
        }}
        data-testid="mobile-menu"
      >
        <div className="p-6 bg-white h-full w-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo-principal-sem-fundo.webp"
                alt="MedGrowth - Marketing Digital para Médicos - Logo principal"
                className="h-10 w-auto"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="hover:bg-gray-100 rounded-full transition-all duration-300"
              data-testid="mobile-menu-close"
            >
              <X className="w-6 h-6 text-gray-600" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="space-y-1 flex-1">
            <button
              onClick={() => handleNavClick("#home")}
              className="block text-lg font-medium w-full text-left py-4 px-4 rounded-xl hover:bg-medgrowth-cyan/5 hover:text-medgrowth-cyan transition-all duration-300 border-b border-gray-100"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("#quem-somos")}
              className="block text-lg font-medium w-full text-left py-4 px-4 rounded-xl hover:bg-medgrowth-cyan/5 hover:text-medgrowth-cyan transition-all duration-300 border-b border-gray-100"
              data-testid="mobile-nav-about"
            >
              Quem Somos
            </button>
            <button
              onClick={() => handleNavClick("#servicos")}
              className="block text-lg font-medium w-full text-left py-4 px-4 rounded-xl hover:bg-medgrowth-cyan/5 hover:text-medgrowth-cyan transition-all duration-300 border-b border-gray-100"
              data-testid="mobile-nav-services"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick("#casos-sucesso")}
              className="block text-lg font-medium w-full text-left py-4 px-4 rounded-xl hover:bg-medgrowth-cyan/5 hover:text-medgrowth-cyan transition-all duration-300 border-b border-gray-100"
              data-testid="mobile-nav-cases"
            >
              Depoimentos
            </button>
            <button
              onClick={() => handleNavClick("#contato")}
              className="block text-lg font-medium w-full text-left py-4 px-4 rounded-xl hover:bg-medgrowth-cyan/5 hover:text-medgrowth-cyan transition-all duration-300 border-b border-gray-100"
              data-testid="mobile-nav-contact"
            >
              Contato
            </button>
          </div>

          {/* Bottom Section */}
          <div className="mt-auto space-y-4">
            {/* CTA Button */}
            <a
              href="https://wa.me/5561996301406"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-medgrowth-cyan text-white px-6 py-4 rounded-2xl font-semibold text-lg hover:bg-medgrowth-cyan/90 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              data-testid="mobile-whatsapp-cta"
            >
              <i className="fab fa-whatsapp text-xl group-hover:animate-pulse"></i>
              <span>Fale Conosco</span>
            </a>

            {/* Social Icons */}
            <div className="flex justify-center space-x-8 pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/5561996301406"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-medgrowth-cyan/10 hover:bg-medgrowth-cyan hover:scale-110 transition-all duration-300 group"
                data-testid="mobile-social-whatsapp"
              >
                <i className="fab fa-whatsapp text-xl text-medgrowth-cyan group-hover:text-white transition-colors"></i>
              </a>
              <a
                href="instagram://user?username=medgrowthmkt"
                onClick={(e) => {
                  e.preventDefault();
                  const instagramApp = 'instagram://user?username=medgrowthmkt';
                  const instagramWeb = 'https://www.instagram.com/medgrowthmkt/?utm_source=ig_web_button_share_sheet';
                  
                  // Tenta abrir o app do Instagram
                  window.location.href = instagramApp;
                  
                  // Fallback para o navegador após um pequeno delay
                  setTimeout(() => {
                    window.open(instagramWeb, '_blank');
                  }, 1000);
                }}
                className="p-3 rounded-full bg-medgrowth-cyan/10 hover:bg-medgrowth-cyan hover:scale-110 transition-all duration-300 group"
                data-testid="mobile-social-instagram"
              >
                <i className="fab fa-instagram text-xl text-medgrowth-cyan group-hover:text-white transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
