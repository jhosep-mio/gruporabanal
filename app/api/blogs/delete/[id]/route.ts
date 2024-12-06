import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import { BlogsModel } from '@/app/api/@models/blogs.model'

export async function POST (req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const uploadDir = path.join(process.cwd(), 'private/uploads', 'blogs')

  try {
    const blogFind = await BlogsModel.findoOneByid(id)
    if (!blogFind) {
      return NextResponse.json({ status: false, message: 'Blog no encontrado' })
    }
    const imageName = blogFind.imagen1
    const imagePath = path.join(uploadDir, imageName)
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath)
    }
    await BlogsModel.deleteBlog(id)
    return NextResponse.json({ status: true, message: 'Blog eliminado' })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: false, message: 'Error server' })
  }
}
