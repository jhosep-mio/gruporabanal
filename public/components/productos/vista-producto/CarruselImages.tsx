/* eslint-disable @next/next/no-img-element */
"use client";

import { Global } from "@/src/helper/Global";
import { calculateDiscountPercentage } from "@/public/shared/Funtions";
import { useState } from "react";
import { motion } from "framer-motion";

export const CarruselImages = ({ product }: any) => {
  const [imagenP, setImagenP] = useState(product.imagen1);
  return (
    <div className="flex flex-col">
      <div className=" rounded-md p-4 h-[260px] md:h-[500px] flex items-center justify-center relative">
        {product.oferta &&
          parseFloat(product.oferta) > parseFloat(product.precio) && (
            <span className="bg-main text-white font-bold rounded-md px-2 lg:px-3 py-1 absolute right-2 top-2 text-[12px] lg:text-sm">
              {calculateDiscountPercentage(product.oferta, product.precio)} %
            </span>
          )}
        <motion.img
          src={`/assets/servicios/${imagenP}`}
          alt=""
          className="w-full h-full object-contain object-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={imagenP}
        />
      </div>
      
    </div>
  );
};
