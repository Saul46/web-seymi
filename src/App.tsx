import React from 'react';
import {
  Truck,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-[#722F37] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Soluciones Profesionales en Montacargas
              </h1>
              <p className="text-xl mb-8">
                Ofrecemos servicios de alta calidad en venta, renta y
                mantenimiento de montacargas para optimizar sus operaciones.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1635400197388-1273f37c4771?auto=format&fit=crop&q=80"
                alt="Montacargas en acción"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#722F37]">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Truck className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Venta de Montacargas
              </h3>
              <p className="text-gray-600">
                Amplia gama de montacargas nuevos y usados para satisfacer sus
                necesidades.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mantenimiento</h3>
              <p className="text-gray-600">
                Servicio técnico especializado para mantener su equipo en
                óptimas condiciones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Renta por Hora</h3>
              <p className="text-gray-600">
                Soluciones flexibles de alquiler para proyectos temporales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#722F37]">
            Nuestra Flota
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1628506891563-73cc38f6f0ae?auto=format&fit=crop&q=80"
              alt="Montacargas 1"
              className="rounded-lg shadow-md hover:shadow-xl transition duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1605559911160-a3d95d213904?auto=format&fit=crop&q=80"
              alt="Montacargas 2"
              className="rounded-lg shadow-md hover:shadow-xl transition duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1504855101244-34edfbd4b861?auto=format&fit=crop&q=80"
              alt="Montacargas 3"
              className="rounded-lg shadow-md hover:shadow-xl transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#722F37]">
            ¿Por qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { text: 'Personal Certificado', icon: CheckCircle },
              { text: 'Servicio 24/7', icon: Clock },
              { text: 'Cobertura Nacional', icon: MapPin },
              { text: 'Garantía de Calidad', icon: Shield },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow"
              >
                <feature.icon className="w-6 h-6 text-[#722F37]" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-[#722F37] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+52 (555) 555-5555</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@montacargas.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horario</h3>
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 2:00 PM</p>
              <p>Servicio de emergencia 24/7</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <p>
                Encuentra nuestras últimas actualizaciones y ofertas en nuestras
                redes sociales.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
