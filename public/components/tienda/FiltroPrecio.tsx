/* eslint-disable camelcase */
'use client'
import { Slider } from '@/src/components/ui/slider'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const FiltroPrecio = ({
  path,
  name,
  page,
  sort,
  min_price,
  max_price
}: any) => {
  const router = useRouter()
  const [priceRange, setPriceRange] = useState<any>([10, 1000]) // Estado para el rango de precios
  const handleChange = (value: any): void => {
    setPriceRange(value)
  }

  const applyPriceFilter = () => {
    let url = ''
    if (path != null && !name != null) {
      url = `/${path}/${name}`
    }
    const queryParams = []
    // Agregar parámetros solo si están definidos y no están vacíos
    if (page && page > 1) queryParams.push(`page=${page}`)
    if (sort) queryParams.push(`sort_by=${sort}`)
    if (priceRange[0] !== undefined && priceRange[0] !== null && priceRange[0] !== '') {
      queryParams.push(`min_price=${priceRange[0]}`)
    }
    if (priceRange[1] !== undefined && priceRange[1] !== null && priceRange[1] !== '') {
      queryParams.push(`max_price=${priceRange[1]}`)
    }
    // Agregar query params a la URL si existen
    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`
    }

    router.push(url)
  }

  const clearPriceFilter = () => {
    const queryParams = new URLSearchParams()
    if (page && page > 1) queryParams.set('page', page.toString())
    if (sort) queryParams.set('sort_by', sort)
    const queryString = queryParams.toString()
    router.push(`/${path}/${name}?${queryString}`)
  }

  return (
    <>
      <div>
        {min_price && max_price
          ? (
          <div className="mt-4">
            <p className="text-sm">Filtros aplicados:</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-sm font-medium">
                Precio: S/{min_price} - S/{max_price}
              </span>
              <button
                onClick={clearPriceFilter}
                className="text-red-500 hover:text-red-700 text-sm font-bold"
              >
                X
              </button>
            </div>
          </div>
            )
          : null}
      </div>
      <div className="mt-6">
        <p className="uppercase font-bold text-sm border-b border-b-gray-300 py-2">
          FIltrar por precio
        </p>

        <Slider
          max={1000}
          min={30}
          step={1}
          value={priceRange}
          onValueChange={handleChange}
          className="mt-4"
        />
        <p className="mt-3 text-sm text-center font-bold">
          Precio: S/{priceRange[0]} - S/{priceRange[1]}
        </p>

        <button
          onClick={applyPriceFilter}
          className="hover:bg-main_dark transition-colors text-sm rounded-md mt-4 w-full bg-main text-white py-2 uppercase font-bold"
        >
          Aplicar filtro
        </button>
      </div>
    </>
  )
}
