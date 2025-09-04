import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ImageSlider from '@/components/ui/ImageSlider';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import Statistics from '@/components/ui/Statistics';
import { heroSlides } from '@/data/heroSlides';

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "351912345678";
    const message = "Olá! Gostaria de agendar uma consulta para tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePortfolioClick = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-dark overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20 pb-16">
          
          {/* Left Column - Content */}
          <div className="text-white order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none mb-6">
                <span className="block">HEITOR</span>
                <span className="block text-gradient">BARROS</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="font-inter text-xl lg:text-2xl text-accent mb-4">
                Tattoo Artist & Visual Art
              </p>
              <p className="font-inter text-lg text-secondary/80 max-w-lg leading-relaxed">
                Especialista em <span className="text-gold">oriental tradicional japonês</span>, 
                <span className="text-gold"> surrealismo</span> e 
                <span className="text-gold"> micro-realismo</span>. 
                Transformando pele em arte no Porto, Portugal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gold hover:bg-gold/90 text-primary font-inter font-semibold px-8 py-4 text-lg group"
              >
                Agendar Tatuagem
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={handlePortfolioClick}
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-inter font-medium px-8 py-4 text-lg"
              >
                Ver Portfolio
              </Button>
            </motion.div>

            {/* Statistics */}
            <Statistics />
          </div>

          {/* Right Column - Image Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <ImageSlider 
                slides={heroSlides}
                autoPlay={true}
                interval={6000}
                className="w-full h-full shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetId="#about" />
      
    </section>
  );
};

export default HeroSection;
