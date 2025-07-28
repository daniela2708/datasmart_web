import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Clock, 
  Eye, 
  Zap, 
  Users, 
  Target,
  Shield,
  AlertTriangle,
  CreditCard,
  DollarSign,
  Activity,
  Search
} from "lucide-react"

const positiveResults = [
  {
    icon: Clock,
    title: "Automatización de tareas",
    description: "menos procesos manuales",
    benefit: "mayor eficiencia y reducción de errores",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Eye,
    title: "Visibilidad en tiempo real",
    description: "sabes qué está pasando",
    benefit: "mejor control operativo y reacción oportuna",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Decisiones más rápidas",
    description: "basadas en datos actualizados",
    benefit: "mejoras estratégicas y competitivas",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "Enfoque del talento",
    description: "en lo que realmente aporta valor",
    benefit: "más innovación y productividad",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Target,
    title: "Escalabilidad",
    description: "crece sin frenar tu operación",
    benefit: "soporte sólido al crecimiento",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: TrendingUp,
    title: "Rentabilidad",
    description: "menos pérdidas, más oportunidades",
    benefit: "mayor retorno sobre la inversión",
    color: "from-pink-500 to-pink-600"
  }
]

const problemsPrevented = [
  {
    icon: Shield,
    title: "Fraudes y pérdidas económicas",
    description: "Detección temprana de anomalías y patrones sospechosos"
  },
  {
    icon: CreditCard,
    title: "Pagos atrasados a proveedores",
    description: "Automatización de recordatorios y seguimiento de cuentas por pagar"
  },
  {
    icon: Search,
    title: "Gastos sin trazabilidad",
    description: "Registro y categorización automática de todas las transacciones"
  },
  {
    icon: Activity,
    title: "Problemas de flujo de caja",
    description: "Predicción y planificación financiera basada en datos históricos"
  },
  {
    icon: AlertTriangle,
    title: "Falta de visibilidad sobre cartera y facturación",
    description: "Dashboards en tiempo real del estado de cobros y ventas"
  }
]

export function ResultsSection() {
  return (
    <section id="results" className="pt-8 pb-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle">
            <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
            <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              RESULTADOS QUE GENERAMOS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-6 mb-6">
            ¿Qué Resultados Generamos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <em>Estos son solo algunos ejemplos de los resultados que entregamos a nuestros clientes.</em>
          </p>
        </div>

        {/* Positive Results Section */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              🔷 Resultados Positivos (Ganancias)
            </h3>
            <p className="text-lg text-gray-600 text-center text-left">
              Beneficios concretos que transforman tu operación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positiveResults.map((result, index) => (
              <Card 
                key={result.title}
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`w-14 h-14 mb-4 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <result.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {result.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    → {result.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-sm text-accent font-medium">
                    <em>{result.benefit}</em>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Problems Prevention Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              🔴 Problemas que Prevenimos
            </h3>
            <p className="text-lg text-gray-600 text-center text-left">
              Protege tu negocio de riesgos y pérdidas costosas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemsPrevented.map((problem, index) => (
              <Card 
                key={problem.title}
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-border/50 hover:border-red-500/30 bg-card/80 backdrop-blur-sm relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute left-0 top-0 w-1 h-0 bg-red-500 group-hover:h-full transition-all duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="w-14 h-14 mb-4 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <problem.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-red-600 transition-colors duration-300">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🎥 Video Comparativo: "Tu negocio con y sin automatización"
            </h3>
            <p className="text-gray-600 mb-8">
              Descubre la diferencia que pueden hacer nuestras soluciones en tu operación diaria
            </p>
            
            <div className="relative p-8 rounded-xl bg-primary/5 border border-primary/20">
              <div className="w-full h-80 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted mb-6">
                <div className="text-center">
                  <DollarSign className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Video comparativo "Antes vs. Después"</p>
                  <p className="text-sm text-gray-600 mt-2">(Próximamente)</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-4">❌ SIN Automatización:</h4>
                  <ul className="space-y-2 text-sm text-red-600 dark:text-red-300">
                    <li>• Procesos manuales lentos y propensos a errores</li>
                    <li>• Falta de visibilidad sobre la operación</li>
                    <li>• Decisiones basadas en intuición</li>
                    <li>• Pérdidas de tiempo en tareas repetitivas</li>
                    <li>• Riesgos de fraude no detectados</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-4">✅ CON Data Smart:</h4>
                  <ul className="space-y-2 text-sm text-green-600 dark:text-green-300">
                    <li>• Automatización eficiente y confiable</li>
                    <li>• Visibilidad total en tiempo real</li>
                    <li>• Decisiones respaldadas por datos</li>
                    <li>• Equipo enfocado en estrategia</li>
                    <li>• Protección proactiva contra riesgos</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg"
                  className="bg-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
                >
                  📞 Quiero ver estos resultados en mi negocio
                </Button>
              </div>
            </div>
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