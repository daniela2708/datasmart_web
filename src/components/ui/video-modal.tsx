import React from 'react'
import { X, Play } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  videoUrl?: string
  children?: React.ReactNode
}

export function VideoModal({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  videoUrl,
  children 
}: VideoModalProps) {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-gray-600 mt-1">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Video Content */}
        <div className="p-6">
          {videoUrl ? (
            <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                src={videoUrl}
              >
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          ) : (
            <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Placeholder</h3>
                <p className="text-gray-600 max-w-md">
                  Aquí se cargará el video específico sobre {title.toLowerCase()}
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    📹 <strong>Para el desarrollador:</strong> Reemplaza este contenido con el componente de video real
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Custom content */}
          {children && (
            <div className="mt-6">
              {children}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              💡 <strong>Tip:</strong> Este video te ayudará a entender mejor cómo DataSmart implementa este aspecto en proyectos reales.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Hook para manejar el scroll y escape key
export function useVideoModal() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [modalData, setModalData] = React.useState<{
    title: string
    description?: string
    videoUrl?: string
  }>({
    title: ''
  })

  const openModal = (data: typeof modalData) => {
    setModalData(data)
    setIsOpen(true)
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalData({ title: '' })
    // Restaurar scroll del body
    document.body.style.overflow = 'auto'
  }

  // Efecto para manejar la tecla Escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return {
    isOpen,
    modalData,
    openModal,
    closeModal
  }
}