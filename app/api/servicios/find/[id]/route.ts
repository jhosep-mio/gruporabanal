import { ServiciosModel } from '@/app/api/@models/servicios.model'
import { NextResponse } from 'next/server'
export async function GET (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  try {
    const searchResults = await ServiciosModel.findoOneByid(id)
    if (!searchResults || searchResults.totalCount == 0) {
      return NextResponse.json({ estado: false, message: 'No servicio found' }, { status: 404 })
    }
    return NextResponse.json(
      {
        estado: true,
        servicio: searchResults
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