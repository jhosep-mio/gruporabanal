import { useContext } from 'react'
import AuthContext from '@/context/AuthProviderPrivate'

const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider Public')
  }
  return context
}

export default useAuth
