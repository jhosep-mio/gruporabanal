import { CarruselNoticias } from "@/public/components/home/swiper/CarruselNoticias";
import { AnimationLeft } from "../../@components/Animated/AnimationLeft";

export default function TendenciasComercioExterior2024() {
  const noticias = [
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

  const noticia = {
    id: 1,
    titulo: "Tendencias en Comercio Exterior para 2024",
    url: "tendencias-comercio-exterior-2024",
    resumen:
      "El comercio exterior enfrenta nuevos desafíos y oportunidades en un mundo globalizado.",
    contenido: `
      <p>
        La dinámica del comercio exterior en 2024 estará marcada por la digitalización de procesos aduaneros, 
        la optimización de cadenas de suministro y las políticas comerciales más sostenibles. Estas tendencias 
        están transformando las exportaciones e importaciones, generando nuevas oportunidades para empresas 
        que invierten en tecnología y alianzas estratégicas.
      </p>
      
      <h3>Digitalización de los Procesos Aduaneros</h3>
      <p>
        Uno de los cambios más importantes será la digitalización completa de los procesos aduaneros, lo que permitirá agilizar trámites, 
        reducir errores y facilitar el cumplimiento normativo. La implementación de herramientas como inteligencia artificial, 
        blockchain y plataformas digitales está en el centro de esta transformación. Las empresas que adopten estas tecnologías 
        podrán reducir costos y mejorar la eficiencia de sus operaciones internacionales.
      </p>
      
      <h3>Optimización de las Cadenas de Suministro</h3>
      <p>
        Las interrupciones en las cadenas de suministro han obligado a las empresas a buscar soluciones más resilientes. En 2024, 
        veremos un aumento en la diversificación de proveedores y la utilización de herramientas de análisis predictivo para evitar 
        problemas logísticos. Además, la regionalización de las cadenas de suministro será una tendencia clave, permitiendo a las 
        empresas reducir tiempos y costos de transporte.
      </p>
      
      <h3>Enfoque en la Sostenibilidad</h3>
      <p>
        Con el auge de las normativas ambientales, las empresas están priorizando prácticas comerciales sostenibles. Esto incluye 
        el uso de transporte más ecológico, el cumplimiento de estándares internacionales y la reducción de la huella de carbono 
        en toda la cadena de suministro. Las políticas comerciales también incentivarán a las empresas a adaptarse a estas prácticas, 
        ofreciendo beneficios como aranceles reducidos o acceso preferencial a mercados internacionales.
      </p>
      
      <h3>Alianzas Estratégicas y Nuevos Mercados</h3>
      <p>
        Las empresas están formando alianzas estratégicas para acceder a nuevos mercados y fortalecer su presencia global. La cooperación 
        internacional, especialmente en regiones emergentes, está abriendo oportunidades para el crecimiento del comercio exterior. 
        Por otro lado, el desarrollo de tratados comerciales modernos facilitará el intercambio de bienes y servicios entre diferentes países.
      </p>
      
      <p>
        En conclusión, 2024 será un año de grandes desafíos y oportunidades en el comercio exterior. Aquellas empresas que estén preparadas 
        para adaptarse a las nuevas tendencias tendrán una ventaja competitiva en un mercado global en constante evolución.
      </p>
    `,
    imagen:
      "https://politico.pe/wp-content/uploads/2023/12/Tendencias-de-comercio-internacional-2024.webp",
  };

  return (
    <section className="w-full bg-[#F5F6F7] overflow-hidden">
      <div className="relative w-full mt-[84px] lg:mt-[160px] h-[100px] lg:h-[150px]">
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
            <h2 className="uppercase text-[2.5rem] 2xl:text-[5.8rem] font-roundkeyMedium tracking-wide font-light leading-5 lg:leading-none">
              Noticias
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
      <div className="w-full h-full  mt-10 container mx-auto lg:px-20 lg:pb-20">
        <h1 className="text-3xl lg:text-5xl font-bold font-avenir-heavy text-center w-full uppercase">
          {noticia?.titulo}
        </h1>
        <img
          src={noticia?.imagen}
          alt={noticia?.titulo}
          className="w-full object-cover mt-10 h-[350px] lg:h-[550px] object-center"
        />
        <div
          className="text-base lg:text-lg font-avenir-light mt-10 text-justify space-y-4"
          dangerouslySetInnerHTML={{ __html: noticia?.contenido }}
        ></div>
      </div>

      <div className="w-full px-4 lg:px-10 py-6 lg:pt-0 lg:pb-16 container mx-auto overflow-hidden">
        <h2 className="font-semibold text-[1.2rem] lg:text-[2rem] mt-0 lg:mt-1 text-center font-avenir-heavy">
          Otras Noticias
        </h2>
        <CarruselNoticias
          data={noticias}
          id={"relacionados"}
          producto={noticia.titulo}
        />
      </div>
    </section>
  );
}
