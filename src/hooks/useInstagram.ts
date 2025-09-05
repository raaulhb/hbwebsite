import { useState, useEffect } from 'react';
import { instagramPosts, instagramProfile, getFeaturedPosts, getRecentPosts } from '@/data/instagramData';
import { InstagramPost } from '@/data/instagramData';

interface UseInstagramReturn {
  posts: InstagramPost[];
  featuredPosts: InstagramPost[];
  profile: typeof instagramProfile;
  loading: boolean;
  error: string | null;
  isConfigured: boolean;
  refetch: () => Promise<void>;
}

export const useInstagram = (limit: number = 8): UseInstagramReturn => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInstagramData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Simular delay de API para UX realista
      await new Promise(resolve => setTimeout(resolve, 500));

      // Buscar posts (ordenados por data, mais recentes primeiro)
      const sortedPosts = [...instagramPosts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setPosts(getRecentPosts(limit));
      setFeaturedPosts(getFeaturedPosts());

    } catch (err) {
      console.error('Instagram fetch error:', err);
      setError('Erro ao carregar posts do Instagram');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramData();
  }, [limit]);

  return {
    posts,
    featuredPosts,
    profile: instagramProfile,
    loading,
    error,
    isConfigured: true, // Nossa solução híbrida sempre está "configurada"
    refetch: fetchInstagramData
  };
};
