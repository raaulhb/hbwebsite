import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GalleryItem } from "@/data/galleryData";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: GalleryItem | null;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  image,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) => {
  if (!image) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-primary border-none">
        <div className="relative w-full h-full flex">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation Buttons */}
          {hasPrevious && onPrevious && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          {hasNext && onNext && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}

          {/* Image Section */}
          <div className="flex-1 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/20" />
          </div>

          {/* Info Panel */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-80 bg-primary text-white p-8 overflow-y-auto"
          >
            {/* Featured Badge */}
            {image.featured && (
              <Badge className="bg-gold text-primary font-inter font-semibold mb-4">
                Destaque
              </Badge>
            )}

            {/* Title */}
            <h3 className="font-bebas text-3xl mb-4">{image.title}</h3>

            {/* Category */}
            <div className="mb-4">
              <Badge
                variant="outline"
                className="border-accent text-accent font-inter capitalize"
              >
                {image.category.replace("-", " ")}
              </Badge>
            </div>

            {/* Description */}
            <p className="font-inter text-accent leading-relaxed mb-6">
              {image.description}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 mb-6 text-accent">
              <Calendar className="w-4 h-4" />
              <span className="font-inter text-sm">
                {formatDate(image.date)}
              </span>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-accent" />
                <span className="font-inter text-sm text-accent">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/10 text-white font-inter text-xs"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Button
                onClick={() => {
                  const phoneNumber = "351912345678";
                  const message = `Olá! Vi a tatuagem "${image.title}" no seu portfolio e gostaria de conversar sobre um projeto similar.`;
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="w-full bg-gold hover:bg-gold/90 text-primary font-inter font-semibold"
              >
                Solicitar Orçamento
              </Button>

              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-primary"
                onClick={() => {
                  const instagramUrl =
                    "https://www.instagram.com/heitorbarros.ink";
                  window.open(instagramUrl, "_blank");
                }}
              >
                Ver no Instagram
              </Button>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
