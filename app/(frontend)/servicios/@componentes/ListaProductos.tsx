/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export const ListaProductos = ({ data }: any) => {
  const router = useRouter()

  return (
    <>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-4 gap-2">
        {data.length > 0 ? (
          data.map((product: any) => (
            <div
              onClick={() => router.push(`/servicios/${product.url}`)}
              className="lg:max-w-sm bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
              key={product.id}
            >
              <div className="relative h-48 lg:h-64  transition-all overflow-hidden ">
                <div className="absolute w-full h-full inset-0 bg-black/30 z-[10]"></div>
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/servicios/${product.imagen1}`}
                  alt={product.titulo}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-montserratBold line-clamp-2 text-black">{product.titulo}</h3>
                <div className="text-gray-600 text-sm line-clamp-4 mb-4 h-20">{product.resumen}</div>
                <Link
                  href={`/servicios/${product.url}`}
                  className=" bg-primary_web hover:bg-secondary_web transition-colors rounded-md block w-full lg:px-6 py-2 lg:w-fit text-center text-white font-proximaSemibold text-base lg:text-lg"
                >
                  Más información
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex mt-6 gap-2 text-gray-500">
            <p>No hay productos disponibles</p>
          </div>
        )}
      </div>
    </>
  )
}
