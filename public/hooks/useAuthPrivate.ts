import { useContext } from 'react'
import AuthContext from '../context/AuthProviderPrivate'

const useAuthPrivate = () => {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider Private')
  }
  return context
}

export default useAuthPrivate
