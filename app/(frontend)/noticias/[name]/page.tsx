import { seoHome } from '@/public/seo/seoHome'
import { AnimationLeft } from '../../@components/Animated/AnimationLeft'
import { CarruselNoticias } from './@components/CarruselNoticias'

export const metadata = seoHome

export default async function Noticia ({ params }: { params: any }) {
  const { name } = params
  const servicioResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/findName/${name}`, { cache: 'no-store' })
  const { blog, blogs } = await servicioResponse.json()

  return (
    <section className="w-full bg-[#F5F6F7] overflow-hidden">
      <div className="relative w-full mt-[84px] lg:mt-[180px] h-[100px] lg:h-[150px]">
        <img
          src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg'}
          alt="Banner 1"
          className="clip w-full h-full object-cover hidden lg:block"
        />
        <div className="w-full h-full absolute z-[2] bg-secondary/70 inset-0"></div>
        <div className="w-full h-full absolute z-[2] bg-black inset-0 opacity-40"></div>
        <AnimationLeft className="absolute overflow-hidden inset-0 w-[100%]  px-4 lg:px-10 lg:w-full max-w-[1570px] mx-auto my-auto h-full flex justify-between items-center z-[3] text-white font-bold gap-0 ">
          <div className="flex flex-col">
            <h2 className="uppercase text-[2.5rem] 2xl:text-[5.8rem] font-roundkeyMedium tracking-wide font-light leading-5 lg:leading-none">
              Noticias
            </h2>
          </div>
        </AnimationLeft>
        <img
          src={'https://dev24.kodesolution.com/transplix/wp-content/uploads/2024/02/2.jpg'}
          alt="Banner 1"
          className="clip w-full h-full relative before:bg-black before:absolute before:inset-0 before:opacity-55 before:w-full before:h-full object-cover block lg:hidden"
        />
      </div>
      <div className="w-full h-full  mt-10 container mx-auto lg:px-20 lg:pb-20">
        <h1 className="text-3xl lg:text-5xl font-bold font-avenir-heavy text-center w-full uppercase text-black">{blog.titulo}</h1>
        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/blogs/${blog.imagen1}`} alt={blog?.titulo} className="w-full object-cover mt-10 h-[350px] lg:h-[550px] object-center" />
        <div
          className="text-base lg:text-lg font-avenir-light mt-10 text-justify space-y-4 text-black"
          dangerouslySetInnerHTML={{ __html: blog.descripcion ? JSON.parse(blog.descripcion) : '' }}
        ></div>
      </div>
      <div className="w-full px-4 lg:px-10 py-6 lg:pt-0 lg:pb-16 container mx-auto overflow-hidden">
        <h2 className="font-semibold text-[1.2rem] lg:text-[2rem] mt-0 lg:mt-1 text-center font-avenir-heavy text-black">Otras Noticias</h2>
        <CarruselNoticias data={blogs} id={'relacionados'} />
      </div>
    </section>
  )
}
