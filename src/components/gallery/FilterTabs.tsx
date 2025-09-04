import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface FilterTab {
  id: string;
  label: string;
  count: number;
}

interface FilterTabsProps {
  categories: FilterTab[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-primary border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5'
          }`}
        >
          <span className="flex items-center gap-2">
            {category.label}
            <Badge 
              variant="secondary" 
              className={`text-xs ${
                activeCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-primary/10 text-primary'
              }`}
            >
              {category.count}
            </Badge>
          </span>
          
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-full -z-10"
              initial={false}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTabs;
