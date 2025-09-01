import { Shield, Lightbulb, TrendingUp, Handshake } from "lucide-react";

export default function AboutSection() {
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

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-medgrowth-light rounded-lg" data-testid="value-ethics">
                  <Shield className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm">Ética</h3>
                </div>
                <div className="text-center p-4 bg-medgrowth-light rounded-lg" data-testid="value-innovation">
                  <Lightbulb className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm">Inovação</h3>
                </div>
                <div className="text-center p-4 bg-medgrowth-light rounded-lg" data-testid="value-results">
                  <TrendingUp className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm">Resultados Reais</h3>
                </div>
                <div className="text-center p-4 bg-medgrowth-light rounded-lg" data-testid="value-partnership">
                  <Handshake className="w-8 h-8 text-medgrowth-cyan mb-2 mx-auto" />
                  <h3 className="font-semibold text-sm">Parceria</h3>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern medical office with digital technology"
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
