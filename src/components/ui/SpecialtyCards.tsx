import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Specialty {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface SpecialtyCardsProps {
  className?: string;
}

const SpecialtyCards: React.FC<SpecialtyCardsProps> = ({ className = '' }) => {
  const specialties: Specialty[] = [
    {
      id: 1,
      title: "Oriental Tradicional",
      description: "Técnicas milenares japonesas adaptadas para a pele moderna",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Dragões", "Carpas Koi", "Flores de Cerejeira", "Oni & Máscaras"]
    },
    {
      id: 2,
      title: "Micro-Realismo",
      description: "Detalhes impressionantes em espaços pequenos com precisão cirúrgica",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Retratos", "Animais", "Objetos", "Paisagens"]
    },
    {
      id: 3,
      title: "Surrealismo",
      description: "Arte que desafia a realidade e desperta a imaginação",
      image: "https://images.unsplash.com/photo-1590246814883-57c511f008fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Conceitos Abstratos", "Fusão de Elementos", "Perspectivas Únicas", "Simbolismo"]
    }
  ];

  return (
    <div className={`${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="font-bebas text-3xl md:text-4xl text-primary mb-4">
          ESPECIALIDADES
        </h3>
        <p className="font-inter text-lg text-secondary max-w-2xl mx-auto">
          Cada estilo conta uma história única, combinando tradição e inovação
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 h-full">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${specialty.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-60" />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-primary font-bebas text-lg">
                  {specialty.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-bebas text-xl text-primary mb-3 group-hover:text-gold transition-colors">
                  {specialty.title}
                </h4>
                <p className="font-inter text-sm text-secondary mb-4 leading-relaxed">
                  {specialty.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h5 className="font-inter font-semibold text-primary text-sm mb-2">
                    Elementos populares:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {specialty.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-inter"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyCards;
