import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../../@models/users.model'

export async function POST (req: NextRequest) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ status: false, message: 'Complete todos los campos' }, { status: 404 })
    }
    const user = await UserModel.findoOneByEmail(email)
    if (!user) {
      return NextResponse.json({ status: false, message: 'El usuario no existe' }, { status: 404 })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return NextResponse.json({ status: false, message: 'Contraseña incorrecta' }, { status: 404 })
    }
    const secret = process.env.JWT_SECRET
    const token = jwt.sign(
      {
        email: user.email,
        id_rol: user.id_rol
      },
      secret ?? '',
      {
        expiresIn: '7d'
      }
    )
    const cookieStore = await cookies()
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.ENTORNO == 'produccion',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
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
