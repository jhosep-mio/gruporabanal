import { NextResponse } from 'next/server'
import { BlogsModel } from '../../@models/blogs.model'
export async function GET () {
  try {
    const searchResults = await BlogsModel.findAll()
    if (!searchResults || searchResults.totalCount == 0) {
      return NextResponse.json({ estado: false, message: 'No products found' }, { status: 404 })
    }
    return NextResponse.json(
      {
        estado: true,
        totalCount: searchResults.totalCount,
        blogs: searchResults.blogs
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
