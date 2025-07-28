import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$500",
    period: "/proyecto",
    description: "Soluciones iniciales para pequeñas empresas que buscan comenzar a aprovechar sus datos.",
    features: [
      "Automatización de informes básicos",
      "Dashboard de visualización simple", 
      "Limpieza y estructuración de datos",
      "1 fuente de datos",
      "Soporte por email"
    ],
    popular: false
  },
  {
    name: "Estándar",
    price: "$1,500",
    period: "/proyecto", 
    description: "La opción más popular para empresas en crecimiento con necesidades más complejas.",
    features: [
      "Automatización de procesos complejos",
      "Dashboards interactivos personalizados",
      "Análisis predictivo básico",
      "Hasta 3 fuentes de datos",
      "Soporte prioritario"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "$5,000+",
    period: "/proyecto",
    description: "Para empresas que requieren soluciones avanzadas y personalizadas a medida.",
    features: [
      "Automatización de procesos complejos",
      "Plataforma completa de visualización",
      "Análisis predictivo avanzado con IA",
      "Integración con múltiples fuentes",
      "Soporte dedicado 24/7"
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="precios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle">
            <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
            <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              PLANES ADAPTADOS A TUS NECESIDADES
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Nuestros Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos diferentes niveles de servicio para adaptarnos a las necesidades y presupuestos específicos de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in ${
                plan.popular 
                  ? 'border-primary bg-primary/5 scale-105' 
                  : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-primary hover:shadow-lg hover:scale-105' 
                      : 'hover:bg-primary/90'
                  }`}
                >
                  Contactar
                </Button>
              </CardContent>
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