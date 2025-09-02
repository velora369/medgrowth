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

              <div className="space-y-3 mb-6">
                {valueDetails.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white border border-gray-100 rounded-lg p-4 hover:border-medgrowth-cyan/30 transition-colors duration-200" 
                      data-testid={`value-${value.title.toLowerCase().replace(' ', '-')}`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Ícone minimalista */}
                        <div className="flex-shrink-0 w-10 h-10 bg-medgrowth-cyan rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        
                        {/* Conteúdo */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg text-medgrowth-dark mb-2">
                            {value.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
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
