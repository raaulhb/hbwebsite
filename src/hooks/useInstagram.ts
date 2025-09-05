import { useState, useEffect } from 'react';
import { instagramAPI } from '@/lib/instagramApi';
import { InstagramPost } from '@/data/instagramData';

interface UseInstagramReturn {
  posts: InstagramPost[];
  profile: any;
  loading: boolean;
  error: string | null;
  isConfigured: boolean;
  refetch: () => Promise<void>;
}

export const useInstagram = (limit: number = 8): UseInstagramReturn => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInstagramData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch posts e profile em paralelo
      const [postsData, profileData] = await Promise.all([
        instagramAPI.getRecentPosts(limit),
        instagramAPI.getProfile()
      ]);

      setPosts(postsData);
      setProfile(profileData);
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
    profile,
    loading,
    error,
    isConfigured: instagramAPI.isConfigured(),
    refetch: fetchInstagramData
  };
};
