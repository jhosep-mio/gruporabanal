'use client'
import Link from 'next/link'
import React from 'react'

export const ButtonCart = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-4">
      <Link
        href={`https://wa.me//+51${process.env.NEXT_PUBLIC_WHATSAPP}`}
        target="_blank"
        className="bg-primary_web text-white w-full rounded-xl py-3 text-center text-sm font-avenir-heavy hover:bg-secondary_web transition-colors block"
      >
        COMPRAR
      </Link>
    </div>
  )
}
