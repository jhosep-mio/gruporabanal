/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Global } from '@/src/helper/Global'
import {
  calculateDiscountPercentage,
  formatPrice
} from '@/public/shared/Funtions'
import { Paginacion } from '@/public/shared/Paginacion'
import { useRouter } from 'next/navigation'
export const ListaProductosPromociones = ({
  data,
  totalPages,
  currentPage,
  sort,
  min_price,
  max_price
}: any) => {
  const router = useRouter()

  const handlePageChange = (page: number) => {
    const queryParams = new URLSearchParams()
    if (sort) queryParams.set('sort_by', sort)
    if (min_price) queryParams.set('min_price', min_price)
    if (max_price) queryParams.set('max_price', max_price)
    if (page && page > 1) queryParams.set('page', page.toString())
    const queryString = queryParams.toString()

    router.push(`/promociones?${queryString}`)
  }

  return (
    <>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-2">
        {data.length > 0
          ? (
              data.map((product: any) => (
            <motion.div
              key={product.id}
              initial={{ y: '20px', opacity: '0' }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              viewport={{ once: true }}
              className="bg-white w-full shadow rounded-md relative group cursor-pointer"
            >
              <Link
                href={`/collections/${product.url_categoria}/${product.url}`}
                className="lg:h-[466px] p-4 lg:p-6 block "
              >
                {product.oferta && parseFloat(product.oferta) > parseFloat(product.precio) && (
                  <span className="bg-main text-white font-bold rounded-md px-2 lg:px-3 py-1 absolute left-2 top-2 text-[11px] lg:text-sm">
                    {calculateDiscountPercentage(
                      product.oferta,
                      product.precio
                    )}{' '}
                    %
                  </span>
                )}
                <div className="">
                  <img
                    src={`${Global.url}/productos/uploads/${product.imagen1}`}
                    alt=""
                    className="w-full h-[150px] lg:h-[250px] object-contain"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <h2 className="text-[11px] lg:text-[13px] uppercase font-bold line-clamp-2 min-h-[33px] lg:min-h-[39px] flex items-center">
                    {product.nombre}
                  </h2>
                  <div className="text-[14px] font-bold mt-5 flex flex-col gap-0">
                    <p className="text-main text-[13px] lg:text-[15px] ">
                      {formatPrice(product.precio)}
                    </p>
                    {product.oferta && parseFloat(product.oferta) > parseFloat(product.precio)
                      ? (
                      <del className="text-[11px] lg:text-[13px]">
                        {formatPrice(product.oferta)}
                      </del>
                        )
                      : (
                      <p className="text-[11px] lg:text-[13px] text-gray-600">
                        {product.nombre_categoria}
                      </p>
                        )}
                  </div>
                </div>
                <button className="rounded-2xl text-white bg-[#72B269] mt-4 w-full text-[11px] lg:text-[13px] px-4 py-2 uppercase font-bold group-hover:bg-second_main_dark group-hover:text-white transition-colors">
                  COMPRAR
                </button>
              </Link>
            </motion.div>
              ))
            )
          : (
          <div className="w-full flex mt-6 gap-2 text-gray-500">
            <p>No hay productos disponibles</p>
          </div>
            )}
      </div>
      {data.length > 0 && (
        <div className="w-full flex justify-center items-center mt-6 gap-2">
          <Paginacion
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  )
}
