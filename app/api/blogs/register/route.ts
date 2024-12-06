import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import sharp from 'sharp'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import { BlogsModel } from '../../@models/blogs.model'
// Función para convertir un Blob a un Buffer
async function blobToBuffer (blob: Blob): Promise<Buffer> {
  const arrayBuffer = await blob.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

export async function POST (req: NextRequest) {
  const formData = await req.formData()
  const titulo = formData.get('titulo')?.toString() || ''
  const url = formData.get('url')?.toString() || ''
  const resumen = formData.get('resumen')?.toString() || ''
  const descripcion = formData.get('descripcion')?.toString() || ''
  const imagen1 = formData.get('imagen1') as Blob | null

  if (!imagen1) {
    return NextResponse.json({ status: false, message: 'Imagen es obligatoria' }, { status: 400 })
  }

  try {
    const savedImages: { [key: string]: string } = {}
    const uploadDir = path.join(process.cwd(), 'private/uploads', 'blogs') // Carpeta privada
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }) // Crea el directorio si no existe
    } // Función para procesar y guardar una imagen
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
    if (imagen1) await processImage(imagen1, 'imagen1')
    const formattedName1 = savedImages.imagen1 || null

    // Guardar en la base de datos si es necesario
    await BlogsModel.create({ titulo, url, imagen1: formattedName1, resumen, descripcion, created_at: new Date(), updated_at: new Date() })
    return NextResponse.json({ status: true })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ ok: false, message: 'Error server' }, { status: 500 })
  }
}
