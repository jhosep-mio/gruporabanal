import { NextResponse } from 'next/server'
import { ConfiguracionesModel } from '@/app/api/@models/configuraciones.model'
export async function GET (_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  try {
    const searchResults = await ConfiguracionesModel.findoOneByid(id)
    if (!searchResults || searchResults.totalCount == 0) {
      return NextResponse.json({ estado: false, message: 'No configuracion found' }, { status: 404 })
    }
    return NextResponse.json(
      {
        estado: true,
        configuracion: searchResults
      },
      { status: 200 }
    )
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
