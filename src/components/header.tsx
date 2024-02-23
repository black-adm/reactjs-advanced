import { ChevronDown } from 'lucide-react'
import { Badge } from './ui/badge'
import logo from '@public/logo.svg'

export function Header() {
  return (
    <div className="max-w-[1200px] mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <img src={logo} className="w-12 h-12" alt="company.logo" />

          <Badge>BETA</Badge>
        </div>

        <svg
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.18372"
            y1="15.598"
            x2="5.32483"
            y2="0.143194"
            className="stroke-slate-700"
          />
        </svg>

        <div className="flex items-center gap-2.5">
          <img
            src="https://avatars.githubusercontent.com/u/65312764?s=200&v=4"
            className="size-5"
            alt="Fit Gestão"
          />

          <span className="text-sm font-medium text-slate-50">Fit Gestão</span>

          <Badge variant="primary">PRO</Badge>

          <ChevronDown className="text-slate-600 size-4" />
        </div>

        <svg
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.18372"
            y1="15.598"
            x2="5.32483"
            y2="0.143194"
            className="stroke-zinc-700"
          />
        </svg>

        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium text-slate-50">Projetos</span>

          <ChevronDown className="text-slate-600 size-4" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-sm font-medium">Matheus Roberto</span>
          <span className="text-xs text-slate-400">
            madureira@fitgestao.com
          </span>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/68331373?v=4"
          className="size-8 rounded-full"
          alt=""
        />
        <ChevronDown className="size-4 text-slate-600" />
      </div>
    </div>
  )
}
