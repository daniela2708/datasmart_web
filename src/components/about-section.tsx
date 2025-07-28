import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Target, Users, Play } from "lucide-react"
import { VideoModal, useVideoModal } from "@/components/ui/video-modal"
import React from "react"

export function AboutSection() {
  const { isOpen, modalData, openModal, closeModal } = useVideoModal()

  const handleCardClick = (title: string, description: string) => {
    openModal({
      title,
      description,
      // Aquí puedes agregar la URL del video específico para cada card
      videoUrl: undefined // Se mostrará el placeholder hasta que agregues los videos
    })
  }

  return (
    <section id="about" className="pt-4 pb-20 bg-background relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle">
            <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
            <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              QUIÉNES SOMOS
            </span>
          </div>
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed text-left text-justify">
                  <span className="text-gray-900 font-bold">Data</span><span className="text-teal-500 font-bold">Smart</span> es una empresa especializada en <strong className="text-foreground">analítica de datos, automatización e integración de inteligencia artificial</strong>.
                  Nuestra misión es cerrar brechas de información para una amplia variedad de clientes de todos los sectores e industrias.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-left text-justify">
                  Aprovechamos herramientas existentes (ERP, software contable, CRM, APIs) o construimos sistemas de datos escalables y personalizados.
                </p>
              </div>
            </div>

            {/* Right Column - Enhanced Key Values Grid 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {/* Enfoque Personalizado */}
              <Card 
                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary/40 rounded-xl overflow-hidden"
                onClick={() => handleCardClick('Enfoque Personalizado', 'Descubre cómo adaptamos nuestras soluciones a cada sector e industria')}
              >
                {/* Click indicator */}
                <div className="absolute top-2 right-2 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
                    👆
                  </div>
                </div>
                
                {/* Play icon overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
                
                <CardContent className="p-4 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">Enfoque Personalizado</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Soluciones adaptadas a cada sector e industria</p>
                </CardContent>
              </Card>

              {/* Amplia Experiencia */}
              <Card 
                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary/40 rounded-xl overflow-hidden"
                onClick={() => handleCardClick('Amplia Experiencia', 'Conoce nuestra trayectoria trabajando con clientes de todos los sectores')}
              >
                {/* Click indicator */}
                <div className="absolute top-2 right-2 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
                    👆
                  </div>
                </div>
                
                {/* Play icon overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
                
                <CardContent className="p-4 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">Amplia Experiencia</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Trabajamos con clientes de todos los sectores</p>
                </CardContent>
              </Card>

              {/* Resultados Medibles */}
              <Card 
                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary/40 rounded-xl overflow-hidden"
                onClick={() => handleCardClick('Resultados Medibles', 'Ve ejemplos del impacto tangible en rentabilidad y eficiencia de nuestros clientes')}
              >
                {/* Click indicator */}
                <div className="absolute top-2 right-2 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
                    👆
                  </div>
                </div>
                
                {/* Play icon overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
                
                <CardContent className="p-4 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">Resultados Medibles</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">Impacto tangible en rentabilidad y eficiencia</p>
                </CardContent>
              </Card>

              {/* Tecnología Avanzada */}
              <Card 
                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary/40 rounded-xl overflow-hidden"
                onClick={() => handleCardClick('Tecnología Avanzada', 'Explora nuestras capacidades en IA y automatización de última generación')}
              >
                {/* Click indicator */}
                <div className="absolute top-2 right-2 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
                    👆
                  </div>
                </div>
                
                {/* Play icon overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
                
                <CardContent className="p-4 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300 leading-tight">Tecnología Avanzada</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">IA y automatización de última generación</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ¿POR QUÉ ELEGIRNOS? Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid lg:grid-cols-[2.5fr_1fr] gap-2 items-center mb-12">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle mb-4">
                <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
                <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
                  ¿POR QUÉ ELEGIRNOS?
                </span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Enfoque Diferenciado
              </h2>
              
              <div className="max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Transformamos datos en control, control en decisiones y decisiones en crecimiento. 
                  Diseñamos <strong className="text-foreground">soluciones personalizadas</strong> de acuerdo a tu necesidad específica, 
                  sin venderte lo que no necesitas. No importa si ya tienes un sistema montado o partes desde cero: 
                  <strong className="text-foreground"> si lo tienes, lo mejoramos; si no, lo creamos contigo</strong>.
                </p>
                
                <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                  <p className="text-lg text-gray-700 italic text-center">
                    "Es como tener un GPS inteligente para tu empresa: te guía por el camino más eficiente, 
                    evita los obstáculos y te lleva a tu destino más rápido."
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-64 h-64">
                <img 
                  src="/enfoque_diferenciado.png" 
                  alt="Enfoque Diferenciado - GPS inteligente para empresas"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Dual Benefits Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Con <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">DataSmart</span>, tu negocio gana de dos maneras:
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-base text-gray-500 leading-relaxed">
                Un enfoque integral que maximiza beneficios y minimiza riesgos
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Positive Benefits */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      Aumento de Rentabilidad
                    </h4>
                    <p className="text-gray-600 text-sm">Maximiza oportunidades y eficiencia</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Porque mejoras procesos, tomas decisiones más estratégicas y aprovechas nuevas oportunidades.
                </p>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Procesos optimizados y más eficientes
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Decisiones estratégicas basadas en datos
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Identificación de nuevas oportunidades
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Mayor retorno sobre la inversión
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Risk Prevention */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30 bg-card/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute left-0 top-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      Reducción de Costos y Prevención de Pérdidas
                    </h4>
                    <p className="text-gray-600 text-sm">Protege y optimiza recursos</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Al automatizar tareas, reducir errores, evitar fraudes y tener visibilidad total sobre tu operación.
                </p>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Automatización de tareas repetitivas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Reducción significativa de errores
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Prevención de fraudes y pérdidas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Visibilidad completa de operaciones
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>

      {/* Section Separator */}
      <div className="w-full h-16 bg-primary/10"></div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalData.title}
        description={modalData.description}
        videoUrl={modalData.videoUrl}
      />
    </section>
  )
}