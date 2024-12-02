/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
import { SeoCategoriaGeneral } from "@/public/components/seo/SeoCategoriaGeneral";
import { ListaProductos } from "@/public/components/tienda/ListaProductos";
// import { ListaProductos } from '@/public/components/tienda/ListaProductos'
import { AnimationLeft } from "../@components/Animated/AnimationLeft";
import { FaAnglesLeft } from "react-icons/fa6";

export function generateMetadata() {
  const metadata = SeoCategoriaGeneral();
  return metadata;
}

export default async function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Comercio Exterior",
      url: "comercio-exterior",
      contenido:
        "Ofrecemos asesoramiento integral y soluciones para facilitar el comercio internacional, incluyendo procesos de importación, exportación, y cumplimiento de normativas globales.",
      imagen1: "1.webp",
    },
    {
      id: 2,
      titulo: "Servicio de Aduanas",
      url: "servicio-de-aduanas",
      contenido:
        "Desaduanaje de su mercancía en el menor tiempo posible, con nuestro servicio personalizado en gestión de despacho aduanero de mercancías sometido a cualquiera de los diversos regímenes. Por lo tanto, nuestro equipo de colaboradores especializados con amplia experiencia en el rubro, se encargará de procesar la información que nos brinde a través de un trabajo coordinado, minucioso y confiable que garantice una eficiente tramitación de las formalidades que exige la autoridad aduanera.",
      imagen1: "3.webp",
    },
    {
      id: 3,
      titulo: "Carga Internacional",
      url: "carga-internacional",
      contenido:
        "Contar con una amplia red de agentes en principales ciudades del mundo y una infraestructura que nos permite manejar y coordinar eficientemente todo tipo de embarques; con origen y destino desde cualquier parte del mundo. Destacando nuestro servicio con el soporte y asesoría de personal altamente calificado, así como un sistema de seguimiento vía Internet desde la etapa Pre-embarque (SEPOL) a través del cual es posible realizar el seguimiento de su carga en tiempo real, desde cualquier punto de origen hasta su entrega en el punto de destino final, destacadas en servicio integral de forma Aérea, marítima y postal",
      imagen1: "4.webp",
    },
    {
      id: 4,
      titulo: "Transporte de Carga Nacional",
      url: "transporte-de-carga-nacional",
      contenido:
        "Contamos con una moderna flota de unidades propias y en paralelo previamente homologada por nosotros para asegurar que cumple con nuestros estándares de calidad. Gracias a la experiencia ganada en estos años hemos desarrollado soluciones de transporte personalizadas para cada necesidad específica de nuestros clientes, las que podemos agrupar en: Carga controlada, masiva, aduanera, meteriales peligrosos e insumos para la industria.",
      imagen1: "2.webp",
    },
  ];

  return (
    <section className="w-full bg-[#F5F6F7] overflow-hidden">
      <div className="relative w-full h-[350px] lg:h-screen 2xl:h-[60vh] mt-[84px] lg:mt-[160px]">
        <img
          src={
            "https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg"
          }
          alt="Banner 1"
          className="clip w-full h-full object-cover hidden lg:block"
        />
        <div className="w-full h-full absolute z-[2] bg-secondary/70 inset-0"></div>

        <div className="w-full h-full absolute z-[2] bg-black inset-0 opacity-40"></div>
        <AnimationLeft className="absolute overflow-hidden inset-0 w-[100%] px-4 lg:px-10 lg:w-full max-w-[1570px] mx-auto my-auto h-full flex justify-between items-center z-[3] text-white font-bold gap-0 ">
          <div className="flex flex-col">
            <span className="font-proximaRegular text-lg lg:text-xl flex gap-1 items-center  font-light">
              Inicio <FaAnglesLeft className="rotate-180 text-sm" />
              Conocenos
            </span>
            <h2 className="uppercase text-[2rem] lg:text-[3rem] 2xl:text-[3.5rem] font-roundkeyMedium tracking-wide font-light leading-10 mt-0 lg:mt-6">
              MÁS DE UNA DÉCADA
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
          src={
            "https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg"
          }
          alt="Banner 1"
          className="clip w-full h-full relative before:bg-black before:absolute before:inset-0 before:opacity-55 before:w-full before:h-full object-cover block lg:hidden"
        />
      </div>
      <div className="w-fit px-4 lg:px-10  py-4 lg:py-16 max-w-[1570px] mx-auto overflow-hidden justify-center flex flex-col gap-6">
        <p className="border-l-4 border-main pl-2 font-proximaSemibold text-xl mb-0">
          Nuestros servicios
        </p>
        {servicios && servicios.length > 0 ? (
          <div className="">
            <ListaProductos data={servicios} />
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
  );
}
