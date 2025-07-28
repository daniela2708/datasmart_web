import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { 
  Building2, 
  Heart, 
  Stethoscope, 
  Truck, 
  Factory, 
  Users, 
  Landmark,
  ShoppingCart,
  Mic,
  Play,
  Filter,
  CheckCircle
} from "lucide-react"
import React from "react"

const industries = [
  { id: 'all', name: 'Todas las industrias', icon: Building2, color: 'from-gray-500 to-gray-600' },
  { id: 'retail', name: 'Retail', icon: ShoppingCart, color: 'from-blue-500 to-blue-600' },
  { id: 'salud', name: 'Salud', icon: Stethoscope, color: 'from-green-500 to-green-600' },
  { id: 'ganaderia', name: 'Ganadería', icon: Truck, color: 'from-orange-500 to-orange-600' },
  { id: 'manufactura', name: 'Manufactura', icon: Factory, color: 'from-purple-500 to-purple-600' },
  { id: 'influencers', name: 'Influencers', icon: Mic, color: 'from-pink-500 to-pink-600' },
  { id: 'publico', name: 'Sector Público', icon: Landmark, color: 'from-indigo-500 to-indigo-600' },
  { id: 'ong', name: 'ONG', icon: Heart, color: 'from-red-500 to-red-600' }
]

const useCases = [
  {
    id: 'retail-1',
    industry: 'retail',
    customerType: 'Empresa privada',
    challenge: 'Cadena de tiendas perdía clientes por falta de inventario y no sabía qué productos promocionar',
    solution: 'Dashboard predictivo de inventarios + análisis de patrones de compra + automatización de reposición',
    results: ['Reducción del 40% en productos agotados', 'Aumento del 25% en ventas por promociones dirigidas', 'Automatización del 80% del proceso de reposición'],
    pillars: ['Automatización', 'Visualización', 'IA Predictiva'],
    videoDescription: 'Tienda de retail automatiza inventarios y aumenta ventas 25%'
  },
  {
    id: 'salud-1',
    industry: 'salud',
    customerType: 'Entidad pública',
    challenge: 'Hospital no podía optimizar la asignación de camas y personal médico durante picos de demanda',
    solution: 'Sistema predictivo de ocupación + dashboard en tiempo real + automatización de alertas',
    results: ['Reducción del 30% en tiempos de espera', 'Optimización del 45% en asignación de personal', 'Prevención de saturación en emergencias'],
    pillars: ['Predicción', 'Tiempo Real', 'Automatización'],
    videoDescription: 'Hospital optimiza recursos y reduce tiempos de espera 30%'
  },
  {
    id: 'ganaderia-1',
    industry: 'ganaderia',
    customerType: 'Empresa privada',
    challenge: 'Ganadería no podía rastrear la salud y productividad individual del ganado',
    solution: 'IoT + análisis de datos de sensores + alertas automáticas de salud animal',
    results: ['Detección temprana del 95% de enfermedades', 'Aumento del 20% en productividad láctea', 'Reducción del 50% en mortalidad'],
    pillars: ['IoT', 'Análisis Predictivo', 'Alertas Automáticas'],
    videoDescription: 'Ganadería tecnifica operación y aumenta productividad 20%'
  },
  {
    id: 'manufactura-1',
    industry: 'manufactura',
    customerType: 'Empresa privada',
    challenge: 'Fábrica tenía paradas no planificadas y altos costos de mantenimiento',
    solution: 'Mantenimiento predictivo + análisis de vibraciones + automatización de órdenes de trabajo',
    results: ['Reducción del 60% en paradas no planificadas', 'Ahorro del 35% en costos de mantenimiento', 'Aumento del 15% en eficiencia de línea'],
    pillars: ['Mantenimiento Predictivo', 'Automatización', 'Análisis de Sensores'],
    videoDescription: 'Fábrica reduce paradas no planificadas 60% con IA predictiva'
  },
  {
    id: 'influencers-1',
    industry: 'influencers',
    customerType: 'Marca personal',
    challenge: 'Influencer no sabía qué contenido funcionaba mejor ni cuándo publicar',
    solution: 'Analytics avanzado de redes sociales + optimización de horarios + análisis de engagement',
    results: ['Aumento del 120% en engagement', 'Optimización del 80% en horarios de publicación', 'Crecimiento del 50% en seguidores'],
    pillars: ['Analytics Social', 'Optimización', 'Segmentación'],
    videoDescription: 'Influencer optimiza contenido y duplica engagement'
  },
  {
    id: 'publico-1',
    industry: 'publico',
    customerType: 'Entidad pública',
    challenge: 'Municipio tenía trámites lentos y ciudadanos insatisfechos',
    solution: 'Digitalización de procesos + dashboard de transparencia + automatización de notificaciones',
    results: ['Reducción del 70% en tiempo de trámites', 'Aumento del 65% en satisfacción ciudadana', 'Transparencia del 100% en gestión'],
    pillars: ['Digitalización', 'Transparencia', 'Automatización'],
    videoDescription: 'Municipio digitaliza trámites y mejora satisfacción 65%'
  },
  {
    id: 'ong-1',
    industry: 'ong',
    customerType: 'ONG / Fundación',
    challenge: 'Fundación educativa no podía medir el impacto real de sus programas',
    solution: 'Sistema de medición de impacto + reportes automáticos para donantes + dashboard de gestión',
    results: ['Medición del 100% del impacto social', 'Aumento del 40% en donaciones por transparencia', 'Optimización del 50% en programas'],
    pillars: ['Medición de Impacto', 'Transparencia', 'Reportes Automáticos'],
    videoDescription: 'Fundación mide impacto social y aumenta donaciones 40%'
  },
  {
    id: 'retail-2',
    industry: 'retail',
    customerType: 'Startup',
    challenge: 'E-commerce no entendía por qué los clientes abandonaban el carrito de compras',
    solution: 'Análisis de comportamiento + heat maps + automatización de recuperación de carritos',
    results: ['Reducción del 45% en abandono de carrito', 'Aumento del 30% en conversión', 'Recuperación del 25% de ventas perdidas'],
    pillars: ['Análisis de Comportamiento', 'Automatización', 'Optimización'],
    videoDescription: 'E-commerce reduce abandono de carrito 45% con analytics'
  }
]

export function UseCasesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedCase, setSelectedCase] = useState<string | null>(null)

  const filteredCases = selectedIndustry === 'all' 
    ? useCases 
    : useCases.filter(useCase => useCase.industry === selectedIndustry)

  return (
    <section id="casos" className="py-20 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%2310b981' fill-opacity='0.05' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '28px 49px'
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
              CASOS DE USO
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-6 mb-6">
            Casos de Éxito Reales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo hemos transformado negocios en diferentes industrias con soluciones de datos e IA
          </p>
        </div>

        {/* Industry Filter */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtrar por industria:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <Button
                key={industry.id}
                variant={selectedIndustry === industry.id ? "default" : "outline"}
                size="sm"
                className={`group transition-all duration-300 animate-fade-in ${
                  selectedIndustry === industry.id
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-lg`
                    : 'hover:shadow-md'
                }`}
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                onClick={() => setSelectedIndustry(industry.id)}
              >
                <industry.icon className="w-4 h-4 mr-2" />
                {industry.name}
                {selectedIndustry === industry.id && (
                  <CheckCircle className="w-4 h-4 ml-2" />
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((useCase, index) => (
            <Card 
              key={useCase.id}
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm relative overflow-hidden animate-fade-in cursor-pointer"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => setSelectedCase(selectedCase === useCase.id ? null : useCase.id)}
            >
              {/* Card background glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Industry color accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(
                        industries.find(ind => ind.id === useCase.industry)?.icon || Building2,
                        { className: "w-6 h-6 text-white" }
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                        {industries.find(ind => ind.id === useCase.industry)?.name || 'Industria'}
                      </div>
                      <div className="text-sm font-medium text-accent">
                        {useCase.customerType}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {useCase.pillars.slice(0, 2).map((pillar, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
                
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  Reto / Necesidad
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.challenge}
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-blue-600">Solución Aplicada:</h4>
                    <p className="text-sm text-gray-600">
                      {useCase.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-green-600">Resultados Obtenidos:</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pilares Aplicados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.pillars.map((pillar, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                          {pillar}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Video Section */}
                  <div className="p-4 bg-muted/20 rounded-lg border border-muted">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground text-sm mb-1">🎥 Video de caso:</h5>
                        <p className="text-xs text-gray-600">
                          {useCase.videoDescription}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      Ver video del caso
                    </Button>
                  </div>
                </div>
              </CardContent>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto p-8 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tu industria no está aquí?
            </h3>
            <p className="text-gray-600 mb-6">
              Trabajamos con empresas de todos los sectores. Cada proyecto es único y lo adaptamos a tus necesidades específicas.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              📞 Agenda tu consulta gratuita
            </Button>
          </div>
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