/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MenuBar } from './MenuBar'
import { Carrito } from './Carrito'
import { useRouter, usePathname } from 'next/navigation'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { FaClock, FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import useAuthPublic from '@/hooks/useAuthPublic'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { toast } from '@/hooks/use-toast'

export const Header = () => {
  const router = useRouter()
  const { openCart, setOpenCart, configuracion } = useAuthPublic()
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
    setIsScrolled(window.scrollY > 60)
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
      toast({
        title: 'Minimo 3 letras',
        description: 'Debes ingresar al menos 3 letras para realizar la busqueda'
      })
    }
  }

  const currentRoute = usePathname()

  return (
    <>
      <Toaster />
      <header
        className={`px-0 w-full flex flex-col bg-primary_web_dark lg:bg-secondary_web overflow-hidden fixed z-[50] h-fit  shadow-md lg:shadow-none transition-[height] duration-50  ${
          isScrolled ? 'handle_blur_header lg:h-[100px]' : 'lg:h-[180px] '
        }`}
      >
        {/* HEADER TOP */}
        <section
          className={cn(
            'w-full h-fit bg-[#f1f1f1] px-20 transition-[height] duration-200  overflow-hidden hidden lg:block',
            isScrolled ? 'h-0' : 'h-[60px]'
          )}
        >
          <div className="w-full flex justify-between gap-6 h-[60px] ">
            <div className="w-full h-[60px] flex items-center gap-4 justify-start">
              <Link href={configuracion?.youtube ?? '#'} target='_blank' className="bg-white flex items-center justify-center px-3 py-2 rounded-lg">
                <FaYoutube className="text-black" />
              </Link>
              <Link href={configuracion?.facebook ?? '#'} target='_blank' className="bg-white flex items-center justify-center px-3 py-2 rounded-lg">
                <FaSquareFacebook className="text-black" />
              </Link>
              <Link href={configuracion?.instagram ?? '#'} target='_blank' className="bg-white flex items-center justify-center px-3 py-2 rounded-lg">
                <FaInstagram className="text-black" />
              </Link>
              <Link href={configuracion?.linkedin ?? '#'} target='_blank' className="bg-white flex items-center justify-center px-3 py-2 rounded-lg">
                <FaLinkedin className="text-black" />
              </Link>
            </div>
            <div className="flex items-center justify-end gap-6 w-full">
              <div className="flex items-center gap-2 text-xs">
                <FaEnvelope className="text-primary_web" />
                <span className="text-secondary_web">{configuracion?.correo1}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <FaMapMarkerAlt className="text-primary_web" />
                <span className="text-secondary_web flex-1"> {configuracion?.direccion}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <FaClock className="text-primary_web" />
                <span className="text-secondary_web flex-1">{configuracion?.horario1}</span>
              </div>
            </div>
          </div>
        </section>
        {/* CELULAR  */}
        <div className="flex bg-primary_web lg:hidden px-4 justify-between lg:justify-center items-center relative w-fu w-full lg:pb-2 lg:pt-1  h-[84px] lg:h-[120px]">
          <div className="flex lg:hidden  h-full gap-2 items-center pr-4 border-r border-gray-300" onClick={() => setOpenMenu(!openMenu)}>
            <HiBars3CenterLeft className="text-[2rem] text-white/80" />
          </div>
          <Link href="/">
            <img src="/assets/estructura/logo_white.webp" alt="" className="w-[180px] lg:w-[150px] object-contain " />
          </Link>
          <Link
            href={configuracion?.whatsapp ?? '#'}
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
          <Link href="/" className="bg-primary_web h-full px-20 flex items-center justify-center">
            <img src="/assets/estructura/logo_white.webp" alt="" className={`w-[100px] ${isScrolled ? 'lg:w-[30rem]' : 'lg:w-[34rem]'} object-contain`} />
          </Link>
          <div className="w-fit pl-20 flex justify-end items-center gap-10 2xl:gap-10 text-base text-white">
            <Link
              href="/"
              className={`font-montserratMedium hover:text-white transition-colors border-b hover:border-b-white ${
                currentRoute == '/' ? 'text-white border-b-white' : 'text-white border-b-transparent'
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className={`font-montserratMedium hover:text-white transition-colors border-b hover:border-b-white ${
                currentRoute == '/nosotros' ? 'text-white border-b-white' : 'text-white border-b-transparent'
              }`}
            >
              {' '}
              Nosotros
            </Link>
            <Link
              href="/servicios"
              className={`font-montserratMedium hover:text-white transition-colors border-b hover:border-b-white ${
                currentRoute == '/servicios' ? 'text-white border-b-white' : 'text-white border-b-transparent'
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/"
              className={`font-montserratMedium hover:text-white transition-colors border-b hover:border-b-white ${
                currentRoute == '/tracking' ? 'text-white border-b-white' : 'text-white border-b-transparent'
              }`}
            >
              Tracking
            </Link>
            <Link
              href="/contacto"
              className={`font-montserratMedium hover:text-white transition-colors border-b hover:border-b-white ${
                currentRoute == '/contacto' ? 'text-white border-b-white' : 'text-white border-b-transparent'
              }`}
            >
              Contacto
            </Link>
          </div>
          <div className="w-full flex items-center justify-end gap-10 ml-4 text-lg text-white ">
            <Link href={`tel:+${configuracion.telefono}`} className="flex items-center gap-4">
              <div className="h-12 px-4 flex items-center justify-center bg-primary_web">
                <FaPhone className="text-lg" />
              </div>
              <div className="flex flex-col gap-1 font-montserratMedium">
                <p className="text-sm font-extralight">Llamar</p>
                <p className="text-base font-bold ">{configuracion?.telefono}</p>
              </div>
            </Link>
            <Link
              href={configuracion?.whatsapp ?? '#'}
              target="_blank"
              className="h-12 px-4 flex items-center justify-center bg-primary_web hover:bg-primary_web/80 transition-colors duration-50"
            >
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
