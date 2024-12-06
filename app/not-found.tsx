/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function notfound () {
  return (
    <section className="w-full text-bl h-fit lg:h-screen degraded_main  relative z-10 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[url(/assets/images/home/huellitas.gif)] before:bg-cover before:-z-10 before:opacity-30">
      <div className="max-w-7xl h-full altura_header pb-5 lg:pb-0 flex flex-col gap-8 items-center lg:flex-row mx-auto w-full pt-20">
        <div className="w-full lg:w-1/2 h-fit px-8">
          <h5 className="text-white text-5xl text-center lg:text-left lg:text-6xl xl:text-7xl font-bold font_allRound">
            Página no <span className="text-main">encontrada</span>
          </h5>
          <p className="mt-8 text-gray-300 text-lg lg:text-xl text-center lg:text-left">No podemos mostrar la página que solicitaste.</p>
          <Link
            href={'/'}
            className="bg-primary_web w-fit font-semibold rounded-lg mx-auto lg:mx-0 px-8 py-2 text-azul_serio text-center text-lg lg:text-xl flex mt-10 hover:bg-secondary_web transition-all"
          >
            Regresar al inicio
          </Link>
        </div>
      </div>
    </section>
  )
}
