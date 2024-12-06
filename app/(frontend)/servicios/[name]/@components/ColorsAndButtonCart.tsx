'use client'
import { formatPrice } from '@/components/Funtions'
import { ButtonCart } from './ButtonCart'

export const ColorsAndButtonCart = ({ product }: any) => {
  return (
    <>
      {product.precio > 0 && (
        <div className={'flex gap-3 mt-4  items-end'}>
          <p className="font-bold font-avenir-heavy text-[18px] text-primary_web">{formatPrice(product.precio)}</p>
        </div>
      )}
      <ButtonCart />
    </>
  )
}
