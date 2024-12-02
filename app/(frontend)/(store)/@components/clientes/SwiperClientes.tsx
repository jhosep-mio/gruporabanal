/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules'
import { FaChevronLeft } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

export const SwiperClientes = () => {
  const swiperRef = useRef(null) // Ref for Swiper instance

  useEffect(() => {
    const handleSwiper = () => {
      // @ts-ignore
      const swiperInstance = swiperRef.current?.swiper
      if (swiperInstance) {
        // Event listeners for custom navigation buttons
        const prevButton = document.querySelector('.custom-swiper-button-prev-client')
        const nextButton = document.querySelector('.custom-swiper-button-next-client')

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
    <div className="w-full mt-0 relative lg:px-20">
      <button className="custom-swiper-button-prev-client rounded-full hidden lg:flex items-center justify-center absolute left-4 top-0 bottom-0 my-auto z-[10] hover:scale-105 transition-all">
        <FaChevronLeft className="text-main text-4xl" />
      </button>
      <button className="custom-swiper-button-next-client rounded-full hidden lg:flex items-center justify-center absolute right-4 top-0 bottom-0 my-auto z-[10] hover:scale-105 transition-all">
        <FaChevronLeft className="text-main text-4xl rotate-180" />
      </button>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        className="mySwiperClientes h-full"
        pagination={{
          clickable: true
        }}
        ref={swiperRef} // Set the ref for Swiper instance
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
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
            slidesPerView: 5,
            spaceBetween: 40
          }
        }}
        simulateTouch={false} // Default to true, enables touch interactions
        speed={2000}
        loop
      >
       
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente2.png"
            alt="Banner 1"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente3.png"
            alt="Banner 3"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente4.png"
            alt="Banner 4"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente5.png"
            alt="Banner 6"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente1.png"
            alt="Banner 1"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente2.png"
            alt="Banner 1"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente3.png"
            alt="Banner 3"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente4.png"
            alt="Banner 4"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center group">
          <img
            src="/assets/home/clientes/cliente5.png"
            alt="Banner 6"
            className="p-2 w-96 h-24 m-auto object-contain block grayscale group-hover:grayscale-0 transition-none"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
