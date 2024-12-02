import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware (req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const path = req.nextUrl.pathname
  if (path == '/sistema' && !token) {
    return NextResponse.next()
  }
  if (!token) {
    return NextResponse.redirect(new URL('/sistema', req.nextUrl))
  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? '')
    const { payload } = await jwtVerify(token, secret)
    const email = payload.email as string
    if (path == '/sistema' && email) {
      return NextResponse.redirect(new URL('/sistema/principal', req.nextUrl))
    }
    const res = NextResponse.next()
    res.headers.set('X-User-Email', email)
    return res
  } catch (error) {
    console.log('Error al verificar el token:', error)
    return NextResponse.redirect(new URL('/sistema', req.nextUrl))
  }
}

export const config = {
  matcher: [
    '/api/users/profile',
    '/api/banners/findall',
    '/api/banners/register',
    '/sistema/:path*'
  ]
}
