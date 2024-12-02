/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect, useRef, useState } from 'react'
import { Skeleton } from '@/src/components/ui/skeleton'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Global } from '@/src/helper/Global'

export const CarruselCategorias = ({ data }: any) => {
  const swiperRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleSwiper = () => {
      // @ts-ignore
      const swiperInstance = swiperRef.current?.swiper
      if (swiperInstance) {
        const prevButton = document.querySelector(
          '.custom-swiper-button-prev2'
        )
        const nextButton = document.querySelector(
          '.custom-swiper-button-next2'
        )
        if (prevButton && nextButton) {
          const handlePrevClick = () => swiperInstance.slidePrev()
          const handleNextClick = () => swiperInstance.slideNext()

          prevButton.addEventListener('click', handlePrevClick)
          nextButton.addEventListener('click', handleNextClick)

          return () => {
            prevButton.removeEventListener('click', handlePrevClick)
            nextButton.removeEventListener('click', handleNextClick)
          }
        }
      }
    }
    handleSwiper()
  }, [swiperRef.current])

  return (
    <div className="relative w-full mt-6">
      <Swiper
        className={`mySwiper w-full ${
          isLoading ? 'opacity-0 hidden' : 'opacity-100 block'
        }`}
        ref={swiperRef}
        onSwiper={() => setIsLoading(false)}
        speed={1000}
        loop
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25
          }
        }}
      >
        {data.map((categoria: any) => (
          <SwiperSlide className="" key={categoria.id}>
            <motion.div
              initial={{ y: '20px', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              viewport={{ once: true }}
              className="bg-white w-full relative group cursor-pointer group"
            >
              <Link href={`/collections/${categoria.url}`} className="h-[250px] lg:h-[400px] block ">
                <img
                  src={`${Global.url}/categorias/uploads/${categoria.imagen1}`}
                  alt=""
                  className="w-full h-fw-full object-cover"
                />
                <span className="absolute bottom-0 left-0 right-0 text-white h-[250px] lg:h-[400px] shadow_boxes_categoires mt-4 w-full text-[15px] opacity-70 px-4 py-2 uppercase font-bold transition-colors"></span>
                <div className="absolute flex flex-col bottom-0 gap-2 lg:gap-3 left-0 right-0 text-white bg-transparent items-center justify-center my-2 lg:my-4 w-full px-4 py-2 uppercase font-bold transition-colors">
                  <h2 className="text-white text-base lg:text-2xl espaciado">
                    {categoria.nombre}
                  </h2>
                  <button className="bg-main group-hover:bg-main_dark transition-colors px-2 lg:px-6 py-2 lg:py-3 w-[80%] text-white/80 text-[10px] lg:text-[14px] rounded-md">
                    Ver categoria
                  </button>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] lg:gap-[25px] mx-auto ${
          isLoading ? 'absolute inset-0' : 'hidden'
        }`}
      >
        <div className="bg-white w-full p-1 shadow rounded-md relative">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="bg-white w-full p-1 shadow rounded-md relative">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="bg-white w-full p-1 hidden md:block shadow rounded-md relative">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="bg-white w-full p-1 hidden lg:block shadow rounded-md relative">
          <Skeleton className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
