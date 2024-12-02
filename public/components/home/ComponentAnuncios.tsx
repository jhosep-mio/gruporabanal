/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
export const ComponentAnuncios = () => {
  return (
    <>
      <Link href="/promociones " className='lg:col-span-2 '>
        <motion.img
          initial={{ y: '20px', opacity: '0' }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          viewport={{ once: true }}
          src="https://floreriasb.com.pe/wp-content/uploads/2022/11/BANNER-PROMOCIONES-ES-2048x341.jpg"
          alt=""
          className="w-full min-h-[120px] md:min-h-[245px] lg:min-h-max object-cover cursor-pointer"
        />
      </Link>
      <Link href="/collections/funebres">
        <motion.img
          initial={{ x: '-20px', opacity: '0' }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          viewport={{ once: true }}
          src="https://floreriasb.com.pe/wp-content/uploads/2023/03/Banner-chico-girasoles-1.jpg"
          alt=""
          className="w-full min-h-[120px] md:min-h-[245px] lg:min-h-max object-cover cursor-pointer"
        />
      </Link>
      <Link href="/collections/ramos">
        <motion.img
          initial={{ x: '20px', opacity: '0' }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          viewport={{ once: true }}
          src="https://floreriasb.com.pe/wp-content/uploads/2024/01/banner-chico-portada-ramos.jpg"
          alt=""
          className="w-full min-h-[120px] md:min-h-[245px] lg:min-h-max object-cover cursor-pointer"
        />
      </Link>
    </>
  )
}
