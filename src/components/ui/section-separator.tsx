import React from 'react'

interface SectionSeparatorProps {
  topColor: string
  bottomColor: string
  height?: number
  flip?: boolean
  className?: string
}

export function SectionSeparator({ 
  topColor, 
  bottomColor, 
  height = 100, 
  flip = false,
  className = ""
}: SectionSeparatorProps) {
  const waveId = `wave-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className={`relative w-full ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 1200 ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${waveId}-gradient`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        
        {/* Background fill with bottom color */}
        <rect width="100%" height="100%" fill={bottomColor} />
        
        {/* Wave shape */}
        <path
          d={flip 
            ? `M0,${height} L0,${height * 0.6} C300,${height * 0.2} 900,${height * 0.8} 1200,${height * 0.4} L1200,${height} Z`
            : `M0,0 L0,${height * 0.4} C300,${height * 0.8} 900,${height * 0.2} 1200,${height * 0.6} L1200,0 Z`
          }
          fill={topColor}
        />
        
        {/* Optional subtle gradient overlay for smooth transition */}
        <path
          d={flip 
            ? `M0,${height} L0,${height * 0.6} C300,${height * 0.2} 900,${height * 0.8} 1200,${height * 0.4} L1200,${height} Z`
            : `M0,0 L0,${height * 0.4} C300,${height * 0.8} 900,${height * 0.2} 1200,${height * 0.6} L1200,0 Z`
          }
          fill={`url(#${waveId}-gradient)`}
          opacity="0.1"
        />
      </svg>
    </div>
  )
}

// Alternative wave patterns for variety
export function SectionSeparatorDual({ 
  topColor, 
  bottomColor, 
  height = 120, 
  flip = false,
  className = ""
}: SectionSeparatorProps) {
  const waveId = `dual-wave-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className={`relative w-full ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 1200 ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill={bottomColor} />
        
        {/* First wave layer */}
        <path
          d={flip 
            ? `M0,${height} L0,${height * 0.7} C200,${height * 0.3} 400,${height * 0.9} 600,${height * 0.5} C800,${height * 0.1} 1000,${height * 0.7} 1200,${height * 0.3} L1200,${height} Z`
            : `M0,0 L0,${height * 0.3} C200,${height * 0.7} 400,${height * 0.1} 600,${height * 0.5} C800,${height * 0.9} 1000,${height * 0.3} 1200,${height * 0.7} L1200,0 Z`
          }
          fill={topColor}
          opacity="0.8"
        />
        
        {/* Second wave layer for depth */}
        <path
          d={flip 
            ? `M0,${height} L0,${height * 0.8} C300,${height * 0.4} 600,${height * 0.6} 900,${height * 0.2} C1050,${height * 0.1} 1200,${height * 0.5} 1200,${height} Z`
            : `M0,0 L0,${height * 0.2} C150,${height * 0.5} 300,${height * 0.8} 600,${height * 0.4} C900,${height * 0.6} 1200,${height * 0.2} 1200,0 Z`
          }
          fill={topColor}
        />
      </svg>
    </div>
  )
}

// Subtle curve separator for minimal designs
export function SectionSeparatorSubtle({ 
  topColor, 
  bottomColor, 
  height = 60, 
  flip = false,
  className = ""
}: SectionSeparatorProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 1200 ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill={bottomColor} />
        
        <path
          d={flip 
            ? `M0,${height} L0,${height * 0.5} Q600,${height * 0.1} 1200,${height * 0.5} L1200,${height} Z`
            : `M0,0 L0,${height * 0.5} Q600,${height * 0.9} 1200,${height * 0.5} L1200,0 Z`
          }
          fill={topColor}
        />
      </svg>
    </div>
  )
}