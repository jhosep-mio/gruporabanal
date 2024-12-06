import { Metadata } from 'next'

export const seoHome: Metadata = {
  title: 'GRUPO RABANAL - AGENCIA DE ADUANA',
  description:
    'Somos una empresa dedicada al servicio de comercio exterior, abarcando agencia de aduanas, carga internacional, así como transporte de carga a nivel nacional. Estamos formados por una corporación con más de 25 años de experiencia, nuestro staff de colaboradores esta conformada por 58 profesionales con experiencia en el rubro, quienes permitirán que sus actividades comerciales internacionales se desarrollan de una forma mas rápida, segura, económica y confiable que usted y su digna representada se merecen.',
  keywords: 'comercio exterior, agencia de aduanas, carga nacional , carga internacional',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/seo/opengraph-image.webp`,
    title: 'GRUPO RABANAL - AGENCIA DE ADUANA',
    description:
      'Somos una empresa dedicada al servicio de comercio exterior, abarcando agencia de aduanas, carga internacional, así como transporte de carga a nivel nacional. Estamos formados por una corporación con más de 25 años de experiencia, nuestro staff de colaboradores esta conformada por 58 profesionales con experiencia en el rubro, quienes permitirán que sus actividades comerciales internacionales se desarrollan de una forma mas rápida, segura, económica y confiable que usted y su digna representada se merecen.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/seo/opengraph-image.webp`,
        width: 800,
        height: 600,
        alt: ''
      }
    ]
  },
  generator: 'Microsoft FrontPage 4.0',
  robots: 'index,follow',
  authors: [{ name: 'GRUPO RABANAL - AGENCIA DE ADUANA' }]
}
