import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  slides: SlideData[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  slides, 
  autoPlay = true, 
  interval = 5000,
  className = '' 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!slides.length) return null;

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-lg ${className}`}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
              
              {/* Slide content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-bebas text-2xl md:text-3xl mb-2"
                >
                  {slides[currentSlide].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="font-inter text-sm md:text-base text-accent"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gold scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {autoPlay && (
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            className="h-full bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: interval / 1000, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
