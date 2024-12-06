/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'
import { FaCalendarAlt } from 'react-icons/fa'
import Link from 'next/link'
import { formatearFecha, obtenerDiaSemana, obtenerMesAbreviado } from '@/components/Funtions'

export const SwiperProductos = ({ blogs }: any) => {
  return (
    <div className="w-full mt-0 relative ">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiperClientes h-full"
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        speed={1000}
        loop
      >
        {blogs.length > 0 &&
          blogs.map((product: any) => (
            <SwiperSlide className="w-full bg-white shadow-lg rounded-lg overflow-hidden max-w-[500px] cursor-pointer group" key={product.id}>
              <Link href={`/noticias/${product.url}`}>
                <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/30 group-hover:before:bg-black/40 transition-all duration-300">
                  <img className="w-full h-64 object-cover object-center" src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/blogs/${product.imagen1}`} alt="Edificio" />
                  <div className="absolute bottom-0 left-10 bg-primary_web text-white text-2xl text-center py-2 px-4 rounded-t-lg flex flex-col">
                    <span className="">{obtenerDiaSemana(product.updated_at)}</span> <span className="text-base text-gray-200">{obtenerMesAbreviado(product.updated_at)}</span>
                  </div>
                </div>
                <div className="w-fit mx-auto flex gap-4 bg-gray-200 px-4 py-2 rounded-b-lg">
                  <div className="w-fit flex items-center gap-2">
                    <FaCalendarAlt className="text-primary_web" />
                    <span className="w-full text-gray-600 first-letter:uppercase">{formatearFecha(product.updated_at)}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl text-black/80 font-proximaBold font-bold line-clamp-1">{product.titulo}</h3>
                  <p className="text-gray-600 text-base lg:text-xl font-proximaRegular mt-4 mb-6 line-clamp-4 text-justify">{product.resumen}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
