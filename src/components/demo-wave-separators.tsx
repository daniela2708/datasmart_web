import React from 'react'
import { SectionSeparator, SectionSeparatorDual, SectionSeparatorSubtle } from './ui/section-separator'

/**
 * Componente de demostración que muestra cómo reemplazar los separadores actuales
 * con los nuevos separadores ondulados
 */
export function DemoWaveSeparators() {
  return (
    <div className="w-full">
      {/* Hero Section con separador ondulado */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle mb-6">
              <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
              <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
                DEMO DE SEPARADORES ONDULADOS
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Separadores con Formas Onduladas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reemplaza los separadores actuales con hermosas formas onduladas que conectan perfectamente las secciones
            </p>
          </div>
        </div>
      </section>

      {/* Separador ondulado básico */}
      <SectionSeparator 
        topColor="#ffffff" 
        bottomColor="#f8fafc" 
        height={100}
      />

      {/* About Section */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle mb-6">
              <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
              <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
                SEPARADOR BÁSICO
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sección con Fondo Gris Claro
            </h2>
            <p className="text-lg text-gray-600">
              Este separador usa una curva suave para la transición
            </p>
          </div>
        </div>
      </section>

      {/* Separador dual ondulado */}
      <SectionSeparatorDual 
        topColor="#f8fafc" 
        bottomColor="#0f172a" 
        height={120}
        flip={true}
      />

      {/* Dark Section */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle mb-6">
              <span className="block w-[2px] h-4 bg-[#10b981] mr-2 rounded"></span>
              <span className="text-[#10b981] font-semibold uppercase tracking-[1.5px] inline-block text-sm">
                SEPARADOR DUAL
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Sección con Fondo Oscuro
            </h2>
            <p className="text-lg text-gray-300">
              El separador dual crea mayor profundidad visual con dos capas de ondas
            </p>
          </div>
        </div>
      </section>

      {/* Separador sutil */}
      <SectionSeparatorSubtle 
        topColor="#0f172a" 
        bottomColor="#10b981" 
        height={80}
      />

      {/* DataSmart Brand Section */}
      <section className="bg-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle mb-6">
              <span className="block w-[2px] h-4 bg-white mr-2 rounded"></span>
              <span className="text-white font-semibold uppercase tracking-[1.5px] inline-block text-sm">
                SEPARADOR SUTIL
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">Data</span>
              <span className="text-slate-900">Smart</span> - Colores de Marca
            </h2>
            <p className="text-lg text-white/90">
              El separador sutil es perfecto para transiciones más suaves
            </p>
          </div>
        </div>
      </section>

      {/* Separador final */}
      <SectionSeparator 
        topColor="#10b981" 
        bottomColor="#ffffff" 
        height={100}
        flip={true}
      />

      {/* Final Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Cómo Implementar los Separadores?
            </h2>
            <div className="max-w-4xl mx-auto text-left">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Paso 1: Importar el componente</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import { SectionSeparator } from '@/components/ui/section-separator'`}
                </pre>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Paso 2: Reemplazar separadores actuales</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// Antes (separador actual con puntos)
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

// Después (separador ondulado)
<SectionSeparator 
  topColor="#ffffff" 
  bottomColor="#f8fafc" 
  height={100}
/>`}
                </pre>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Paso 3: Configurar colores</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>topColor:</strong> Color exacto de la sección superior</li>
                  <li>• <strong>bottomColor:</strong> Color exacto de la sección inferior</li>
                  <li>• <strong>height:</strong> Altura del separador (60-150px recomendado)</li>
                  <li>• <strong>flip:</strong> true para invertir la dirección de la curva</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Constantes con colores comunes de DataSmart para fácil referencia
export const DATASMART_COLORS = {
  white: '#ffffff',
  slate50: '#f8fafc',
  slate900: '#0f172a',
  teal500: '#10b981',
  gray50: '#f9fafb',
  gray900: '#111827'
}

// Configuraciones predefinidas para DataSmart
export const DATASMART_SEPARATORS = {
  whiteToGray: {
    topColor: DATASMART_COLORS.white,
    bottomColor: DATASMART_COLORS.slate50,
    height: 100
  },
  grayToDark: {
    topColor: DATASMART_COLORS.slate50,
    bottomColor: DATASMART_COLORS.slate900,
    height: 120,
    flip: true
  },
  darkToTeal: {
    topColor: DATASMART_COLORS.slate900,
    bottomColor: DATASMART_COLORS.teal500,
    height: 100
  },
  tealToWhite: {
    topColor: DATASMART_COLORS.teal500,
    bottomColor: DATASMART_COLORS.white,
    height: 100,
    flip: true
  }
}