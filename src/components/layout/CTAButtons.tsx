import React from "react";
import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  className?: string;
  isMobile?: boolean;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({
  className = "",
  isMobile = false,
}) => {
  const handleWhatsAppClick = () => {
    // Número do WhatsApp - substituir pelo número real do Heitor
    const phoneNumber = "351912345678"; // Formato: código país + número
    const message = "Olá! Gostaria de agendar uma consulta para tatuagem.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInstagramClick = () => {
    // Instagram do Heitor - substituir pelo @ real
    const instagramUrl = "https://instagram.com/heitorbarros.tattoo";
    window.open(instagramUrl, "_blank");
  };

  const buttonClasses = isMobile ? "w-full justify-center" : "";

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col space-y-3" : "items-center space-x-4"
      } ${className}`}
    >
      <Button
        onClick={handleWhatsAppClick}
        className={`bg-gold hover:bg-gold/90 text-primary font-inter font-semibold px-6 py-2 ${buttonClasses}`}
      >
        Agendar Tatuagem
      </Button>

      <Button
        variant="outline"
        onClick={handleInstagramClick}
        className={`border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-inter font-medium px-6 py-2 ${buttonClasses}`}
      >
        Ver Portfolio
      </Button>
    </div>
  );
};

export default CTAButtons;
