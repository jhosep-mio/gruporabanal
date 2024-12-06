import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import sharp from 'sharp'
import { ConfiguracionesModel } from '@/app/api/@models/configuraciones.model'

async function blobToBuffer (blob: Blob): Promise<Buffer> {
  const arrayBuffer = await blob.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

export async function POST (req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const uploadDir = path.join(process.cwd(), 'private/uploads', 'configuraciones')
  const formData = await req.formData()

  const titulo1 = formData.get('titulo1')?.toString() || ''
  const titulo2 = formData.get('titulo2')?.toString() || ''
  const titulo3 = formData.get('titulo3')?.toString() || ''
  const descripcion = formData.get('descripcion')?.toString() || ''
  const imagen1 = formData.get('imagen1') as Blob | null
  const imagen2 = formData.get('imagen2') as Blob | null
  const telefono = formData.get('telefono')?.toString() || ''
  const celular1 = formData.get('celular1')?.toString() || ''
  const correo1 = formData.get('correo1')?.toString() || ''
  const correo2 = formData.get('correo2')?.toString() || ''
  const correo3 = formData.get('correo3')?.toString() || ''
  const horario1 = formData.get('horario1')?.toString() || ''
  const direccion = formData.get('direccion')?.toString() || ''
  const facebook = formData.get('facebook')?.toString() || ''
  const instagram = formData.get('instagram')?.toString() || ''
  const twitter = formData.get('twitter')?.toString() || ''
  const linkedin = formData.get('linkedin')?.toString() || ''
  const youtube = formData.get('youtube')?.toString() || ''
  const whatsapp = formData.get('whatsapp')?.toString() || ''

  try {
    if (!titulo1 || !titulo2 || !titulo3) {
      return NextResponse.json({ status: false, message: 'Complete los datos' }, { status: 400 })
    }
    const configuracionFind = await ConfiguracionesModel.findoOneByid(id)

    const savedImages: { [key: string]: string } = {}
    // Función para procesar y guardar una imagen
    const processImage = async (imageFile: any, imageField: string) => {
      const originalName = imageFile.name.toLowerCase().replace(/[\s_]+/g, '-')
      const formattedName = originalName.replace(/(\.[\w\d_-]+)$/i, `_${uuidv4()}$1`)
      const imagePath = path.join(uploadDir, formattedName)
      try {
        // Convertir Blob a Buffer antes de procesarlo con sharp
        const buffer = await blobToBuffer(imageFile)
        await sharp(buffer).toFile(imagePath)
        savedImages[imageField] = formattedName
      } catch (error) {
        console.error(`Error processing image for ${imageField}:`, error)
        throw new Error('Error processing image')
      }
    }
    if (imagen1) {
      await processImage(imagen1, 'imagen1')
      const oldImagePath = configuracionFind.imagen1 ? path.join(uploadDir, configuracionFind.imagen1) : null
      if (oldImagePath && fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath)
      }
    }
    if (imagen2) {
      await processImage(imagen2, 'imagen2')
      const oldImagePath = configuracionFind.imagen2 ? path.join(uploadDir, configuracionFind.imagen2) : null
      if (oldImagePath && fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath)
      }
    }
    const formattedName1 = savedImages.imagen1 || configuracionFind.imagen1 || null
    const formattedName2 = savedImages.imagen2 || configuracionFind.imagen2 || null
    await ConfiguracionesModel.update(titulo1, titulo2, titulo3, descripcion, formattedName1, formattedName2, telefono, celular1, correo1, correo2, correo3, horario1, direccion, facebook, instagram, twitter, linkedin, youtube, whatsapp, new Date(), id)
    return NextResponse.json({ status: true, message: 'success' })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
      message: 'Error server'
    })
  }
}
