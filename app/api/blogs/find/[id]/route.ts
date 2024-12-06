import { BlogsModel } from '@/app/api/@models/blogs.model'
import { NextResponse } from 'next/server'
export async function GET (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  try {
    const searchResults = await BlogsModel.findoOneByid(id)
    if (!searchResults || searchResults.totalCount == 0) {
      return NextResponse.json({ estado: false, message: 'No products found' }, { status: 404 })
    }
    return NextResponse.json(
      {
        estado: true,
        blog: searchResults
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
