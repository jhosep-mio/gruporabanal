import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import sharp from 'sharp'
import { BlogsModel } from '@/app/api/@models/blogs.model'

async function blobToBuffer (blob: Blob): Promise<Buffer> {
  const arrayBuffer = await blob.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

export async function POST (req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const uploadDir = path.join(process.cwd(), 'private/uploads', 'blogs')
  const formData = await req.formData()
  const titulo = formData.get('titulo')?.toString() || ''
  const url = formData.get('url')?.toString() || ''
  const resumen = formData.get('resumen')?.toString() || ''
  const descripcion = formData.get('descripcion')?.toString() || ''
  const imagen1 = formData.get('imagen1') as Blob | null
  try {
    if (!titulo || !resumen || !descripcion) {
      return NextResponse.json({ status: false, message: 'Complete los datos' }, { status: 400 })
    }
    const bannerFind = await BlogsModel.findoOneByid(id)

    if (!bannerFind || !bannerFind.imagen1) {
      return NextResponse.json({ status: false, message: 'Banner no encontrado o sin imagen' }, { status: 400 })
    }
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
      const oldImagePath = bannerFind.imagen1 ? path.join(uploadDir, bannerFind.imagen1) : null
      if (oldImagePath && fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath)
      }
    }

    const descriptionToStore = descripcion && descripcion.trim() !== '' && descripcion !== 'null' ? descripcion : null
    const formattedName1 = savedImages.imagen1 || bannerFind.imagen1 || null
    await BlogsModel.update(titulo, url, resumen, descriptionToStore, formattedName1, new Date(), id)
    return NextResponse.json({ status: true, message: 'success' })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
      message: 'Error server'
    })
  }
}
