/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

export const SwiperProductos = () => {
  const notificas = [
    {
      id: 1,
      titulo: "Tendencias en Comercio Exterior para 2024",
      url: "tendencias-comercio-exterior-2024",
      resumen:
        "El comercio exterior enfrenta nuevos desafíos y oportunidades en un mundo globalizado.",
      contenido:
        "La dinámica del comercio exterior en 2024 estará marcada por la digitalización de procesos aduaneros, la optimización de cadenas de suministro y las políticas comerciales más sostenibles. Estas tendencias están transformando las exportaciones e importaciones, generando nuevas oportunidades para empresas que invierten en tecnología y alianzas estratégicas.",
      imagen:
        "https://politico.pe/wp-content/uploads/2023/12/Tendencias-de-comercio-internacional-2024.webp",
    },
    {
      id: 2,
      titulo: "Cómo Simplificar los Trámites Aduaneros",
      url: "como-simplificar-tramites-aduaneros",
      resumen:
        "Los servicios aduaneros modernos reducen la complejidad de los procesos de importación y exportación.",
      contenido:
        "Los avances tecnológicos y la profesionalización del servicio de aduanas han facilitado el cumplimiento de normativas internacionales. Las plataformas digitales permiten una declaración de mercancías más rápida, disminuyendo costos y tiempos de operación para los negocios involucrados en el comercio internacional.",
      imagen:
        "https://media.licdn.com/dms/image/v2/D4E12AQGmsxgAfT2W-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690824024302?e=2147483647&v=beta&t=if31tyMMII118M-wH6Hd2pBEvT2hO_rCPwW-XdBrl4k",
    },
    {
      id: 3,
      titulo: "Carga Internacional: Innovación en Logística Global",
      url: "carga-internacional-innovacion-logistica-global",
      resumen:
        "El transporte internacional de carga está evolucionando para ser más eficiente y sostenible.",
      contenido:
        "Con el auge de la globalización, la logística de carga internacional se apoya en tecnologías como blockchain y big data para rastrear envíos, optimizar rutas y reducir costos. Estas innovaciones están transformando la forma en que las empresas manejan sus operaciones globales.",
      imagen:
        "https://mlti.com.mx/wp-content/uploads/2023/07/transporte-logistica-buque-carga-contenedor-avion-carga-representacion-3d-e-ilustracion-2-1024x545.jpg",
    },
    {
      id: 4,
      titulo: "Transporte Nacional: Clave para la Economía Regional",
      url: "transporte-nacional-clave-economia-regional",
      resumen:
        "El transporte de carga a nivel nacional impulsa el desarrollo económico local.",
      contenido:
        "La infraestructura vial y las soluciones logísticas modernas son esenciales para el crecimiento del comercio interno. Las empresas están adoptando modelos más ágiles y sostenibles para responder a la creciente demanda de transporte eficiente en todo el país.",
      imagen:
        "https://logistica360.pe/wp-content/uploads/2024/07/2-camion-scaled.jpg",
    },
  ];

  return (
    <div className="w-full mt-0 relative ">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiperClientes h-full"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        speed={1000}
        loop
      >
        {notificas.length > 0 &&
          notificas.map((product: any) => (
            <SwiperSlide
              className="w-full bg-white shadow-lg rounded-lg overflow-hidden max-w-[500px] cursor-pointer group"
              key={product.id}
            >
              <Link href={`/noticias/${product.url}`}>
                <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/30 group-hover:before:bg-black/40 transition-all duration-300">
                  <img
                    className="w-full h-64 object-cover object-center"
                    src={product.imagen}
                    alt="Edificio"
                  />
                  <div className="absolute bottom-0 left-10 bg-primary text-white text-2xl text-center py-2 px-4 rounded-t-lg flex flex-col">
                    <span className="">12</span>{" "}
                    <span className="text-base text-gray-200">FEB</span>
                  </div>
                </div>
                <div className="w-fit mx-auto flex gap-4 bg-gray-200 px-4 py-2 rounded-b-lg">
                  <div className="w-fit flex items-center gap-2">
                    <FaCalendarAlt className="text-primary" />
                    <span className="w-full text-gray-600">
                      Noviembre, 28, 2024
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl text-black/80 font-proximaBold font-bold">
                    {product.titulo}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-xl font-proximaRegular mt-4 mb-6 line-clamp-4 text-justify">
                    {product.contenido}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
