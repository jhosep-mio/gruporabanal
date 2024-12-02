/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'
import { FaRegTrashCan } from 'react-icons/fa6'
import { FiMinus, FiPlus } from 'react-icons/fi'
import useAuth from '@/public/hooks/useAuth'
import { Global } from '@/src/helper/Global'
import { calculateTotal, decreaseItemQuantity, increaseItemQuantity } from '@/public/shared/Funtions'
import { useRouter } from 'next/navigation'

export const Carrito = ({ openCar, setOpenCar }: any) => {
  const { cart, setCart } = useAuth()
  const router = useRouter()

  const calculateItemSubtotal = (precio: number | null, cantidad: number | null): string | undefined => {
    if (precio !== null && cantidad !== null) {
      const subtotal = precio * cantidad
      return subtotal.toFixed(2)
    }
  }

  return (
    <div
      onClick={() => setOpenCar(!openCar)}
      className="bg-black/30 fixed z-[100] w-full h-full left-0 right-0 bottom-0 top-0 flex justify-end overflow-hidden"
    >
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[95%] md:w-[480px] h-full relative flex-col justify-between"
      >
        <div className="w-full items-center flex justify-between px-4 lg:px-10 py-4 lg:py-6 h-[60px] lg:h-[80px] relative">
          <div className="flex items-center justify-center w-full gap-5">
            <h5 className="text-base lg:text-xl uppercase font-bold">Carrito de compra</h5>
          </div>
          <div className="flex justify-end absolute right-4 cursor-pointer" onClick={() => setOpenCar(!openCar)}>
            <IoMdClose className="text-black/60 text-xl md:text-3xl" />
          </div>
          <div className=" absolute bottom-0 left-0 right-0 px-4 lg:px-10">
            <span className="border-b border-gray-300 block w-full h-[1px]"></span>
          </div>
        </div>

        <div className="px-4 lg:px-10 calc_carrito overflow-y-auto">
          {cart && cart.length > 0 ? (
            cart.map((item: any, index: number) => (
              <div key={index} className="flex items-center gap-4 justify-between group py-4 ">
                <div className="flex items-center gap-4 h-[100px] w-full">
                  <img src={`${Global.url}/productos/uploads/${item.imagen1}`} alt="" className="w-[80px] lg:w-[100px] h-[100px] object-contain" />
                  <div className="flex flex-col h-full justify-between gap-0     py-2 w-full">
                    <Link href={`/collections/${item.url}`} onClick={() => setOpenCar(false)} className="font-[600] text-[14px] lg:text-[15px]">
                      {item.nombre}
                    </Link>
                    {item.color != null && <p className="font-[400] text-gray-500 text-[14px] lg:text-[15px]">{item.color.name}</p>}
                    <div className="flex items-center gap-2 justify-between w-full">
                      <div className="flex gap-2 lg:gap-4 border text-lg border-gray-300 items-center w-fit ">
                        <p
                          className="text-base font-bold hover:bg-black px-1 py-2 hover:text-white transition-colors cursor-pointer"
                          onClick={() => decreaseItemQuantity(cart, setCart, item)}
                        >
                          <FiMinus />
                        </p>
                        <p className="text-sm font-bold px-2 ">{item.cantidad}</p>
                        <p
                          className="text-base font-bold hover:bg-black px-1 py-2 hover:text-white transition-colors cursor-pointer"
                          onClick={() => increaseItemQuantity(cart, setCart, item)}
                        >
                          <FiPlus />
                        </p>
                      </div>
                      <div className="hover:bg-gray-200 transition-colors p-2 rounded-md hidden">
                        <FaRegTrashCan className="text-xl text-black/60 group-hover:opacity-100 opacity-0 transition" />
                      </div>
                      <div className="h-full items-start">
                        <div className="hover:bg-gray-200 transition-colors rounded-md">
                          <p className="text-black font-medium text-sm lg:text-base">S/. {calculateItemSubtotal(item.precio, item.cantidad)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center gap-4 justify-between group py-4 ">
              <div className="flex items-center justify-center gap-4  w-full">
                <p className="w-full text-center">No tienes productos en el carrito</p>
              </div>
            </div>
          )}
        </div>
        <div className="border-t py-4 lg:py-6 px-4 lg:px-8  border-gray-300 h-[150px] flex flex-col justify-between">
          <div className="flex justify-between ">
            <p className="uppercase font-bold text-sm lg:text-base">Subtotal</p>
            <p className="font-bold text-sm lg:text-base">S/. {calculateTotal(cart)}</p>
          </div>
          <p className="text-xs lg:text-sm text-black my-4 lg:my-6 text-center">
            El costo de delivery se añade en el siguiente paso, durante el pago.
          </p>
          <div className="flex justify-end">
            <button
              type="button"
              disabled={cart.length == 0}
              onClick={() => {
                router.push('/checkout')
                setOpenCar(false)
              }}
              className={`${
                cart.length == 0 ? 'bg-main_dark' : 'bg-main'
              } hover:bg-main_dark  text-white px-4 lg:px-6 py-2 rounded-xl font-bold text-sm lg:text-lg `}
            >
              Continuar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
