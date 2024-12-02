import { Global } from '@/src/helper/Global'
import { notFound } from 'next/navigation'

export async function getServerSideProps (url: string) {
  try {
    const res = await fetch(`${Global.url}/${url}`, { cache: 'no-store' })
    if (!res.ok) {
      notFound()
    }
    const contentType = res.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      notFound()
    }
    const data = await res.json()
    return data.message
  } catch (error) {
    console.log(error)
    notFound()
  }
}

export async function getServerSidePropsNotMessage (url: string) {
  try {
    const res = await fetch(`${Global.url}/${url}`, { cache: 'no-store' })
    if (!res.ok) {
      notFound()
    }
    const dataNotMessage = await res.json()
    if (
      dataNotMessage.estado === false &&
      dataNotMessage.message === 'Category not found'
    ) {
      notFound()
    }
    return dataNotMessage
  } catch (error) {
    console.log(error)
    notFound()
  }
}

export async function getServerSidePropsSerach (url: string) {
  try {
    const res = await fetch(`${Global.url}/${url}`, { cache: 'no-store' })
    if (!res.ok) {
      notFound()
    }
    const dataNotMessage = await res.json()
    if (
      dataNotMessage.estado == false &&
      dataNotMessage.message == 'Error server'
    ) {
      console.log('no se encontro productos')
      notFound() // Llama a notFound si la categoría no se encuentra
    }
    return dataNotMessage
  } catch (error) {
    console.log(error)
    notFound() // Llama a notFound en caso de error
  }
}
