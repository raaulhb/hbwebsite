export interface InstagramPost {
  id: string;
  instagramUrl: string;
  imageUrl: string;
  caption: string;
  hashtags: string[];
  date: string;
  likes?: number;
  comments?: number;
  featured?: boolean;
}

// Posts reais do Instagram do Heitor (fácil de atualizar)
export const instagramPosts: InstagramPost[] = [
  {
    id: "post_001",
    instagramUrl: "https://www.instagram.com/p/Cvx1n2xIS5Z/",
    imageUrl:
      "https://images.unsplash.com/photo-1565058379802-bbe93b2b2a85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption:
      "Dragão oriental tradicional finalizado hoje! 🐉 Cada escama foi desenhada à mão para criar essa textura única.",
    hashtags: [
      "dragao",
      "orientaltattoo",
      "japanesetattoo",
      "handdrawn",
      "porto",
    ],
    date: "2024-09-05",
    likes: 234,
    comments: 18,
    featured: true,
  },
  {
    id: "post_002",
    instagramUrl: "https://www.instagram.com/p/exemplo2/",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption:
      "Processo de criação da carpa koi. Do esboço inicial até a aplicação final. Swipe para ver a evolução! ➡️",
    hashtags: ["koi", "process", "tattooprocess", "oriental", "porto"],
    date: "2024-09-04",
    likes: 189,
    comments: 12,
    featured: false,
  },
  {
    id: "post_003",
    instagramUrl: "https://www.instagram.com/p/exemplo3/",
    imageUrl:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption:
      "Micro-realismo: quando menos é mais. Este pequeno retrato carrega toda a emoção do mundo. 🎭",
    hashtags: ["microrealism", "portrait", "detailed", "emotions", "porto"],
    date: "2024-09-03",
    likes: 312,
    comments: 25,
    featured: true,
  },
  {
    id: "post_004",
    instagramUrl: "https://www.instagram.com/p/exemplo4/",
    imageUrl:
      "https://images.unsplash.com/photo-1590246814883-57c511f008fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption:
      "Surrealismo em movimento. Esta peça representa a transformação constante da vida. 🦋✨",
    hashtags: ["surrealism", "transformation", "art", "conceptual", "porto"],
    date: "2024-09-02",
    likes: 156,
    comments: 8,
    featured: false,
  },
  {
    id: "post_005",
    instagramUrl: "https://www.instagram.com/p/exemplo5/",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption:
      "Behind the scenes do estúdio. Preparação é tudo! Ambiente esterilizado e organizado para cada cliente. 🧼✨",
    hashtags: ["studio", "behindthescenes", "safety", "professional", "porto"],
    date: "2024-09-01",
    likes: 98,
    comments: 15,
    featured: false,
  },
  {
    id: "post_006",
    instagramUrl: "https://www.instagram.com/p/exemplo6/",
    imageUrl:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption:
      "Flores de cerejeira em delicado sombreado. A beleza está nos detalhes mais sutis. 🌸",
    hashtags: ["sakura", "delicate", "shading", "japanese", "porto"],
    date: "2024-08-31",
    likes: 267,
    comments: 21,
    featured: true,
  },
  {
    id: "post_007",
    instagramUrl: "https://www.instagram.com/p/exemplo7/",
    imageUrl:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption:
      "Olho felino hiper-realista. Cada reflexo foi estudado para capturar a intensidade do olhar. 👁️",
    hashtags: ["eye", "hyperrealistic", "cat", "intense", "porto"],
    date: "2024-08-30",
    likes: 445,
    comments: 32,
    featured: true,
  },
  {
    id: "post_008",
    instagramUrl: "https://www.instagram.com/p/exemplo8/",
    imageUrl:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption:
      "Rosa vermelha em miniatura. Prova de que tamanho não define qualidade! 🌹",
    hashtags: ["rose", "miniature", "red", "quality", "microrealism", "porto"],
    date: "2024-08-29",
    likes: 178,
    comments: 9,
    featured: false,
  },
];

// Informações do perfil (atualizar manualmente)
export const instagramProfile = {
  username: "heitorbarros.tattoo",
  displayName: "Heitor Barros",
  bio: "Tattoo Artist & Visual Art • Porto, Portugal • Oriental • Micro-realismo • Surrealismo",
  followers: 1250,
  following: 180,
  posts: instagramPosts.length,
  verified: false,
  profileImageUrl:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
};

// Helper functions
export const getFeaturedPosts = () =>
  instagramPosts.filter((post) => post.featured);
export const getRecentPosts = (limit = 8) => instagramPosts.slice(0, limit);
export const getPostsByHashtag = (hashtag: string) =>
  instagramPosts.filter((post) =>
    post.hashtags.includes(hashtag.toLowerCase())
  );
