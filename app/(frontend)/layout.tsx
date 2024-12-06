'use client'
import { AuthProviderPublic } from '@/context/AuthProviderPublic'
import { Footer } from './@components/estructura/Footer'
import { Header } from './@components/estructura/Header'

export default function StoreLayout ({ children }: any) {
  return (
    <>
      <AuthProviderPublic>
        <Header />
        {children}
        <Footer />
      </AuthProviderPublic>
    </>
  )
}
