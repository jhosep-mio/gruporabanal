'use client'
import axios from 'axios'
import { useFormik } from 'formik'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ImagenState } from '@/components/schemas/interfaces'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ErrorInputs } from '@/components/error-inputs'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { SchemaBlogs } from '@/components/schemas/Schema'
import useAuth from '@/hooks/useAuth'
import { Loading } from '@/components/fetch/Loading'
import { ImagenUpdate } from '@/components/ImagenUpdate'
import EditorTexto from '@/components/EditorTexto'
import { formatName } from '@/components/Funtions'

export default function UpdateServicioPage () {
  const router = useRouter()
  const { id } = useParams()
  const { setTitle } = useAuth()
  const [loading, setLoading] = useState(true)
  const [descripcion, setDescripcion] = useState('')
  const [imagen1, setImagen1] = useState('')
  const [boton1, setBoton1] = useState(false)
  const [url1, setUrl1] = useState('')
  const [imagenNueva1, SetImagenNueva1] = useState<ImagenState>({
    archivo: null,
    archivoName: ''
  })

  const updateServicio = async (): Promise<void> => {
    const formData = new FormData()
    if (imagenNueva1.archivo != null) {
      formData.append('imagen1', imagenNueva1.archivo)
    }
    formData.append('titulo', values.titulo)
    formData.append('url', formatName(values.titulo))
    formData.append('resumen', values.resumen)
    formData.append('descripcion', JSON.stringify(descripcion))
    setLoading(true)
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/servicios/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (data.status == true) {
        toast({
          duration: 3000,
          title: 'Registro actualizado',
          variant: 'success'
        })
        router.push('/sistema/servicios')
      } else {
        toast({
          duration: 3000,
          title: 'Error al actualizar el servicio',
          variant: 'destructive'
        })
      }
    } catch (error: any) {
      console.log(error)
      let dataError = error.request.response
      if (dataError) {
        dataError = JSON.parse(dataError)
        if (dataError.message == 'El archivo es demasiado grande') {
          toast({
            duration: 3000,
            title: 'El archivo es demasiado grande | Max 5MB',
            variant: 'destructive'
          })
        } else if (dataError.message == 'El archivo no es una imagen') {
          toast({
            duration: 3000,
            title: 'El archivo no es una imagen',
            variant: 'destructive'
          })
        }
      } else {
        toast({
          duration: 3000,
          title: 'Error al actualizar el servicio',
          variant: 'destructive'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const { handleSubmit, handleChange, errors, values, touched, handleBlur, setValues } = useFormik({
    initialValues: {
      titulo: '',
      resumen: ''
    },
    validationSchema: SchemaBlogs,
    onSubmit: updateServicio
  })

  useEffect(() => {
    const getServicio = async (): Promise<void> => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/servicios/find/${id}`)
        setValues({
          titulo: data?.servicio?.titulo,
          resumen: data?.servicio?.resumen
        })
        setImagen1(data?.servicio?.imagen1)
        setDescripcion(data?.servicio?.descripcion ? JSON.parse(data?.servicio?.descripcion) : '')
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    setTitle('Editar servicio')
    getServicio()
  }, [id, setTitle, setValues])

  return (
    <section className="p-4">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center justify-between">
            <div className="font-semibold tracking-tight text-xl">Editar servicio</div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <form onSubmit={handleSubmit} className="bg-sistema-secondary-100 p-6 mt-4 rounded-xl relative">
            {!loading ? (
              <>
                <section className="grid-cols-2 grid gap-10 mb-10">
                  <div className="cols-span-2 flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="w-full lg:relative ">
                        <Label>Titulo</Label>
                        <Input
                          placeholder="Escribe el titulo"
                          name="titulo"
                          type="text"
                          value={values.titulo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorInputs errors={errors.titulo} touched={touched.titulo} />
                      </div>
                    </div>
                    <div className="w-full lg:relative ">
                      <Label>Resumen</Label>
                      <Textarea
                        placeholder="Escribe el resumen"
                        name="resumen"
                        value={values.resumen}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></Textarea>
                      <ErrorInputs errors={errors.resumen} touched={touched.resumen} />
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-y-2 ">
                    <div className="w-full">
                      <p>
                        Imagen para pc<span className="text-red-500">*</span>
                      </p>
                    </div>
                    <div className="flex-1 flex  items-center gap-4">
                      <ImagenUpdate
                        carpeta="servicios"
                        url={url1}
                        setUrl={setUrl1}
                        boton={boton1}
                        setBoton={setBoton1}
                        imagen={imagen1}
                        setImagen={SetImagenNueva1}
                        clase="1"
                        disabled={false}
                      />
                    </div>
                  </div>
                  <div className="w-full col-span-2">
                    <EditorTexto descripcion={descripcion} setDescripcion={setDescripcion} />
                  </div>
                </section>
                <div className="flex gap-2 w-full justify-end">
                  <input type="hidden" name="oculto" value="1" />
                  <Link href="/sistema/servicios">
                    <Button type="submit" disabled={loading} className="bg-red-500 text-white hover:bg-red-700 transition-colors">
                      Cancelar
                    </Button>
                  </Link>
                  <Button type="submit" disabled={loading}>
                    Editar
                  </Button>
                </div>
              </>
            ) : (
              <Loading />
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
