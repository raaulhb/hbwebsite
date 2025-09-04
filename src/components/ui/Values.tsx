import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Users, Award } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ValuesProps {
  className?: string;
}

const Values: React.FC<ValuesProps> = ({ className = '' }) => {
  const values: Value[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança",
      description: "Materiais esterilizados, ambiente higienizado e protocolos rigorosos de segurança"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Originalidade",
      description: "Cada peça é única, desenvolvida especialmente para você e sua história"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experiência",
      description: "Ambiente acolhedor onde você se sente confortável durante todo o processo"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade",
      description: "Técnicas aperfeiçoadas ao longo de anos, sempre buscando a excelência"
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
          NOSSOS VALORES
        </h3>
        <p className="font-inter text-lg text-secondary max-w-2xl mx-auto">
          Princípios que guiam cada trabalho e definem nossa filosofia
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-silver rounded-full text-primary mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
            >
              {value.icon}
            </motion.div>
            <h4 className="font-bebas text-xl text-primary mb-3 group-hover:text-gold transition-colors">
              {value.title}
            </h4>
            <p className="font-inter text-sm text-secondary leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Values;
