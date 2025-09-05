import axios from "axios";
import { InstagramPost, mockInstagramPosts } from "@/data/instagramData";

// Instagram Basic Display API configuration
const INSTAGRAM_API_BASE = "https://graph.instagram.com";

export class InstagramAPI {
  private accessToken: string | null;
  private userId: string | null;

  constructor() {
    // Essas credenciais virão do .env em produção
    this.accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || null;
    this.userId = import.meta.env.VITE_INSTAGRAM_USER_ID || null;
  }

  /**
   * Busca posts recentes do Instagram
   */
  async getRecentPosts(limit: number = 8): Promise<InstagramPost[]> {
    // Se não temos credenciais, retorna dados mock
    if (!this.accessToken || !this.userId) {
      console.log(
        "🔄 Instagram API: Usando dados mock (credenciais não configuradas)"
      );
      return this.getMockPosts(limit);
    }

    try {
      const response = await axios.get(`${INSTAGRAM_API_BASE}/me/media`, {
        params: {
          fields:
            "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username",
          limit: limit,
          access_token: this.accessToken,
        },
      });

      return response.data.data as InstagramPost[];
    } catch (error) {
      console.error("❌ Instagram API Error:", error);
      console.log("🔄 Fallback: Usando dados mock");
      return this.getMockPosts(limit);
    }
  }

  /**
   * Busca informações do perfil
   */
  async getProfile() {
    if (!this.accessToken) {
      return {
        username: "heitorbarros.tattoo",
        followers_count: 1250,
        media_count: 89,
      };
    }

    try {
      const response = await axios.get(`${INSTAGRAM_API_BASE}/me`, {
        params: {
          fields: "username,media_count",
          access_token: this.accessToken,
        },
      });

      return response.data;
    } catch (error) {
      console.error("❌ Instagram Profile API Error:", error);
      return {
        username: "heitorbarros.tattoo",
        followers_count: 1250,
        media_count: 89,
      };
    }
  }

  /**
   * Retorna dados mock para desenvolvimento
   */
  private getMockPosts(limit: number): InstagramPost[] {
    return mockInstagramPosts.slice(0, limit);
  }

  /**
   * Verifica se a API está configurada
   */
  isConfigured(): boolean {
    return !!(this.accessToken && this.userId);
  }
}

// Instância singleton
export const instagramAPI = new InstagramAPI();
