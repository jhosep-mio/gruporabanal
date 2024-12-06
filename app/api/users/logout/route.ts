import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
  const token = req.cookies.get('token')?.value
  if (!token) {
    return NextResponse.json({ status: false, message: 'Token not provider' }, { status: 404 })
  }
  try {
    verify(token, process.env.JWT_SECRET ?? '')
    const cookieStore = await cookies()
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.ENTORNO === 'produccion',
      sameSite: 'lax',
      maxAge: 0, // 7 días
      path: '/'
    })
    return NextResponse.json({ status: true })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        ok: false,
        message: 'Error server'
      },
      { status: 500 }
    )
  }
}
