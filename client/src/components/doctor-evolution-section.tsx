import { TrendingUp, Eye, ExternalLink, Instagram, BarChart3 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";

export default function DoctorEvolutionSection() {
  const [openChart, setOpenChart] = useState<string | null>(null);

  const doctorResults = [
    {
      name: "Dr. Marcos Trindade",
      followers: "+2.419",
      period: "3 meses",
      views: "36 mil",
      viewsPeriod: "últimos 30 dias",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dr-marcos.webp",
      instagramLink: "https://www.instagram.com/reel/DKNdPwfvat-/?igsh=MWtod2pzbzd5aDVtMg==",
      chartData: [
        { month: "Mês 0", seguidores: 850, visualizacoes: 8000 },
        { month: "Mês 1", seguidores: 1420, visualizacoes: 15000 },
        { month: "Mês 2", seguidores: 2180, visualizacoes: 25000 },
        { month: "Mês 3", seguidores: 3269, visualizacoes: 36000 }
      ]
    },
    {
      name: "Dra. Raquel Saraiva",
      followers: "+4.575",
      period: "3 meses",
      views: "27,8 mil",
      viewsPeriod: "últimos 30 dias",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dra-raquel.webp",
      instagramLink: "https://www.instagram.com/reel/DLlTPE_O40h/?igsh=N3o2MjR1ZTU1NHM0",
      chartData: [
        { month: "Mês 0", seguidores: 1200, visualizacoes: 12000 },
        { month: "Mês 1", seguidores: 2350, visualizacoes: 18500 },
        { month: "Mês 2", seguidores: 4100, visualizacoes: 23200 },
        { month: "Mês 3", seguidores: 5775, visualizacoes: 27800 }
      ]
    },
    {
      name: "Dra. Carol Salles",
      followers: "+12,7 mil",
      period: "6 meses",
      views: "109,4 mil",
      viewsPeriod: "últimos 30 dias",
      image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dra-caroll.webp",
      instagramLink: "https://www.instagram.com/reel/DL0IWM5JRtx/?igsh=ZXZ1bHRyNjFubXR1",
      featured: true,
      chartData: [
        { month: "Mês 0", seguidores: 2100, visualizacoes: 25000 },
        { month: "Mês 1", seguidores: 4300, visualizacoes: 42000 },
        { month: "Mês 2", seguidores: 6800, visualizacoes: 58000 },
        { month: "Mês 3", seguidores: 9200, visualizacoes: 71000 },
        { month: "Mês 4", seguidores: 11900, visualizacoes: 88000 },
        { month: "Mês 5", seguidores: 13500, visualizacoes: 95000 },
        { month: "Mês 6", seguidores: 14800, visualizacoes: 109400 }
      ]
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-medgrowth-cyan/20">
          <p className="font-semibold text-medgrowth-dark">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.dataKey === 'seguidores' ? 'Seguidores' : 'Visualizações'}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

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
                      <div className="text-right min-w-[80px]">
                        <p className="text-2xl md:text-3xl font-bold text-medgrowth-dark whitespace-nowrap" data-testid={`doctor-followers-${index}`}>
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
                      <div className="text-right min-w-[80px]">
                        <p className="text-2xl md:text-3xl font-bold text-medgrowth-dark whitespace-nowrap" data-testid={`doctor-views-${index}`}>
                          {doctor.views}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
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
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-white text-medgrowth-dark border-2 border-medgrowth-cyan hover:bg-medgrowth-cyan hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                          data-testid={`doctor-chart-${index}`}
                        >
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Ver Gráfico
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full bg-white border border-medgrowth-cyan/20 shadow-2xl">
                        <DialogTitle className="text-2xl font-bold text-medgrowth-dark mb-2">
                          Evolução de {doctor.name}
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 mb-6">
                          Acompanhe o crescimento impressionante nas redes sociais ao longo de {doctor.period}
                        </DialogDescription>
                        
                        <div className="w-full h-96 mb-6">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={doctor.chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                              <defs>
                                <linearGradient id={`colorSeguidores${index}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id={`colorVisualizacoes${index}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#1E40AF" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#1E40AF" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                              <XAxis 
                                dataKey="month" 
                                tick={{ fontSize: 12, fill: '#64748b' }}
                                tickLine={{ stroke: '#e2e8f0' }}
                              />
                              <YAxis 
                                tick={{ fontSize: 12, fill: '#64748b' }}
                                tickLine={{ stroke: '#e2e8f0' }}
                                axisLine={{ stroke: '#e2e8f0' }}
                              />
                              <Tooltip content={<CustomTooltip />} />
                              <Legend 
                                wrapperStyle={{ paddingTop: '20px' }}
                                iconType="circle"
                              />
                              <Area
                                type="monotone"
                                dataKey="seguidores"
                                stackId="1"
                                stroke="#06B6D4"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill={`url(#colorSeguidores${index})`}
                                name="Seguidores"
                              />
                              <Area
                                type="monotone"
                                dataKey="visualizacoes"
                                stackId="2"
                                stroke="#1E40AF"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill={`url(#colorVisualizacoes${index})`}
                                name="Visualizações"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>

                        <div className="flex justify-between items-center bg-gradient-to-r from-medgrowth-cyan/5 to-medgrowth-dark/5 p-4 rounded-xl">
                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">Crescimento de Seguidores</p>
                            <p className="text-2xl font-bold text-medgrowth-dark">{doctor.followers}</p>
                            <p className="text-sm text-medgrowth-cyan">em {doctor.period}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">Visualizações Mensais</p>
                            <p className="text-2xl font-bold text-medgrowth-dark">{doctor.views}</p>
                            <p className="text-sm text-medgrowth-dark">{doctor.viewsPeriod}</p>
                          </div>
                          <div className="text-center">
                            <a
                              href="https://wa.me/5561996301406?text=Olá! Vi os gráficos de crescimento e gostaria de resultados assim para meu consultório!"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                              Quero Resultados Assim
                            </a>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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