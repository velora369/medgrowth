import { TrendingUp, Eye, ExternalLink, Instagram } from "lucide-react";

export default function DoctorEvolutionSection() {
  const doctorResults = [
    {
      name: "Dr. Marcos Trindade",
      followers: "+2.419",
      period: "3 meses",
      views: "36 mil",
      viewsPeriod: "últimos 30 dias",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dr-marcos.webp",
      instagramLink: "https://www.instagram.com/reel/DKNdPwfvat-/?igsh=MWtod2pzbzd5aDVtMg=="
    },
    {
      name: "Dra. Raquel Saraiva",
      followers: "+4.575",
      period: "3 meses",
      views: "27,8 mil",
      viewsPeriod: "últimos 30 dias",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dra-raquel.webp",
      instagramLink: "https://www.instagram.com/reel/DLlTPE_O40h/?igsh=N3o2MjR1ZTU1NHM0"
    },
    {
      name: "Dra. Carol Salles",
      followers: "+12,7 mil",
      period: "6 meses",
      views: "109,4 mil",
      viewsPeriod: "últimos 30 dias",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dra-caroll.webp",
      instagramLink: "https://www.instagram.com/reel/DL0IWM5JRtx/?igsh=ZXZ1bHRyNjFubXR1",
      featured: true
    }
  ];

  return (
    <section id="evolucao-doutores" className="py-20 bg-gradient-to-b from-white to-medgrowth-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-medgrowth-cyan/10 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-medgrowth-cyan" />
            <span className="text-medgrowth-cyan font-semibold text-sm">RESULTADOS COMPROVADOS</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-medgrowth-dark leading-tight" data-testid="evolution-title">
            Médicos que <span className="bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark bg-clip-text text-transparent">Evoluíram</span>
            <br />nas Mídias Sociais
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como nossos clientes transformaram sua presença digital e alcançaram resultados extraordinários
          </p>
        </div>

        {/* Results Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {doctorResults.map((doctor, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105"
                data-testid={`doctor-card-${index}`}
              >
                {/* Featured Badge */}
                {doctor.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-3 py-1 rounded-full text-xs font-semibold">
                      DESTAQUE
                    </div>
                  </div>
                )}

                {/* Doctor Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-testid={`doctor-image-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Instagram Link Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                    <a
                      href={doctor.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-medgrowth-dark p-3 rounded-full hover:bg-white transition-colors shadow-lg"
                      data-testid={`doctor-instagram-${index}`}
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-medgrowth-dark mb-6" data-testid={`doctor-name-${index}`}>
                    {doctor.name}
                  </h3>

                  {/* Metrics */}
                  <div className="space-y-4">
                    {/* Followers Metric */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-medgrowth-cyan/5 to-medgrowth-dark/5 rounded-xl border border-medgrowth-cyan/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-medgrowth-cyan rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Seguidores Orgânicos</p>
                          <p className="text-sm text-gray-600">em {doctor.period}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl md:text-3xl font-bold text-medgrowth-dark" data-testid={`doctor-followers-${index}`}>
                          {doctor.followers}
                        </p>
                      </div>
                    </div>

                    {/* Views Metric */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-medgrowth-dark/5 to-medgrowth-cyan/5 rounded-xl border border-medgrowth-dark/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-medgrowth-dark rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Visualizações</p>
                          <p className="text-sm text-gray-600">{doctor.viewsPeriod}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl md:text-3xl font-bold text-medgrowth-dark" data-testid={`doctor-views-${index}`}>
                          {doctor.views}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* View Results Button */}
                  <div className="mt-6">
                    <a
                      href={doctor.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group/button"
                      data-testid={`doctor-cta-${index}`}
                    >
                      <span>Ver Resultados</span>
                      <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-600 mb-2">
              Quer resultados como estes para seu consultório?
            </p>
            <p className="text-medgrowth-dark font-semibold">
              Nossos especialistas estão prontos para criar sua estratégia personalizada
            </p>
          </div>
          <a
            href="https://wa.me/5561996301406?text=Olá! Vi os resultados incríveis dos médicos nas redes sociais e gostaria de uma análise gratuita!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            data-testid="evolution-cta-button"
          >
            <span>Quero Meus Resultados Também</span>
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}