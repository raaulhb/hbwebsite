import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import CTAButtons from './CTAButtons';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect(50);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-secondary/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="sm" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu />
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex">
            <CTAButtons />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md text-primary hover:bg-secondary/10 transition-colors">
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col h-full">
                  
                  {/* Mobile Logo */}
                  <div className="py-6">
                    <Logo size="default" />
                  </div>

                  <Separator className="my-4" />

                  {/* Mobile Navigation */}
                  <div className="flex-1">
                    <NavigationMenu 
                      isMobile={true} 
                      onItemClick={closeMobileMenu}
                    />
                  </div>

                  <Separator className="my-6" />

                  {/* Mobile CTAs */}
                  <div className="pb-6">
                    <CTAButtons isMobile={true} />
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
