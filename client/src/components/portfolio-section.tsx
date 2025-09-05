import { ExternalLink, Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

export default function PortfolioSection() {
  const [openImageModal, setOpenImageModal] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Dra. Ana Carolina Salles",
      specialty: "Oncologista",
      description: "Site profissional focado em confiança e autoridade médica",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/captura-de-tela-2025-09-05-as-19.28.26.webp",
      link: "https://draanacarolinasalles.com.br/"
    },
    {
      id: 2,
      title: "Dr. Emanuel Esposito",
      specialty: "Nefrologista",
      description: "Plataforma digital moderna para especialista em nefrologia",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/nefroesposito.webp",
      link: "https://nefroesposito.site/"
    },
    {
      id: 3,
      title: "CEVIDA Diagnósticos",
      specialty: "Radiologia",
      description: "Site institucional para centro de diagnósticos por imagem",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/captura-de-tela-2025-09-05-as-19.25.48.webp",
      link: "https://cevidadiagnosticos.netlify.app/"
    },
    {
      id: 4,
      title: "Dra. HOF",
      specialty: "Harmonização Facial",
      description: "Site elegante para procedimentos estéticos faciais",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/drahof.webp",
      link: "https://janadrahof.online/"
    }
  ];

  const handleVisitSite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-medgrowth-dark leading-tight" data-testid="portfolio-title">
            Nosso <span className="bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark bg-clip-text text-transparent">Portfólio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="portfolio-subtitle">
            Conheça alguns dos projetos que desenvolvemos para médicos e clínicas, transformando presença digital em resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105 fade-in-up-delay-${index + 1}`}
              data-testid={`portfolio-item-${item.id}`}
            >
              {/* Image Container */}
              <Dialog open={openImageModal === item.id} onOpenChange={(open) => setOpenImageModal(open ? item.id : null)}>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-t-2xl cursor-pointer">
                    <img
                      src={item.image}
                      alt={`Site desenvolvido para ${item.title} - ${item.specialty}`}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Click indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Globe className="w-6 h-6 text-medgrowth-cyan" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-[100vw] max-h-[100vh] w-full h-full p-4 border-0 bg-black/90 backdrop-blur-sm">
                  <DialogTitle className="sr-only">
                    Visualização do site {item.title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Imagem em tamanho completo do site desenvolvido para {item.title} - {item.specialty}
                  </DialogDescription>
                  
                  <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/20 backdrop-blur-sm p-2 text-white hover:bg-white/30 transition-colors">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fechar</span>
                  </DialogClose>
                  
                  <div className="relative w-full h-full flex items-center justify-center min-h-[80vh]">
                    <img
                      src={item.image}
                      alt={`Visualização completa do site: ${item.title} - ${item.specialty}`}
                      className="max-w-full max-h-full object-contain rounded-lg bg-white"
                      style={{ 
                        maxHeight: 'calc(100vh - 80px)', 
                        maxWidth: 'calc(100vw - 32px)',
                        minHeight: '200px',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  </div>
                </DialogContent>
              </Dialog>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-bold text-medgrowth-dark group-hover:text-medgrowth-cyan transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="bg-medgrowth-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.specialty}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* CTA Button */}
                <Button
                  onClick={() => handleVisitSite(item.link)}
                  className="w-full bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group/button"
                  data-testid={`visit-site-${item.id}`}
                >
                  <Globe className="w-4 h-4 mr-2 group-hover/button:rotate-12 transition-transform duration-300" />
                  <span>Visitar Site</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-medgrowth-cyan/10 to-transparent rounded-tl-full opacity-50" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up-delay-5">
          <p className="text-lg text-gray-600 mb-6">
            Pronto para ter um site profissional como estes?
          </p>
          <a
            href="https://wa.me/5561996301406?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20sites%20médicos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            data-testid="portfolio-cta-button"
          >
            <Globe className="w-5 h-5" />
            <span>Quero Meu Site Profissional</span>
          </a>
        </div>
      </div>
    </section>
  );
}