import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Loader2, AlertCircle, Star, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InstagramPost from '@/components/integrations/InstagramPost';
import { useInstagram } from '@/hooks/useInstagram';

const InstagramSection: React.FC = () => {
  const { posts, featuredPosts, profile, loading, error, refetch } = useInstagram(8);

  const handleInstagramClick = () => {
    window.open('https://instagram.com/heitorbarros.tattoo', '_blank');
  };

  const handleAdminClick = () => {
    // Em produção, isso seria uma rota protegida
    window.open('/admin', '_blank');
  };

  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Instagram className="w-8 h-8 text-pink-500" />
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-primary">
              INSTAGRAM
              <span className="text-gradient block">FEED</span>
            </h2>
          </div>
          
          <p className="font-inter text-lg text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Acompanhe meu trabalho em tempo real. Novos projetos, processos criativos e 
            bastidores do estúdio direto do meu Instagram.
          </p>

          {/* Profile Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full px-8 py-4 shadow-lg"
          >
            <div className="text-center">
              <div className="font-bebas text-2xl">{profile.posts}</div>
              <div className="font-inter text-xs opacity-90">Posts</div>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="text-center">
              <div className="font-bebas text-2xl">{profile.followers}</div>
              <div className="font-inter text-xs opacity-90">Seguidores</div>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="text-center">
              <div className="font-bebas text-2xl">@{profile.username}</div>
              <div className="font-inter text-xs opacity-90">Username</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-6 h-6 text-gold" />
              <h3 className="font-bebas text-2xl text-primary">POSTS EM DESTAQUE</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredPosts.slice(0, 4).map((post, index) => (
                <InstagramPost key={post.id} post={post} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Management Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
            <Settings className="w-5 h-5" />
            <span className="font-inter font-medium">Sistema Híbrido Ativo</span>
          </div>
          <p className="font-inter text-sm text-blue-600">
            Feed gerenciado manualmente para máximo controle e performance. 
            <button 
              onClick={handleAdminClick}
              className="underline hover:no-underline ml-1"
            >
              Acessar painel de gerenciamento
            </button>
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 font-inter text-secondary">Carregando posts...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h3 className="font-bebas text-2xl text-primary mb-2">Erro ao Carregar</h3>
            <p className="font-inter text-secondary mb-6">{error}</p>
            <Button onClick={refetch} variant="outline">
              Tentar Novamente
            </Button>
          </motion.div>
        )}

        {/* Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-bebas text-2xl text-primary mb-8">POSTS RECENTES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {posts.map((post, index) => (
                <InstagramPost key={post.id} post={post} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="font-bebas text-3xl mb-4">
              SIGA NO INSTAGRAM
            </h3>
            <p className="font-inter text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Não perca nenhuma novidade! Stories exclusivos, processos ao vivo e 
              muito mais conteúdo sobre tatuagem e arte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleInstagramClick}
                size="lg"
                className="bg-white text-pink-600 hover:bg-white/90 font-inter font-semibold px-8 py-4"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Seguir @{profile.username}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 transition-all duration-300 font-inter font-medium px-8 py-4"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Entrar em Contato
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramSection;
