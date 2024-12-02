/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Pagination } from 'swiper/modules'
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const SwiperTestimonios = () => {
  return (
    <div className="relative w-full mt-0">
      <Swiper
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true
        }}
        className={'mySwiper mySwiperTestimonials w-full pb-10'}
        speed={1000}
        loop
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }}
      >
        <SwiperSlide className="p-4 lg:p-6">
          <motion.div
            initial={{ y: '20px', opacity: '0' }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="shadow-lg flex justify-between flex-col p-4 lg:p-6 rounded-md overflow-hidden bg-white h-[290px]"
          >
            <div className="flex flex-col gap-3 items-center">
              <Avatar className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
                <AvatarImage
                  src="/assets/home/formas/person.png"
                  className=" object-contain"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-6 h-[110px]">
              <p className="text-black/60 text-center text-sm lg:text-base">
                ¡Entender un poco mejor las flores y el simbolismo oculto detrás
                de ellas me ayudó a organizar mucho mejor los ramos de flores
                para mi esposa!
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-center text-sm font-bold">John Perez</h3>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="p-4 lg:p-6">
          <motion.div
            initial={{ y: '20px', opacity: '0' }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="shadow-lg flex justify-between flex-col p-4 lg:p-6 rounded-md overflow-hidden bg-white  h-[290px]"
          >
            <div className="flex flex-col gap-3 items-center">
              <Avatar className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
                <AvatarImage
                  src="/assets/home/formas/person.png"
                  className=" object-contain"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-6 h-[110px]">
              <p className="text-black/60 text-center text-sm lg:text-base  ">
                ¡Siempre me ha gustado comprar flores, incluso cuando
                simplemente no hay una ocasión específica para ello, solo para
                sentirme mejor. ¡Esta tienda ofrece la mejor gama!
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-center text-sm font-bold">Mary Gonzales</h3>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="p-4 lg:p-6">
          <motion.div
            initial={{ y: '20px', opacity: '0' }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="shadow-lg flex justify-between flex-col p-4 lg:p-6 rounded-md overflow-hidden bg-white  h-[290px]"
          >
            <div className="flex flex-col gap-3 items-center">
              <Avatar className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
                <AvatarImage
                  src="/assets/home/formas/person.png"
                  className=" object-contain"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-black/60 text-center text-sm lg:text-base h-[110px]">
                ¡Como hombre, no tengo absolutamente ningún conocimiento de
                flores. ¡Por eso me siento tan bien cuando los asesores de esta
                tienda me ayudan a elegir un ramo!
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-center text-sm font-bold">Andrew Zamora</h3>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="p-4 lg:p-6">
          <motion.div
            initial={{ y: '20px', opacity: '0' }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="shadow-lg flex justify-between flex-col p-4 lg:p-6 rounded-md overflow-hidden bg-white h-[290px]"
          >
            <div className="flex flex-col gap-3 items-center">
              <Avatar className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
                <AvatarImage
                  src="/assets/home/formas/person.png"
                  className=" object-contain"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-6 h-[110px]">
              <p className="text-black/60 text-center text-sm lg:text-base">
                ¡Entender un poco mejor las flores y el simbolismo oculto detrás
                de ellas me ayudó a organizar mucho mejor los ramos de flores
                para mi esposa!
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-center text-sm font-bold">John Perez</h3>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="p-4 lg:p-6">
          <motion.div
            initial={{ y: '20px', opacity: '0' }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="shadow-lg flex justify-between flex-col p-4 lg:p-6 rounded-md overflow-hidden bg-white  h-[290px]"
          >
            <div className="flex flex-col gap-3 items-center">
              <Avatar className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
                <AvatarImage
                  src="/assets/home/formas/person.png"
                  className=" object-contain"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-6 h-[110px]">
              <p className="text-black/60 text-center text-sm lg:text-base  ">
                ¡Siempre me ha gustado comprar flores, incluso cuando
                simplemente no hay una ocasión específica para ello, solo para
                sentirme mejor. ¡Esta tienda ofrece la mejor gama!
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-center text-sm font-bold">Mary Gonzales</h3>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="p-4 lg:p-6">
          <motion.div
            initial={{ y: '20px', opacity: '0' }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="shadow-lg flex justify-between flex-col p-4 lg:p-6 rounded-md overflow-hidden bg-white  h-[290px]"
          >
            <div className="flex flex-col gap-3 items-center">
              <Avatar className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
                <AvatarImage
                  src="/assets/home/formas/person.png"
                  className=" object-contain"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-black/60 text-center text-sm lg:text-base h-[110px]">
                ¡Como hombre, no tengo absolutamente ningún conocimiento de
                flores. ¡Por eso me siento tan bien cuando los asesores de esta
                tienda me ayudan a elegir un ramo!
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-center text-sm font-bold">Andrew Zamora</h3>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
