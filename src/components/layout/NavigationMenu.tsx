import React from 'react';

interface NavigationMenuProps {
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
  className = '', 
  isMobile = false,
  onItemClick 
}) => {
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#instagram' }, // Instagram = Portfolio
    { label: 'Shop', href: '#shop' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onItemClick) onItemClick();
  };

  const baseClasses = isMobile 
    ? "flex flex-col space-y-4 text-lg"
    : "hidden md:flex items-center space-x-8";

  return (
    <nav className={`${baseClasses} ${className}`}>
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleScrollTo(item.href)}
          className="font-inter font-medium text-primary hover:text-gold transition-colors duration-300 relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
        </button>
      ))}
    </nav>
  );
};

export default NavigationMenu;
