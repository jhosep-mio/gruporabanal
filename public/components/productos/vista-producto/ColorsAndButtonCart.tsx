'use client'
import { formatPrice } from '@/public/shared/Funtions'
import { ButtonCart } from './ButtonCart'
import { useState } from 'react'

export const ColorsAndButtonCart = ({ product }: any) => {
  const color = product.colors && JSON.parse(product.colors).length > 0 ? JSON.parse(product.colors)[0] : null
  const [selectedColor] = useState(color)
  return (
    <>
      {product.precio > 0 &&
        <div className={'flex gap-3 mt-4  items-end'}>
            <p className="font-bold font-avenir-heavy text-[18px] text-primary">
            {formatPrice(product.precio)}
            </p>
        </div>
      }
      <ButtonCart product={product} selectedColor={selectedColor}/>
    </>
  )
}
