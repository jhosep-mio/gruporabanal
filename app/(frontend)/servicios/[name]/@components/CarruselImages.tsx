/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { calculateDiscountPercentage } from '@/components/Funtions'

export const CarruselImages = ({ product }: any) => {
  const [imagenP] = useState(product.imagen1)
  return (
    <div className="flex flex-col">
      <div className=" rounded-md p-4 h-[260px] md:h-[500px] flex items-center justify-center relative">
        {product.oferta && parseFloat(product.oferta) > parseFloat(product.precio) && (
          <span className="bg-main text-white font-bold rounded-md px-2 lg:px-3 py-1 absolute right-2 top-2 text-[12px] lg:text-sm">
            {calculateDiscountPercentage(product.oferta, product.precio)} %
          </span>
        )}
        <motion.img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/servicios/${imagenP}`}
          alt=""
          className="w-full h-full object-contain object-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={imagenP}
        />
      </div>
    </div>
  )
}
