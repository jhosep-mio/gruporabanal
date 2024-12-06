/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
// pages/index.js
'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export const Carrusel = ({ configuracion }: any) => {
  const [imageIndex, setImageIndex] = useState(0) // Controla el índice de la imagen

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)) // Cambia entre 0 y 1 cada 5 segundos
    }, 8000) // 5000ms = 5 segundos

    return () => clearInterval(interval) // Limpia el intervalo cuando el componente se desmonta
  }, [])

  const images = [
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/configuraciones/${configuracion.imagen1}`,
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/configuraciones/${configuracion.imagen2}`
  ]

  return (
    <section>
      <div className="mySwiper relative w-full h-[550px] lg:min-h-screen">
        <div className="relative h-full overflow-hidden">
          <motion.img
            src={images[0]}
            alt="Banner 1"
            className="clip w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: imageIndex === 0 ? 1 : 0,
              scale: imageIndex === 0 ? 1.06 : 1
            }}
            transition={{
              opacity: { duration: 1 }, // La opacidad cambia en 1 segundo
              scale: { duration: 8, ease: 'easeInOut' } // El zoom se realiza en 5 segundos
            }}
          />

          <motion.img
            src={images[1]}
            alt="Banner 2"
            className="clip w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: imageIndex === 1 ? 1 : 0,
              scale: imageIndex === 1 ? 1.06 : 1
            }}
            transition={{
              opacity: { duration: 1 }, // La opacidad cambia en 1 segundo
              scale: { duration: 8, ease: 'easeInOut' } // El zoom se realiza en 5 segundos
            }}
          />

          <div className="w-full h-full absolute z-[2] inset-0 bg_degradado"></div>
          <div className="absolute inset-0 container mx-auto h-[calc(100vh-160px)] py-10 lg:py-0 w-full flex flex-col lg:flex-row justify-between items-center z-[3] text-white font-bold gap-10 ">
            <div className="flex flex-col gap-2 lg:gap-0 h-[100%] lg:pt-10 items-center lg:items-start">
              <div className="w-fit h-fit">
                <img src="/assets/home/icon.png" alt="" className="w-[50px] lg:w-fit h-[50px] lg:h-[80px] " />
              </div>
              <h2 className="uppercase text-lg text-center lg:text-start lg:text-[2.5rem]   font-roundkeyMedium tracking-wide font-light leading-10 mt-0 lg:mt-6">
                {configuracion.titulo1}
              </h2>
              <h2 className=" text-5xl  lg:text-6xl 2xl:text-7xl font-roundkeyMedium tracking-wide font-light lg:leading-none">
                {configuracion.titulo2}
              </h2>
              <h2 className=" text-6xl lg:text-7xl 2xl:text-8xl font-roundkeyMedium tracking-wide font-light lg:leading-[4rem] 2xl:leading-[5rem]">
                {configuracion.titulo3}
              </h2>
              {/* <span className="block h-[4px] w-[100px] bg-main my-4 "></span> */}
              <p className="text-sm text-center lg:text-start lg:text-lg text-white max-w-[50rem] mt-10 font-proximaRegular font-light">
                {configuracion.descripcion}
              </p>
              <Link
                href={configuracion?.whatsapp ?? ''}
                target="_blank"
                className="bg-primary_web flex items-center justify-center text-center hover:bg-primary_web_dark transition-all duration-300 px-4 lg:px-10 py-2 lg:py-4 w-fit text-lg mt-4 lg:mt-10"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
          <img
            src={'/assets/home/fondo_bottom.png'}
            alt="Banner 1"
            className="absolute hidden lg:block -bottom-[10vh] right-0 left-0 z-[2] w-full mx-auto h-fit"
          />
          <img
            src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/04/1.jpg'}
            alt="Banner 1"
            className="clip w-full h-full relative before:bg-black before:absolute before:inset-0 before:opacity-55 before:w-full before:h-full object-cover block lg:hidden"
          />
        </div>
      </div>
    </section>
  )
}
