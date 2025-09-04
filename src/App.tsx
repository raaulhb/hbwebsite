import Logo from './components/layout/Logo'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Teste do Logo */}
      <div className="mb-8">
        <Logo size="lg" className="mb-4" />
        <Logo size="default" className="mb-4" />
        <Logo size="sm" />
      </div>

      {/* Teste dos componentes Shadcn */}
      <div className="space-y-4">
        <h2 className="text-xl font-inter font-semibold text-primary">
          Setup completo! 🚀
        </h2>
        
        <p className="text-secondary">
          Tailwind + Shadcn/ui + Fontes funcionando perfeitamente
        </p>

        <div className="flex gap-4">
          <Button variant="default">Button Default</Button>
          <Button variant="outline">Button Outline</Button>
        </div>

        <Card className="p-4 max-w-md">
          <h3 className="font-bebas text-lg text-primary">Teste do Card</h3>
          <p className="text-sm text-secondary">
            Componente funcionando com as cores customizadas
          </p>
        </Card>

        <div className="p-4 bg-gradient-dark text-white rounded-lg max-w-md">
          <p className="text-gradient">Gradiente customizado funcionando!</p>
        </div>
      </div>
    </div>
  )
}

export default App
