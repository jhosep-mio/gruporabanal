/* eslint-disable @next/next/no-img-element */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import { CarruselImages } from "@/public/components/productos/vista-producto/CarruselImages";
import { ColorsAndButtonCart } from "@/public/components/productos/vista-producto/ColorsAndButtonCart";
import Link from "next/link";
import { FaAnglesLeft } from "react-icons/fa6";
import { AnimationLeft } from "../../@components/Animated/AnimationLeft";
import { CarruselProducts } from "@/public/components/home/swiper/CarruselProducts";

export default async function Product() {
  const servicio = {
    id: 3,
    titulo: "Carga Internacional",
    url: "carga-internacional",
    contenido:
      "Contar con una amplia red de agentes en principales ciudades del mundo y una infraestructura que nos permite manejar y coordinar eficientemente todo tipo de embarques; con origen y destino desde cualquier parte del mundo. Destacando nuestro servicio con el soporte y asesoría de personal altamente calificado, así como un sistema de seguimiento vía Internet desde la etapa Pre-embarque (SEPOL) a través del cual es posible realizar el seguimiento de su carga en tiempo real, desde cualquier punto de origen hasta su entrega en el punto de destino final, destacadas en servicio integral de forma Aérea, marítima y postal",
    imagen1: "4.webp",
  };

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
      <div className="relative w-full mt-[84px] lg:mt-[160px] h-[250px] lg:h-[450px]">
        <img
          src={
            "https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg"
          }
          alt="Banner 1"
          className="clip w-full h-full object-cover hidden lg:block"
        />
        <div className="w-full h-full absolute z-[2] bg-secondary/70 inset-0"></div>
        <div className="w-full h-full absolute z-[2] bg-black inset-0 opacity-40"></div>
        <AnimationLeft className="absolute overflow-hidden inset-0 w-[100%]  px-4 lg:px-10 lg:w-full max-w-[1570px] mx-auto my-auto h-full flex justify-between items-center z-[3] text-white font-bold gap-0 ">
          <div className="flex flex-col">
            <span className="font-proximaRegular text-lg lg:text-xl flex gap-1 items-center  font-light">
              Inicio <FaAnglesLeft className="rotate-180 text-sm" />
              Servicios
            </span>
            <h2 className="uppercase text-[2.5rem] 2xl:text-[5.8rem] font-roundkeyMedium tracking-wide font-light leading-10 lg:leading-none">
              {servicio.titulo}
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

      <div className={`px-4 lg:px-10 pt-4 lg:pt-10 max-w-[1570px] mx-auto`}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Inicio</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/servicios">Servicios</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{servicio.titulo}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-6">
          <CarruselImages product={servicio} />
          <div className="px-2 lg:px-16 mt-4 lg:mt-0">
            <h1 className="font-avenir-heavy text-3xl text-black/80 font-montserratBold">
              {servicio.titulo}
            </h1>
            <div className="letter_style_products mt-4 flex flex-col gap-4 text-justify">
              {servicio.contenido}
            </div>
            <ColorsAndButtonCart product={servicio} />
            <section className=" relative mt-4 flex flex-col lg:flex-row gap-4">
              <div className="w-full p-4 border shadow-md shadow-black/20 flex flex-col items-center gap-2 rounded-md mt-4">
                <img
                  src="/assets/nosotros/eficacia.png"
                  alt=""
                  className="h-16 object-contain m-auto"
                />
                <div className="w-full flex flex-col justify-center">
                  <h3 className="font-proximaSemibold text-lg 2xl:text-2xl text-black/80 w-full leading-10 text-center">
                    Cotización
                  </h3>
                  <p className="text-black/80 gap-3 font-proximaRegular text-justify text-base flex h-42 items-center mt-3">
                    Necesitamos la información pertinente al servicio de agencia
                    de aduana que se la va a brindar, es un documento
                    informativo que la empresa utiliza para darle los mejores
                    precios del mercado y poder entablar una negociación.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 border shadow-md shadow-black/20 flex flex-col items-center gap-2 rounded-md mt-4">
                <img
                  src="/assets/nosotros/personal.png"
                  alt=""
                  className="h-16 object-contain m-auto"
                />
                <div className="w-full flex flex-col justify-center">
                  <h3 className="font-proximaSemibold text-lg 2xl:text-2xl text-black/80 w-full leading-10 text-center">
                    Reunión
                  </h3>
                  <p className="text-black/80 gap-3 font-proximaRegular text-justify text-base flex h-42 items-center mt-3">
                    La reunión para poder definir la cotización que se le hizo
                    llegar en su momento a su representada, darle los detalles
                    de los servicios de agencia de aduana y poder mostrarle el
                    nivel de profesionalismo con lo que cuenta la empresa.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="w-full px-4 lg:px-10 py-6 lg:py-16 max-w-[1570px] mx-auto overflow-hidden">
        <h2 className="font-semibold text-[1.2rem] lg:text-[2rem] mt-0 lg:mt-1 text-center font-avenir-heavy">
          Otros Servicios
        </h2>
        <CarruselProducts
          data={servicios}
          id={"relacionados"}
          producto={servicio.titulo}
        />
      </div>
    </section>
  );
}
