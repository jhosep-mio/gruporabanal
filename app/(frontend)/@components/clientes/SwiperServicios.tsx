/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'

export const SwiperServicios = ({ servicios }: { servicios: any[] }) => {
  return (
    <div className="w-full mt-0 relative ">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiperClientes2 h-full"
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
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
        speed={1000}
        loop
      >
        {servicios?.map((servicio) => (
          <SwiperSlide
            className="w-full group !h-[350px] 2xl:!h-[420px] !flex justify-center items-end overflow-hidden cursor-pointer"
            key={servicio.id}
          >
            <Link
              href={`servicios/${servicio.url}`}
              className={'absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'}
              style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/servicios/${servicio.imagen1})` }}
            />
            <div className="w-full mb-6">
              <div className="bg-white overflow-x-clip overflow-y-clip group-hover:text-white transition-colors duration-300 flex items-center justify-center w-[90%] mx-auto py-4 relative">
                <div className="absolute inset-0 bg-primary_web transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                <h3 className="text-black group-hover:text-white font-bold text-xl relative z-10">{servicio.titulo}</h3>
                <span className="bottom-full bg-primary_web h-2 w-4/5 right-0 absolute"></span>
                <span className="text-main font-proximaSemibold text-lg absolute top-0 right-0 bg-primary_web text-white p-2 z-10">
                  <FaPlus />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
