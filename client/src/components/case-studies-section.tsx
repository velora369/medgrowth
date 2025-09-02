export default function CaseStudiesSection() {
  return (
    <section id="casos-sucesso" className="py-20 bg-medgrowth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medgrowth-dark" data-testid="case-studies-title">
            Resultados Comprovados: Nossas Histórias de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="case-studies-subtitle">
            Transformações digitais que geraram crescimento real e sustentável
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Case Study Placeholder 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm" data-testid="case-study-1">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-medgrowth-dark">Cardiologia - Aumento de 300% em Pacientes</h3>
                <p className="text-muted-foreground mb-6">
                  Dr. Marcos Silva, cardiologista em Brasília, chegou até nós com apenas 15 pacientes por mês. Implementamos uma estratégia integrada de gestão de redes sociais, tráfego pago no Google Ads e branding profissional. Em 8 meses, transformamos sua prática médica em referência digital.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-600 mb-1">ANTES</h4>
                    <p className="text-2xl font-bold text-red-600">15</p>
                    <p className="text-xs text-muted-foreground">Pacientes/mês</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-600 mb-1">DEPOIS</h4>
                    <p className="text-2xl font-bold text-green-600">62</p>
                    <p className="text-xs text-muted-foreground">Pacientes/mês</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Modern healthcare technology and analytics"
                  className="rounded-xl w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  +300% Crescimento
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Placeholder 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm" data-testid="case-study-2">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-medgrowth-dark">Dermatologia - Autoridade Digital Consolidada</h3>
                <p className="text-muted-foreground mb-6">
                  Dra. Ana Costa, dermatologista, buscava construir autoridade digital para expandir sua clínica. Desenvolvemos identidade visual profissional, estratégia de conteúdo educativo e campanhas de engajamento. Resultado: se tornou referência em dermatologia estética no Instagram.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-medgrowth-light rounded-lg">
                    <p className="text-lg font-bold text-medgrowth-cyan">25K</p>
                    <p className="text-xs text-muted-foreground">Seguidores</p>
                  </div>
                  <div className="text-center p-3 bg-medgrowth-light rounded-lg">
                    <p className="text-lg font-bold text-medgrowth-cyan">8.7%</p>
                    <p className="text-xs text-muted-foreground">Engajamento</p>
                  </div>
                  <div className="text-center p-3 bg-medgrowth-light rounded-lg">
                    <p className="text-lg font-bold text-medgrowth-cyan">180</p>
                    <p className="text-xs text-muted-foreground">Leads/mês</p>
                  </div>
                </div>
              </div>
              <div className="md:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Digital marketing analytics and growth charts"
                  className="rounded-xl w-full h-auto"
                />
                <div className="absolute bottom-4 left-4 bg-medgrowth-cyan text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Autoridade Consolidada
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
