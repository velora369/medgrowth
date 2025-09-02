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

              <div className="grid grid-cols-2 gap-4 mb-8">
                {valueDetails.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={index}
                      className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-medgrowth-cyan/10 hover:border-medgrowth-cyan/20 transition-all duration-300 hover:-translate-y-1" 
                      data-testid={`value-${value.title.toLowerCase().replace(' ', '-')}`}
                    >
                      <div className="text-center">
                        {/* Ícone moderno */}
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-medgrowth-cyan to-medgrowth-cyan/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-medgrowth-cyan/30 transition-all duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          {/* Efeito de glow sutil */}
                          <div className="absolute inset-0 w-14 h-14 bg-medgrowth-cyan/20 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Conteúdo */}
                        <div>
                          <h3 className="font-bold text-lg text-medgrowth-dark mb-3 group-hover:text-medgrowth-cyan transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm line-height-loose">
                            {value.description}
                          </p>
                        </div>
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
