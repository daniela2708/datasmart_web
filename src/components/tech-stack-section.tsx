import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "SQL", icon: "🗃️" },
  { name: "Next.js", icon: "⏭️" },
  { name: "Tableau", icon: "📊" },
  { name: "Power BI", icon: "📈" },
  { name: "MongoDB", icon: "🍃" }
]

export function TechStackSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">
            HERRAMIENTAS Y TECNOLOGÍAS
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Stack Tecnológico
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Utilizamos tecnologías de vanguardia para desarrollar soluciones efectivas y escalables.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name}
              className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}