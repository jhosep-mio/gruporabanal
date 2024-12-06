export async function getServerSidePropsSerach (url: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, { cache: 'no-store' })
    if (!res.ok) {
      return []
    }
    const dataNotMessage = await res.json()
    if (dataNotMessage.estado == false && dataNotMessage.message == 'Error server') {
      console.log('no se encontro productos')
      return [] // Llama a notFound si la categoría no se encuentra
    }
    return dataNotMessage
  } catch (error) {
    console.log(error)
    return [] // Llama a notFound en caso de error
  }
}
