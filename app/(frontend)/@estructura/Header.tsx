/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MenuBar } from './MenuBar'
import { Carrito } from './Carrito'
import { toast, Toaster } from 'sonner'
import useAuth from '@/public/hooks/useAuth'
import { useRouter, usePathname } from 'next/navigation'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import { cn } from '@/src/lib/utils'

export const Header = () => {
  const router = useRouter()
  const { openCart, setOpenCart } = useAuth()
  const [openBuscador, setOpenBuscador] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    if (openCart) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [openCart])

  useEffect(() => {
    if (openBuscador) {
      const timer = setTimeout(() => {
        setOpenBuscador(false)
      }, 5000)
      const handleClickOutside = (event: any) => {
        if (
          // @ts-ignore
          !document.querySelector('.search-container').contains(event.target)
        ) {
          setOpenBuscador(false)
        }
      }
      document.addEventListener('click', handleClickOutside)
      return () => {
        clearTimeout(timer)
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [openBuscador])

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleKeyDown = (e: any) => {
    if (e.key == 'Enter') {
      searching()
    }
  }

  const searching = () => {
    if (searchTerm.length >= 3) {
      setOpenBuscador(false)
      setOpenMenu(false)
      router.push(`/search/${searchTerm}`)
    } else {
      toast.warning('Minimo 3 letras')
    }
  }

  const currentRoute = usePathname()

  return (
    <>
      <Toaster position="top-center" richColors />
      <header
        className={`px-0 w-full flex flex-col bg-main_dark lg:bg-secondary overflow-hidden fixed z-[50] h-fit  shadow-md lg:shadow-none transition-[height] duration-300 ease-in-out ${
          isScrolled ? 'handle_blur_header lg:h-[100px]' : 'lg:h-[160px] '
        }`}
      >
        {/* HEADER TOP */}
        <section
          className={cn(
            'w-full h-fit bg-[#f1f1f1] px-20 transition-[height] duration-300 ease-in-out overflow-hidden hidden lg:block',
            isScrolled ? 'h-0' : 'h-[60px]'
          )}
        >
          <div className="w-full flex justify-between gap-6 h-[60px] ">
            <div className="w-full h-[60px] flex items-center gap-4 justify-start">
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded-lg">
                <FaTwitter />
              </div>
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded-lg">
                <FaSquareFacebook />
              </div>
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded-lg">
                <FaTiktok />
              </div>
              <div className="bg-white flex items-center justify-center px-3 py-2 rounded-lg">
                <FaYoutube />
              </div>
            </div>
            <div className="flex items-center justify-end gap-6 w-full">
              <div className="flex items-center gap-2 text-xs">
                <FaEnvelope className="text-primary" />
                <span className="text-secondary">contacto@gruporabanal.com.pe</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-secondary flex-1"> C.A.C Sector B, 1ra etapa, Mod. A Of. 215 - 216 - Callao</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <FaClock className="text-primary" />
                <span className="text-secondary flex-1">Lunes a Viernes de 09:00 a 18:00</span>
              </div>
            </div>
          </div>
        </section>
        {/* CELULAR  */}
        <div className="flex bg-primary lg:hidden px-4 justify-between lg:justify-center items-center relative w-fu w-full lg:pb-2 lg:pt-1  h-[84px] lg:h-[120px]">
          <div className="flex lg:hidden  h-full gap-2 items-center pr-4 border-r border-gray-300" onClick={() => setOpenMenu(!openMenu)}>
            <HiBars3CenterLeft className="text-[2rem] text-white/80" />
          </div>
          <Link href="/">
            <img src="/assets/estructura/logo.png" alt="" className="w-[160px] lg:w-[150px] object-contain " />
          </Link>
          <Link
            href="https://wa.me/+51998181816"
            target="_blank"
            className="border-l pl-4 border-l-gray-300 h-full flex lg:hidden gap-2 items-center "
          >
            <div className="relative">
              <FaWhatsapp className="text-[1.7rem] text-white/80 " />
            </div>
          </Link>
        </div>
        {/* PC */}
        <div
          className={`hidden lg:flex justify-between lg:justify-center pr-20 items-center relative ${
            !isScrolled ? 'pt-0 2xl:pt-0' : ''
          } transition-all h-[84px] lg:h-[120px]`}
        >
          <Link href="/" className="bg-primary h-full px-20 flex items-center justify-center">
            <img src="/assets/estructura/logo.png" alt="" className="w-[100px] lg:w-[32rem] object-contain" />
          </Link>
          <div className="w-fit pl-20 flex justify-end items-center gap-10 2xl:gap-10 text-base text-white">
            <Link
              href="/"
              className={`font-montserratMedium hover:text-main transition-colors border-b hover:border-b-main ${
                currentRoute == '/' ? 'text-main border-b-main' : 'text-white border-b-transparent'
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className={`font-montserratMedium hover:text-main transition-colors border-b hover:border-b-main ${
                currentRoute == '/nosotros' ? 'text-main border-b-main' : 'text-white border-b-transparent'
              }`}
            >
              {' '}
              Nosotros
            </Link>
            <Link
              href="/servicios"
              className={`font-montserratMedium hover:text-main transition-colors border-b hover:border-b-main ${
                currentRoute == '/servicios' ? 'text-main border-b-main' : 'text-white border-b-transparent'
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/"
              className={`font-montserratMedium hover:text-main transition-colors border-b hover:border-b-main ${
                currentRoute == '/tracking' ? 'text-main border-b-main' : 'text-white border-b-transparent'
              }`}
            >
              Tracking
            </Link>
            <Link
              href="/contacto"
              className={`font-montserratMedium hover:text-main transition-colors border-b hover:border-b-main ${
                currentRoute == '/contacto' ? 'text-main border-b-main' : 'text-white border-b-transparent'
              }`}
            >
              Contacto
            </Link>
          </div>
          <div className="w-full flex items-center justify-end gap-10 ml-4 text-lg text-white ">
            <Link href="tel:+51998181816" className="flex items-center gap-4">
              <div className="h-12 px-4 flex items-center justify-center bg-primary">
                <FaPhone className="text-lg" />
              </div>
              <div className="flex flex-col gap-1 font-montserratMedium">
                <p className="text-sm font-extralight">Llamar</p>
                <p className="text-base font-bold ">998181816</p>
              </div>
            </Link>
            <Link href="https://wa.me/+51998181816" target='_blank' className="h-12 px-4 flex items-center justify-center bg-primary hover:bg-primary/80 transition-colors duration-300">
              <p className="text-base">Solicitar cotización</p>
            </Link>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {openMenu && (
          <MenuBar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            handleKeyDown={handleKeyDown}
            searching={searching}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>{openCart && <Carrito openCar={openCart} setOpenCar={setOpenCart} />}</AnimatePresence>
    </>
  )
}
