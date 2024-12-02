import { carrito } from './interfaces'
import { toast } from 'sonner'

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  }).format(amount)
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  })
  return formatter.format(price)
}

export const formatName = (name: string) => {
  return name
    .toLowerCase() // Convertir a minúsculas
    .normalize('NFD') // Normalizar caracteres acentuados a su forma base
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/[^a-z0-9-]/g, '') // Eliminar caracteres especiales
}

export const calculateDiscountPercentage = (
  originalPrice: number,
  discountedPrice: number
) => {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100
  return discount.toFixed(1) // Redondea a 2 decimales
}

export function addProduct (
  cart: carrito[],
  setCart: any,
  product: any,
  cantidad: number,
  setContador: any,
  selectedColor: any
): void {
  const itemIndex = cart.findIndex(
    (item: any) =>
      item.id === product.id &&
      item.nombre === product.nombre &&
      ((item.color &&
        selectedColor &&
        item.color.name === selectedColor.name &&
        item.color.code === selectedColor.code) ||
        (!item.color && !selectedColor))
  )

  if (itemIndex === -1) {
    // No existe un elemento coincidente en el carrito, agregar uno nuevo
    const newItem = {
      id: product.id,
      nombre: product.nombre,
      cantidad,
      precio: product.precio,
      imagen1: product.imagen1,
      url: `${product.url_categoria}/${product.url}`,
      color: selectedColor,
      stock: product.cantidad
    }
    const updatedCart = [...cart, newItem]
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    toast.success(
      `${product.nombre.toUpperCase()}${
        selectedColor ? ` - ${selectedColor.name.toUpperCase()}` : ''
      } agregado al carrito`
    )
  } else {
    // Ya existe un elemento en el carrito con el mismo id, nombre y color, actualizar la cantidad
    const updatedItems = [...cart]
    if (cantidad != null) {
      updatedItems[itemIndex].cantidad = (updatedItems[itemIndex].cantidad ?? 0) + cantidad
    }
    setCart(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
    toast.success(
      `Se agregaron más unidades a ${product.nombre.toUpperCase()}${
        selectedColor ? ` - ${selectedColor.name.toUpperCase()}` : ''
      }`
    )
    setContador(1)
  }
}

export function decreaseItemQuantity (
  cart: any,
  setCart: any,
  producto: any
): void {
  const itemIndex = cart.findIndex(
    (item: any) => item.id === producto.id && item.nombre === producto.nombre
  )
  if (itemIndex !== -1) {
    const updatedItems = [...cart]
    const item = updatedItems[itemIndex]
    if (item.cantidad === 1) {
      // Si la cantidad es 1, eliminar el objeto del carrito
      updatedItems.splice(itemIndex, 1)
      toast.success('Producto eliminado')
    } else {
      if (item.cantidad !== null) {
        item.cantidad -= 1
      }
    }
    setCart(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }
}

export function increaseItemQuantity (
  cart: any,
  setCart: any,
  producto: any
): void {
  const itemIndex = cart.findIndex(
    (item: any) => item.id === producto.id && item.nombre === producto.nombre
  )

  if (itemIndex !== -1) {
    const updatedItems = [...cart]
    const item = updatedItems[itemIndex]
    console.log(producto)
    if (item.cantidad < producto.stock) {
      item.cantidad += 1
    }
    setCart(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }
}

export function calculateTotal (cart: any): string {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    if (item.precio !== null && item.cantidad) {
      const subtotal = item.precio * item.cantidad
      total += subtotal
    }
  }
  return total.toFixed(2) // Redondeamos a dos decimales
}
