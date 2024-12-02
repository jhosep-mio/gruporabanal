/* eslint-disable @next/next/no-img-element */
import { metadataProducto } from '@/public/components/seo/ProductoSeo'
import Link from 'next/link'
import React from 'react'
import { Header } from './(frontend)/@estructura/Header'
import { Footer } from './(frontend)/@estructura/Footer'

export const metadata = metadataProducto

export default function notfound () {
  return (
    <>
      <Header />
      <section className="w-full text-bl h-fit lg:h-screen degraded_main pt-[128px] relative z-10 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[url(/assets/images/home/huellitas.gif)] before:bg-cover before:-z-10 before:opacity-30">
        <div className="max-w-7xl h-full altura_header pb-5 lg:pb-0 flex flex-col gap-8 items-center lg:flex-row mx-auto w-full pt-20">
          <div className="w-full lg:w-1/2 h-fit px-8">
            <h5 className="text-black text-5xl text-center lg:text-left lg:text-6xl xl:text-7xl font-bold font_allRound">
              Página no <span className="text-main">encontrada</span>
            </h5>
            <p className="mt-8 text-black text-lg lg:text-xl text-center lg:text-left">
              No podemos mostrar la página que solicitaste.
            </p>
            <Link
              href={'/'}
              className="bg-main w-fit font-semibold rounded-lg mx-auto lg:mx-0 px-8 py-2 text-azul_serio text-center text-lg lg:text-xl flex mt-10 hover:bg-darKmain transition-all"
            >
              Regresar al inicio
            </Link>
          </div>
          <div className="w-full lg:w-1/2 h-fit flex justify-center">
            <img
              src=""
              alt=""
              className="espejo h-[450px] border-b border-white/40"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
