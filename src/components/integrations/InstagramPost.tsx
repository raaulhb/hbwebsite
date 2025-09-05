import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ExternalLink, Play, Image as ImageIcon } from 'lucide-react';
import { InstagramPost as InstagramPostType } from '@/data/instagramData';

interface InstagramPostProps {
  post: InstagramPostType;
  index: number;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ post, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
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
    window.open(post.permalink, '_blank');
  };

  const getMediaIcon = () => {
    switch (post.media_type) {
      case 'VIDEO':
        return <Play className="w-6 h-6" />;
      case 'CAROUSEL_ALBUM':
        return <ImageIcon className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
      onClick={handlePostClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
        )}

        {/* Error State */}
        {imageError && (
          <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-secondary/50" />
          </div>
        )}

        {/* Image */}
        {!imageError && (
          <img
            src={post.media_url}
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
                {post.like_count && (
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-inter">{post.like_count}</span>
                  </div>
                )}
                {post.comments_count && (
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-inter">{post.comments_count}</span>
                  </div>
                )}
              </div>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Media Type Indicator */}
        {getMediaIcon() && (
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">
            {getMediaIcon()}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <p className="font-inter text-sm text-secondary leading-relaxed flex-1">
            {formatCaption(post.caption)}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-secondary/70 font-inter">
            @{post.username}
          </span>
          <span className="text-xs text-secondary/70 font-inter">
            {formatDate(post.timestamp)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default InstagramPost;
