import Link from 'next/link'
import { ListadoServicios } from './list/ListadoServicios'

export default function ServiciosPage () {
  return (
    <section className="p-4">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center justify-between">
            <div className="font-semibold tracking-tight text-xl">Servicios</div>
            <Link href="/sistema/servicios/create" className="bg-primary_web hover:bg-primary_web_dark transition-colors text-white px-4 py-1 rounded-md">
              Crear
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">Listado de servicios</div>
        </div>
        <ListadoServicios />
      </div>
    </section>
  )
}