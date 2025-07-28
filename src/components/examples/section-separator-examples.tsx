import React from 'react'
import { SectionSeparator, SectionSeparatorDual, SectionSeparatorSubtle } from '../ui/section-separator'

export function SectionSeparatorExamples() {
  return (
    <div className="w-full">
      {/* Example 1: Basic wave separator */}
      <section className="bg-blue-500 text-white">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Sección con Fondo Azul</h2>
          <p className="text-xl opacity-90">Contenido de la primera sección</p>
        </div>
      </section>

      <SectionSeparator 
        topColor="#3b82f6" 
        bottomColor="#ffffff" 
        height={100}
      />

      <section className="bg-white text-gray-900">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Sección con Fondo Blanco</h2>
          <p className="text-xl text-gray-600">Contenido de la segunda sección</p>
        </div>
      </section>

      {/* Example 2: Flipped wave separator */}
      <SectionSeparator 
        topColor="#ffffff" 
        bottomColor="#10b981" 
        height={120}
        flip={true}
      />

      <section className="bg-green-500 text-white">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Sección con Fondo Verde</h2>
          <p className="text-xl opacity-90">Separador con flip=true</p>
        </div>
      </section>

      {/* Example 3: Dual wave separator */}
      <SectionSeparatorDual 
        topColor="#10b981" 
        bottomColor="#1f2937" 
        height={150}
      />

      <section className="bg-gray-800 text-white">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Sección con Separador Dual</h2>
          <p className="text-xl opacity-90">Usando SectionSeparatorDual para más profundidad</p>
        </div>
      </section>

      {/* Example 4: Subtle separator */}
      <SectionSeparatorSubtle 
        topColor="#1f2937" 
        bottomColor="#f8fafc" 
        height={80}
        flip={true}
      />

      <section className="bg-slate-50 text-gray-900">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Sección con Separador Sutil</h2>
          <p className="text-xl text-gray-600">Usando SectionSeparatorSubtle para transiciones más suaves</p>
        </div>
      </section>

      {/* Example 5: DataSmart brand colors */}
      <SectionSeparator 
        topColor="#f8fafc" 
        bottomColor="#0f172a" 
        height={100}
      />

      <section className="bg-slate-900 text-white">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Data</span>
            <span className="text-teal-400">Smart</span> - Separador de Marca
          </h2>
          <p className="text-xl opacity-90">Usando los colores de la marca DataSmart</p>
        </div>
      </section>

      <SectionSeparatorDual 
        topColor="#0f172a" 
        bottomColor="#10b981" 
        height={120}
        flip={true}
      />

      <section className="bg-teal-500 text-white">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Sección Final</h2>
          <p className="text-xl opacity-90">Demostración completa de separadores ondulados</p>
        </div>
      </section>
    </div>
  )
}

// Código de ejemplo para documentación
export const USAGE_EXAMPLES = `
// Ejemplo básico
<SectionSeparator 
  topColor="#3b82f6" 
  bottomColor="#ffffff" 
/>

// Con altura personalizada
<SectionSeparator 
  topColor="#10b981" 
  bottomColor="#1f2937" 
  height={150}
/>

// Con dirección invertida
<SectionSeparator 
  topColor="#ffffff" 
  bottomColor="#10b981" 
  flip={true}
/>

// Separador dual para más profundidad
<SectionSeparatorDual 
  topColor="#3b82f6" 
  bottomColor="#ffffff" 
  height={120}
/>

// Separador sutil para diseños minimalistas
<SectionSeparatorSubtle 
  topColor="#f8fafc" 
  bottomColor="#1f2937" 
  height={60}
/>

// Con clase CSS personalizada
<SectionSeparator 
  topColor="#10b981" 
  bottomColor="#ffffff" 
  className="my-custom-class"
/>
`