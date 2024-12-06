import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'

export async function GET (request: NextRequest, { params }: { params: Promise<{ name: string, folder: string }> }) {
  const name = (await params).name
  const folder = (await params).folder
  if (!folder || !name) {
    return NextResponse.json({ message: 'Missing folder or file name' }, { status: 400 })
  }

  // Construir la ruta al archivo
  const filePath = path.join(process.cwd(), 'private/uploads', folder, name)

  try {
    // Leemos el archivo de manera asíncrona
    const file = await fs.readFile(filePath)
    const fileExtension = path.extname(name).toLowerCase()

    // Establecer los tipos MIME según la extensión
    const mimeTypes = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif'
    }

    // Retornar el archivo con el encabezado adecuado
    return new NextResponse(file, {
      headers: {
        'Content-Type': mimeTypes[fileExtension as keyof typeof mimeTypes] || 'application/octet-stream'
      }
    })
  } catch (err) {
    // En caso de error, retornar un 404 si no se encuentra el archivo
    console.error(err)
    return NextResponse.json({ message: 'File not found' }, { status: 404 })
  }
}
