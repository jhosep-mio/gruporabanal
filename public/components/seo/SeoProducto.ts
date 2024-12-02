/* eslint-disable camelcase */
import { getServerSideProps } from '../database/getData'

export async function SeoProducto ({ params }: any) {
  const { name, 'name-product': nameProduct } = params
  const product = await getServerSideProps(
    `productos/findByName/${name}/${nameProduct}`
  )

  function stripHTML (htmlString: any) {
    return htmlString.replace(/<[^>]+>/g, '')
  }

  const seoDescription = `${stripHTML(product.caracteristicas)} | https://floreriamylady.com/collections/${product.url_categoria}/${product.url} `

  return {
    title: `${product?.nombre} `,
    description: seoDescription,
    keywords:
      'Rosas delivery, floreria Delivery en Molina, delivery La Molina, La Molina, San Isidro, La Molina, Pueblo Libre, Breña, Magdalena del Mar, San Borja, San Miguel, Santiago De Surco, Surquillo, Villa El Salvador, Villa Maria Del Triunfo, Lima Peru, Barranco, Cercado de Lima, Chorrillos, La Victoria, Los Olivos, Rimac, San Juan de Lurigancho, San Juan De Miraflores, San Luis, San Martin De Porres, Santa Anita, Callao Bellavista, Carmen De La Legua, La Perla, La Punta, Ancon, Ate, Carabayllo, Chaclacayo, Cieneguilla, Comas, El Agustino, Independencia, Lurigancho, Lurin Pachacamac, Pucusana, Puente Piedra, Punta Hermosa, Punta Negra, San Bartolo, Santa Maria Del Mar, Santa Rosa, Ventanilla, LIMA PERU, Rosas y flores para Día de la Madre, San Valentín, Día de la Secretaria, Día de la Mujer, Día del Padre, Fiestas Patrias, Navidad, Año Nuevo, matrimonios, quinceañeros, bouquets, orquídeas, rosatel, delivery de flores a Lima, arreglos florales para difuntos, florería en La Molina.',
    openGraph: {
      type: 'website',
      locale: 'es_PE',
      url: `https://minacor.com/collections/${product.url_categoria}/${product.url}`,
      title: `${product?.nombre} `,
      description: seoDescription,
      images: [
        {
          url: `https://apirest.minacor.com/api/productos/uploads/${product.imagen1}`,
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
      canonical: `https://floreriamylady.com/collections/${product.url_categoria}/${product.url}`
    }
  }
}
