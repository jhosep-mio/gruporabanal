/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
// import { ListaProductos } from '@/public/components/tienda/ListaProductos'
import { seoHome } from '@/public/seo/seoHome'
import { AnimationLeft } from '../@components/Animated/AnimationLeft'
import { FaAnglesLeft } from 'react-icons/fa6'
import { ListaProductos } from './@componentes/ListaProductos'

export const metadata = seoHome

export default async function Servicios () {
  const serviciosResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/servicios/findall`, { cache: 'no-store' })
  const servicios = await serviciosResponse.json()
  return (
    <section className="w-full bg-[#F5F6F7] overflow-hidden">
      <div className="relative w-full h-[350px] lg:h-screen 2xl:h-[60vh] mt-[84px] lg:mt-[180px]">
        <img
          src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg'}
          alt="Banner 1"
          className="clip w-full h-full object-cover hidden lg:block"
        />
        <div className="w-full h-full absolute z-[2] bg-[#003b1b]/70 inset-0"></div>

        <div className="w-full h-full absolute z-[2] bg-black inset-0 opacity-40"></div>
        <AnimationLeft className="absolute overflow-hidden inset-0 w-[100%] px-4 lg:px-10 lg:w-full max-w-[1570px] mx-auto my-auto h-full flex justify-between items-center z-[3] text-white font-bold gap-0 ">
          <div className="flex flex-col">
            <span className="font-proximaRegular text-lg lg:text-xl flex gap-1 items-center  font-light">
              Inicio <FaAnglesLeft className="rotate-180 text-sm" />
              Conocenos
            </span>
            <h2 className="uppercase text-[2rem] lg:text-[3rem] 2xl:text-[3.5rem] font-roundkeyMedium tracking-wide font-light leading-10 mt-0 lg:mt-6">
              MÁS DE DOS DÉCADAS
            </h2>
            <h2 className="uppercase text-[2.7rem] lg:text-[4.5rem] font-roundkeyMedium tracking-wide font-light leading-5 lg:leading-none">
              DE EXPERIENCIA
            </h2>
            <h2 className="uppercase text-5xl lg:text-[8rem] font-roundkeyMedium tracking-wide font-light leading-[2.5rem] mt-4 lg:mt-0 lg:leading-[6rem]">
              EN COMERCIO EXTERIOR
            </h2>
          </div>
        </AnimationLeft>
        <img
          src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg'}
          alt="Banner 1"
          className="clip w-full h-full relative before:bg-black before:absolute before:inset-0 before:opacity-55 before:w-full before:h-full object-cover block lg:hidden"
        />
      </div>
      <div className="w-fit px-4 lg:px-10  py-4 lg:py-16 max-w-[1570px] mx-auto overflow-hidden justify-center flex flex-col gap-6">
        <p className="border-l-4 border-main pl-2 font-proximaSemibold text-xl mb-0 text-black">Nuestros servicios</p>
        {servicios.servicios && servicios.servicios.length > 0 ? (
          <div className="">
            <ListaProductos data={servicios.servicios} />
          </div>
        ) : (
          <div className="calc_tienda">
            <div className="w-full flex text-center lg:text-left mt-6 gap-2 text-gray-500">
              <p>No se encontraron productos que concuerden con la búsqueda.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
