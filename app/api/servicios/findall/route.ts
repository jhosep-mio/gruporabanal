import { NextResponse } from 'next/server'
import { ServiciosModel } from '../../@models/servicios.model'
export async function GET () {
  try {
    const searchResults = await ServiciosModel.findAll()
    if (!searchResults || searchResults.totalCount == 0) {
      return NextResponse.json({ estado: false, message: 'No servicio found' }, { status: 404 })
    }
    return NextResponse.json(
      {
        estado: true,
        totalCount: searchResults.totalCount,
        servicios: searchResults.servicios
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
