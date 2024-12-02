import { cn } from '@/src/lib/utils'
import React from 'react'

function Skeleton ({
  className,
  ...props
}: any) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton }
