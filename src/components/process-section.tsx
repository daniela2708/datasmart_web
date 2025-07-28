import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Lightbulb, Cog, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Diagnóstico",
    description: "Analizamos tu situación actual, identificamos oportunidades y definimos objetivos claros.",
    icon: Search
  },
  {
    number: "2", 
    title: "Diseño",
    description: "Desarrollamos una estrategia personalizada y planificamos la solución óptima para tus necesidades.",
    icon: Lightbulb
  },
  {
    number: "3",
    title: "Implementación", 
    description: "Ejecutamos la solución con un enfoque ágil, permitiendo ajustes durante el proceso.",
    icon: Cog
  },
  {
    number: "4",
    title: "Optimización",
    description: "Monitorizamos resultados, refinamos la solución y garantizamos la transferencia de conocimiento.",
    icon: TrendingUp
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background patterns similar to Claude design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle">
            <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
            <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              NUESTRA METODOLOGÍA
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-6 mb-6">
            Metodología Interactiva
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Seguimos un enfoque estructurado pero flexible que garantiza resultados óptimos en cada proyecto.
          </p>
          
          {/* Video Section */}
          <div className="max-w-2xl mx-auto p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">🎥 Video del Proceso (45-60s)</h3>
            <div className="w-full h-48 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted mb-4">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-600 text-sm">Video explicativo del proceso</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Conoce paso a paso cómo transformamos datos en valor para tu negocio
            </p>
          </div>
        </div>

        {/* Enhanced animated workflow diagram */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="max-w-4xl mx-auto">
            <svg viewBox="0 0 800 200" className="w-full h-auto">
              <defs>
                <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="33%" stopColor="#60a5fa"/>
                  <stop offset="66%" stopColor="#10b981"/>
                  <stop offset="100%" stopColor="#34d399"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Main flow line with animation */}
              <path 
                d="M100,100 C200,50 600,150 700,100" 
                stroke="url(#processGradient)" 
                strokeWidth="4" 
                fill="none" 
                strokeDasharray="10,5"
                filter="url(#glow)"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="100" 
                  to="0" 
                  dur="8s" 
                  repeatCount="indefinite" 
                />
              </path>
              
              {/* Process nodes */}
              <g>
                {/* Node 1 */}
                <circle cx="100" cy="100" r="35" fill="#3b82f6" filter="url(#glow)">
                  <animate attributeName="r" values="32;38;32" dur="3s" repeatCount="indefinite"/>
                </circle>
                <text x="100" y="106" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">1</text>
                <text x="100" y="150" textAnchor="middle" fill="#3b82f6" fontWeight="bold" fontSize="14">Diagnóstico</text>
                
                {/* Node 2 */}
                <circle cx="300" cy="80" r="35" fill="#60a5fa" filter="url(#glow)">
                  <animate attributeName="r" values="32;38;32" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <text x="300" y="86" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">2</text>
                <text x="300" y="130" textAnchor="middle" fill="#60a5fa" fontWeight="bold" fontSize="14">Diseño</text>
                
                {/* Node 3 */}
                <circle cx="500" cy="120" r="35" fill="#10b981" filter="url(#glow)">
                  <animate attributeName="r" values="32;38;32" dur="3s" repeatCount="indefinite" begin="1s"/>
                </circle>
                <text x="500" y="126" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">3</text>
                <text x="500" y="170" textAnchor="middle" fill="#10b981" fontWeight="bold" fontSize="14">Implementación</text>
                
                {/* Node 4 */}
                <circle cx="700" cy="100" r="35" fill="#34d399" filter="url(#glow)">
                  <animate attributeName="r" values="32;38;32" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                </circle>
                <text x="700" y="106" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">4</text>
                <text x="700" y="150" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="14">Optimización</text>
              </g>
              
              {/* Connection arrows with animation */}
              <g>
                <path d="M135,100 L265,80" stroke="#3b82f6" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)">
                  <animate attributeName="stroke-dasharray" values="0,130;130,0" dur="2s" begin="0.5s" fill="freeze"/>
                </path>
                <path d="M335,80 L465,120" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)">
                  <animate attributeName="stroke-dasharray" values="0,130;130,0" dur="2s" begin="2.5s" fill="freeze"/>
                </path>
                <path d="M535,120 L665,100" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)">
                  <animate attributeName="stroke-dasharray" values="0,130;130,0" dur="2s" begin="4.5s" fill="freeze"/>
                </path>
              </g>
              
              {/* Arrow marker */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
                </marker>
              </defs>
              
              {/* Data flow particles */}
              <g>
                <circle r="4" fill="#3b82f6" opacity="0.7">
                  <animateMotion dur="6s" repeatCount="indefinite">
                    <mpath href="#flowPath"/>
                  </animateMotion>
                </circle>
                <circle r="3" fill="#10b981" opacity="0.7">
                  <animateMotion dur="6s" repeatCount="indefinite" begin="2s">
                    <mpath href="#flowPath"/>
                  </animateMotion>
                </circle>
                <circle r="3" fill="#60a5fa" opacity="0.7">
                  <animateMotion dur="6s" repeatCount="indefinite" begin="4s">
                    <mpath href="#flowPath"/>
                  </animateMotion>
                </circle>
                <path id="flowPath" d="M100,100 C200,50 600,150 700,100" fill="none" opacity="0"/>
              </g>
            </svg>
          </div>
        </div>

        {/* Desktop view with enhanced cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative animate-fade-in group" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm group-hover:scale-105 relative overflow-hidden">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-background z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="relative z-10">{step.number}</span>
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  
                  <CardHeader className="text-center pb-4 pt-12 relative z-10">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 leading-relaxed text-center">
                      {step.description}
                    </p>
                  </CardContent>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced mobile view */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm animate-fade-in group relative overflow-hidden"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Mobile card glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="relative z-10">{step.number}</span>
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
              
              {/* Left accent line for mobile */}
              <div className="absolute left-0 top-0 h-0 w-1 bg-primary group-hover:h-full transition-all duration-500"></div>
            </Card>
          ))}
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