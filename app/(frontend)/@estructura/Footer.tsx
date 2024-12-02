/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'

export const Footer = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute w-full h-full z-[-1] object-cover object-top inset-0 bg-[url('https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/3.jpg')] before:bg-secondary/90 before:absolute before:inset-0  bg-cover bg-center" />
        <div className="py-4 lg:py-10">
          <div className="w-full px-4 lg:px-10 max-w-[1570px] mx-auto grid grid-cols-1 lg:grid-cols-7 item gap-10 lg:gap-16">
            <div className="flex flex-col col-span-1 lg:col-span-3">
              <img src="/assets/estructura/logo.png" alt="" className="w-[350px] object-contain " />
              <h3 className="text-white  w-fit pb-2 font-bold text-xl mt-4 relative">Hoja informativa</h3>
              <div className="text-white mt-0 text-[12px] flex flex-col gap-1">
                <p className="text-base">
                  Dejanos tu correo electronico para que puedas recibir <br />
                  información actualizada.
                </p>
              </div>
              <div className="text-white mt-4 text-base flex flex-col justify-center gap-1">
                <div className="flex gap-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="bg-main p-1 lg:p-2 rounded-full w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center"
                  >
                    <FaFacebookF className="text-white text-2xl lg:text-3xl mt-[2px]" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="bg-main p-1 lg:p-2 rounded-full w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center"
                  >
                    <FaInstagram className="text-white text-3xl lg:text-4xl" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="bg-main p-1 lg:p-2 rounded-full w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center"
                  >
                    <FaTiktok className="text-white text-2xl lg:text-3xl mt-[2px]" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="bg-main p-1 lg:p-2 rounded-full w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center"
                  >
                    <FaYoutube className="text-white text-3xl lg:text-4xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-1 lg:col-span-2">
              <h3 className="text-white  w-fit pb-2 font-bold text-2xl relative">
                <span className="absolute w-1/2 h-[3px] bg-main bottom-0"></span>
                Enlaces directos
              </h3>
              <div className="text-white mt-8 text-[12px] flex flex-col gap-6 ">
                <div className="flex flex-col gap-4">
                  <Link href="/" className="text-base hover:text-main transition-colors tracking-widest">
                    Lorem ipsum dolor sit amet
                  </Link>
                  <Link href="/" className="text-base hover:text-main transition-colors tracking-widest">
                    Lorem ipsum dolor sit amet
                  </Link>
                  <Link href="/" className="text-base hover:text-main transition-colors tracking-widest">
                    Lorem ipsum dolor sit amet
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-1 lg:col-span-2">
              <h3 className="text-white  w-fit pb-2 font-bold text-2xl relative">
                <span className="absolute w-1/2 h-[3px] bg-main bottom-0"></span>
                Información
              </h3>
              <div className="text-white mt-8 text-[12px] flex flex-col gap-6">
                <div className="flex flex-col items-start gap-3">
                  <div className="flex gap-3">
                    <img src="/assets/estructura/map.png" alt="" className="w-5 object-contain" />
                    <p className="border-l-2 border-main pl-2 font-proximaSemibold text-xl">Ubicación</p>
                  </div>
                  <p className="text-base">C.A.C Sector B, 1ra etapa, Mod. A Of. 215 - 216 - Callao</p>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex gap-3">
                    <img src="/assets/estructura/clock.png" alt="" className="w-6 object-contain" />
                    <p className="border-l-2 border-main pl-2 font-proximaSemibold text-xl">Horario</p>
                  </div>
                  <p className="text-base">Lunes a viernes: 8 a.m. - 1 p.m. / 2 p.m. - 5:30 p.m.</p>
                </div>
                <div className="flex items-start flex-col gap-3">
                  <div className="flex gap-3">
                    <img src="/assets/estructura/tel.png" alt="" className="w-6 object-contain" />
                    <p className="border-l-2 border-main pl-2 font-proximaSemibold text-xl">Horario</p>
                  </div>
                  <p className="text-base">+51 919 295 851</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#68898c]/50 ">
          <div className="w-full flex flex-col-reverse lg:flex-row gap-3 lg:gap-0 justify-between max-w-[1570px] mx-auto items-center pl-4 lg:pl-10 pr-4 2xl:pr-10 py-3 ">
            <div className="w-full text-[12px] text-center lg:text-left text-white flex gap-1 items-center">Copyright © GRUPO RABANAL 2024 | Todos los derechos reservados - Desing by : <a target='_blank' href="https://logosperu.com.pe/"><img src="https://www.karalgroup.com.pe/assets/img/logo/logos-peru.png" alt="" className='w-6 h-6 '/></a></div>
            <div>
              <img src="/assets/home/pagos/metodo-pago.png" alt="" className="px-4 h-[27px] object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-4 bottom-4 lg:bottom-8 lg:right-8 z-[50] overflow-hidden">
        <a
          href="https://wa.me/+51998181816"
          target="_blank"
          className="flex items-center justify-center w-[50px] lg:w-[56px] h-[50px] lg:h-[56px] bg-[#2DB742] text-white rounded-full shadow-lg transition-colors"
          rel="noreferrer"
        >
          <FaWhatsapp className="text-3xl lg:text-4xl" />
        </a>
      </div>
    </>
  )
}
