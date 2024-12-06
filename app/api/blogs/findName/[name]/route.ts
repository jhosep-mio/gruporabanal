import { BlogsModel } from '@/app/api/@models/blogs.model'
import { NextResponse } from 'next/server'
export async function GET (
  _request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const name = (await params).name
  try {
    const searchResults = await BlogsModel.findoOneByName(name)
    const searchResultsBlogs = await BlogsModel.findoAllNoName(name)
    if (!searchResults || searchResults.totalCount == 0) {
      return NextResponse.json({ estado: false, message: 'No servicio found' }, { status: 404 })
    }
    return NextResponse.json(
      {
        estado: true,
        blog: searchResults,
        blogs: searchResultsBlogs
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
