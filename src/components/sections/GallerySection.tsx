import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import FilterTabs from '@/components/gallery/FilterTabs';
import ImageGrid from '@/components/gallery/ImageGrid';
import ImageModal from '@/components/gallery/ImageModal';
import { galleryData, categories, GalleryItem } from '@/data/galleryData';

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'todos') {
      return galleryData;
    }
    return galleryData.filter(image => image.category === activeCategory);
  }, [activeCategory]);

  // Get visible images (for pagination)
  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleImageClick = (image: GalleryItem) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(8); // Reset visible count when changing category
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  // Modal navigation
  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < filteredImages.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            GALERIA DE 
            <span className="text-gradient block">TRABALHOS</span>
          </h2>
          <p className="font-inter text-lg text-accent max-w-3xl mx-auto leading-relaxed">
            Explore minha coleção de tatuagens únicas, cada uma contando uma história especial. 
            Filtros por estilo para encontrar sua inspiração perfeita.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="text-center">
              <div className="font-bebas text-2xl text-white">{filteredImages.length}</div>
              <div className="font-inter text-xs text-accent">Trabalhos</div>
            </div>
            <div className="w-px h-8 bg-accent/30" />
            <div className="text-center">
              <div className="font-bebas text-2xl text-gold">
                {filteredImages.filter(img => img.featured).length}
              </div>
              <div className="font-inter text-xs text-accent">Destaques</div>
            </div>
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ImageGrid 
            images={visibleImages}
            onImageClick={handleImageClick}
          />
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              onClick={handleLoadMore}
              size="lg"
              className="bg-gold hover:bg-gold/90 text-primary font-inter font-semibold px-8 py-4"
            >
              Carregar Mais ({filteredImages.length - visibleCount} restantes)
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="font-bebas text-3xl text-white mb-4">
            GOSTOU DO QUE VIU?
          </h3>
          <p className="font-inter text-accent mb-6 max-w-2xl mx-auto">
            Vamos criar algo único para você. Entre em contato e transforme sua ideia em arte permanente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const phoneNumber = "351912345678";
                const message = "Olá! Vi seu portfolio e gostaria de agendar uma consulta para tatuagem.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              size="lg"
              className="bg-gold hover:bg-gold/90 text-primary font-inter font-semibold px-8 py-4"
            >
              Agendar Consulta
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-inter font-medium px-8 py-4"
            >
              Mais Informações
            </Button>
          </div>
        </motion.div>

      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </section>
  );
};

export default GallerySection;
