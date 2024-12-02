/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

export const SwiperServicios = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Comercio Exterior",
      url: "comercio-exterior",
      contenido:
        "Ofrecemos asesoramiento integral y soluciones para facilitar el comercio internacional, incluyendo procesos de importación, exportación, y cumplimiento de normativas globales.",
      imagen1: "/assets/servicios/1.webp",
    },
    {
      id: 2,
      titulo: "Servicio de Aduanas",
      url: "servicio-de-aduanas",
      contenido:
        "Desaduanaje de su mercancía en el menor tiempo posible, con nuestro servicio personalizado en gestión de despacho aduanero de mercancías sometido a cualquiera de los diversos regímenes. Por lo tanto, nuestro equipo de colaboradores especializados con amplia experiencia en el rubro, se encargará de procesar la información que nos brinde a través de un trabajo coordinado, minucioso y confiable que garantice una eficiente tramitación de las formalidades que exige la autoridad aduanera.",
      imagen1: "/assets/servicios/3.webp",
    },
    {
      id: 3,
      titulo: "Carga Internacional",
      url: "carga-internacional",
      contenido:
        "Contar con una amplia red de agentes en principales ciudades del mundo y una infraestructura que nos permite manejar y coordinar eficientemente todo tipo de embarques; con origen y destino desde cualquier parte del mundo. Destacando nuestro servicio con el soporte y asesoría de personal altamente calificado, así como un sistema de seguimiento vía Internet desde la etapa Pre-embarque (SEPOL) a través del cual es posible realizar el seguimiento de su carga en tiempo real, desde cualquier punto de origen hasta su entrega en el punto de destino final, destacadas en servicio integral de forma Aérea, marítima y postal",
      imagen1: "/assets/servicios/4.webp",
    },
    {
      id: 4,
      titulo: "Transporte de Carga Nacional",
      url: "transporte-de-carga-nacional",
      contenido:
        "Contamos con una moderna flota de unidades propias y en paralelo previamente homologada por nosotros para asegurar que cumple con nuestros estándares de calidad. Gracias a la experiencia ganada en estos años hemos desarrollado soluciones de transporte personalizadas para cada necesidad específica de nuestros clientes, las que podemos agrupar en: Carga controlada, masiva, aduanera, meteriales peligrosos e insumos para la industria.",
      imagen1: "/assets/servicios/2.webp",
    },
  ];

  return (
    <div className="w-full mt-0 relative ">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiperClientes2 h-full"
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        speed={1000}
        loop
      >
        {servicios.map((servicio) => (
          <SwiperSlide
            className="w-full group !h-[350px] 2xl:!h-[420px] !flex justify-center items-end overflow-hidden cursor-pointer"
            key={servicio.id}
          >
            <Link href={`servicios/${servicio.url}`}
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}
              style={{ backgroundImage: `url(${servicio.imagen1})` }}
            />
            <div className="w-full mb-6">
              <div className="bg-white overflow-x-clip overflow-y-clip group-hover:text-white transition-colors duration-300 flex items-center justify-center w-[90%] mx-auto py-4 relative">
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                <h3 className="text-black group-hover:text-white font-bold text-xl relative z-10">
                  {servicio.titulo}
                </h3>
                <span className="bottom-full bg-primary h-2 w-4/5 right-0 absolute"></span>
                <span className="text-main font-proximaSemibold text-lg absolute top-0 right-0 bg-primary text-white p-2 z-10">
                  <FaPlus />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
