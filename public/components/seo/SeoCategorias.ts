/* eslint-disable camelcase */
import { getServerSidePropsNotMessage } from '../database/getData'

export async function SeoCategorias ({ params, searchParams }: any) {
  const { name } = params
  const page = parseInt(searchParams.page || '1')
  const sort = searchParams.sort_by || ''
  const min_price = searchParams.min_price || ''
  const max_price = searchParams.max_price || ''
  const pageSize = 12
  let url = `categorias/findName/${name}?page=${page}&pageSize=${pageSize}`
  if (sort) url += `&sort_by=${sort}`
  if (min_price) url += `&min_price=${min_price}`
  if (max_price) url += `&max_price=${max_price}`
  const { categoria } = await getServerSidePropsNotMessage(url)

  const seoDescription = `${categoria?.nombre} | https://floreriamylady.com/collections/${name} `

  return {
    title: `${categoria?.nombre} `,
    description: seoDescription,
    keywords:
        'Rosas delivery, floreria Delivery en Molina, delivery La Molina, La Molina, San Isidro, La Molina, Pueblo Libre, Breña, Magdalena del Mar, San Borja, San Miguel, Santiago De Surco, Surquillo, Villa El Salvador, Villa Maria Del Triunfo, Lima Peru, Barranco, Cercado de Lima, Chorrillos, La Victoria, Los Olivos, Rimac, San Juan de Lurigancho, San Juan De Miraflores, San Luis, San Martin De Porres, Santa Anita, Callao Bellavista, Carmen De La Legua, La Perla, La Punta, Ancon, Ate, Carabayllo, Chaclacayo, Cieneguilla, Comas, El Agustino, Independencia, Lurigancho, Lurin Pachacamac, Pucusana, Puente Piedra, Punta Hermosa, Punta Negra, San Bartolo, Santa Maria Del Mar, Santa Rosa, Ventanilla, LIMA PERU, Rosas y flores para Día de la Madre, San Valentín, Día de la Secretaria, Día de la Mujer, Día del Padre, Fiestas Patrias, Navidad, Año Nuevo, matrimonios, quinceañeros, bouquets, orquídeas, rosatel, delivery de flores a Lima, arreglos florales para difuntos, florería en La Molina.',
    openGraph: {
      type: 'website',
      locale: 'es_PE',
      url: `https://minacor.com/collections/${name}`,
      title: `${categoria?.nombre} `,
      description: seoDescription,
      images: [
        {
          url: `https://apirest.floreriamylady.com/api/categorias/uploads/${categoria.imagen1}`,
          width: 800,
          height: 600,
          alt: 'Arreglos florales de My Lady Florería'
        }
      ]
    },
    generator: 'Microsoft FrontPage 4.0',
    robots: 'index,follow',
    authors: [{ name: 'My Lady Florería' }],
    alternates: {
      canonical: `https://minacor.com/collections/${name}`
    }
  }
}
