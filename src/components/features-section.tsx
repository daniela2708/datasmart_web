import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  FileText, 
  Brain, 
  Settings, 
  Users, 
  BarChart3 
} from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Soluciones Escalables",
    description: "Nuestras soluciones crecen con tu negocio, adaptándose a tus necesidades actuales y futuras sin necesidad de reinversiones constantes."
  },
  {
    icon: FileText,
    title: "Enfoque Integral",
    description: "Combinamos datos, tecnología y estrategia de negocio para ofrecer soluciones completas que generen valor inmediato y sostenible."
  },
  {
    icon: Brain,
    title: "Procesamiento Inteligente",
    description: "Especialistas en extraer valor de múltiples formatos (texto, imagen, audio, video) mediante tecnologías avanzadas de IA."
  },
  {
    icon: Settings,
    title: "Desarrollo a Medida",
    description: "Creamos aplicaciones interactivas con tecnologías modernas como React/Next.js adaptadas específicamente a tus necesidades y flujos de trabajo."
  },
  {
    icon: Users,
    title: "Acompañamiento Continuo",
    description: "No solo implementamos soluciones, sino que te acompañamos en todo el proceso, asegurando adopción y maximizando el retorno de inversión."
  },
  {
    icon: BarChart3,
    title: "Resultados Medibles",
    description: "Definimos KPIs claros para cada proyecto, garantizando resultados tangibles y un retorno de inversión cuantificable desde el inicio."
  }
]

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">
            POR QUÉ ELEGIRNOS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Nuestro Enfoque Diferenciado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos expertise técnico con un profundo entendimiento del negocio para ofrecer soluciones que generen impacto real y medible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 border-border hover:border-accent/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-accent to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}