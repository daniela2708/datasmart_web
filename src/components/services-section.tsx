import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { 
  Cog, 
  BarChart3, 
  Download, 
  FileText, 
  GraduationCap, 
  FileSearch,
  Brain,
  Building2,
  Rocket,
  Landmark,
  Heart,
  User,
  Sprout,
  ChevronDown,
  ChevronUp,
  Play
} from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Consultoría en análisis de datos",
    description: "Estrategias personalizadas para implementar una cultura data-driven en tu organización.",
    problems: ["Falta de estrategia de datos", "KPIs poco claros", "Decisiones basadas en intuición"],
    benefits: ["Roadmap claro de datos", "KPIs medibles", "Decisiones estratégicas respaldadas"],
    hasVideo: true
  },
  {
    icon: Cog,
    title: "Automatización de procesos",
    description: "Optimizamos tareas repetitivas y manuales para liberar tiempo valioso de tu equipo.",
    problems: ["Tareas manuales repetitivas", "Errores humanos frecuentes", "Procesos lentos"],
    benefits: ["75% menos tiempo en tareas rutinarias", "Reducción de errores del 90%", "Procesos 5x más rápidos"],
    hasVideo: true
  },
  {
    icon: BarChart3,
    title: "Visualización de datos",
    description: "Transformamos datos complejos en dashboards interactivos y visualizaciones claras.",
    problems: ["Datos dispersos", "Reportes manuales lentos", "Falta de visibilidad en tiempo real"],
    benefits: ["Dashboards en tiempo real", "Reportes automáticos", "Visibilidad total de la operación"],
    hasVideo: true
  },
  {
    icon: Download,
    title: "Extracción y procesamiento de información",
    description: "Extraemos, transformamos y limpiamos datos de múltiples fuentes.",
    problems: ["Datos en silos", "Información inconsistente", "Procesos de ETL complejos"],
    benefits: ["Datos unificados", "Información confiable", "Pipelines automáticos"],
    hasVideo: true
  },
  {
    icon: FileSearch,
    title: "Análisis de datos no estructurados",
    description: "Extraemos insights valiosos de textos, imágenes y comunicaciones mediante IA.",
    problems: ["Información en documentos", "Análisis manual de texto", "Datos no aprovechados"],
    benefits: ["Insights automáticos", "Análisis de sentimientos", "Extracción inteligente"],
    hasVideo: true
  },
  {
    icon: Brain,
    title: "Integración con IA",
    description: "Implementamos soluciones de inteligencia artificial adaptadas a tu negocio.",
    problems: ["Procesos predictivos manuales", "Falta de personalización", "Análisis reactivo"],
    benefits: ["Predicciones automáticas", "Recomendaciones personalizadas", "Análisis proactivo"],
    hasVideo: true
  },
  {
    icon: GraduationCap,
    title: "Formación y capacitación",
    description: "Programas personalizados para que tu equipo desarrolle habilidades analíticas.",
    problems: ["Equipo sin conocimientos de datos", "Dependencia de externos", "Baja adopción de herramientas"],
    benefits: ["Equipo capacitado", "Autonomía en análisis", "Adopción exitosa"],
    hasVideo: true
  }
]

