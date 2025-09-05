import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InstagramManager from '@/components/admin/InstagramManager';

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Senha simples para demonstração (em produção usar sistema real)
  const adminPassword = 'heitor2024';

  const handleLogin = () => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, yinitial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         className="bg-white rounded-lg p-8 shadow-2xl max-w-md w-full mx-4"
       >
         <div className="text-center mb-6">
           <Lock className="w-16 h-16 text-primary mx-auto mb-4" />
           <h2 className="font-bebas text-3xl text-primary">ADMIN ACCESS</h2>
           <p className="font-inter text-secondary">Digite a senha para acessar o painel</p>
         </div>
         
         <div className="space-y-4">
           <div>
             <label className="font-inter font-medium text-primary mb-2 block">
               Senha
             </label>
             <Input
               type="password"
               placeholder="Digite a senha..."
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
             />
           </div>
           
           <Button onClick={handleLogin} className="w-full">
             <Key className="w-4 h-4 mr-2" />
             Acessar Painel
           </Button>
         </div>

         <div className="mt-6 p-4 bg-blue-50 rounded-lg">
           <p className="font-inter text-xs text-blue-600 text-center">
             <strong>Demo:</strong> Senha = heitor2024
           </p>
         </div>
       </motion.div>
     </div>
   );
 }

 return (
   <div className="min-h-screen bg-gray-50">
     <InstagramManager />
   </div>
 );
};

export default AdminPage;
