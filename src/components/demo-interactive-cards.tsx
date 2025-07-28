import React from 'react'
import { AboutSection } from './about-section'

/**
 * Componente de demostración para mostrar las nuevas cards interactivas
 * con videos en pop-up estilo Genially
 */
export function DemoInteractiveCards() {
  return (
    <div className="w-full">
      {/* Header de demostración */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle mb-6">
            <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
            <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              CARDS INTERACTIVAS CON VIDEO
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Nueva Funcionalidad: Cards con Videos Pop-up
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hemos mejorado la sección "QUIÉNES SOMOS" con cards estéticas que incluyen 
            indicadores visuales de interactividad y videos explicativos en modal.
          </p>
          
          {/* Instrucciones */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Nuevas Características</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cards con Esquinas Redondeadas</h3>
                    <p className="text-gray-600 text-sm">Diseño moderno y estético con bordes rounded-2xl</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Indicador de Mano 👆</h3>
                    <p className="text-gray-600 text-sm">Aparece automáticamente al llegar a la sección (estilo Genially)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Animaciones Suaves</h3>
                    <p className="text-gray-600 text-sm">Efectos de hover, scale y pulse para mejor UX</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pop-up de Video</h3>
                    <p className="text-gray-600 text-sm">Modal profesional con placeholder para videos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Responsive Design</h3>
                    <p className="text-gray-600 text-sm">Adaptado para móviles y tablets</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Preparado para Videos</h3>
                    <p className="text-gray-600 text-sm">Solo necesitas agregar las URLs de los videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección QUIÉNES SOMOS mejorada */}
      <AboutSection />

      {/* Guía de implementación */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📋 Cómo Agregar los Videos
            </h2>
            <p className="text-lg text-gray-600">
              Pasos simples para completar la funcionalidad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Paso 1: Agregar URLs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Agregar URLs de Video</h3>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">En about-section.tsx, línea ~45:</p>
                <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`const handleCardClick = (title: string, description: string, videoUrl?: string) => {
  openModal({
    title,
    description,
    videoUrl: videoUrl || undefined // Agregar URL aquí
  })
}`}
                </pre>
              </div>
              
              <p className="text-gray-600 text-sm">
                Reemplaza <code className="bg-gray-200 px-1 rounded">videoUrl: undefined</code> con las URLs de tus videos de YouTube, Vimeo o archivos MP4.
              </p>
            </div>

            {/* Paso 2: Configurar videos específicos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Configurar Videos por Card</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-medium text-blue-900">📱 Enfoque Personalizado</p>
                  <p className="text-blue-700 text-sm">Video sobre metodología personalizada</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-medium text-green-900">👥 Amplia Experiencia</p>
                  <p className="text-green-700 text-sm">Casos de éxito en diferentes sectores</p>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-900">📊 Resultados Medibles</p>
                  <p className="text-purple-700 text-sm">Métricas y ROI de proyectos</p>
                </div>
                
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="font-medium text-orange-900">🤖 Tecnología Avanzada</p>
                  <p className="text-orange-700 text-sm">Demo de IA y automatización</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ejemplo de código */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">📝 Ejemplo de Implementación</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// Ejemplo de cómo agregar URLs específicas para cada card
onClick={() => handleCardClick(
  'Enfoque Personalizado', 
  'Descubre cómo adaptamos nuestras soluciones a cada sector e industria',
  'https://www.youtube.com/watch?v=VIDEO_ID' // Tu URL de video aquí
)}

// Para archivos MP4 locales:
onClick={() => handleCardClick(
  'Tecnología Avanzada', 
  'Explora nuestras capacidades en IA y automatización',
  '/videos/tecnologia-avanzada.mp4' // Ruta a tu archivo de video
)}`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Constante con los videos sugeridos para cada card
export const SUGGESTED_VIDEOS = {
  enfoquePersonalizado: {
    title: 'Enfoque Personalizado',
    description: 'Video mostrando cómo DataSmart adapta soluciones por industria',
    duration: '2-3 minutos',
    content: [
      'Proceso de análisis inicial por sector',
      'Ejemplos de personalización por industria',
      'Metodología de adaptación'
    ]
  },
  ampliaExperiencia: {
    title: 'Amplia Experiencia',
    description: 'Casos de éxito en diferentes sectores',
    duration: '3-4 minutos',
    content: [
      'Timeline de proyectos exitosos',
      'Testimonios de clientes',
      'Diversidad de sectores atendidos'
    ]
  },
  resultadosMedibles: {
    title: 'Resultados Medibles',
    description: 'Métricas y ROI de proyectos implementados',
    duration: '2-3 minutos',
    content: [
      'KPIs antes y después',
      'Gráficos de mejora en eficiencia',
      'Testimonios con números específicos'
    ]
  },
  tecnologiaAvanzada: {
    title: 'Tecnología Avanzada',
    description: 'Demo en vivo de IA y automatización',
    duration: '3-5 minutos',
    content: [
      'Demo de dashboard en tiempo real',
      'Ejemplo de automatización',
      'Capacidades de IA explicadas'
    ]
  }
}