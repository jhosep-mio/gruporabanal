/* eslint-disable camelcase */
// import { getServerSideProps } from '@/public/components/database/getData'
import { MetadataRoute } from 'next'

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
//   const categories = await getServerSideProps('categorias/findAll')
//   const products = await getServerSideProps('productos/findAll')

  //   const categorias: MetadataRoute.Sitemap = categories.map(({ url }: any) => ({
  //     url: `${process.env.NEXT_PUBLIC_BASE_URL}/collections/${url}`,
  //     lastModified: new Date(),
  //     changeFrequency: 'weekly',
  //     priority: 0.8
  //   }))

  //   const productos: MetadataRoute.Sitemap = products.map(({ url, url_categoria }: any) => ({
  //     url: `${process.env.NEXT_PUBLIC_BASE_URL}/collections/${url_categoria}/${url}`,
  //     lastModified: new Date(),
  //     changeFrequency: 'weekly',
  //     priority: 0.9
  //   }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`, // URL principal
      lastModified: new Date(),
      priority: 1.0 // Alta prioridad para la página principal
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/nosotros`,
      lastModified: new Date(),
      priority: 0.5
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicios`,
      lastModified: new Date(),
      priority: 0.7
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contacto`,
      lastModified: new Date(),
      priority: 0.7
    }
    // ...categorias,
    // ...productos
  ]
}
