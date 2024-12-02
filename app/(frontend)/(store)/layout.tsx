import { metadataProducto } from '@/public/components/seo/ProductoSeo';
import { Footer } from '../@estructura/Footer'
import { Header } from '../@estructura/Header'

export const metadata = metadataProducto;

export default function StoreLayout ({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
