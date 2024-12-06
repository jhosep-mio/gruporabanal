'use client'
import { useState, useEffect, createContext, type ReactNode, type Dispatch, type SetStateAction } from 'react'
import { carrito } from '@/components/schemas/interfaces'
import axios from 'axios'

export interface AuthContextValue {
  cart: carrito[]
  setCart: Dispatch<SetStateAction<carrito[]>>
  openCart: boolean
  setOpenCart: any
  configuracion: any
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProviderPublic = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<carrito[]>([])
  const [openCart, setOpenCart] = useState<boolean>(false)
  const [configuracion, setConfiguracion] = useState<any>({})

  const getConfiguracion = async (): Promise<void> => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/configuracion/find/1`)
      setConfiguracion({
        titulo1: data?.configuracion?.titulo1,
        titulo2: data?.configuracion?.titulo2,
        titulo3: data?.configuracion?.titulo3,
        descripcion: data?.configuracion?.descripcion,
        telefono: data?.configuracion?.telefono,
        celular1: data?.configuracion?.celular1,
        correo1: data?.configuracion?.correo1,
        correo2: data?.configuracion?.correo2,
        correo3: data?.configuracion?.correo3,
        imagen1: data?.configuracion?.imagen1,
        imagen2: data?.configuracion?.imagen2,
        horario1: data?.configuracion?.horario1,
        direccion: data?.configuracion?.direccion,
        facebook: data?.configuracion?.facebook ?? '',
        instagram: data?.configuracion?.instagram ?? '',
        twitter: data?.configuracion?.twitter ?? '',
        linkedin: data?.configuracion?.linkedin ?? '',
        youtube: data?.configuracion?.youtube ?? '',
        whatsapp: data?.configuracion?.whatsapp
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getConfiguracion()
  }, [])

  useEffect(() => {
    // Recuperar el carrito del almacenamiento local cuando la página se cargue
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setCart(parsedCart)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        cart,
        setCart,
        openCart,
        setOpenCart,
        configuracion
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
