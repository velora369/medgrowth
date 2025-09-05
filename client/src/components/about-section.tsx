import { Shield, Lightbulb, TrendingUp, Handshake } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AboutSection() {

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
                A <strong className="text-medgrowth-cyan">MedGrowth</strong> nasceu para revolucionar o marketing médico. Atuamos como extensão digital da sua clínica e da sua marca pessoal, cuidando da sua autoridade online com estratégias sob medida.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 relative">
                <Dialog>
                  <DialogTrigger asChild>
                    <div 
                      className="text-center p-4 bg-medgrowth-light rounded-lg hover:bg-medgrowth-cyan/10 transition-all duration-300 hover:scale-105 cursor-pointer" 
                      data-testid="value-ethics"
                    >
                      <Shield className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                      <h3 className="font-semibold text-sm mb-3">Ética</h3>
                      <p className="text-xs text-medgrowth-cyan/70 hover:text-medgrowth-cyan font-medium transition-all duration-200 underline-offset-2 hover:underline" data-testid="button-read-more-ethics">
                        Ver nossa abordagem ética
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-medgrowth-dark">{valueDetails.ethics.title}</DialogTitle>
                      <DialogDescription className="sr-only">
                        Descrição detalhada sobre {valueDetails.ethics.title.toLowerCase()}
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-gray-600 leading-relaxed">{valueDetails.ethics.description}</p>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <div 
                      className="text-center p-4 bg-medgrowth-light rounded-lg hover:bg-medgrowth-cyan/10 transition-all duration-300 hover:scale-105 cursor-pointer" 
                      data-testid="value-innovation"
                    >
                      <Lightbulb className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                      <h3 className="font-semibold text-sm mb-3">Inovação</h3>
                      <p className="text-xs text-medgrowth-cyan/70 hover:text-medgrowth-cyan font-medium transition-all duration-200 underline-offset-2 hover:underline" data-testid="button-read-more-innovation">
                        Conheça nossas inovações
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-medgrowth-dark">{valueDetails.innovation.title}</DialogTitle>
                      <DialogDescription className="sr-only">
                        Descrição detalhada sobre {valueDetails.innovation.title.toLowerCase()}
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-gray-600 leading-relaxed">{valueDetails.innovation.description}</p>
                  </DialogContent>
                </Dialog>

                <div 
                  className="text-center p-4 bg-medgrowth-light rounded-lg hover:bg-medgrowth-cyan/10 transition-all duration-300 hover:scale-105 cursor-pointer" 
                  data-testid="value-results"
                  onClick={() => {
                    const testimonialsSection = document.getElementById('casos-sucesso');
                    testimonialsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <TrendingUp className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm mb-3">Resultados Reais</h3>
                  <p className="text-xs text-medgrowth-cyan/70 hover:text-medgrowth-cyan font-medium transition-all duration-200 underline-offset-2 hover:underline" data-testid="button-read-more-results">
                    Ver resultados comprovados
                  </p>
                </div>

                <div 
                  className="text-center p-4 bg-medgrowth-light rounded-lg hover:bg-medgrowth-cyan/10 transition-all duration-300 hover:scale-105 cursor-pointer" 
                  data-testid="value-partnership"
                  onClick={() => {
                    const contactSection = document.getElementById('contato');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Handshake className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm mb-3">Parceria</h3>
                  <p className="text-xs text-medgrowth-cyan/70 hover:text-medgrowth-cyan font-medium transition-all duration-200 underline-offset-2 hover:underline" data-testid="button-read-more-partnership">
                    Saiba como trabalhamos juntos
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/um-medico-moderno-sorridente-e-confiante_j8zlxxa7qv2txvbn9wkdtw_fpfcmznkspi7y8qvprrjeq.webp"
                alt="Médico profissional sorrindo confiante em seu consultório, representando a confiança e autoridade que a MedGrowth ajuda a construir no ambiente digital"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="about-image"
              />
            </div>
          </div>
          
          <div className="text-center mt-12 fade-in-up">
            <p className="text-lg text-gray-600 mb-6">
              Pronto para transformar sua presença digital?
            </p>
            <a
              href="https://wa.me/5561996301406"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              data-testid="about-cta-button"
            >
              <span>Quero Minha Análise Gratuita</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
