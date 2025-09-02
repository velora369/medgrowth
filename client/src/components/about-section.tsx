import { Shield, Lightbulb, TrendingUp, Handshake, X } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const valueDetails = {
    ethics: {
      title: "Ética",
      description: "Seguimos rigorosamente as diretrizes do Conselho Federal de Medicina (CFM). Nossas estratégias são 100% éticas, construindo autoridade com respeito e transparência, sem promessas milagrosas."
    },
    innovation: {
      title: "Inovação", 
      description: "Utilizamos as mais recentes tecnologias, incluindo automações com IA e análise de dados, para criar estratégias que colocam nossos clientes à frente. Inovar é parte do nosso DNA para garantir o crescimento contínuo."
    },
    results: {
      title: "Resultados Reais",
      description: "Nosso foco é em métricas que importam: aumento no número de pacientes, fortalecimento da autoridade e retorno sobre o investimento. Não falamos em promessas, mostramos crescimento real e comprovado."
    },
    partnership: {
      title: "Parceria",
      description: "Não somos apenas uma agência, somos a extensão digital da sua clínica. Mergulhamos no seu negócio para entender seus objetivos e trabalhamos juntos, como verdadeiros parceiros de crescimento a longo prazo."
    }
  };
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-medgrowth-dark" data-testid="about-title">
            Sua Parceria Estratégica no Digital
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="about-description">
                A <strong className="text-medgrowth-cyan">MedGrowth</strong> nasceu para revolucionar o marketing médico. Atuamos como extensão digital da sua clínica, cuidando da sua autoridade online com estratégias sob medida.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 relative">
                <div 
                  className="text-center p-4 bg-medgrowth-light rounded-lg cursor-pointer hover:bg-medgrowth-cyan/10 transition-all duration-300 hover:scale-105 relative" 
                  data-testid="value-ethics"
                  onMouseEnter={() => setActiveTooltip('ethics')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <Shield className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm">Ética</h3>
                  
                  {activeTooltip === 'ethics' && (
                    <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white border border-medgrowth-cyan/20 rounded-xl shadow-2xl p-6 animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-medgrowth-cyan/20 rotate-45"></div>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-medgrowth-dark text-lg">{valueDetails.ethics.title}</h4>
                        <button 
                          onClick={() => setActiveTooltip(null)}
                          className="text-gray-400 hover:text-gray-600 ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{valueDetails.ethics.description}</p>
                    </div>
                  )}
                </div>

                <div 
                  className="text-center p-4 bg-medgrowth-light rounded-lg cursor-pointer hover:bg-medgrowth-cyan/10 transition-all duration-300 hover:scale-105 relative" 
                  data-testid="value-innovation"
                  onMouseEnter={() => setActiveTooltip('innovation')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <Lightbulb className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm">Inovação</h3>
                  
                  {activeTooltip === 'innovation' && (
                    <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white border border-medgrowth-cyan/20 rounded-xl shadow-2xl p-6 animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-medgrowth-cyan/20 rotate-45"></div>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-medgrowth-dark text-lg">{valueDetails.innovation.title}</h4>
                        <button 
                          onClick={() => setActiveTooltip(null)}
                          className="text-gray-400 hover:text-gray-600 ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{valueDetails.innovation.description}</p>
                    </div>
                  )}
                </div>

                <div 
                  className="text-center p-4 bg-medgrowth-light rounded-lg cursor-pointer hover:bg-medgrowth-cyan/10 transition-all duration-300 hover:scale-105 relative" 
                  data-testid="value-results"
                  onMouseEnter={() => setActiveTooltip('results')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <TrendingUp className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm">Resultados Reais</h3>
                  
                  {activeTooltip === 'results' && (
                    <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white border border-medgrowth-cyan/20 rounded-xl shadow-2xl p-6 animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-medgrowth-cyan/20 rotate-45"></div>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-medgrowth-dark text-lg">{valueDetails.results.title}</h4>
                        <button 
                          onClick={() => setActiveTooltip(null)}
                          className="text-gray-400 hover:text-gray-600 ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{valueDetails.results.description}</p>
                    </div>
                  )}
                </div>

                <div 
                  className="text-center p-4 bg-medgrowth-light rounded-lg cursor-pointer hover:bg-medgrowth-cyan/10 transition-all duration-300 hover:scale-105 relative" 
                  data-testid="value-partnership"
                  onMouseEnter={() => setActiveTooltip('partnership')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <Handshake className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm">Parceria</h3>
                  
                  {activeTooltip === 'partnership' && (
                    <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white border border-medgrowth-cyan/20 rounded-xl shadow-2xl p-6 animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-medgrowth-cyan/20 rotate-45"></div>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-medgrowth-dark text-lg">{valueDetails.partnership.title}</h4>
                        <button 
                          onClick={() => setActiveTooltip(null)}
                          className="text-gray-400 hover:text-gray-600 ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{valueDetails.partnership.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/um-medico-moderno-sorridente-e-confiante_j8zlxxa7qv2txvbn9wkdtw_fpfcmznkspi7y8qvprrjeq.webp"
                alt="Médico moderno sorridente e confiante"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="about-image"
              />
              <div className="absolute -bottom-4 -right-4 bg-medgrowth-cyan text-white p-4 rounded-lg shadow-lg">
                <i className="fas fa-users text-2xl mb-2"></i>
                <p className="text-sm font-semibold">Parceria de<br />Longo Prazo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
