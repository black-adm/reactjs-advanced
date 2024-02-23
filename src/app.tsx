import { FileDown, MoreHorizontal, Plus, Search } from 'lucide-react'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
import { Control, Input } from './components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './components/table'

export function App() {
  return (
    <div className="py-10 space-y-8">
      <div>
        <Header />
        <Tabs />
      </div>

      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-xl uppercase tracking-wide">tags</h1>
          <Button variant="primary">
            <Plus size={12} strokeWidth={3} />
            Criar
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <Input variant="filter">
            <Search className="size-3" />
            <Control placeholder="Pesquisar ..." />
          </Input>

          <Button>
            <FileDown className="size-3" />
            Exportar
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">Fluig</span>
                  <span className="text-xs text-slate-600">
                    1aefccd5-3b96-4de5-b07b-6109e7e53997
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-zinc-300">14 video(s)</TableCell>
              <TableCell className="text-right">
                <Button size="icon">
                  <MoreHorizontal className="size-3" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  )
}
