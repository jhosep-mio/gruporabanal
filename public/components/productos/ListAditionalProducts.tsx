/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
'use client'
import { Global } from '@/src/helper/Global'
import {
  calculateDiscountPercentage,
  formatPrice
} from '@/public/shared/Funtions'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const ListAditionalProducts = ({ regalos }: any) => {
  return (
    <div className="flex flex-col mt-4  px-2 lg:px-0">
      <h3 className="font-bold text-[12px] uppercase">Regalos</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-2 gap-2">
        {regalos.map((regalo: any) => (
          <motion.div
            key={regalo.id}
            initial={{ y: '20px', opacity: '0' }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="bg-white w-full shadow rounded-md relative group cursor-pointer"
          >
            <Link
              href={`/collections/${regalo.url_categoria}/${regalo.url}`}
              className="p-4 block "
            >
              {regalo.oferta && regalo.oferta > regalo.precio && (
                <span className="bg-main text-white font-bold rounded-md px-2 lg:px-3 py-1 absolute left-2 top-2 text-[10px] lg:text-sm">
                  {calculateDiscountPercentage(regalo.oferta, regalo.precio)} %
                </span>
              )}
              <div className="">
                <img
                  src={`${Global.url}/productos/uploads/${regalo.imagen1}`}
                  alt=""
                  className="w-full h-[120px] object-contain"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="text-[11px] uppercase font-bold line-clamp-1">
                  {regalo.nombre}
                </h2>
                <div className="text-[14px] font-bold mt-2 flex flex-col gap-0">
                  <p className="text-main text-[13px] ">
                    {formatPrice(regalo.precio)}
                  </p>
                  {regalo.oferta && regalo.oferta > regalo.precio
                    ? (
                    <del className="text-[11px] ">
                      {formatPrice(regalo.oferta)}
                    </del>
                      )
                    : (
                    <p className="text-[11px] ">{regalo.categoria}</p>
                      )}
                </div>
              </div>
              <button className="rounded-2xl text-white bg-[#72B269] mt-2 w-full text-[11px]  px-4 py-2 uppercase font-bold group-hover:bg-second_main_dark group-hover:text-white transition-colors">
                COMPRAR
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
