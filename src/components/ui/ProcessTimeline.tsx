import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Palette, Zap, Heart } from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface ProcessTimelineProps {
  className?: string;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ className = '' }) => {
  const steps: ProcessStep[] = [
    {
      id: 1,
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Consulta",
      description: "Conversamos sobre sua ideia, referências e expectativas para criar o design perfeito",
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: <Palette className="w-6 h-6" />,
      title: "Design",
      description: "Criação do desenho personalizado, considerando anatomia, fluxo e estilo desejado",
      color: "bg-purple-500"
    },
    {
      id: 3,
      icon: <Zap className="w-6 h-6" />,
      title: "Execução",
      description: "Aplicação da tatuagem com técnicas precisas, cuidado com higiene e conforto",
      color: "bg-gold"
    },
    {
      id: 4,
      icon: <Heart className="w-6 h-6" />,
      title: "Cuidados",
      description: "Orientações completas para cicatrização e acompanhamento pós-tatuagem",
      color: "bg-green-500"
    }
  ];

  return (
    <div className={`${className}`}>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas text-3xl md:text-4xl text-primary text-center mb-12"
      >
        PROCESSO CRIATIVO
      </motion.h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-secondary/20 z-0">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  className="h-full bg-gold"
                />
              </div>
            )}

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`inline-flex items-center justify-center w-16 h-16 ${step.color} rounded-full text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                {step.icon}
              </motion.div>

              {/* Step Number */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bebas">
                {step.id}
              </div>

              {/* Content */}
              <h4 className="font-bebas text-xl text-primary mb-3 group-hover:text-gold transition-colors">
                {step.title}
              </h4>
              <p className="font-inter text-sm text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
