import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import { ServiciosModel } from '@/app/api/@models/servicios.model'

export async function POST (req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const uploadDir = path.join(process.cwd(), 'private/uploads', 'servicios')

  try {
    const servicioFind = await ServiciosModel.findoOneByid(id)
    if (!servicioFind) {
      return NextResponse.json({ status: false, message: 'Blog no encontrado' })
    }
    const imageName = servicioFind.imagen1
    const imagePath = path.join(uploadDir, imageName)
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath)
    }
    await ServiciosModel.deleteServicio(id)
    return NextResponse.json({ status: true, message: 'Blog eliminado' })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: false, message: 'Error server' })
  }
}
