'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import useAuth from '@/hooks/useAuth'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/fetch/Loading'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'

export type tableBanner = {
  id: string
  titulo: string
  imagen1: string
  resumen: string
}

export const ListadoServicios = () => {
  const { setTitle } = useAuth()
  const [servicios, setServicios] = useState<tableBanner[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  const handleDelete = async (id: string) => {
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/servicios/delete/${id}`)
      if (data.status) {
        toast({
          duration: 3000,
          title: 'Registro eliminado',
          variant: 'success'
        })
        getServicios()
      } else {
        toast({
          duration: 3000,
          title: 'Error al eliminar el servicio',
          variant: 'destructive'
        })
      }
    } catch (error: any) {
      console.log(error)
      toast({
        duration: 3000,
        title: 'Error al eliminar el servicio',
        variant: 'destructive'
      })
    }
  }

  const columns: ColumnDef<tableBanner>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
      enableSorting: false,
      enableHiding: false
    },
    {
      accessorKey: 'id',
      header: ({ column }) => {
        return (
          <Button variant="ghost" className="text-left" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            ID
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase pl-4">{row.getValue('id')}</div>,
      enableColumnFilter: true
    },
    {
      header: ({ column }) => {
        return (
          <Button variant="ghost" className="text-left" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Titulo
            <ArrowUpDown />
          </Button>
        )
      },
      accessorKey: 'titulo',
      cell: ({ row }) => <div className="capitalize pl-4">{row.getValue('titulo')}</div>,
      enableColumnFilter: true,
      sortingFn: 'alphanumeric'
    },
    {
      accessorKey: 'imagen1',
      header: () => <div className="text-left">Imagen</div>,
      cell: ({ row }) => {
        return (
          <div className="text-left font-medium flex justify-start items-center">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/servicios/${row.getValue('imagen1')}`}
              alt="Imagen"
              className="w-10 h-10 object-cover"
            />
          </div>
        )
      }
    },
    {
      header: 'Resumen',
      accessorKey: 'resumen',
      cell: ({ row }) => <div className="capitalize line-clamp-2 max-w-xs">{row.getValue('resumen')}</div>,
      enableColumnFilter: true
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-full flex justify-end items-center">
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open</span>
                  <MoreHorizontal />
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <Link href={`/sistema/servicios/update/${payment.id}`}>
                <DropdownMenuItem>Editar</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  toast({
                    duration: 3000,
                    variant: 'destructive',
                    title: `¿Estás seguro de eliminar el servicio #${payment.id}?`,
                    description: 'Esta acción es irreversible',
                    action: (
                      <ToastAction altText="Eliminar" className="bg-white text-black" onClick={() => handleDelete(payment.id)}>
                        Eliminar
                      </ToastAction>
                    )
                  })
                }}
              >
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }
    }
  ]

  const getServicios = async (): Promise<void> => {
    setLoading(true)
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/servicios/findall`, {
        headers: {
          'Cache-Control': 'no-store'
        }
      })
      setServicios(data.servicios)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setTitle('Servicios')
    getServicios()
  }, [setTitle])

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: servicios,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  return (
    <div className="p-4">
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Buscar..."
            value={(table.getState().globalFilter as string) ?? ''}
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columnas <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {!loading ? (
                <>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        Sin resultados.
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-48 text-center">
                    <Loading />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} de {table.getFilteredRowModel().rows.length} filas seleccionadas.
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Anterior
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