const customerTypes = [
  {
    id: 'empresa',
    icon: Building2,
    title: '📦 Empresa privada',
    description: 'Soluciones escalables para empresas consolidadas',
    valueProposition: 'Optimiza tus operaciones, reduce costos y aumenta la rentabilidad con análisis avanzados y automatización inteligente.',
    useCases: [
      'Automatización de reportes financieros',
      'Dashboards ejecutivos en tiempo real', 
      'Análisis predictivo de ventas',
      'Optimización de inventarios',
      'Detección de fraudes'
    ],
    videoDescription: 'Caso de éxito: Empresa manufacturera reduce costos 30% con automatización'
  },
  {
    id: 'startup',
    icon: Rocket,
    title: '🚀 Startup',
    description: 'Soluciones ágiles para startups en crecimiento',
    valueProposition: 'Escala rápidamente con datos confiables, automatiza desde el día uno y toma decisiones basadas en métricas que importan.',
    useCases: [
      'Métricas de producto y crecimiento',
      'Automatización de onboarding',
      'Análisis de cohortes de usuarios',
      'Dashboards de fundraising',
      'Optimización de conversión'
    ],
    videoDescription: 'Startup fintech automatiza KYC y reduce tiempo de onboarding 80%'
  },
  {
    id: 'publica',
    icon: Landmark,
    title: '🏛️ Entidad pública',
    description: 'Transparencia y eficiencia para el sector público',
    valueProposition: 'Mejora la transparencia, optimiza recursos públicos y ofrece mejores servicios a los ciudadanos con datos abiertos y automatización.',
    useCases: [
      'Dashboards de transparencia ciudadana',
      'Automatización de trámites',
      'Análisis de eficiencia en servicios',
      'Reportes de gestión automáticos',
      'Optimización de recursos públicos'
    ],
    videoDescription: 'Municipio digitaliza trámites y mejora satisfacción ciudadana 65%'
  },
  {
    id: 'ong',
    icon: Heart,
    title: '❤️ ONG / Fundación',
    description: 'Maximiza el impacto social con datos',
    valueProposition: 'Demuestra tu impacto social con métricas claras, optimiza la gestión de donaciones y mejora la eficiencia operativa.',
    useCases: [
      'Medición de impacto social',
      'Gestión automática de donaciones',
      'Reportes para donantes',
      'Optimización de programas',
      'Dashboards de transparencia'
    ],
    videoDescription: 'Fundación educativa aumenta eficiencia 50% y mejora reportes de impacto'
  },
  {
    id: 'personal',
    icon: User,
    title: '👤 Marca personal',
    description: 'Potencia tu marca personal con datos',
    valueProposition: 'Entiende a tu audiencia, optimiza tu contenido y monetiza mejor tu marca personal con analytics avanzados.',
    useCases: [
      'Analytics de redes sociales',
      'Segmentación de audiencia',
      'Optimización de contenido',
      'Tracking de conversiones',
      'Automatización de marketing'
    ],
    videoDescription: 'Influencer optimiza contenido y aumenta engagement 120%'
  },
  {
    id: 'emprendedor',
    icon: Sprout,
    title: '🌱 Emprendedor en crecimiento',
    description: 'Crece de manera sostenible con datos',
    valueProposition: 'Valida tu modelo de negocio, optimiza tus recursos limitados y toma decisiones acertadas para crecer sosteniblemente.',
    useCases: [
      'Validación de hipótesis de negocio',
      'Optimización de recursos limitados',
      'Métricas de validación de mercado',
      'Automatización de procesos clave',
      'Dashboards de crecimiento'
    ],
    videoDescription: 'Emprendedor valida modelo de negocio y reduce costos operativos 40%'
  }
]

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [selectedCustomerType, setSelectedCustomerType] = useState<string | null>(null)

  return (
    <section id="servicios" className="py-20 bg-background relative overflow-hidden">
      {/* Background patterns like Claude design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sophisticated pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='48' viewBox='0 0 84 48'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%2310b981' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '84px 48px'
            }}
          />
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle">
            <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
            <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              NUESTROS SERVICIOS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-6 mb-6">
            Soluciones Personalizadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Personalizamos cada solución según tus herramientas, objetivos y tipo de negocio. 
            Si ya tienes sistemas, los integramos. Si no, los diseñamos contigo desde cero.
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group cursor-pointer transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm relative overflow-hidden animate-fade-in ${
                expandedService === service.title ? 'ring-2 ring-primary shadow-xl scale-105' : 'hover:shadow-xl hover:-translate-y-2'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setExpandedService(expandedService === service.title ? null : service.title)}
            >
              {/* Card background glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Left accent border */}
              <div className={`absolute left-0 top-0 w-1 bg-primary transition-all duration-500 ${
                expandedService === service.title ? 'h-full' : 'h-0 group-hover:h-full'
              }`}></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <service.icon className="w-8 h-8 text-white relative z-10" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                  {service.title}
                  {expandedService === service.title ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                
                {expandedService === service.title && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-red-600">Problemas que resuelve:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-green-600">Beneficios clave:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {service.hasVideo && (
                      <div className="p-3 bg-muted/20 rounded-lg border border-muted">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Play className="w-4 h-4" />
                          <span>🎥 Video demostrativo disponible</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              
              {/* Bottom highlight */}
              <div className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500 ${
                expandedService === service.title ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Card>
          ))}
        </div>

        {/* Customer Type Selector */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              ¿Con cuál perfil te identificas?
            </h3>
            <p className="text-lg text-gray-600">
              Descubre soluciones personalizadas para tu tipo de negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {customerTypes.map((type, index) => (
              <Card 
                key={type.id}
                className={`group cursor-pointer transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden animate-fade-in ${
                  selectedCustomerType === type.id 
                    ? 'ring-2 ring-accent shadow-xl scale-105 border-accent/50' 
                    : 'hover:shadow-xl hover:-translate-y-1 hover:border-accent/30'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                onClick={() => setSelectedCustomerType(selectedCustomerType === type.id ? null : type.id)}
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`absolute left-0 top-0 w-1 bg-accent transition-all duration-500 ${
                  selectedCustomerType === type.id ? 'h-full' : 'h-0 group-hover:h-full'
                }`}></div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-sm text-gray-600 text-center">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Customer Type Details */}
          {selectedCustomerType && (
            <div className="animate-fade-in">
              {customerTypes.filter(type => type.id === selectedCustomerType).map(type => (
                <Card key={type.id} className="bg-accent/5 border-accent/20 p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                      <type.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{type.title}</h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      {type.valueProposition}
                    </p>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">Casos de uso relevantes:</h4>
                      <ul className="space-y-3">
                        {type.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">🎥 Video ilustrativo:</h4>
                      <div className="p-6 bg-muted/20 rounded-lg border border-muted text-center">
                        <Play className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <p className="text-sm text-gray-600 mb-4">
                          {type.videoDescription}
                        </p>
                        <Button variant="outline" size="sm">
                          Ver video de caso
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button 
                      size="lg"
                      className="bg-accent hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
                    >
                      📞 Agenda tu asesoría personalizada
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
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