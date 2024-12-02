'use client'
import Link from 'next/link'
import React from 'react'

export const Links = () => {
  const scrollToCenter = (e: any) => {
    e.preventDefault() // Evita el comportamiento por defecto del enlace
    const element = document.getElementById('empresa')
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const elementHeight = elementRect.height
      const elementY = window.scrollY + elementRect.top
      const viewportHeight = window.innerHeight
      const scrollToY = elementY - viewportHeight / 2 + elementHeight / 2 - 50 // Ajusta con 50 px arriba
      window.scrollTo({
        top: scrollToY,
        behavior: 'smooth'
      })
    }
  }

  const scrollToCenter2 = (e: any) => {
    e.preventDefault() // Evita el comportamiento por defecto del enlace
    const element = document.getElementById('equipo')
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const elementHeight = elementRect.height
      const elementY = window.scrollY + elementRect.top
      const viewportHeight = window.innerHeight
      const scrollToY = elementY - viewportHeight / 2 + elementHeight / 2 - 50 // Ajusta con 50 px arriba
      window.scrollTo({
        top: scrollToY,
        behavior: 'smooth'
      })
    }
  }
  const scrollToCenter3 = (e: any) => {
    e.preventDefault() // Evita el comportamiento por defecto del enlace
    const element = document.getElementById('marca')
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const elementHeight = elementRect.height
      const elementY = window.scrollY + elementRect.top
      const viewportHeight = window.innerHeight
      const scrollToY = elementY - viewportHeight / 2 + elementHeight / 2 - 50 // Ajusta con 50 px arriba
      window.scrollTo({
        top: scrollToY,
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className="lg:flex hidden flex-row gap-3 lg:gap-6 w-fit mx-auto lg:mt-10 bg-white shadow-md lg:rounded-full px-4 lg:px-20 py-3 justify-center">
      <Link
        href="#empresa"
        onClick={scrollToCenter}
        className="block hover:bg-main transition-colors bg-main text-white font-proximaRegular text-base lg:text-2xl px-8 py-3 rounded-md"
      >
        Nuestra empresa
      </Link>
      <Link
        href="#equipo"
        onClick={scrollToCenter2}
        className="block hover:bg-main transition-colors bg-main_dark text-white font-proximaRegular text-base lg:text-2xl px-8 py-3 rounded-md"
      >
        Nuestro Equipo
      </Link>

      <Link
        href="#marca"
        onClick={scrollToCenter3}
        className="block hover:bg-main transition-colors bg-main_dark text-white font-proximaRegular text-base lg:text-2xl px-8 py-3 rounded-md"
      >
        Nuestra marca
      </Link>
    </div>
  )
}
