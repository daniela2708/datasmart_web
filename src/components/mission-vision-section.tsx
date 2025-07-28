import { Target, Eye } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Nuestra Esencia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce qué nos motiva y hacia dónde nos dirigimos como empresa líder en transformación digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Misión */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Misión</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:shadow-elegant transition-all duration-300">
              <p className="text-muted-foreground leading-relaxed text-lg">
                En DataSmart, nos comprometemos a impulsar la transformación digital de las empresas mediante 
                soluciones avanzadas de análisis de datos, automatización e inteligencia artificial. Nuestro 
                objetivo es optimizar procesos, reducir costos operativos y potenciar la toma de decisiones 
                basada en datos, brindando herramientas escalables y personalizadas que generen un impacto 
                tangible en la productividad y competitividad de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-full bg-accent/10">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Visión</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:shadow-elegant transition-all duration-300">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser líderes en innovación tecnológica dentro del sector de analítica de datos y automatización, 
                reconocidos por nuestra capacidad de entregar soluciones integrales, adaptables y de alto valor 
                agregado. Aspiramos a ser el partner estratégico de empresas que buscan consolidar una cultura 
                data-driven, utilizando tecnologías de vanguardia para anticiparse a las demandas del mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  )
}