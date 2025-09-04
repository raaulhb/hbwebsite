import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Users, Clock } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatisticsProps {
  className?: string;
}

const Statistics: React.FC<StatisticsProps> = ({ className = '' }) => {
  const stats: StatItem[] = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: "5+",
      label: "Years Experience"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "500+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "3",
      label: "Specialties"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      value: "Porto",
      label: "Portugal"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
          className="text-center group"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3 group-hover:bg-gold/20 transition-all duration-300">
            <div className="text-gold group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
          </div>
          <div className="font-bebas text-2xl md:text-3xl text-white mb-1">
            {stat.value}
          </div>
          <div className="font-inter text-sm text-accent">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Statistics;
