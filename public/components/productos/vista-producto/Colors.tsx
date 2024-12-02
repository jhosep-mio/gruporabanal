import React from 'react'
import { RiFlowerFill } from 'react-icons/ri'

export const Colors = ({ colors, selectedColor, setSelectedColor }: any) => {
  return (
    <div className="flex gap-3">
      {colors.map((color: any, index: number) => (
        <div key={index} className="relative group cursor-pointer">
          <div
          onClick={() => setSelectedColor(color)}
          className={`rounded-full border ${selectedColor.code == color.code ? 'border-black' : 'border-transparent hover:border-gray-500'}  text-4xl  p-1 transition-colors`}>
            <RiFlowerFill style={{ color: color.code }} />
          </div>
          <div className="absolute bottom-full left-1/2 lowercase first-letter:uppercase transform -translate-x-1/2 mb-2 hidden group-hover:block w-max bg-black text-white text-xs rounded py-1 px-2">
            {color.name}
          </div>
        </div>
      ))}
    </div>
  )
}
