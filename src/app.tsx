import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
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
import { Pagination } from './components/pagination'

import useDebounceValue from './hooks/use-debounce-value'

export interface Tag {
  id: string
  title: string
  company: string
  period: string
}

export interface TagResponse {
  first: number
  prev: number | null
  next: number
  last: number
  pages: number
  items: number
  data: Tag[]
}

export function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filter, setFilter] = useState('')

  const baseUrl = 'http://localhost:3333/tags'
  const debouncedFilter = useDebounceValue(filter, 1000)
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1

  useEffect(() => {
    setSearchParams((params) => {
      params.set('page', '1')
      return params
    })
  }, [debouncedFilter, setSearchParams])

  const { data: tagsResponse, isLoading } = useQuery<TagResponse>({
    queryKey: ['get-tags', debouncedFilter, page],
    queryFn: async () => {
      const request = await fetch(
        `${baseUrl}?_page=${page}&_per_page=10&title=${debouncedFilter}`,
      )
      const response = await request.json()
      return response
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  })

  if (isLoading) return null

  return (
    <div className="py-10 space-y-8">
      <div>
        <Header />
        <Tabs />
      </div>

      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-6">
          <h1 className="text-xl uppercase tracking-wide">minhas agendas</h1>
          <Button variant="primary">
            <Plus size={12} strokeWidth={3} />
            Criar
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <Input variant="filter">
            <Search className="size-3" />
            <Control
              placeholder="Pesquisar ..."
              onChange={(e) => setFilter(e.target.value)}
            />
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
              <TableHead>Cliente</TableHead>
              <TableHead>Alocação</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tagsResponse?.data.map((tag) => {
              return (
                <TableRow key={tag.id}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{tag.title}</span>
                      <span className="text-xs text-slate-600">
                        1aefccd5-3b96-4de5-b07b-6109e7e53997
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-slate-300 text-xs">
                    {tag.company}
                  </TableCell>
                  <TableCell className="text-slate-300 tex-xs">
                    {tag.period}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon">
                      <MoreHorizontal className="size-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {tagsResponse && (
          <Pagination
            pages={tagsResponse.pages}
            items={tagsResponse.items}
            page={page}
          />
        )}
      </main>
    </div>
  )
}
