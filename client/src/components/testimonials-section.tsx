import { Star, UserRound } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medgrowth-dark" data-testid="testimonials-title">
            Médicos que Transformaram Suas Carreiras com a MedGrowth
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="testimonials-subtitle">
            Histórias reais de crescimento e sucesso digital
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial Placeholder 1 */}
            <div className="bg-medgrowth-light p-6 rounded-xl" data-testid="testimonial-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-full flex items-center justify-center mr-3">
                  <UserRound className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-medgrowth-dark">Dr. [Nome do Médico]</h4>
                  <p className="text-sm text-muted-foreground">[Especialidade]</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Aguardando depoimento real de cliente sobre como a MedGrowth transformou a presença digital e aumentou o número de pacientes."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Placeholder 2 */}
            <div className="bg-medgrowth-light p-6 rounded-xl" data-testid="testimonial-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-full flex items-center justify-center mr-3">
                  <UserRound className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-medgrowth-dark">Dra. [Nome da Médica]</h4>
                  <p className="text-sm text-muted-foreground">[Especialidade]</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Espaço reservado para depoimento sobre resultados obtidos com as estratégias personalizadas da MedGrowth."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Placeholder 3 */}
            <div className="bg-medgrowth-light p-6 rounded-xl" data-testid="testimonial-3">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-full flex items-center justify-center mr-3">
                  <UserRound className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-medgrowth-dark">Dr. [Nome do Médico]</h4>
                  <p className="text-sm text-muted-foreground">[Especialidade]</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Local para depoimento sobre a parceria de longo prazo e suporte contínuo da MedGrowth."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
