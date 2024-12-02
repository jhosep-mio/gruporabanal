'use client'
import {
  useState,
  useEffect,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction
} from 'react'
import { UserSchema } from './UserSchema'
import axios from 'axios'
export interface AuthContextValue {
  auth: typeof UserSchema;
  setAuth: Dispatch<SetStateAction<typeof UserSchema>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
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
  const authUser = async (): Promise<any | undefined> => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/profile`,
        {
          withCredentials: true // Asegúrate de incluir cookies
        }
      )
      setAuth(data.message)
      setLoading(false)
    } catch (error) {
      console.log(error)
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
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
