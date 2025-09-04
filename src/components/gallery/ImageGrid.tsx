import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Heart, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { GalleryItem } from '@/data/galleryData';

interface ImageGridProps {
  images: GalleryItem[];
  onImageClick: (image: GalleryItem) => void;
  className?: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick, className = '' }) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className={`${className}`}>
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => onImageClick(image)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                
                {/* Loading Skeleton */}
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 bg-secondary/20 animate-pulse rounded-lg" />
                )}

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    onLoad={() => handleImageLoad(image.id)}
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                      >
                        <Eye className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {image.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gold text-primary font-inter font-semibold">
                        Destaque
                      </Badge>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant="secondary" 
                      className="bg-white/90 text-primary font-inter text-xs capitalize"
                    >
                      {image.category.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="font-bebas text-lg text-primary mb-2 group-hover:text-gold transition-colors">
                    {image.title}
                  </h4>
                  
                  <p className="font-inter text-sm text-secondary mb-3 line-clamp-2 leading-relaxed">
                    {image.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-secondary">
                      <Calendar className="w-3 h-3" />
                      <span className="font-inter text-xs">{formatDate(image.date)}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-secondary group-hover:text-gold transition-colors">
                      <Heart className="w-3 h-3" />
                      <span className="font-inter text-xs">Ver detalhes</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {image.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs font-inter border-secondary/30 text-secondary"
                      >
                        #{tag}
                      </Badge>
                    ))}
                    {image.tags.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs font-inter border-secondary/30 text-secondary"
                      >
                        +{image.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results */}
      {images.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-secondary mb-4">
            <Eye className="w-16 h-16 mx-auto opacity-30" />
          </div>
          <h3 className="font-bebas text-2xl text-primary mb-2">
            Nenhuma imagem encontrada
          </h3>
          <p className="font-inter text-secondary">
            Tente selecionar uma categoria diferente
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ImageGrid;
