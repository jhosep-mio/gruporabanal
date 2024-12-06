/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

export const MenuBar = ({ openMenu, setOpenMenu }: any) => {
  return (
    <div className="bg-black/30 fixed w-full h-full left-0 right-0 bottom-0 top-0 lg:hidden z-[900]">
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ ease: 'easeOut' }} // Ajuste aquí
        className="bg-white w-[300px] md:w-[500px] h-full py-0 relative"
      >
        <div className="flex justify-end absolute right-0 top-3" onClick={() => setOpenMenu(!openMenu)}>
          <IoMdClose className="text-white/60 text-xl md:text-2xl mr-3" />
        </div>
        <nav className="flex flex-col h-full gap-0 w-full text-black/60 font-bold text-xs ">
          <div className="h-fit py-4 bg-secondary_web">
            <img src="/assets/estructura/logo_white.webp" alt="" className="w-[140px] md:w-[120px] object-contain mx-auto" />
          </div>
          <div className="flex flex-col h-auto">
            <Link
              href="/"
              onClick={() => setOpenMenu(false)}
              className="hover:border-b-white flex justify-between items-center transition-colors border-b border-gray-300 p-4 text-[11px] md:text-[14px]"
            >
              <span>INICIO</span>
              <MdOutlineKeyboardArrowLeft className="rotate-180 text-lg md:text-2xl" />
            </Link>
            <Link
              href="/nosotros"
              onClick={() => setOpenMenu(false)}
              className="hover:border-b-white flex uppercase justify-between items-center transition-colors border-b border-gray-300 p-4 text-[11px] md:text-[14px]"
            >
              <span>Conocenos</span>
              <MdOutlineKeyboardArrowLeft className="rotate-180 text-lg md:text-2xl" />
            </Link>
            <Link
              href="/servicios"
              onClick={() => setOpenMenu(false)}
              className="hover:border-b-white flex justify-between items-center transition-colors border-b border-gray-300 p-4 text-[11px] md:text-[14px]"
            >
              <span className='uppercase'>Servicios</span>
              <MdOutlineKeyboardArrowLeft className="rotate-180 text-lg md:text-2xl" />
            </Link>
            <Link
              href="#"
              onClick={() => setOpenMenu(false)}
              className="hover:border-b-white flex justify-between items-center transition-colors border-b border-gray-300 p-4 text-[11px] md:text-[14px]"
            >
              <span className='uppercase'>Tracking</span>
              <MdOutlineKeyboardArrowLeft className="rotate-180 text-lg md:text-2xl" />
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              href="/contacto"
              className="hover:border-b-white flex justify-between items-center transition-colors border-b border-gray-300 p-4 text-[11px] md:text-[14px]"
            >
              <span>CONTACTO</span>
              <MdOutlineKeyboardArrowLeft className="rotate-180 text-lg md:text-2xl" />
            </Link>
          </div>
          <div className="flex gap-4 px-4 mt-4 items-center">
            <a href="" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-black/60 text-base md:text-lg" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaInstagram className="text-black/60 text-lg md:text-xl" />
            </a>
          </div>
        </nav>
      </motion.div>
    </div>
  )
}
