/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
import { AnimationLeft } from './@components/Animated/AnimationLeft'
import { AnimationRigth } from './@components/Animated/AnimationRigth'
import { FaCaretLeft, FaCheck, FaCube, FaPlane } from 'react-icons/fa'
import { SwiperProductos } from './@components/clientes/SwiperProductos'
import { SwiperServicios } from './@components/clientes/SwiperServicios'
import Link from 'next/link'
import { seoHome } from '@/public/seo/seoHome'
import { Carrusel } from './@components/Carrusel'

export const metadata = seoHome

export default async function Home () {
  const serviciosResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/servicios/findall`, { cache: 'no-store' })
  const servicios = await serviciosResponse.json()

  const blogsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/findall`, { cache: 'no-store' })
  const blogs = await blogsResponse.json()

  const configuracionResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/configuracion/find/1`, { cache: 'no-store' })
  const configuracion = await configuracionResponse.json()

  return (
    <section className="bg-white overflow-x-hidden">
      <div className="w-full bg-transparent mt-[84px] lg:mt-[180px]">
        <Carrusel configuracion={configuracion.configuracion}/>
      </div>

      <section className="w-full h-fit relative lg:-top-16 z-10 ">
        <img
          src="https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/04/icon-plane.png"
          alt=""
          className="absolute hidden lg:block left-0 top-0 bottom-0 my-auto w-60 h-fit animate-[slowFloat_4s_ease-in-out_infinite]"
        />
        <div className="w-full md:container mx-auto bg-white relative flex flex-col lg:flex-row gap-10 h-fit ">
          <div className="w-full h-full px-4 py-4 lg:p-10 flex gap-5 flex-col bg-[url('https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/03/icon-dots-2.webp')] bg-left-top bg-no-repeat">
            <p className="text-gray-400 font-semibold tracking-wider">QUIENES SOMOS</p>
            <h2 className="text-3xl leading-none lg:text-5xl tracking-wider font-bold lg:leading-[4rem] text-black">
              Entrega internacional <br className="hidden lg:block" /> Servicio de calidad
            </h2>
            <div className="flex flex-col gap-3 my-6">
              <div className="flex items-center gap-3">
                <FaCheck className="text-xl bg-primary_web rounded-full text-white p-1" />
                <Link href={'/servicios/comercio-exterior'} className="font-semibold text-lg text-black hover:text-secondary_web">
                  Comercio Exterior
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-xl bg-primary_web rounded-full text-white p-1" />
                <Link href={'/servicios/servicio-de-aduanas'} className="font-semibold text-lg text-black hover:text-secondary_web">
                  Servicio de Aduanas
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-xl bg-primary_web rounded-full text-white p-1" />
                <Link href={'/servicios/carga-internacional'} className="font-semibold text-lg text-black hover:text-secondary_web">
                  Carga internacional
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-xl bg-primary_web rounded-full text-white p-1" />
                <Link href={'/servicios/transporte-de-carga-nacional'} className="font-semibold text-lg text-black hover:text-secondary_web">
                  Transporte de carga a nivel nacional
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-justify">
              Somos una empresa dedicada al Comercio Exterior, formada por una corporación con mas de 25 años de experiencia en el comercio exterior,
              nuestro staff de colaboradores esta conformada por 58 profesionales con experiencia en el rubro, quienes permitirán que sus actividades
              comerciales internacionales se desarrollan de una forma mas rápida, segura, económica y confiable que usted y su digna representada se
              merecen.
            </p>
          </div>
          <div className="w-full lg:pr-15 relative flex justify-end">
            <div className="w-40 h-40 absolute hidden bg-primary_web rounded-full top-10 left-20 lg:flex items-center justify-center text-white flex-col gap-3">
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
        </div>
      </section>

      <section className="w-full h-full bg-[#68898c] relative">
        <div className="w-full lg:h-full relative bg-[url('https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/03/pattern-1-1-1.png')] bg-cover bg-center">
          <div className="w-full h-full flex flex-col gap-10 lg:gap-20 items-center px-4 lg:px-20 pt-16 lg:pt-24 overflow-hidden">
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
            <AnimationRigth className="w-full h-full flex flex-col">
              <img src="/assets/home/icon.webp" alt="" className="w-fit h-fit mx-auto object-contain" />
              <p className="text-center text-gray-300 font-bold mt-1 tracking-widest">SERVICIOS</p>
              <h2 className="text-3xl lg:text-6xl font-bold text-center mt-6 lg:mt-0 text-white leading-none lg:leading-[4rem] tracking-wider">
                Contamos con los siguiente servicios
              </h2>
            </AnimationRigth>
            <section className="w-full h-full">
              <SwiperServicios servicios={servicios.servicios} />
            </section>
          </div>
        </div>
        <div className="w-full h-48 bg-white absolute bottom-0"></div>
      </section>

      <section className=" relative bg-white">
        <div className="w-full h-full px-4 py-10 lg:py-4 container mx-auto  bg-transparent ">
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
                <h3 className="font-proximaSemibold text-lg 2xl:text-2xl text-black/80 w-full leading-10 text-center">Facilidades de comunicación</h3>
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

      <section className="relative  bg-[#ebf1f5] py-0 mss-10 lg:mt-16">
        <div className="w-full h-full px-4 pt-10 pb-10 lg:py-16 container mx-auto ">
          <p className="border-l-4 border-primary_web pl-2 font-proximaSemibold text-xl mb-0 text-black">Enlaces de interés</p>
          <SwiperProductos blogs={blogs.blogs}/>
        </div>
      </section>
    </section>
  )
}
