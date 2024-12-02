/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
// pages/index.js
"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export const Carrusel = () => {
  return (
    <section>
      <div className="mySwiper relative w-full h-[550px] lg:min-h-screen">
        <button className="custom-swiper-button-prev rounded-full hidden lg:flex items-center justify-center absolute left-4 top-0 bottom-0 my-auto z-[10] hover:scale-105 transition-all">
          <FaChevronLeft className="text-main text-4xl" />
        </button>
        <button className="custom-swiper-button-next rounded-full hidden lg:flex items-center justify-center absolute right-4 top-0 bottom-0 my-auto z-[10] hover:scale-105 transition-all">
          <FaChevronLeft className="text-main text-4xl rotate-180" />
        </button>
        <div className="relative h-full ">
          <img
            src={
              "https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/04/1.jpg"
            }
            alt="Banner 1"
            className="clip w-full h-full object-cover hidden lg:block"
          />
          <div className="w-full h-full absolute z-[2] bg-secondary/70 inset-0"></div>
          <div className="absolute inset-0 container mx-auto h-[calc(100vh-160px)] py-10 lg:py-0 w-full flex flex-col lg:flex-row justify-between items-center z-[3] text-white font-bold gap-10 ">
            <div className="flex flex-col gap-2 lg:gap-0 h-[100%] lg:pt-10 items-center lg:items-start">
              <div className="w-fit h-fit">
                <img
                  src="/assets/home/icon.png"
                  alt=""
                  className="w-[50px] lg:w-fit h-[50px] lg:h-[80px] "
                />
              </div>
              <h2 className="uppercase text-lg text-center lg:text-start lg:text-[2.5rem]   font-roundkeyMedium tracking-wide font-light leading-10 mt-0 lg:mt-6">
                Profesional y Seguro
              </h2>
              <h2 className=" text-5xl  lg:text-6xl 2xl:text-7xl font-roundkeyMedium tracking-wide font-light lg:leading-none">
                Transporte
              </h2>
              <h2 className=" text-6xl lg:text-7xl 2xl:text-8xl font-roundkeyMedium tracking-wide font-light lg:leading-[4rem] 2xl:leading-[5rem]">
                Solución 24/7
              </h2>
              {/* <span className="block h-[4px] w-[100px] bg-main my-4 "></span> */}
              <p className="text-sm text-center lg:text-start lg:text-lg text-white max-w-[50rem] mt-10 font-proximaRegular font-light">
                Formada por una corporación con mas de 15 años de experiencia en
                el comercio exterior,
                <br className="hidden lg:block" />
                nuestro staff de colaboradores esta conformada por 58
                profesionales con experiencia en el rubro
              </p>
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B51998181816&text&type=phone_number&app_absent=0"
                target="_blank"
                className="bg-primary flex items-center justify-center text-center hover:bg-primary/80 transition-all duration-300 px-4 lg:px-10 py-2 lg:py-4 w-fit text-lg mt-4 lg:mt-10"
              >
                Solicitar cotización
              </Link>
            </div>
            <div className="flex-1 hidden lg:flex items-end justify-center">
              <img
                src="https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/04/forklift.png"
                alt=""
                className="object-bottom"
              />
            </div>
          </div>
          <img
            src={"/assets/home/fondo_bottom.png"}
            alt="Banner 1"
            className="absolute hidden lg:block -bottom-[10vh] right-0 left-0 z-[2] w-full mx-auto h-fit"
          />
          <img
            src={
              "https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/04/1.jpg"
            }
            alt="Banner 1"
            className="clip w-full h-full relative before:bg-black before:absolute before:inset-0 before:opacity-55 before:w-full before:h-full object-cover block lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};
