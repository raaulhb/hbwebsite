import React from 'react';

interface LogoProps {
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'default', className = '' }) => {
  const sizes = {
    sm: 'text-lg',
    default: 'text-2xl', 
    lg: 'text-4xl'
  };

  return (
    <div className={`logo-container ${className}`}>
      <h1 className={`font-bebas ${sizes[size]} font-bold tracking-wider text-primary`}>
        HEITOR BARROS
      </h1>
      <span className="text-xs text-secondary/70 font-inter tracking-wide">
        TATTOO ARTIST
      </span>
    </div>
  );
};

export default Logo;
