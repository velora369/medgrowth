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
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4" data-testid="footer-logo">
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/logo-nome-.webp"
                alt="MedGrowth - Marketing Digital para Médicos"
                className="h-24 md:h-28 w-auto pl-[0px] pr-[0px] ml-[-16px] mr-[-16px] mt-[-41px] mb-[-41px] pt-[-5px] pb-[-5px]"
              />
            </div>
            <p className="text-sm text-gray-600 max-w-md mt-[-1px] mb-[-1px] pl-[0px] pr-[0px] pt-[0px] pb-[0px]" data-testid="footer-description">
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
                  className="text-gray-600 hover:text-medgrowth-cyan transition-colors text-left relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  data-testid="footer-nav-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#quem-somos")}
                  className="text-gray-600 hover:text-medgrowth-cyan transition-colors text-left relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  data-testid="footer-nav-about"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#servicos")}
                  className="text-gray-600 hover:text-medgrowth-cyan transition-colors text-left relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  data-testid="footer-nav-services"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#casos-sucesso")}
                  className="text-gray-600 hover:text-medgrowth-cyan transition-colors text-left relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  data-testid="footer-nav-cases"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#contato")}
                  className="text-gray-600 hover:text-medgrowth-cyan transition-colors text-left relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medgrowth-cyan after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
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
              <div className="text-gray-800 font-medium">Atendimento 24h</div>
              <a
                href="https://wa.me/5561996301406"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-medgrowth-cyan transition-all duration-300 transform hover:scale-110 cursor-pointer group"
                data-testid="footer-whatsapp-link"
              >
                <i className="fab fa-whatsapp text-medgrowth-cyan group-hover:animate-pulse"></i>
                <span className="text-medgrowth-cyan transition-colors">WhatsApp</span>
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
                className="flex items-center space-x-2 hover:text-medgrowth-cyan transition-all duration-300 transform hover:scale-110 cursor-pointer group"
                data-testid="footer-instagram-link"
              >
                <i className="fab fa-instagram text-medgrowth-cyan group-hover:animate-pulse"></i>
                <span className="text-medgrowth-cyan transition-colors">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600" data-testid="footer-copyright">
            © {currentYear} MedGrowth. Construindo o futuro digital da medicina.
          </p>
        </div>
      </div>
    </footer>
  );
}
