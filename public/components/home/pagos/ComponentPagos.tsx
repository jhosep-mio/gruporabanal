/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const ComponentPagos = () => {
  return (
    <>
      <motion.div
        initial={{ x: '-30px', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        viewport={{ once: true }}
        className="hidden lg:flex w-full gap-4 max-w-[400px] mx-auto"
      >
        <img
          src="assets/home/pagos/camion.png"
          alt=""
          className="w-[100px] h-full object-contain mx-auto object-center"
        />
        <div className="flex flex-col justify-center gap-1">
          <strong className="uppercase font-bold text-main text-xs lg:text-xl text-left font-montserratBold">
            Delivery
          </strong>
          <p className="text-[14px] text-left text-white">
            Envíos seguros y cumpliendo los protocolos de seguridad
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: '-20px', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        viewport={{ once: true }}
        className="flex w-full gap-4 max-w-[400px] mx-auto"
      >
        <img
          src="assets/home/pagos/seguridad.png"
          alt=""
          className="w-[40px] lg:w-[80px] h-full object-contain mx-auto object-center"
        />
        <div className="flex flex-col justify-center gap-1">
          <strong className="uppercase font-bold text-main text-xs lg:text-xl text-left font-montserratBold">
            seguridad
          </strong>
          <p className="text-[10px] lg:text-[14px] text-left text-white">
            Compras de manera simple y segura de manera online
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: '30px', opacity: '0' }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        viewport={{ once: true }}
        className="flex w-full gap-2 max-w-[400px] mx-auto"
      >
        <img
          src="assets/home/pagos/pagos.png"
          alt=""
          className="w-[50px] lg:w-[100px] h-full object-contain mx-auto object-center"
        />
        <div className="flex flex-col justify-center gap-1">
          <strong className="uppercase font-bold text-main text-xs lg:text-xl text-left font-montserratBold">
            Pagos
          </strong>
          <p className="text-[10px] lg:text-[14px] text-left text-white">
            Aceptamos todas las opciones de pagos para tus compras
          </p>
        </div>
      </motion.div>
    </>
  )
}
