/* eslint-disable camelcase */

export async function SeoSearch ({ params }: any) {
  const { name } = params
  const seoDescription = `Búsqueda: ${name.toUpperCase()} | https://floreriamylady.com/search/${name} | Envía flores y desayunos sorpresa a la persona que tienes en el corazón | Flores y regalos inolvidables. Caja de Rosas y tulipanes, desayunos sorpresa, peluches!`

  return {
    title: `Búsqueda: ${name.toUpperCase()} | Envío de flores y regalos a domicilio | My Lady | Florerías Lima | Detalles para enviar`,
    description: seoDescription,
    keywords:
        'Rosas delivery, floreria Delivery en Molina, delivery La Molina, La Molina, San Isidro, La Molina, Pueblo Libre, Breña, Magdalena del Mar, San Borja, San Miguel, Santiago De Surco, Surquillo, Villa El Salvador, Villa Maria Del Triunfo, Lima Peru, Barranco, Cercado de Lima, Chorrillos, La Victoria, Los Olivos, Rimac, San Juan de Lurigancho, San Juan De Miraflores, San Luis, San Martin De Porres, Santa Anita, Callao Bellavista, Carmen De La Legua, La Perla, La Punta, Ancon, Ate, Carabayllo, Chaclacayo, Cieneguilla, Comas, El Agustino, Independencia, Lurigancho, Lurin Pachacamac, Pucusana, Puente Piedra, Punta Hermosa, Punta Negra, San Bartolo, Santa Maria Del Mar, Santa Rosa, Ventanilla, LIMA PERU, Rosas y flores para Día de la Madre, San Valentín, Día de la Secretaria, Día de la Mujer, Día del Padre, Fiestas Patrias, Navidad, Año Nuevo, matrimonios, quinceañeros, bouquets, orquídeas, rosatel, delivery de flores a Lima, arreglos florales para difuntos, florería en La Molina.',
    openGraph: {
      type: 'website',
      locale: 'es_PE',
      url: `https://floreriamylady.com/search/${name}`,
      title: `Búsqueda: ${name.toUpperCase()} | Envío de flores y regalos a domicilio | My Lady | Florerías Lima | Detalles para enviar`,
      description: seoDescription,
      images: [
        {
          url: 'https://floreriamylady.com/assets/estructura/opengraph-image.png',
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
      canonical: `https://floreriamylady.com/search/${name}`
    }
  }
}
