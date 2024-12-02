/* eslint-disable camelcase */
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Filters = ({ path, name, page, min_price, max_price }: any) => {
  const router = useRouter()

  const handlePageChange = (e: any) => {
    const queryParams = []
    // Agregar parámetros solo si están definidos y no están vacíos
    if (page && page > 1) queryParams.push(`page=${page}`)
    if (e.target.value) queryParams.push(`sort_by=${e.target.value}`)
    if (min_price !== undefined && min_price !== null && min_price !== '') {
      queryParams.push(`min_price=${min_price}`)
    }
    if (max_price !== undefined && max_price !== null && max_price !== '') {
      queryParams.push(`max_price=${max_price}`)
    }
    let url = ''
    if (path != null && !name != null) {
      url = `/${path}/${name}`
    }
    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`
    }
    router.push(url)
  }

  return (
    <select
      name=""
      id=""
      onChange={(e) => handlePageChange(e)}
      className="w-full lg:w-[200px] px-2 py-2 outline-none bg-transparent border border-gray-300 text-[13px]"
    >
      <option value="">Orden por defecto</option>
      <option value="price-ascending">Precio, menor a mayor</option>
      <option value="price-descending">Precio, mayor a menor</option>
      <option value="created-ascending">
        Fecha de antiguo a reciente
      </option>
      <option value="created-descending">
        Fecha de reciente a antiguo
      </option>
    </select>
  )
}
