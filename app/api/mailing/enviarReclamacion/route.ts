import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '../@controller/SendMail'

export async function POST (req: NextRequest) {
  const formData = await req.formData()
  const personType = formData.get('personType')?.toString() || ''
  const nombres = formData.get('nombres')?.toString() || ''
  const apellidos = formData.get('apellidos')?.toString() || ''
  const email = formData.get('email')?.toString() || ''
  const tipoDocumento = formData.get('tipoDocumento')?.toString() || ''
  const numeroDocumento = formData.get('numeroDocumento')?.toString() || ''
  const razonSocial = formData.get('razonSocial')?.toString() || ''
  const servicioBrindado = formData.get('servicioBrindado')?.toString() || ''
  const claimType = formData.get('claimType')?.toString() || ''
  const detalle = formData.get('detalle')?.toString() || ''

  try {
    if (!personType || !nombres || !email) {
      return NextResponse.json({ status: false, message: 'Complete los datos' }, { status: 400 })
    }
    const emailSent = await sendEmail('jamiom@ucvvirtual.edu.pe', 'Formulario de reclamaciones - WEB', 'FormReclamaciones.html', {
      personType,
      nombres,
      apellidos,
      email,
      tipoDocumento,
      numeroDocumento,
      razonSocial,
      servicioBrindado,
      claimType,
      detalle,
      web: `${process.env.NEXT_PUBLIC_BASE_URL}`
    })
    return NextResponse.json(
      {
        status: true,
        message: emailSent
      },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      status: false,
      message: 'Error server'
    })
  }
}
