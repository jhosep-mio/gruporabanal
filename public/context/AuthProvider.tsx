'use client'
import {
  useState,
  useEffect,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction
} from 'react'
import { carrito } from '../shared/interfaces'

export interface AuthContextValue {
  cart: carrito[];
  setCart: Dispatch<SetStateAction<carrito[]>>;
  openCart: boolean
  setOpenCart: any
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<carrito[]>([])
  const [openCart, setOpenCart] = useState<boolean>(false)

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
        setOpenCart
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
