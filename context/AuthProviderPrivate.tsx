'use client'
import { useState, useEffect, createContext, type ReactNode, type Dispatch, type SetStateAction } from 'react'
import axios from 'axios'
import { UserSchema } from '@/components/schemas/UserSchema'
export interface AuthContextValue {
  auth: typeof UserSchema
  setAuth: Dispatch<SetStateAction<typeof UserSchema>>
  loading: boolean
  title: string
  setTitle: Dispatch<SetStateAction<string>>
}
const AuthContext = createContext<AuthContextValue | null>(null)
export const AuthProviderPrivate = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<typeof UserSchema>({
    id: '',
    name: '',
    email: '',
    idRol: null
  })
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const authUser = async (): Promise<any | undefined> => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/profile`, {
        withCredentials: true // Asegúrate de incluir cookies
      })
      setAuth(data.message)
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    authUser()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        title,
        setTitle
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
