import { seoHome } from '@/public/seo/seoHome'
import { Form } from '../@components/reclamaciones/Form'

export const metadata = seoHome

export default function page () {
  return (
    <>
      <section className="w-full pt-[84px] lg:pt-[180px] bg-white text-black">
        <div className=" px-4 sm:px-8 md:px-12 lg:px-16 w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-8 py-20">
          <div className="w-full lg:w-2/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Formulario de Reclamo</h2>
            <p className="text-black-900 mb-4 ">
              Estamos disponibles para recibir y gestionar cualquier queja o sugerencia relacionada con nuestras operaciones, en cumplimiento de las
              normativas establecidas por el Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual
              (INDECOPI).
            </p>{' '}
            <p className="text-black-900 mb-4">
              {' '}
              Seguimos los procedimientos estipulados en el Decreto Supremo N° 011-2011-PCM y su modificatoria, el Decreto Supremo N° 058-2017-PCM,
              que regulan el proceso de atención y respuesta ante reclamos en el Perú.{' '}
            </p>{' '}
            <p className="text-black-900 mb-4">
              Para asegurar una tramitación efectiva de tu solicitud, es importante que la información proporcionada sea precisa y completa. Nos
              comprometemos a tratar todas las observaciones conforme a la legislación vigente y dentro de los plazos establecidos por las autoridades
              competentes.
            </p>
            <p className="text-black-900 mb-4">
              {' '}
              Para mayor transparencia, la información suministrada en este documento será remitida al correo: consultas@gruporabanal.com.pe
            </p>
          </div>
          <div className="w-full lg:w-3/5">
            <Form />
          </div>
        </div>
      </section>
    </>
  )
}
