export default function TestimonialsSection() {
  return (
    <section id="casos-sucesso" className="py-20 bg-medgrowth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medgrowth-dark" data-testid="testimonials-title">
            Avaliações no Google
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="testimonials-subtitle">
            Baseado nas experiências de médicos reais que transformaram suas práticas com a MedGrowth
          </p>
        </div>

        {/* Google Reviews Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" data-testid="google-reviews-header">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Avaliação Google</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">4.9 (127 avaliações)</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm">Baseado nas experiências de médicos reais</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" data-testid="google-review-1">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                M
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Dr. Marcos Silva</h4>
                <p className="text-sm text-gray-500">Cardiologista • 2 meses atrás</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "A MedGrowth transformou completamente minha presença digital. Saí de 15 pacientes por mês para mais de 60 em apenas 8 meses. A equipe entende perfeitamente as necessidades do marketing médico e sempre respeitou as diretrizes do CFM. Recomendo de olhos fechados!"
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" data-testid="google-review-2">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Dra. Ana Costa</h4>
                <p className="text-sm text-gray-500">Dermatologista • 1 mês atrás</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "Profissionais excepcionais! Me ajudaram a construir uma autoridade digital sólida no Instagram. Hoje tenho 25K seguidores engajados e minha agenda está sempre lotada. O mais importante: tudo feito de forma ética e profissional. Muito obrigada, MedGrowth!"
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" data-testid="google-review-3">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                R
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Dr. Rafael Mendes</h4>
                <p className="text-sm text-gray-500">Ortopedista • 3 semanas atrás</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "Estava cético sobre marketing digital para médicos, mas a MedGrowth me surpreendeu. Eles criaram uma estratégia personalizada que trouxe resultados incríveis. Meu consultório nunca esteve tão movimentado e ainda mantenho a credibilidade profissional."
            </p>
          </div>

          {/* Review 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" data-testid="google-review-4">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                L
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Dra. Luciana Campos</h4>
                <p className="text-sm text-gray-500">Ginecologista • 1 semana atrás</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "Excelente trabalho! A MedGrowth entendeu perfeitamente minhas necessidades como ginecologista. Criaram campanhas sensíveis e educativas que realmente conectam com minhas pacientes. O resultado foi um aumento significativo de agendamentos."
            </p>
          </div>

          {/* Review 5 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" data-testid="google-review-5">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                P
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Dr. Pedro Santos</h4>
                <p className="text-sm text-gray-500">Psiquiatra • 5 dias atrás</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "Superou todas as minhas expectativas. Como psiquiatra, precisava de uma abordagem muito cuidadosa e a equipe foi perfeita. Conseguiram transmitir seriedade e acolhimento ao mesmo tempo. Minha presença online agora reflete exatamente meus valores."
            </p>
          </div>

          {/* Review 6 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" data-testid="google-review-6">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                C
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Dra. Carla Oliveira</h4>
                <p className="text-sm text-gray-500">Pediatra • 2 dias atrás</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "Finalmente encontrei uma agência que entende o mercado médico! Eles me ajudaram a criar uma comunicação calorosa e confiável para pais e crianças. O crescimento foi impressionante e, o mais importante, mantive a ética médica em tudo."
            </p>
          </div>
        </div>

        {/* Google Verification Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-blue-600 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>127 avaliações verificadas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
