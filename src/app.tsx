import { Plus } from 'lucide-react'
import { Header } from './components/header'

export function App() {
  return (
    <div className="py-10 space-y-8">
      <div>
        <Header />
      </div>

      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-xl uppercase tracking-wide">tags</h1>
          <button className="inline-flex items-center gap-1.5 text-xs bg-lime-300 text-slate-900 font-medium rounded-full px-3 py-1">
            <Plus size={10} strokeWidth={3} />
            Criar nova
          </button>
        </div>
      </main>
    </div>
  )
}
