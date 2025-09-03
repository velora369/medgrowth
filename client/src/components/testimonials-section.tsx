import { Star, UserRound } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medgrowth-dark" data-testid="testimonials-title">
            Avaliações de Nossos Clientes no Google
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="testimonials-subtitle">
            Depoimentos reais de profissionais que cresceram com a MedGrowth
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Avaliação Google 1 */}
            <div className="bg-medgrowth-light p-6 rounded-xl" data-testid="testimonial-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-full flex items-center justify-center mr-3">
                  <UserRound className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-medgrowth-dark">Dr. Carlos Silva</h4>
                  <p className="text-sm text-muted-foreground">Cardiologista</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Excelente trabalho! A MedGrowth transformou completamente minha presença online. Aumentei 300% o número de consultas em 6 meses. Equipe muito profissional e dedicada. Recomendo!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Avaliação Google 2 */}
            <div className="bg-medgrowth-light p-6 rounded-xl" data-testid="testimonial-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-full flex items-center justify-center mr-3">
                  <UserRound className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-medgrowth-dark">Dra. Marina Santos</h4>
                  <p className="text-sm text-muted-foreground">Dermatologista</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Superou todas as minhas expectativas! O atendimento é personalizado e os resultados são incríveis. Meu consultório nunca esteve tão cheio. A estratégia digital funcionou perfeitamente."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Avaliação Google 3 */}
            <div className="bg-medgrowth-light p-6 rounded-xl" data-testid="testimonial-3">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-full flex items-center justify-center mr-3">
                  <UserRound className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-medgrowth-dark">Dr. Roberto Lima</h4>
                  <p className="text-sm text-muted-foreground">Ortopedista</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "Parceria de mais de 2 anos e só tenho elogios! Suporte contínuo, estratégias sempre atualizadas e resultados consistentes. A MedGrowth realmente entende o mercado médico."
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
