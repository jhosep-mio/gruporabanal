import path from 'path'
import fs from 'fs'
import Handlebars from 'handlebars'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.HOST_MAIL ?? 'smtp.gmail.com',
  port: process.env.PUERTO_MAIL,
  secure: process.env.SECURE_MAIL,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASS_MAIL
  }
} as nodemailer.TransportOptions)

export const sendEmail = async (
  to: string | string[],
  subject: string,
  templateName: string,
  replacements: Record<string, string>
): Promise<boolean> => {
  try {
    // Asegúrate de que la plantilla existe
    const templatePath = path.join(process.cwd(), 'public', 'mail', templateName)
    if (!fs.existsSync(templatePath)) {
      throw new Error(`La plantilla no existe: ${templatePath}`)
    }
    const source = fs.readFileSync(templatePath, 'utf-8')
    const template = Handlebars.compile(source)
    if (!template) {
      throw new Error('Error al compilar la plantilla.')
    }
    const htmlToSend = template(replacements)
    // Enviar el correo
    const result = await transporter.sendMail({
      from: process.env.USER_MAIL,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      html: htmlToSend
    })

    return !!result // Devuelve true si se envió correctamente
  } catch (error: any) {
    console.error('Error al enviar el correo:', error.message)
    return false
  }
}
