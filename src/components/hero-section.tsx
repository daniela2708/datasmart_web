
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Brain, Database, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-8">
        {/* Content */}
        <div className="space-y-8 z-10">
          {/* Badge con línea vertical verde tipo subtítulo, alineado verticalmente y más pequeño */}
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle">
            <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
            <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              ANÁLISIS DE DATOS, AUTOMATIZACIÓN E IA
            </span>
          </div>

          {/* Main heading with enhanced styling */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Transformamos tus datos en <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent relative">decisiones inteligentes</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Ofrecemos soluciones personalizadas de análisis de datos, automatización e integración con inteligencia artificial 
            adaptadas a tu negocio, ayudándote a <strong className="text-foreground">optimizar procesos, reducir costos y aumentar rentabilidad</strong> a través de 
            mejorar la toma de decisiones con información confiable y actual.
          </p>

          {/* CTA Buttons with enhanced styling */}
          
          {/* Scheduling Form Call-out */}
          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">🗓️ Asesoría gratuita de 30 minutos</h3>
                <p className="text-gray-600 text-sm">Analicemos juntos cómo optimizar tu negocio con datos e IA</p>
              </div>
              <Button className="bg-primary text-white hover:scale-105 transition-all duration-300">
                Agendar ahora
              </Button>
            </div>
          </div>
        </div>

        {/* Video and Data Visualization */}
        <div className="relative animate-fade-in flex justify-center" style={{ animationDelay: '0.8s' }}>
          <div className="relative w-full max-w-lg">
            {/* Video */}
            <div className="w-full h-80 rounded-xl overflow-hidden mb-8 shadow-lg">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/intro_data_smart.mp4" type="video/mp4" />
                <div className="w-full h-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium text-center">Video de Presentación</p>
                    <p className="text-sm text-gray-600 text-center">Tu navegador no soporta video</p>
                  </div>
                </div>
              </video>
            </div>

            {/* Data Visualization - Icons, Bars, Icons */}
            <div className="flex items-center justify-center gap-6">
              {/* First two circular icons */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div className="p-3 rounded-full bg-accent/10 backdrop-blur-sm">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Dynamic bar chart */}
              <div className="flex items-end gap-2">
                <div 
                  className="w-6 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded shadow-lg" 
                  style={{ 
                    animationDelay: '0s',
                    animation: 'barBounce 3s ease-in-out infinite',
                    transformOrigin: 'bottom'
                  }}
                ></div>
                <div 
                  className="w-6 h-8 bg-gradient-to-t from-green-600 to-green-400 rounded shadow-lg" 
                  style={{ 
                    animationDelay: '0.75s',
                    animation: 'barBounce 3s ease-in-out infinite',
                    transformOrigin: 'bottom'
                  }}
                ></div>
                <div 
                  className="w-6 h-16 bg-gradient-to-t from-blue-500 to-blue-300 rounded shadow-lg" 
                  style={{ 
                    animationDelay: '1.5s',
                    animation: 'barBounce 3s ease-in-out infinite',
                    transformOrigin: 'bottom'
                  }}
                ></div>
                <div 
                  className="w-6 h-10 bg-gradient-to-t from-green-500 to-green-300 rounded shadow-lg" 
                  style={{ 
                    animationDelay: '2.25s',
                    animation: 'barBounce 3s ease-in-out infinite',
                    transformOrigin: 'bottom'
                  }}
                ></div>
              </div>

              <style>{`
                @keyframes barBounce {
                  0%, 100% {
                    transform: scaleY(0.8);
                  }
                  50% {
                    transform: scaleY(1.3);
                  }
                }
              `}</style>

              {/* Last two circular icons */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="p-3 rounded-full bg-green-500/10 backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>

      {/* Section Separator */}
      <div className="relative py-2">
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