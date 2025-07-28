import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { 
  Calendar, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Building2,
  Rocket,
  Landmark,
  Heart,
  User,
  Sprout,
  CheckCircle,
  Send
} from "lucide-react"

const customerTypes = [
  { id: 'empresa', label: '📦 Empresa privada', icon: Building2 },
  { id: 'startup', label: '🚀 Startup', icon: Rocket },
  { id: 'publica', label: '🏛️ Entidad pública', icon: Landmark },
  { id: 'ong', label: '❤️ ONG/Fundación', icon: Heart },
  { id: 'personal', label: '👤 Marca personal', icon: User },
  { id: 'emprendedor', label: '🌱 Emprendedor en crecimiento', icon: Sprout }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    negocio: '',
    sector: '',
    tipoCliente: '',
    mensaje: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-primary via-primary-dark to-accent relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zm15.66 18.59l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM15.66 1.41l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V1.41zm18.59 18.59l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm0-17.18l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V2.82zM28.24 40l2.83-2.83 1.41 1.41L29.66 40h-1.41zm-12.58 0l2.83-2.83 1.41 1.41L16.07 40h-1.41zm-6.29 0l2.83-2.83 1.41 1.41L9.78 40H8.37zm24.12 0l2.83-2.83 1.41 1.41L33.9 40h-1.41zm-18.83-15.66l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm12.58 0l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm6.29 0l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm-24.12 0l2.83-2.83 1.41 1.41-2.83 2.83H2.82v-1.41zm-9.7 15.66L9.37 34.1l1.41 1.41L7.95 38.34H6.54V36.93zm0-17.77L9.37 16.83l1.41 1.41L7.95 21.07H6.54v-1.41zm0-17.77L9.37-.84l1.41 1.41L7.95 3.4H6.54V1.99z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        {/* Animated orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center px-0 py-0 bg-transparent border-none shadow-none align-middle">
            <span className="block w-[2px] h-4 bg-white mr-2 rounded"></span>
            <span className="text-white font-semibold uppercase tracking-[1.5px] inline-block text-sm">
              COMENCEMOS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mt-6 mb-6">
            ¿Quieres trabajar con datos confiables y decisiones más inteligentes?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Agenda tu asesoría gratuita de 30 minutos y descubre cómo podemos transformar tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                🗓️ Agenda tu asesoría gratuita de 30 minutos
              </CardTitle>
              <p className="text-white/70">
                Analicemos juntos cómo optimizar tu negocio con datos e IA
              </p>
            </CardHeader>
            
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-white">Nombre *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-white">Teléfono</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="negocio" className="text-white">Nombre del negocio *</Label>
                      <Input
                        id="negocio"
                        value={formData.negocio}
                        onChange={(e) => handleInputChange('negocio', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="Nombre de tu empresa"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sector" className="text-white">Sector</Label>
                      <Input
                        id="sector"
                        value={formData.sector}
                        onChange={(e) => handleInputChange('sector', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        placeholder="Ej: Retail, Salud, Manufactura"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tipoCliente" className="text-white">Tipo de cliente *</Label>
                      <Select value={formData.tipoCliente} onValueChange={(value) => handleInputChange('tipoCliente', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Selecciona tu perfil" />
                        </SelectTrigger>
                        <SelectContent>
                          {customerTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-white">¿Cómo podemos ayudarte?</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange('mensaje', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                      placeholder="Cuéntanos sobre tu reto o proyecto..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Agendar ahora
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-white/70">
                    Te contactaremos en las próximas 24 horas para agendar tu asesoría gratuita.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* WhatsApp CTA */}
            <Card className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">📲 WhatsApp Directo</h3>
                    <p className="text-white/80 mb-3">
                      ¿Prefieres escribirnos? Chatea directamente con nuestro equipo
                    </p>
                    <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      Abrir WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-light" />
                  <span className="text-white">+57 (300) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-light" />
                  <span className="text-white">hola@datasmart.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-light" />
                  <span className="text-white">Medellín, Colombia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent-light" />
                  <span className="text-white">Lun - Vie: 8:00 AM - 6:00 PM</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Benefits */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">¿Qué incluye tu asesoría gratuita?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Análisis inicial de tu situación actual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Identificación de oportunidades de mejora</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Roadmap personalizado para tu negocio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Propuesta de valor específica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">Sin compromiso de compra</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Empieza tu transformación digital hoy
            </h3>
            <p className="text-white/80 mb-6">
              Únete a más de 100 empresas que ya están transformando sus datos en ventaja competitiva
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              >
                📞 Agendar asesoría gratuita
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4"
              >
                📱 Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}