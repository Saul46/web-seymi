import React from 'react';
import {
  Truck,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  DollarSign,
  Package,
  Drill,
  Handshake,
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
              Sericios Electromecánicos y Metodos Integrales
              </h1>
              <p className="text-xl mb-8">
                Ofrecemos servicios de alta calidad en venta, renta y
                mantenimiento de montacargas para optimizar sus operaciones.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/src/imgs/Logo 1.png"
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
          <img src="/src/imgs/Logo 2.0.jpg"/>
          <img src="/src/imgs/Logo 3.png"/>
          <img src="/src/imgs/Logo 4.0.jpg"/>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Truck className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Venta y Renta de Montacargas
              </h3>
              <p className="text-gray-600">
                Amplia gama de montacargas nuevos y usados para satisfacer sus
                necesidades.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Programas de Mantenimiento Preventivo y Correctivo</h3>
              <p className="text-gray-600">
                Servicio técnico especializado para mantener su equipo en
                óptimas condiciones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <DollarSign className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Venta de Refacciones y Componentes de maquinaria</h3>
              <p className="text-gray-600">
                Los mejores productos al mejor precio y de la mejor calidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mantenimientos Industriales</h3>
              <p className="text-gray-600">
                Soluciones flexibles de alquiler para proyectos temporales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Drill className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3"> Tratamiento y Soluciones para Pisos Industriales</h3>
              <p className="text-gray-600">
              Venta de pintura epóxica 
• Sello epóxico 
• Piso epóxico. Tratamiento y reparación de juntas de concreto

              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Package className="w-12 h-12 text-[#722F37] mb-4" />
              <h3 className="text-xl font-semibold mb-3"> Fabricacion y Colocacion de Racks Industriales</h3>
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
            Nuestras Especialidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Montacargas eléctricos</h3>
            <h3 className="text-xl font-semibold mb-3">Montacargas de combustión</h3>
            <h3 className="text-xl font-semibold mb-3">Patines hidráulicos</h3>
            <h3 className="text-xl font-semibold mb-3">Bateríasasa</h3>
            <h3 className="text-xl font-semibold mb-3">Patinetas eléctricas</h3>
            
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Cargadores</h3>
          <h3 className="text-xl font-semibold mb-3">Cambia pilas</h3>
          <h3 className="text-xl font-semibold mb-3">Rampas</h3>
          <h3 className="text-xl font-semibold mb-3">Cortinas</h3>
          <h3 className="text-xl font-semibold mb-3">Colocación de pisos epóxicos</h3>
          <h3 className="text-xl font-semibold mb-3">Fabricación y colocación de racks industriales</h3>
          </div>
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
              { text: 'Compremetidos', icon: Handshake },
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
                  <span>55-44-21-49-13</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>seymi.rey@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Fresno 22, SAn Jose Puente Grande, 54834 Cuautitlan, México</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horario</h3>
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              
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
