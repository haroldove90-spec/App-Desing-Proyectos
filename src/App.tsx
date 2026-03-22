/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  Palette, 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Database, 
  Cpu, 
  MapPin, 
  Phone, 
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react';

const SLIDES = [
  {
    title: "Innovación Digital con Propósito",
    subtitle: "Más de 25 años transformando ideas en realidades tecnológicas.",
    cta: "Nuestros Servicios"
  },
  {
    title: "Diseño que Impacta",
    subtitle: "Creamos experiencias visuales únicas que posicionan tu marca en el mercado.",
    cta: "Ver Portafolio"
  },
  {
    title: "Soluciones ERP y CRM a Medida",
    subtitle: "Optimizamos tus procesos de negocio con software de alta gama.",
    cta: "Contáctanos"
  }
];

const SERVICES = [
  {
    title: "Diseño Gráfico",
    description: "Comunicación visual creativa que transmite la esencia de tu marca.",
    icon: Palette
  },
  {
    title: "Logos",
    description: "Identidad corporativa sólida y memorable diseñada para perdurar.",
    icon: Layout
  },
  {
    title: "Web",
    description: "Sitios web modernos, rápidos y optimizados para todos los dispositivos.",
    icon: Globe
  },
  {
    title: "E-commerce",
    description: "Tiendas en línea robustas diseñadas para maximizar tus ventas.",
    icon: ShoppingCart
  },
  {
    title: "Apps",
    description: "Desarrollo de aplicaciones móviles nativas y multiplataforma.",
    icon: Smartphone
  },
  {
    title: "CRM",
    description: "Gestión de relaciones con clientes para potenciar tu fuerza de ventas.",
    icon: Database
  },
  {
    title: "ERP",
    description: "Sistemas de planificación de recursos empresariales integrales.",
    icon: Cpu
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-brand-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
              <span className="text-brand-dark font-bold text-xl">AD</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">App Design</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium hover:text-brand-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/5624222449" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent/10 text-brand-accent px-5 py-2 rounded-full border border-brand-accent/20 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 text-sm font-semibold flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-navy border-b border-white/5 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Slider */}
      <section id="inicio" className="relative h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
            alt="Tech Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block"
              >
                App Design — 25 Años de Excelencia
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              >
                {SLIDES[currentSlide].title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-brand-text mb-10 leading-relaxed"
              >
                {SLIDES[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-brand-accent text-brand-dark px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all flex items-center gap-2 group">
                  {SLIDES[currentSlide].cta}
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-brand-accent/30 text-brand-accent px-8 py-4 rounded-lg font-bold hover:bg-brand-accent/5 transition-all">
                  Saber Más
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 right-6 md:right-12 z-30 flex items-center gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <ChevronLeft className="text-white" />
          </button>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => ( i === currentSlide ? (
              <div key={i} className="w-8 h-1 bg-brand-accent rounded-full" />
            ) : (
              <div key={i} className="w-2 h-1 bg-white/20 rounded-full" />
            )))}
          </div>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestros Servicios</h2>
            <p className="text-brand-text max-w-2xl mx-auto text-lg">
              Ofrecemos soluciones integrales de diseño y desarrollo tecnológico para empresas que buscan liderar en la era digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-accent/30 transition-all group hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-brand-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                  <service.icon className="text-brand-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-text leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Liderando la industria con <span className="text-brand-accent">25 años</span> de trayectoria.
            </h2>
            <p className="text-brand-text text-lg mb-8 leading-relaxed">
              Desde nuestros inicios, nos hemos enfocado en la calidad técnica y la innovación constante. No solo construimos software; diseñamos el futuro de tu negocio.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider text-brand-accent">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">250+</div>
                <div className="text-sm uppercase tracking-wider text-brand-accent">Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-dark rounded-3xl p-8 md:p-16 border border-white/5 flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8">¿Listo para empezar?</h2>
              <p className="text-brand-text text-lg mb-12">
                Estamos aquí para ayudarte a llevar tu proyecto al siguiente nivel. Contáctanos hoy mismo.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Ubicación</h4>
                    <p className="text-brand-text">Alamo No. 8, Los Reyes Iztacala, Tlalnepantla.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Teléfono / WhatsApp</h4>
                    <p className="text-brand-text">5624222449</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="w-full bg-brand-navy border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-brand-navy border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Asunto" 
                  className="w-full bg-brand-navy border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                />
                <textarea 
                  placeholder="Mensaje" 
                  rows={4}
                  className="w-full bg-brand-navy border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                ></textarea>
                <button className="w-full bg-brand-accent text-brand-dark font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center">
              <span className="text-brand-dark font-bold">AD</span>
            </div>
            <span className="font-bold text-white">App Design</span>
          </div>
          
          <p className="text-sm text-brand-text">
            © 2026 App Design. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-brand-text hover:text-brand-accent transition-colors">Facebook</a>
            <a href="#" className="text-brand-text hover:text-brand-accent transition-colors">LinkedIn</a>
            <a href="#" className="text-brand-text hover:text-brand-accent transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
