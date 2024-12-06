/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'

export const CarruselProducts = ({ data, id }: any) => {
  const swiperRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleSwiper = () => {
      // @ts-ignore
      const swiperInstance = swiperRef.current?.swiper
      if (swiperInstance) {
        const prevButton = document.querySelector(`.custom-swiper-button-prev${id}`)
        const nextButton = document.querySelector(`.custom-swiper-button-next${id}`)
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
  const router = useRouter()

  return (
    <div className="relative w-full mt-4 lg:mt-6">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        className={`mySwiper w-full ${isLoading ? 'opacity-0 hidden' : 'opacity-100 block'}`}
        ref={swiperRef}
        onSwiper={() => setIsLoading(false)}
        // onSlideChangeTransitionStart={onSlideChangeTransitionStart}
        simulateTouch={false}
        autoplay={{
          delay: 7000,
          reverseDirection: false
        }}
        speed={300}
        loop
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
      >
        {data?.map((product: any) => (
          <SwiperSlide className="" key={product.id}>
            <div
              onClick={() => router.push(`/servicios/${product.url}`)}
              className=" bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
              key={product.id}
            >
              <div className="relative h-48 lg:h-64  transition-all overflow-hidden ">
                <div className="absolute w-full h-full inset-0 bg-black/30 z-[10]"></div>
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/servicios/${product.imagen1}`}
                  alt="Edificio"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-montserratBold text-black">{product.titulo}</h3>
                <h4 className="text-xs text-gray-500 mb-2 ">Servicios</h4>
                <div className="text-gray-600 text-sm line-clamp-3 mb-4">{product.resumen}</div>
                <Link
                  href={`/servicios/${product.url}`}
                  className=" bg-primary_web hover:bg-secondary_web transition-all rounded-md px-2 lg:px-6 py-2 w-full lg:w-fit block text-center text-white font-proximaSemibold text-sm lg:text-lg"
                >
                  Más información
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 mx-auto ${isLoading ? 'absolute inset-0' : 'hidden'}`}>
        <div className="bg-white w-full lg:h-[466px] p-4 lg:p-6 block shadow rounded-md relative">
          <div className="w-[150px] lg:w-full h-[150px] lg:h-[250px] flex justify-center items-center">
            <Skeleton className="w-[120px] h-[120px] lg:w-full m-auto lg:h-[250px] rounded-full" />
          </div>
          <div className="flex flex-col mt-4">
            <Skeleton className="w-full lg:w-[250px] h-[35px] lg:h-[40px] rounded-full" />
            <div className="font-bold mt-5 flex flex-col gap-0">
              <Skeleton className="w-[65px] h-[16px] lg:h-[18.5px] rounded-full" />
              <Skeleton className="w-[65px] h-[16px] lg:h-[19.5px] mt-1 rounded-full" />
            </div>
          </div>
          <Skeleton className="rounded-2xl text-black bg-[#F5F5F5] mt-4 w-full text-[13px] h-[33px] px-4 py-2 uppercase font-bold" />
        </div>
        <div className="bg-white w-full lg:h-[466px] p-4 lg:p-6 block  shadow rounded-md relative">
          <div className="w-[150px] lg:w-full h-[150px] lg:h-[250px] flex justify-center items-center">
            <Skeleton className="w-[120px] h-[120px] lg:w-full m-auto lg:h-[250px] rounded-full" />
          </div>
          <div className="flex flex-col mt-4">
            <Skeleton className="w-full lg:w-[250px] h-[35px] lg:h-[40px] rounded-full" />
            <div className="font-bold mt-5 flex flex-col gap-0">
              <Skeleton className="w-[65px] h-[16px] lg:h-[18.5px] rounded-full" />
              <Skeleton className="w-[65px] h-[16px] lg:h-[19.5px] mt-1 rounded-full" />
            </div>
          </div>
          <Skeleton className="rounded-2xl text-black bg-[#F5F5F5] mt-4 w-full text-[13px] h-[33px] px-4 py-2 uppercase font-bold" />
        </div>
        <div className="bg-white w-full lg:h-[466px] p-4 lg:p-6 hidden md:block  shadow rounded-md relative">
          <div className="w-[150px] lg:w-full h-[150px] lg:h-[250px] flex justify-center items-center">
            <Skeleton className="w-[120px] h-[120px] lg:w-full m-auto lg:h-[250px] rounded-full" />
          </div>
          <div className="flex flex-col mt-4">
            <Skeleton className="w-full lg:w-[250px] h-[35px] lg:h-[40px] rounded-full" />
            <div className="font-bold mt-5 flex flex-col gap-0">
              <Skeleton className="w-[65px] h-[16px] lg:h-[18.5px] rounded-full" />
              <Skeleton className="w-[65px] h-[16px] lg:h-[19.5px] mt-1 rounded-full" />
            </div>
          </div>
          <Skeleton className="rounded-2xl text-black bg-[#F5F5F5] mt-4 w-full text-[13px] h-[33px] px-4 py-2 uppercase font-bold" />
        </div>
        <div className="bg-white w-full lg:h-[466px] p-4 lg:p-6 hidden md:block  shadow rounded-md relative">
          <div className="w-[150px] lg:w-full h-[150px] lg:h-[250px] flex justify-center items-center">
            <Skeleton className="w-[120px] h-[120px] lg:w-full m-auto lg:h-[250px] rounded-full" />
          </div>
          <div className="flex flex-col mt-4">
            <Skeleton className="w-full lg:w-[250px] h-[35px] lg:h-[40px] rounded-full" />
            <div className="font-bold mt-5 flex flex-col gap-0">
              <Skeleton className="w-[65px] h-[16px] lg:h-[18.5px] rounded-full" />
              <Skeleton className="w-[65px] h-[16px] lg:h-[19.5px] mt-1 rounded-full" />
            </div>
          </div>
          <Skeleton className="rounded-2xl text-black bg-[#F5F5F5] mt-4 w-full text-[13px] h-[33px] px-4 py-2 uppercase font-bold" />
        </div>
        <div className="bg-white w-full lg:h-[466px] p-4 lg:p-6 hidden lg:block  shadow rounded-md relative">
          <div className="w-[150px] lg:w-full h-[150px] lg:h-[250px] flex justify-center items-center">
            <Skeleton className="w-[120px] h-[120px] lg:w-full m-auto lg:h-[250px] rounded-full" />
          </div>
          <div className="flex flex-col mt-4">
            <Skeleton className="w-full lg:w-[250px] h-[35px] lg:h-[40px] rounded-full" />
            <div className="font-bold mt-5 flex flex-col gap-0">
              <Skeleton className="w-[65px] h-[16px] lg:h-[18.5px] rounded-full" />
              <Skeleton className="w-[65px] h-[16px] lg:h-[19.5px] mt-1 rounded-full" />
            </div>
          </div>
          <Skeleton className="rounded-2xl text-black bg-[#F5F5F5] mt-4 w-full text-[13px] h-[33px] px-4 py-2 uppercase font-bold" />
        </div>
      </div>
    </div>
  )
}
