'use client'
import { toast } from '@/hooks/use-toast'
import { carrito } from './schemas/interfaces'
import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatearCelular = (numero: string): string => {
  if (!numero) return ''
  // Primero, eliminamos el signo '+' y cualquier otro carácter no numérico
  const numeroLimpiado = numero.replace(/[^\d]/g, '')
  if (numeroLimpiado.length === 12) {
    // Formatear el número en el formato "+51 998 181 816"
    const codigoPais = numeroLimpiado.slice(0, 2)
    const parte1 = numeroLimpiado.slice(2, 5)
    const parte2 = numeroLimpiado.slice(5, 8)
    const parte3 = numeroLimpiado.slice(8)
    return `+${codigoPais} ${parte1} ${parte2} ${parte3}`
  }

  // Si el número no tiene el formato adecuado, devolvemos el número original
  return numero
}

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

export const calculateDiscountPercentage = (originalPrice: number, discountedPrice: number) => {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100
  return discount.toFixed(1) // Redondea a 2 decimales
}

export function addProduct (cart: carrito[], setCart: any, product: any, cantidad: number, setContador: any, selectedColor: any): void {
  const itemIndex = cart.findIndex(
    (item: any) =>
      item.id === product.id &&
      item.nombre === product.nombre &&
      ((item.color && selectedColor && item.color.name === selectedColor.name && item.color.code === selectedColor.code) ||
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
    toast({
      duration: 3000,
      title: `${product.nombre.toUpperCase()}${selectedColor ? ` - ${selectedColor.name.toUpperCase()}` : ''} agregado al carrito`,
      variant: 'success'
    })
  } else {
    // Ya existe un elemento en el carrito con el mismo id, nombre y color, actualizar la cantidad
    const updatedItems = [...cart]
    if (cantidad != null) {
      updatedItems[itemIndex].cantidad = (updatedItems[itemIndex].cantidad ?? 0) + cantidad
    }
    setCart(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
    toast({
      duration: 3000,
      title: `Se agregaron más unidades a ${product.nombre.toUpperCase()}${selectedColor ? ` - ${selectedColor.name.toUpperCase()}` : ''}`,
      variant: 'success'
    })
    setContador(1)
  }
}

export function decreaseItemQuantity (cart: any, setCart: any, producto: any): void {
  const itemIndex = cart.findIndex((item: any) => item.id === producto.id && item.nombre === producto.nombre)
  if (itemIndex !== -1) {
    const updatedItems = [...cart]
    const item = updatedItems[itemIndex]
    if (item.cantidad === 1) {
      // Si la cantidad es 1, eliminar el objeto del carrito
      updatedItems.splice(itemIndex, 1)
      toast({
        duration: 3000,
        title: 'Producto eliminado',
        variant: 'success'
      })
    } else {
      if (item.cantidad !== null) {
        item.cantidad -= 1
      }
    }
    setCart(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }
}

export function increaseItemQuantity (cart: any, setCart: any, producto: any): void {
  const itemIndex = cart.findIndex((item: any) => item.id === producto.id && item.nombre === producto.nombre)

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

// Función para convertir la fecha

export const formatearFecha = (fechaStr: string): string => {
  try {
    if (!fechaStr) {
      throw new Error('Fecha inválida')
    }

    // Parsear directamente la fecha en formato ISO 8601
    const fecha = parseISO(fechaStr)

    // Formatear la fecha al estilo deseado con el locale en español
    return format(fecha, 'MMMM, dd, yyyy', { locale: es })
  } catch (error) {
    console.error(error)
    return 'Fecha inválida'
  }
}

export const obtenerDiaSemana = (fechaStr: string): number => {
  try {
    if (!fechaStr) {
      throw new Error('Fecha inválida')
    }

    // Parsear la fecha en formato ISO 8601
    const fecha = parseISO(fechaStr)

    // Obtener el día de la semana en formato numérico (0 = Domingo, 6 = Sábado)
    const diaSemana = fecha.getDay()

    // Ajustar para que Lunes = 1, Domingo = 7
    if (diaSemana === 0) {
      return 7 // Si es Domingo, devolver 7
    }

    return diaSemana // Para otros días, devolver el valor directamente (1 = Lunes, 6 = Sábado)
  } catch (error) {
    console.error(error)
    return -1 // Retorna -1 si hay un error (fecha inválida)
  }
}

// Función para obtener el nombre abreviado del mes
export const obtenerMesAbreviado = (fechaStr: string): string => {
  try {
    if (!fechaStr) {
      throw new Error('Fecha inválida')
    }

    // Parsear la fecha en formato ISO 8601
    const fecha = parseISO(fechaStr)

    // Formatear para obtener el nombre abreviado del mes
    return format(fecha, 'MMM', { locale: es }).toUpperCase() // Devuelve "FEB" para febrero
  } catch (error) {
    console.error(error)
    return 'Fecha inválida'
  }
}
