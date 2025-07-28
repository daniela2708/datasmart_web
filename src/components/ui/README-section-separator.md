# Section Separator Components

Componentes React para crear separadores ondulados/curvos entre secciones con diferentes colores de fondo.

## Componentes Disponibles

### 1. `SectionSeparator` (Principal)
Separador básico con una curva suave.

### 2. `SectionSeparatorDual` 
Separador con doble onda para mayor profundidad visual.

### 3. `SectionSeparatorSubtle`
Separador con curva sutil para diseños minimalistas.

## Props

```typescript
interface SectionSeparatorProps {
  topColor: string      // Color de la sección superior (hex, rgb, hsl)
  bottomColor: string   // Color de la sección inferior (hex, rgb, hsl)
  height?: number      // Altura del separador en píxeles (default: 100)
  flip?: boolean       // Invertir dirección de la curva (default: false)
  className?: string   // Clases CSS adicionales
}
```

## Uso Básico

```tsx
import { SectionSeparator } from '@/components/ui/section-separator'

// Entre dos secciones
<section className="bg-blue-500">
  <div className="container mx-auto py-20">
    <h2>Sección 1</h2>
  </div>
</section>

<SectionSeparator 
  topColor="#3b82f6" 
  bottomColor="#ffffff" 
/>

<section className="bg-white">
  <div className="container mx-auto py-20">
    <h2>Sección 2</h2>
  </div>
</section>
```

## Ejemplos de Configuración

### Separador básico
```tsx
<SectionSeparator 
  topColor="#3b82f6" 
  bottomColor="#ffffff" 
  height={100}
/>
```

### Separador invertido
```tsx
<SectionSeparator 
  topColor="#ffffff" 
  bottomColor="#10b981" 
  height={120}
  flip={true}
/>
```

### Separador con doble onda
```tsx
<SectionSeparatorDual 
  topColor="#10b981" 
  bottomColor="#1f2937" 
  height={150}
/>
```

### Separador sutil
```tsx
<SectionSeparatorSubtle 
  topColor="#f8fafc" 
  bottomColor="#1f2937" 
  height={60}
/>
```

## Colores Recomendados para DataSmart

### Combinaciones de marca
```tsx
// De blanco a gris oscuro
<SectionSeparator 
  topColor="#ffffff" 
  bottomColor="#0f172a" 
/>

// De gris oscuro a teal
<SectionSeparator 
  topColor="#0f172a" 
  bottomColor="#10b981" 
/>

// De teal a blanco
<SectionSeparator 
  topColor="#10b981" 
  bottomColor="#ffffff" 
/>
```

## Características Técnicas

- **Responsive**: Los separadores se adaptan automáticamente al ancho del contenedor
- **SVG optimizado**: Usa `preserveAspectRatio="none"` para escalado perfecto
- **Performance**: IDs únicos para evitar conflictos entre múltiples instancias
- **Accesibilidad**: Puramente decorativo, no interfiere con lectores de pantalla
- **CSS-friendly**: Soporta clases adicionales para personalización

## Consejos de Uso

1. **Colores exactos**: Usa los colores exactos de tus secciones para una transición perfecta
2. **Altura apropiada**: 60-150px funciona bien para la mayoría de diseños
3. **Alternar direcciones**: Usa `flip={true}` en separadores alternos para variedad visual
4. **Consistencia**: Mantén alturas similares para separadores en la misma página
5. **Contraste**: Asegúrate de que los colores tengan suficiente contraste

## Integración con Tailwind CSS

Los componentes funcionan perfectamente con las clases de Tailwind:

```tsx
// Usando colores de Tailwind
<SectionSeparator 
  topColor="rgb(59 130 246)" // bg-blue-500
  bottomColor="rgb(255 255 255)" // bg-white
/>

// Con clases personalizadas
<SectionSeparator 
  topColor="#3b82f6" 
  bottomColor="#ffffff"
  className="relative z-10"
/>
```

## Troubleshooting

### Problema: Espacios blancos entre separador y secciones
**Solución**: Elimina márgenes de las secciones adyacentes o usa `margin: 0` en el separador.

### Problema: Separador no responsive
**Solución**: Asegúrate de que el contenedor padre tenga `width: 100%`.

### Problema: Colores no coinciden
**Solución**: Usa los valores exactos de color (hex, rgb) que usas en tus secciones.