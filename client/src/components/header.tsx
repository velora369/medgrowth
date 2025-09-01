import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 sticky-nav border-b border-border">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-testid="logo">
            <div className="w-8 h-8 bg-medgrowth-cyan rounded-lg flex items-center justify-center">
              <Heart className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MedGrowth</h1>
              <p className="text-xs text-muted-foreground">Crescer Juntos</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("#quem-somos")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors"
              data-testid="nav-about"
            >
              Quem Somos
            </button>
            <button
              onClick={() => handleNavClick("#servicos")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors"
              data-testid="nav-services"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick("#casos-sucesso")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors"
              data-testid="nav-cases"
            >
              Casos de Sucesso
            </button>
            <button
              onClick={() => handleNavClick("#contato")}
              className="text-sm font-medium hover:text-medgrowth-cyan transition-colors"
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
            className="hidden md:flex items-center space-x-2 bg-medgrowth-cyan text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all cta-button"
            data-testid="header-whatsapp-cta"
          >
            <i className="fab fa-whatsapp"></i>
            <span className="text-sm font-medium">Fale Conosco Agora</span>
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
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-medgrowth-cyan rounded-lg flex items-center justify-center">
                <Heart className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold">MedGrowth</span>
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
