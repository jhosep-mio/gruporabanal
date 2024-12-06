import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '../@controller/SendMail'

export async function POST (req: NextRequest) {
  const formData = await req.formData()
  const ruc = formData.get('ruc')?.toString() || ''
  const nombres = formData.get('nombres')?.toString() || ''
  const email = formData.get('email')?.toString() || ''
  const mensaje = formData.get('mensaje')?.toString() || ''

  try {
    if (!ruc || !nombres || !email) {
      return NextResponse.json({ status: false, message: 'Complete los datos' }, { status: 400 })
    }
    const emailSent = await sendEmail('jamiom@ucvvirtual.edu.pe', 'Formulario de Contacto web', 'FormContact.html', {
      ruc,
      nombres,
      email,
      mensaje,
      web: `${process.env.NEXT_PUBLIC_BASE_URL}`
    })
    return NextResponse.json({
      ok: true,
      message: emailSent
    }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
      message: 'Error server'
    })
  }
}
