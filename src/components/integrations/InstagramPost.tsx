import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ExternalLink, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { InstagramPost as InstagramPostType } from '@/data/instagramData';

interface InstagramPostProps {
  post: InstagramPostType;
  index: number;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ post, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'há 1 dia';
    if (diffDays < 7) return `há ${diffDays} dias`;
    if (diffDays < 30) return `há ${Math.ceil(diffDays / 7)} semanas`;
    return `há ${Math.ceil(diffDays / 30)} meses`;
  };

  const formatCaption = (caption: string) => {
    const maxLength = 100;
    if (caption.length <= maxLength) return caption;
    return caption.slice(0, maxLength) + '...';
  };

  const handlePostClick = () => {
    window.open(post.instagramUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 relative"
      onClick={handlePostClick}
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-gold text-primary font-inter font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Destaque
          </Badge>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
        )}

        {/* Error State */}
        {imageError && (
          <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center">
            <div className="text-center">
              <ExternalLink className="w-12 h-12 text-secondary/50 mx-auto mb-2" />
              <p className="text-xs text-secondary">Erro ao carregar</p>
            </div>
          </div>
        )}

        {/* Image */}
        {!imageError && (
          <img
            src={post.imageUrl}
            alt={post.caption}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                {post.likes && post.likes > 0 && (
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-inter">{post.likes}</span>
                  </div>
                )}
                {post.comments && post.comments > 0 && (
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-inter">{post.comments}</span>
                  </div>
                )}
              </div>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-3">
          <p className="font-inter text-sm text-secondary leading-relaxed">
            {formatCaption(post.caption)}
          </p>
        </div>

        {/* Hashtags */}
        {post.hashtags && post.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {post.hashtags.slice(0, 3).map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs font-inter border-secondary/30 text-secondary"
              >
                #{tag}
              </Badge>
            ))}
            {post.hashtags.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs font-inter border-secondary/30 text-secondary"
              >
                +{post.hashtags.length - 3}
              </Badge>
            )}
          </div>
        )}
        
        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-secondary/70">
          <span className="font-inter">
            @heitorbarros.tattoo
          </span>
          <span className="font-inter">
            {formatDate(post.date)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default InstagramPost;
