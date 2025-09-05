export interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
  username: string;
  like_count?: number;
  comments_count?: number;
}

// Mock data para desenvolvimento (enquanto não temos as credenciais da API)
export const mockInstagramPosts: InstagramPost[] = [
  {
    id: "1",
    caption: "Dragão oriental tradicional finalizado hoje! 🐉 Cada escama foi desenhada à mão para criar essa textura única. #dragao #orientaltattoo #japanesetattoo #handdrawn",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1565058379802-bbe93b2b2a85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    permalink: "https://instagram.com/p/mock1",
    timestamp: "2024-09-05T10:30:00Z",
    username: "heitorbarros.tattoo",
    like_count: 234,
    comments_count: 18
  },
  {
    id: "2", 
    caption: "Processo de criação da carpa koi. Do esboço inicial até a aplicação final. Swipe para ver a evolução! ➡️ #koi #process #tattooprocess",
    media_type: "CAROUSEL_ALBUM",
    media_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    permalink: "https://instagram.com/p/mock2", 
    timestamp: "2024-09-04T15:45:00Z",
    username: "heitorbarros.tattoo",
    like_count: 189,
    comments_count: 12
  },
  {
    id: "3",
    caption: "Micro-realismo: quando menos é mais. Este pequeno retrato carrega toda a emoção do mundo. �� #microrealism #portrait #detailed",
    media_type: "IMAGE", 
    media_url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    permalink: "https://instagram.com/p/mock3",
    timestamp: "2024-09-03T09:20:00Z", 
    username: "heitorbarros.tattoo",
    like_count: 312,
    comments_count: 25
  },
  {
    id: "4",
    caption: "Surrealismo em movimento. Esta peça representa a transformação constante da vida. 🦋✨ #surrealism #transformation #art",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1590246814883-57c511f008fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    permalink: "https://instagram.com/p/mock4",
    timestamp: "2024-09-02T14:10:00Z",
    username: "heitorbarros.tattoo", 
    like_count: 156,
    comments_count: 8
  },
  {
    id: "5",
    caption: "Behind the scenes do estúdio. Preparação é tudo! Ambiente esterilizado e organizado para cada cliente. 🧼✨ #studio #behindthescenes #safety",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    permalink: "https://instagram.com/p/mock5",
    timestamp: "2024-09-01T11:00:00Z",
    username: "heitorbarros.tattoo",
    like_count: 98,
    comments_count: 15
  },
  {
    id: "6", 
    caption: "Flores de cerejeira em delicado sombreado. A beleza está nos detalhes mais sutis. 🌸 #sakura #delicate #shading #japanese",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    permalink: "https://instagram.com/p/mock6",
    timestamp: "2024-08-31T16:30:00Z", 
    username: "heitorbarros.tattoo",
    like_count: 267,
    comments_count: 21
  },
  {
    id: "7",
    caption: "Olho felino hiper-realista. Cada reflexo foi estudado para capturar a intensidade do olhar. 👁️ #eye #hyperrealistic #cat #intense",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    permalink: "https://instagram.com/p/mock7",
    timestamp: "2024-08-30T13:15:00Z",
    username: "heitorbarros.tattoo",
    like_count: 445,
    comments_count: 32
  },
  {
    id: "8",
    caption: "Rosa vermelha em miniatura. Prova de que tamanho não define qualidade! 🌹 #rose #miniature #red #quality #microrealism",
    media_type: "IMAGE", 
    media_url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    permalink: "https://instagram.com/p/mock8",
    timestamp: "2024-08-29T10:45:00Z",
    username: "heitorbarros.tattoo",
    like_count: 178,
    comments_count: 9
  }
];
