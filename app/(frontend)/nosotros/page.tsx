/* eslint-disable @next/next/no-img-element */
import { seoHome } from '@/public/seo/seoHome'
import { AnimationLeft } from '../@components/Animated/AnimationLeft'
import { AnimationRigth } from '../@components/Animated/AnimationRigth'
import { FaAnglesLeft, FaCaretLeft, FaCube, FaPlane } from 'react-icons/fa6'

export const metadata = seoHome

export default async function Nosotros () {
  return (
    <section className="bg-transparent overflow-hidden bg-white">
      <div className="relative w-full h-[350px] lg:h-screen 2xl:h-[60vh] mt-[84px] lg:mt-[180px]">
        <img
          src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/3.jpg'}
          alt="Banner 1"
          className="clip w-full h-full object-cover hidden lg:block"
        />
        <div className="w-full h-full absolute z-[2] bg-[#003b1b]/70 inset-0"></div>

        <div className="w-full h-full absolute z-[2] bg-black inset-0 opacity-40"></div>
        <AnimationLeft className="absolute overflow-hidden inset-0 w-[100%]  px-4 lg:px-10 lg:w-full max-w-[1570px] mx-auto my-auto h-full flex justify-between items-center z-[3] text-white font-bold gap-0 ">
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
          src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/3.jpg'}
          alt="Banner 1"
          className="clip w-full h-full relative before:bg-black before:absolute before:inset-0 before:opacity-55 before:w-full before:h-full object-cover block lg:hidden"
        />
      </div>

      <div className="w-full pt-10 lg:pb-20 lg:pt-0 px-4 lg:px-10  max-w-[1570px] mx-auto  bg-white z-[20] mt-10">
        <div className="w-full lg:h-[600px] flex flex-col items-center lg:flex-row justify-between gap-10 lg:gap-14" id="empresa">
          <AnimationLeft className="flex flex-col w-full lg:w-[50%] flex-1">
            <p className="border-l-4 border-main pl-2 font-proximaSemibold text-xl text-black">Nuestras empresas de</p>
            <h2 className="text-black font-roundkeyMedium text-4xl uppercase lg:text-7xl mt-4 lg:mt-8">{'"GRUPO RABANAL"'}</h2>
            <p className="text-black/80 font-proximaRegular text-base text-justify lg:text-start 2xl:text-lg w-full mt-10">
              Somos una empresa dedicada al servicio de comercio exterior, abarcando agencia de aduanas, carga internacional, así como transporte de
              carga a nivel nacional. Estamos formados por una corporación con más de 25 años de experiencia, nuestro staff de colaboradores esta
              conformada por 58 profesionales con experiencia en el rubro, quienes permitirán que sus actividades comerciales internacionales se
              desarrollan de una forma mas rápida, segura, económica y confiable que usted y su digna representada se merecen.
            </p>
            <button className="mt-6 bg-primary_web hover:bg-secondary_web transition-colors rounded-md px-6 py-2 w-fit text-white font-proximaSemibold text-lg">
              Contactarnos
            </button>
          </AnimationLeft>
          <AnimationRigth className="w-full lg:w-[50%] h-fit">
            <div className="w-full lg:pr-10 relative flex justify-end">
              <div className="w-40 h-40 absolute hidden  bg-primary_web rounded-full top-10 left-16 lg:flex items-center justify-center text-white flex-col gap-3">
                <FaPlane className="text-4xl" />
                <p className="w-full text-center">
                  Servicio de <br />
                  delivery
                </p>
              </div>
              <img
                src="https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/03/about1-1-1-1-423x550.jpeg"
                alt=""
                className="w-fit h-fit object-contain bg-right "
              />
              <img
                src="https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/03/about1-2.jpeg"
                alt=""
                className="absolute right-0 top-0 bottom-0 my-auto hidden lg:block"
              />
              <span className="absolute h-32 bg-primary_web right-0 top-0 w-4 hidden lg:block"></span>
            </div>
          </AnimationRigth>
        </div>
      </div>
      <section className="w-full  bg-[#68898c] relative h-full">
        <div className="w-full lg:h-full relative bg-[url('https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/03/pattern-1-1-1.png')] bg-cover bg-center">
          <div className="w-full h-auto flex flex-col gap-10 lg:gap-20 items-center px-4 lg:px-20 py-16 lg:py-24 overflow-hidden ">
            <AnimationLeft className="w-full flex flex-col lg:flex-row gap-10 ">
              <div className="w-full flex items-center gap-10 border-b border-b-gray-300 pb-10 relative group">
                <FaCaretLeft className="text-white text-3xl absolute top-0 right-0 rotate-[120deg]" />
                <FaCube className="text-main  text-primary_web group-hover:text-white transition-colors duration-300 text-6xl lg:text-7xl" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-4xl lg:text-5xl text-white">25+</span>
                  <span className="text-white">Años de experiencia</span>
                </div>
              </div>
              <div className="w-full flex items-center gap-10 border-b border-b-gray-300 pb-10 relative group">
                <FaCaretLeft className="text-white text-3xl absolute top-0 right-0 rotate-[120deg]" />
                <FaCube className="text-main  text-primary_web group-hover:text-white transition-colors duration-300 text-6xl lg:text-7xl" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-4xl lg:text-5xl text-white">58+</span>
                  <span className="text-white">Profesionales</span>
                </div>
              </div>
              <div className="w-full flex items-center gap-10 border-b border-b-gray-300 pb-10 relative group">
                <FaCaretLeft className="text-white text-3xl absolute top-0 right-0 rotate-[120deg]" />
                <FaCube className="text-main  text-primary_web group-hover:text-white transition-colors duration-300 text-6xl lg:text-7xl" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-4xl lg:text-5xl text-white">7+</span>
                  <span className="text-white">Grupos empresariales</span>
                </div>
              </div>
            </AnimationLeft>
          </div>
        </div>
      </section>

      <div className="w-full pt-10 lg:pb-20 lg:pt-0 px-4 lg:px-10  max-w-[1570px] mx-auto  bg-white z-[20] mt-10">
        <section className=" relative bg-white">
          <div className="w-full h-full px-4 py-10 lg:py-10 container mx-auto  bg-transparent ">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-0 lg:px-20 gap-3 lg:gap-10">
              <div className="w-full p-4 border shadow-md shadow-black/20 flex flex-col items-center gap-2 rounded-md mt-4">
                <img src="/assets/nosotros/eficacia.png" alt="" className="h-24 object-contain m-auto" />
                <div className="w-full flex flex-col justify-center">
                  <h3 className="font-proximaSemibold text-lg 2xl:text-2xl text-black/80 w-full leading-10 text-center">Eficacia y rapidez</h3>
                  <span className="block w-40 my-2 h-[6px] mx-auto bg-main border-md"></span>
                  <p className="text-black/80 gap-3 font-proximaRegular text-center text-lg flex  h-36 items-center">
                    Nuestra empresa se destaca por brindar soluciones rápidas y efectivas, asegurando que cada proceso se lleve a cabo con precisión y
                    en el menor tiempo posible
                  </p>
                </div>
              </div>
              <div className="w-full p-4 border shadow-md shadow-black/20 flex flex-col items-center gap-2 rounded-md mt-4">
                <img src="/assets/nosotros/personal.png" alt="" className="h-24 object-contain m-auto" />
                <div className="w-full flex flex-col justify-center">
                  <h3 className="font-proximaSemibold text-lg 2xl:text-2xl text-black/80 w-full leading-10 text-center">Personal calificado</h3>
                  <span className="block w-40 my-2 h-[6px] mx-auto bg-main border-md"></span>
                  <p className="text-black/80 gap-3 font-proximaRegular text-center text-lg flex  h-36 items-center">
                    Contamos con un equipo altamente capacitado, con experiencia y habilidades específicas para satisfacer las necesidades de nuestros
                    clientes.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 border shadow-md shadow-black/20 flex flex-col items-center gap-2 rounded-md mt-4">
                <img src="/assets/nosotros/comunicacion.png" alt="" className="h-24 object-contain m-auto" />
                <div className="w-full flex flex-col justify-center">
                  <h3 className="font-proximaSemibold text-lg 2xl:text-2xl text-black/80 w-full leading-10 text-center">
                    Facilidades de comunicación
                  </h3>
                  <span className="block w-40 my-2 h-[6px] mx-auto bg-main border-md"></span>
                  <p className="text-black/80 gap-3 font-proximaRegular text-center text-lg flex  h-36 items-center">
                    Nuestro compromiso es mantener un flujo de información claro y constante, asegurando que cada consulta o solicitud sea atendida de
                    manera oportuna y transparente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
