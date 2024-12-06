import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { UserModel } from '../../@models/users.model'

export async function GET (req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? '')
    const { payload } = await jwtVerify(token, secret)
    const email = payload.email as string
    const user = await UserModel.findoOneByEmail(email)
    return NextResponse.json({ ok: true, message: user }, { status: 200 })
  } catch (error) {
    console.log('Error al verificar el token:', error)
    return NextResponse.json({ ok: false, message: 'Error server' }, { status: 500 })
  }
}
