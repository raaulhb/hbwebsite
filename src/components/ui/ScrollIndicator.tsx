import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  targetId = '#about', 
  className = '' 
}) => {
  const handleScrollTo = () => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${className}`}
    >
      <button
        onClick={handleScrollTo}
        className="flex flex-col items-center group cursor-pointer"
      >
        <span className="text-white/70 text-sm font-inter mb-2 group-hover:text-white transition-colors">
          Scroll to explore
        </span>
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2 group-hover:bg-white transition-colors"
          />
        </motion.div>
        
        <ChevronDown className="w-6 h-6 text-white/70 mt-2 group-hover:text-white group-hover:scale-110 transition-all" />
      </button>
    </motion.div>
  );
};

export default ScrollIndicator;
