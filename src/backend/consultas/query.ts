export async function queryPrivate (url: string) {
  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      return {
        props: {
          data: [] // Retorna array vacío si la respuesta no es exitosa
        }
      }
    }
    const contentType = res.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return {
        props: {
          data: [] // Retorna array vacío si la respuesta no es exitosa
        }
      }
    }
    const data = await res.json()
    return data.message
  } catch (error) {
    console.log(error)
  }
}
