/* eslint-disable @next/next/no-img-element */
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FormularioContacto } from './@formulario/FormularioContacto'
import { FaAnglesLeft } from 'react-icons/fa6'
import { Mapa } from './@formulario/Mapa'
import { AnimationRigth } from '../@components/Animated/AnimationRigth'
import { AnimationBottom } from '../@components/Animated/AnimationBottom'
import { AnimationLeft } from '../@components/Animated/AnimationLeft'
import Link from 'next/link'
import { seoHome } from '@/public/seo/seoHome'

export const metadata = seoHome

export default async function Contacto () {
  const configuracionResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/configuracion/find/1`, { cache: 'no-store' })
  const { configuracion } = await configuracionResponse.json()

  return (
    <section className="bg-white overflow-hidden ">
      <div className="relative w-full h-[350px] lg:h-screen 2xl:h-[60vh] mt-[84px] lg:mt-[180px]">
        <img
          src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg'}
          alt="Banner 1"
          className="clip w-full h-full object-cover hidden lg:block"
        />
        <div className="w-full h-full absolute z-[2] bg-[#003b1b]/70 inset-0"></div>
        <div className="absolute overflow-hidden inset-0 w-[100%]  px-4 lg:px-10 lg:w-full max-w-[1570px] mx-auto my-auto h-full flex justify-between items-center z-[3] text-white font-bold gap-0 ">
          <div className="flex flex-col">
            <span className="font-proximaRegular text-lg lg:text-xl flex gap-1 items-center  font-light">
              Inicio <FaAnglesLeft className="rotate-180 text-sm" />
              Contactenos
            </span>
            <h2 className="uppercase text-[2rem] lg:text-[3rem] 2xl:text-[3.5rem] font-roundkeyMedium tracking-wide font-light leading-10 mt-0 lg:mt-6">
              CONTÁCTANOS Y
            </h2>
            <h2 className="uppercase text-[2.7rem] lg:text-[4.5rem] font-roundkeyMedium tracking-wide font-light leading-5 lg:leading-none">
              RECIBE LA ATENCIÓN
            </h2>
            <h2 className="uppercase text-5xl lg:text-[8rem] font-roundkeyMedium tracking-wide font-light leading-[2.5rem] mt-4 lg:mt-0 lg:leading-[6rem]">
              QUE NECESITES
            </h2>
          </div>
        </div>
        <img
          src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg'}
          alt="Banner 1"
          className="clip w-full h-full relative before:bg-black before:absolute before:inset-0 before:opacity-55 before:w-full before:h-full object-cover block lg:hidden"
        />
      </div>

      <div className="w-full px-4 max-w-[1570px]  h-auto mx-auto relative overflow-hidden grid pt-6 lg:pt-16 pb-10 grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[url(https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/3.jpg)] bg-center bg-cover bg-no-repeat  rounded-xl letter_style_products flex flex-col px-6 py-10 gap-4 text-white relative overflow-hidden">
          <div className="w-full h-full absolute z-[2] bg-black/90 inset-0"></div>
          <div className="relative z-[3]">
            <p className="border-l-4 border-white pl-2 font-proximaSemibold text-xl">Ponte en contacto con nosotros</p>
            <h3 className="font-roundkeyMedium text-5xl uppercase">
              Comunicación fluida, <br /> impacto global
            </h3>
            <p className="font-proximaRegular text-lg">
              Somos una empresa dedicada al Comercio Exterior, formada por una corporación con mas de 25 años de experiencia en el comercio exterior.
            </p>
            <span className="block w-full mb-4 h-[5px] bg-main border-md"></span>
            <h3 className="font-roundkeyMedium text-4xl uppercase">SIGUE NUESTRAS REDES SOCIALES</h3>
            <div className="flex gap-4">
              <a href="" target="_blank" rel="noreferrer" className="text-white p-1 rounded-full w-12 h-12 flex items-center justify-center">
                <FaFacebookF className="text-white text-3xl mt-[2px]" />
              </a>
              <a href="" target="_blank" rel="noreferrer" className="text-white p-1 rounded-full w-12 h-12 flex items-center justify-center">
                <FaInstagram className="text-white text-4xl" />
              </a>
              <a href="" target="_blank" rel="noreferrer" className="text-white p-1 rounded-full w-12 h-12 flex items-center justify-center">
                <FaTiktok className="text-white text-3xl mt-[2px]" />
              </a>
              <a href="" target="_blank" rel="noreferrer" className="text-white p-1 rounded-full w-12 h-12 flex items-center justify-center">
                <FaYoutube className="text-white text-4xl" />
              </a>
            </div>
          </div>
        </div>
        <AnimationRigth className="bg-white p-4 lg:p-10 rounded-md shadow-md shadow-black/20">
          <FormularioContacto />
        </AnimationRigth>
      </div>
      <AnimationBottom>
        <h2 className="text-black font-roundkeyMedium text-4xl uppercase text-center w-full lg:text-7xl mt-4 lg:mt-8">{'“ubicanos facilmente”'}</h2>
      </AnimationBottom>
      <span className="block h-[6px] w-40 bg-main mx-auto mt-4"></span>
      <Mapa />
      <AnimationBottom>
        <h2 className="text-black font-roundkeyMedium text-4xl uppercase text-center w-full lg:text-7xl mt-4 lg:mt-10">
          {'“Visitanos en el siguiente horario”'}
        </h2>
      </AnimationBottom>

      <span className="block h-[6px] w-40 bg-main mx-auto mt-4"></span>

      <div className="text-black pt-10 pb-20 border-b text-[12px] grid grid-cols-1 lg:grid-cols-3 justify-center gap-4 lg:gap-6 px-4 max-w-[1570px] mx-auto">
        <AnimationLeft className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-center gap-3">
            <img src="/assets/estructura/map.png" alt="" className="w-16 h-16 object-contain" />
            <span className="block h-[3px] w-20 bg-main mx-auto mt-0"></span>
            <p className=" font-roundkeyMedium font-light text-3xl lg:text-5xl text-center tracking-wider h-16 my-auto flex items-center lg:h-fit">
              CENTRAL
            </p>
            <p className="text-sm lg:text-base text-center ">{configuracion?.direccion}</p>
          </div>
        </AnimationLeft>
        <AnimationLeft className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <img src="/assets/estructura/clock.png" alt="" className="w-16 h-16 object-contain" />
            <span className="block h-[3px] w-20 bg-main mx-auto mt-0"></span>
            <p className=" font-roundkeyMedium font-light text-3xl lg:text-5xl text-center tracking-wider h-16 my-auto flex items-center lg:h-fit">
              HORARIO
            </p>
            <p className="text-sm lg:text-base text-center ">{configuracion?.horario1}</p>
          </div>
        </AnimationLeft>

        <AnimationRigth className="flex flex-col items-start gap-3">
          <Link href={`tel:${configuracion?.celular1}`} className="flex flex-col items-center gap-3 w-full">
            <img src="/assets/estructura/tel.png" alt="" className="w-16 h-16 object-contain" />
            <span className="block h-[3px] w-20 bg-main mx-auto mt-0"></span>
            <p className=" font-roundkeyMedium font-light text-3xl lg:text-5xl text-center tracking-wider h-16 my-auto flex items-center lg:h-fit">
              TELEFONO
            </p>
            <p className="text-sm lg:text-base text-center">{configuracion?.celular1}</p>
          </Link>
        </AnimationRigth>
      </div>
      <div className="w-full max-w-[1570px] mx-auto py-20">
        <AnimationRigth className="flex flex-col items-center gap-3">
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 items-center">
            <div className="w-full">
              <img src="/assets/estructura/mail.png" alt="" className="w-16 h-16 object-contain block mx-auto" />
              <a href={`mailto:${configuracion?.correo1}`} className="text-sm lg:text-xl text-center mt-4 break-all flex flex-col text-black">
                <span className="text-green-700 mb-1 font-semibold">(Agencia de Aduanas)</span>
                {configuracion?.correo1}
              </a>
            </div>
            <div className="w-full">
              <img src="/assets/estructura/mail.png" alt="" className="w-16 h-16 object-contain block mx-auto" />
              <a href={`mailto:${configuracion?.correo2}`} className="text-sm lg:text-xl text-center mt-4  break-all flex flex-col text-black">
                <span className="text-green-700 mb-1 font-semibold">(Área de transportes)</span>
                {configuracion?.correo2}
              </a>
            </div>
            <div className="w-full">
              <img src="/assets/estructura/mail.png" alt="" className="w-16 h-16 object-contain block mx-auto" />
              <a href={`mailto:${configuracion?.correo3}`} className="text-sm lg:text-xl text-center mt-4  break-all flex flex-col text-black">
                <span className="text-green-700 mb-1 font-semibold">(Carga Internacional)</span>
                {configuracion?.correo3}
              </a>
            </div>
          </div>
        </AnimationRigth>
      </div>
    </section>
  )
}
