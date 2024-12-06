import Link from 'next/link'
import { ListadoBlog } from './list/ListadoBlog'

export default function BlogsPage () {
  return (
    <section className="p-4">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center justify-between">
            <div className="font-semibold tracking-tight text-xl">Blogs</div>
            <Link href="/sistema/blogs/create" className="bg-primary_web hover:bg-primary_web_dark transition-colors text-white px-4 py-1 rounded-md">
              Crear
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">Listado de blogs</div>
        </div>
        <ListadoBlog />
      </div>
    </section>
  )
}
