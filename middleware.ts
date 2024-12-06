import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

// Rutas públicas que no requieren autenticación
const publicRoutes = ['/login']
const protectedRoutes = ['/sistema']

export async function middleware (req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const path = req.nextUrl.pathname

  if (publicRoutes.includes(path)) {
    // Si hay token y está en login, redirigir a sistema
    if (token) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? '')
        await jwtVerify(token, secret)
        return NextResponse.redirect(new URL('/sistema', req.nextUrl))
      } catch (error: any) {
        console.log(error)
        const response = NextResponse.next()
        response.cookies.delete('token')
        return response
      }
    }
    return NextResponse.next()
  }
  if (protectedRoutes.some((route) => path.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? '')
      await jwtVerify(token, secret) // Solo validamos el token
      return NextResponse.next()
    } catch (error) {
      console.log('Error al verificar el token:', error)
      const response = NextResponse.redirect(new URL('/login', req.nextUrl))
      response.cookies.delete('token')
      return response
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/sistema/:path*', '/api/users/profile', '/api/banners/register']
}
