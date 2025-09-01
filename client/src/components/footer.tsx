import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-medgrowth-dark text-white py-12 border-t border-medgrowth-cyan/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4" data-testid="footer-logo">
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo-principal-sem-fundo.webp"
                alt="MedGrowth Logo"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">MedGrowth</h3>
                <p className="text-sm opacity-80">Crescer Juntos</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-md" data-testid="footer-description">
              Sua autoridade digital, nosso compromisso. Construindo o futuro digital da medicina com ética, inovação e resultados reais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick("#home")}
                  className="opacity-80 hover:opacity-100 hover:text-medgrowth-cyan transition-colors text-left"
                  data-testid="footer-nav-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#quem-somos")}
                  className="opacity-80 hover:opacity-100 hover:text-medgrowth-cyan transition-colors text-left"
                  data-testid="footer-nav-about"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#servicos")}
                  className="opacity-80 hover:opacity-100 hover:text-medgrowth-cyan transition-colors text-left"
                  data-testid="footer-nav-services"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#casos-sucesso")}
                  className="opacity-80 hover:opacity-100 hover:text-medgrowth-cyan transition-colors text-left"
                  data-testid="footer-nav-cases"
                >
                  Casos de Sucesso
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#contato")}
                  className="opacity-80 hover:opacity-100 hover:text-medgrowth-cyan transition-colors text-left"
                  data-testid="footer-nav-contact"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <i className="fab fa-whatsapp text-medgrowth-cyan"></i>
                <span>Atendimento 24h</span>
              </div>
              <a
                href="https://wa.me/5561996301406"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold text-medgrowth-cyan hover:underline"
                data-testid="footer-whatsapp"
              >
                (61) 99630-1406
              </a>
              <div className="flex items-center space-x-2 mt-4">
                <i className="fab fa-instagram text-medgrowth-cyan"></i>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:text-medgrowth-cyan transition-colors"
                  data-testid="footer-instagram"
                >
                  @medgrowth
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-medgrowth-cyan/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80" data-testid="footer-copyright">
            © {currentYear} MedGrowth. Construindo o futuro digital da medicina.
          </p>
        </div>
      </div>
    </footer>
  );
}
