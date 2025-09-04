import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProcessTimeline from '@/components/ui/ProcessTimeline';
import SpecialtyCards from '@/components/ui/SpecialtyCards';
import Values from '@/components/ui/Values';

const AboutSection: React.FC = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero About */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-dark rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Heitor Barros - Tattoo Artist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-xl p-6 border-l-4 border-gold"
              >
                <div className="text-center">
                  <div className="font-bebas text-3xl text-primary">5+</div>
                  <div className="font-inter text-sm text-secondary">Anos de Experiência</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-bebas text-4xl md:text-5xl lg:text-6xl text-primary mb-6"
              >
                SOBRE 
                <span className="text-gradient block">HEITOR BARROS</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 text-secondary font-inter leading-relaxed"
              >
                <p className="text-lg">
                  Há mais de <span className="text-gold font-semibold">5 anos</span> transformando 
                  pele em arte no Porto, Portugal. Especializado em três estilos únicos que 
                  capturam a essência e personalidade de cada cliente.
                </p>
                
                <p>
                  Minha jornada começou com a fascinação pela <span className="text-gold font-semibold">
                  arte oriental tradicional japonesa</span>, evoluindo para explorar o 
                  <span className="text-gold font-semibold"> micro-realismo</span> e o 
                  <span className="text-gold font-semibold"> surrealismo</span>. 
                  Cada tatuagem é uma colaboração única entre artista e cliente.
                </p>

                <p>
                  Acredito que uma tatuagem deve contar uma história, refletir uma emoção 
                  e durar para sempre. Por isso, dedico tempo para entender cada projeto 
                  e criar algo verdadeiramente especial.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={handleContactClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-8 py-4"
              >
                Conversar Comigo
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-inter font-medium px-8 py-4"
              >
                Ver Meu Trabalho
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Specialties */}
        <div className="mb-20">
          <SpecialtyCards />
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <ProcessTimeline />
        </div>

        {/* Values */}
        <div>
          <Values />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
