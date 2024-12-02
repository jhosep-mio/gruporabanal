/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Paginacion } from "@/public/shared/Paginacion";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const ListaProductos = ({
  data,
  currentPage,
  name,
  sort,
  path,
  min_price,
  max_price,
}: any) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    let url = "";
    if (path) {
      url = `/${path}`;
      if (name) {
        url += `/${name}`;
      }
    }
    const queryParams = new URLSearchParams();
    if (sort) queryParams.set("sort_by", sort);
    if (min_price) queryParams.set("min_price", min_price);
    if (max_price) queryParams.set("max_price", max_price);
    if (page && page > 1) queryParams.set("page", page.toString());
    const queryString = queryParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    router.push(url);
  };

  return (
    <>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-4 gap-2">
        {data.length > 0 ? (
          data.map((product: any) => (
            <div
              onClick={() =>
                router.push(
                  `/servicios/${product.url}`
                )
              }
              className="lg:max-w-sm bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
              key={product.id}
            >
              <div className="relative h-48 lg:h-64  transition-all overflow-hidden ">
                <div className="absolute w-full h-full inset-0 bg-black/30 z-[10]"></div>
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all"
                  src={`/assets/servicios/${product.imagen1}`}
                  alt="Edificio"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-montserratBold line-clamp-2">
                  {product.titulo}
                </h3>
                <div className="text-gray-600 text-sm line-clamp-4 mb-4 h-20">
                  {product.contenido}
                </div>
                <Link
                  href={`/servicios/${product.url}`}
                  className=" bg-primary hover:bg-secondary transition-colors rounded-md block w-full lg:px-6 py-2 lg:w-fit text-center text-white font-proximaSemibold text-base lg:text-lg"
                >
                  Más información
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex mt-6 gap-2 text-gray-500">
            <p>No hay productos disponibles</p>
          </div>
        )}
      </div>
      {data.length > 0 && (
        <div className="w-full flex justify-center items-center mt-6 gap-2">
          <Paginacion
            currentPage={currentPage}
            totalPages={1}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};
