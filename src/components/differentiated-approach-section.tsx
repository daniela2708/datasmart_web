import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { 
  TrendingUp, 
  RefreshCw, 
  Brain, 
  Code, 
  HandHeart, 
  Target,
  Play,
  ChevronRight
} from "lucide-react"

const pillars = [
  {
    id: 'inteligente',
    icon: Brain,
    title: '🧠 Procesamiento Inteligente',
    description: 'IA aplicada a texto, imagen, audio y video.',
    details: 'Extraemos valor de todos los tipos de datos: documentos, imágenes, audios, videos, emails, contratos. IA que realmente entiende tu negocio.',
    benefits: [
      'Análisis automático de documentos y contratos',
      'Procesamiento de imágenes y videos',
      'Comprensión de voz y texto natural'
    ],
    color: 'from-purple-500 to-purple-600',
    videoDescription: 'IA procesa 10,000 contratos legales en minutos vs meses'
  },
  {
    id: 'medida',
    icon: Code,
    title: '🛠️ Desarrollo a Medida',
    description: 'React/Next.js y tecnologías modernas adaptadas a tus flujos.',
    details: 'Desarrollo personalizado con las mejores tecnologías: React, Next.js, TypeScript, Python, Node.js. Interfaces que tu equipo realmente quiere usar.',
    benefits: [
      'Interfaces intuitivas y modernas',
      'Integración perfecta con sistemas existentes',
      'Experiencia de usuario optimizada'
    ],
    color: 'from-orange-500 to-orange-600',
    videoDescription: 'Dashboard personalizado aumenta adopción del equipo 95%'
  },
  {
    id: 'acompanamiento',
    icon: HandHeart,
    title: '🤝 Acompañamiento Continuo',
    description: 'aseguramos adopción y retorno de inversión.',
    details: 'No te dejamos solo después de la implementación. Capacitación, soporte, evolución continua y métricas de éxito constantes.',
    benefits: [
      'Soporte técnico especializado',
      'Capacitación continua del equipo',
      'Evolución constante de la solución'
    ],
    color: 'from-pink-500 to-pink-600',
    videoDescription: 'Cliente logra 300% ROI con acompañamiento continuo'
  },
  {
    id: 'medibles',
    icon: Target,
    title: '📈 Resultados Medibles',
    description: 'KPIs claros desde el inicio.',
    details: 'Definimos métricas específicas antes de empezar. Dashboards de seguimiento, reportes de ROI y evolución constante basada en datos reales.',
    benefits: [
      'KPIs definidos desde el día 1',
      'Reporting automático de resultados',
      'Optimización basada en métricas reales'
    ],
    color: 'from-teal-500 to-teal-600',
    videoDescription: 'Métricas claras demuestran ROI del 250% en 6 meses'
  }
]

export function DifferentiatedApproachSection() {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null)

  return (
    <section id="enfoque" className="py-20 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23217bc5' fill-opacity='0.1'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '152px 152px'
            }}
          />
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle">
            <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
            <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              ¿POR QUÉ ELEGIRNOS?
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-6 mb-6">
            Enfoque Diferenciado
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-600">
              Nuestro valor no está solo en la tecnología: está en cómo conectamos 
              <strong className="text-foreground"> estrategia, personas y datos</strong> para generar impacto medible.
            </p>
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-lg text-gray-600 italic">
                "Es como tener un Waze para tu empresa: te muestra el camino más eficiente, 
                evita los obstáculos y te lleva a tu destino más rápido."
              </p>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.id}
              className={`group cursor-pointer transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden animate-fade-in ${
                selectedPillar === pillar.id 
                  ? 'ring-2 ring-primary shadow-xl scale-105' 
                  : 'hover:shadow-xl hover:-translate-y-1 hover:border-primary/30'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onClick={() => setSelectedPillar(selectedPillar === pillar.id ? null : pillar.id)}
            >
              {/* Card background glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Color accent based on pillar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                  {pillar.title}
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    selectedPillar === pillar.id ? 'rotate-90' : ''
                  }`} />
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                
                {selectedPillar === pillar.id && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    <div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {pillar.details}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-green-600">Beneficios clave:</h4>
                      <ul className="space-y-1">
                        {pillar.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-green-500 mt-1">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/20 rounded-lg border border-muted">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Play className="w-4 h-4" />
                        <span className="font-medium">🎥 Micro-video:</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        {pillar.videoDescription}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500 ${
                selectedPillar === pillar.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Card>
          ))}
        </div>

        {/* Main Video Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              🎥 Video Principal: Nuestro Enfoque Diferenciado
            </h3>
            
            <div className="relative p-8 rounded-xl bg-primary/5 border border-primary/20">
              <div className="w-full h-80 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600 text-lg mb-2">Video principal del enfoque</p>
                  <p className="text-sm text-gray-600">Descubre qué nos hace únicos en el mercado</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">🎯 Lo que verás:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Casos reales de transformación</li>
                    <li>• Metodología paso a paso</li>
                    <li>• Resultados medibles</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">⏱️ Duración:</h4>
                  <p className="text-sm text-gray-600">3-4 minutos de contenido clave</p>
                  
                  <h4 className="font-semibold text-foreground">🎬 Formato:</h4>
                  <p className="text-sm text-gray-600">Animación + testimonios reales</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">💡 Aprenderás:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Por qué somos diferentes</li>
                    <li>• Cómo trabajamos contigo</li>
                    <li>• Qué puedes esperar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Messages */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h4 className="text-xl font-bold text-foreground mb-4">💡 Frases clave:</h4>
            <div className="space-y-3">
              <blockquote className="text-gray-600 italic border-l-4 border-primary pl-4">
                "No solo ahorres: gana."
              </blockquote>
              <blockquote className="text-gray-600 italic border-l-4 border-accent pl-4">
                "Transforma datos en control, y control en crecimiento."
              </blockquote>
              <blockquote className="text-gray-600 italic border-l-4 border-primary pl-4">
                "El talento no debería hacer tareas repetitivas. Deja que los datos trabajen por ti."
              </blockquote>
            </div>
          </Card>
          
          <Card className="p-6 bg-accent/5 border-accent/20">
            <h4 className="text-xl font-bold text-foreground mb-4">🎯 Nuestro compromiso:</h4>
            <div className="space-y-3 text-gray-600">
              <p>
                <strong className="text-foreground">Decisiones más rápidas</strong> con información confiable y actual.
              </p>
              <p>
                <strong className="text-foreground">Resultados medibles</strong> desde el primer mes de implementación.
              </p>
              <p>
                <strong className="text-foreground">Acompañamiento real</strong> hasta que veas el ROI esperado.
              </p>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Button 
            size="lg"
            className="bg-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
          >
            📞 Descubre cómo podemos transformar tu negocio
          </Button>
        </div>
      </div>

      {/* Section Separator */}
      <div className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="px-6">
              <div className="w-3 h-3 rounded-full bg-gray-900"></div>
              <div className="w-2 h-2 rounded-full bg-teal-500 -mt-2 ml-2"></div>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}