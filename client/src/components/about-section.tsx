import { Shield, Lightbulb, TrendingUp, Handshake } from "lucide-react";

export default function AboutSection() {
  const valueDetails = [
    {
      icon: Shield,
      title: "Ética",
      description: "Seguimos rigorosamente as diretrizes do Conselho Federal de Medicina (CFM). Nossas estratégias são 100% éticas, construindo autoridade com respeito e transparência, sem promessas milagrosas."
    },
    {
      icon: Lightbulb,
      title: "Inovação", 
      description: "Utilizamos as mais recentes tecnologias, incluindo automações com IA e análise de dados, para criar estratégias que colocam nossos clientes à frente. Inovar é parte do nosso DNA para garantir o crescimento contínuo."
    },
    {
      icon: TrendingUp,
      title: "Resultados Reais",
      description: "Nosso foco é em métricas que importam: aumento no número de pacientes, fortalecimento da autoridade e retorno sobre o investimento. Não falamos em promessas, mostramos crescimento real e comprovado."
    },
    {
      icon: Handshake,
      title: "Parceria",
      description: "Não somos apenas uma agência, somos a extensão digital da sua clínica. Mergulhamos no seu negócio para entender seus objetivos e trabalhamos juntos, como verdadeiros parceiros de crescimento a longo prazo."
    }
  ];
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

              <div className="space-y-6 mb-8">
                {valueDetails.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={index}
                      className="relative group bg-gradient-to-r from-white to-medgrowth-light/30 border border-medgrowth-cyan/10 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-medgrowth-cyan/30 backdrop-blur-sm" 
                      data-testid={`value-${value.title.toLowerCase().replace(' ', '-')}`}
                    >
                      {/* Efeito de brilho futurista */}
                      <div className="absolute inset-0 bg-gradient-to-r from-medgrowth-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      
                      <div className="relative flex items-start gap-6">
                        {/* Ícone com efeito futurista */}
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-medgrowth-cyan to-medgrowth-cyan/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-medgrowth-cyan/30 group-hover:shadow-xl transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Conteúdo */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-xl text-medgrowth-dark mb-3 group-hover:text-medgrowth-cyan transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {value.description}
                          </p>
                        </div>
                        
                        {/* Indicador futurista */}
                        <div className="flex-shrink-0 w-2 h-full bg-gradient-to-b from-medgrowth-cyan/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  );
                })}
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
