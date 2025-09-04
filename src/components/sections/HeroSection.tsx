import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-dark flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="font-bebas text-6xl md:text-8xl mb-4">
          HEITOR BARROS
        </h1>
        <p className="font-inter text-xl md:text-2xl text-accent mb-8">
          Tattoo Artist & Visual Art
        </p>
        <p className="font-inter text-lg text-secondary max-w-2xl mx-auto">
          Especialista em oriental tradicional japonês, surrealismo e micro-realismo. 
          Mais de 5 anos transformando pele em arte no Porto, Portugal.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
