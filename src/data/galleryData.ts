export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'oriental' | 'micro-realismo' | 'surrealismo';
  tags: string[];
  date: string;
  featured: boolean;
}

export const galleryData: GalleryItem[] = [
  // Oriental Traditional
  {
    id: 1,
    title: "Dragão Oriental",
    description: "Dragão tradicional japonês com detalhes em aquarela",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2b2a85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "oriental",
    tags: ["dragão", "japonês", "tradicional", "aquarela"],
    date: "2024-08-15",
    featured: true
  },
  {
    id: 2,
    title: "Carpa Koi",
    description: "Carpa Koi nadando entre flores de lótus",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "oriental",
    tags: ["carpa", "koi", "lótus", "água"],
    date: "2024-08-10",
    featured: false
  },
  {
    id: 3,
    title: "Oni Mask",
    description: "Máscara Oni com detalhes sombrios",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "oriental",
    tags: ["oni", "máscara", "japonês", "escuro"],
    date: "2024-08-05",
    featured: false
  },
  {
    id: 4,
    title: "Flores de Cerejeira",
    description: "Ramo de sakura delicado no braço",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "oriental",
    tags: ["sakura", "flores", "delicado", "feminino"],
    date: "2024-07-28",
    featured: true
  },

  // Micro-Realismo
  {
    id: 5,
    title: "Retrato Realista",
    description: "Retrato hiper-realista em pequena escala",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "micro-realismo",
    tags: ["retrato", "realista", "pequeno", "detalhado"],
    date: "2024-08-20",
    featured: true
  },
  {
    id: 6,
    title: "Olho Felino",
    description: "Olho de gato com detalhes impressionantes",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "micro-realismo",
    tags: ["olho", "gato", "animal", "realismo"],
    date: "2024-08-12",
    featured: false
  },
  {
    id: 7,
    title: "Rosa Miniatura",
    description: "Rosa vermelha em micro escala perfeita",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "micro-realismo",
    tags: ["rosa", "flor", "vermelho", "miniatura"],
    date: "2024-07-30",
    featured: false
  },
  {
    id: 8,
    title: "Borboleta Realista",
    description: "Borboleta monarca com asas detalhadas",
    image: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "micro-realismo",
    tags: ["borboleta", "asas", "cores", "natureza"],
    date: "2024-07-25",
    featured: true
  },

  // Surrealismo
  {
    id: 9,
    title: "Sonhos Flutuantes",
    description: "Composição surreal com elementos flutuantes",
    image: "https://images.unsplash.com/photo-1590246814883-57c511f008fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "surrealismo",
    tags: ["surreal", "flutuante", "sonho", "abstrato"],
    date: "2024-08-18",
    featured: true
  },
  {
    id: 10,
    title: "Metamorfose",
    description: "Transformação humano-animal em estilo surreal",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "surrealismo",
    tags: ["metamorfose", "transformação", "híbrido", "conceitual"],
    date: "2024-08-08",
    featured: false
  },
  {
    id: 11,
    title: "Tempo Distorcido",
    description: "Relógios derretendo em paisagem onírica",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "surrealismo",
    tags: ["tempo", "relógio", "derretendo", "dalí"],
    date: "2024-07-22",
    featured: false
  },
  {
    id: 12,
    title: "Portal Dimensional",
    description: "Abertura para outra dimensão na pele",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "surrealismo",
    tags: ["portal", "dimensional", "espaço", "cósmico"],
    date: "2024-07-15",
    featured: true
  }
];

export const categories = [
  { id: 'todos', label: 'Todos', count: galleryData.length },
  { id: 'oriental', label: 'Oriental', count: galleryData.filter(item => item.category === 'oriental').length },
  { id: 'micro-realismo', label: 'Micro-Realismo', count: galleryData.filter(item => item.category === 'micro-realismo').length },
  { id: 'surrealismo', label: 'Surrealismo', count: galleryData.filter(item => item.category === 'surrealismo').length }
];
