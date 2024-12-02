/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
export const SwiperClientes = () => {
  const images = [
    { src: '/assets/home/clientes/huawey.png', alt: 'Image 1', hideOnMobile: true },
    { src: '/assets/home/clientes/cliente1.webp', alt: 'Image 2' },
    { src: '/assets/home/clientes/cliente2.png', alt: 'Image 3' },
    { src: '/assets/home/clientes/cliente3.png', alt: 'Image 4' },
    { src: '/assets/home/clientes/cliente4.png', alt: 'Image 5' },
    { src: '/assets/home/clientes/cliente5.png', alt: 'Image 6' },
    { src: '/assets/home/clientes/telefonia.png', alt: 'Image 7' }
  ]
  return (
    <>
      <div className="relative w-full lg:w-[80%] mx-auto flex flex-wrap justify-center my-6 lg:my-10 gap-x-10 gap-y-4 lg:gap-20">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: '10px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15 // Incrementa el delay para cada imagen
            }}
            className={`max-w-[120px] lg:max-w-[238px] ${image.hideOnMobile ? 'hidden lg:block' : ''}`}
            >
            <img
              src={image.src}
              alt={image.alt}
              className="filter grayscale hover:grayscale-0 w-full h-[80px] object-contain object-center"
            />
          </motion.div>
        ))}
      </div>
    </>
  )
}
