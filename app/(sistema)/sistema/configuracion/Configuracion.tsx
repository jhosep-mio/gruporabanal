/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ImagenState } from '@/components/schemas/interfaces'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ErrorInputs } from '@/components/error-inputs'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { SchemaConfiguracion } from '@/components/schemas/Schema'
import useAuth from '@/hooks/useAuth'
import { Loading } from '@/components/fetch/Loading'
import { ImagenUpdate } from '@/components/ImagenUpdate'
import { Separator } from '@/components/ui/separator'

export const Configuracion = () => {
  const id = 1
  const { setTitle } = useAuth()
  const [loading, setLoading] = useState(true)
  const [imagen1, setImagen1] = useState('')
  const [boton1, setBoton1] = useState(false)
  const [url1, setUrl1] = useState('')
  const [imagenNueva1, SetImagenNueva1] = useState<ImagenState>({
    archivo: null,
    archivoName: ''
  })
  const [imagen2, setImagen2] = useState('')
  const [boton2, setBoton2] = useState(false)
  const [url2, setUrl2] = useState('')
  const [imagenNueva2, SetImagenNueva2] = useState<ImagenState>({
    archivo: null,
    archivoName: ''
  })

  const updateConfiguracion = async (): Promise<void> => {
    const formData = new FormData()
    formData.append('titulo1', values.titulo1)
    formData.append('titulo2', values.titulo2)
    formData.append('titulo3', values.titulo3)
    if (imagenNueva1.archivo != null) {
      formData.append('imagen1', imagenNueva1.archivo)
    }
    if (imagenNueva2.archivo != null) {
      formData.append('imagen2', imagenNueva2.archivo)
    }
    formData.append('descripcion', values.descripcion)
    formData.append('telefono', values.telefono)
    formData.append('celular1', values.celular1)
    formData.append('correo1', values.correo1)
    formData.append('correo2', values.correo2)
    formData.append('correo3', values.correo3)
    formData.append('horario1', values.horario1)
    formData.append('direccion', values.direccion)
    formData.append('facebook', values.facebook)
    formData.append('instagram', values.instagram)
    formData.append('twitter', values.twitter)
    formData.append('linkedin', values.linkedin)
    formData.append('youtube', values.youtube)
    formData.append('whatsapp', values.whatsapp)
    setLoading(true)
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/configuracion/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(data)
      if (data.status == true) {
        toast({
          duration: 3000,
          title: 'Registro actualizado',
          variant: 'success'
        })
        getConfiguracion()
      } else {
        toast({
          duration: 3000,
          title: 'Error al actualizar la configuracion',
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
          title: 'Error al actualizar la configuracion',
          variant: 'destructive'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const { handleSubmit, handleChange, errors, values, touched, handleBlur, setValues } = useFormik({
    initialValues: {
      titulo1: '',
      titulo2: '',
      titulo3: '',
      descripcion: '',
      telefono: '',
      celular1: '',
      correo1: '',
      correo2: '',
      correo3: '',
      horario1: '',
      direccion: '',
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      youtube: '',
      whatsapp: ''
    },
    validationSchema: SchemaConfiguracion,
    onSubmit: updateConfiguracion
  })

  const getConfiguracion = async (): Promise<void> => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/configuracion/find/${id}`)
      setValues({
        titulo1: data?.configuracion?.titulo1,
        titulo2: data?.configuracion?.titulo2,
        titulo3: data?.configuracion?.titulo3,
        descripcion: data?.configuracion?.descripcion,
        telefono: data?.configuracion?.telefono,
        celular1: data?.configuracion?.celular1,
        correo1: data?.configuracion?.correo1,
        correo2: data?.configuracion?.correo2,
        correo3: data?.configuracion?.correo3,
        horario1: data?.configuracion?.horario1,
        direccion: data?.configuracion?.direccion,
        facebook: data?.configuracion?.facebook ?? '',
        instagram: data?.configuracion?.instagram ?? '',
        twitter: data?.configuracion?.twitter ?? '',
        linkedin: data?.configuracion?.linkedin ?? '',
        youtube: data?.configuracion?.youtube ?? '',
        whatsapp: data?.configuracion?.whatsapp
      })
      setImagen1(data?.configuracion?.imagen1)
      setImagen2(data?.configuracion?.imagen2)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setTitle('Configuracion')
    getConfiguracion()
  }, [id, setTitle])

  return (
    <section className="p-4">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="px-4 pb-4">
          <form onSubmit={handleSubmit} className="bg-sistema-secondary-100 p-6 mt-4 rounded-xl relative">
            {!loading ? (
              <>
                <section className="grid-cols-2 grid gap-5 mb-10">
                  <div className="cols-span-2 flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="w-full lg:relative ">
                        <Label>Titulo 1</Label>
                        <Input
                          placeholder="Escribe el titulo"
                          name="titulo1"
                          type="text"
                          value={values.titulo1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorInputs errors={errors.titulo1} touched={touched.titulo1} />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="w-full lg:relative ">
                        <Label>Titulo 2</Label>
                        <Input
                          placeholder="Escribe el titulo"
                          name="titulo2"
                          type="text"
                          value={values.titulo2}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorInputs errors={errors.titulo2} touched={touched.titulo2} />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="w-full lg:relative ">
                        <Label>Titulo 3</Label>
                        <Input
                          placeholder="Escribe el titulo"
                          name="titulo3"
                          type="text"
                          value={values.titulo3}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorInputs errors={errors.titulo3} touched={touched.titulo3} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full relative">
                    <Label>Descripcion</Label>
                    <Textarea
                      placeholder="Escribe la descripcion"
                      rows={9}
                      name="descripcion"
                      value={values.descripcion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></Textarea>
                    <ErrorInputs errors={errors.descripcion} touched={touched.descripcion} />
                  </div>
                  <div className="flex flex-col w-full gap-y-2">
                    <div className="w-full">
                      <p>
                        Imagen 1<span className="text-red-500">*</span>
                      </p>
                    </div>
                    <div className="flex-1 flex  items-center gap-4">
                      <ImagenUpdate
                        carpeta="configuraciones"
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
                  <div className="flex flex-col w-full gap-y-2">
                    <div className="w-full">
                      <p>
                        Imagen 2<span className="text-red-500">*</span>
                      </p>
                    </div>
                    <div className="flex-1 flex  items-center gap-4">
                      <ImagenUpdate
                        carpeta="configuraciones"
                        url={url2}
                        setUrl={setUrl2}
                        boton={boton2}
                        setBoton={setBoton2}
                        imagen={imagen2}
                        setImagen={SetImagenNueva2}
                        clase="2"
                        disabled={false}
                      />
                    </div>
                  </div>
                  <Separator className="col-span-2" />
                  <div className="flex flex-col md:flex-row md:items-center gap-5 cols-span-2">
                    <div className="w-full lg:relative ">
                      <Label>Telefono</Label>
                      <Input
                        placeholder="Escribe el telefono"
                        name="telefono"
                        type="text"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorInputs errors={errors.telefono} touched={touched.telefono} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-0 cols-span-2">
                    <div className="w-full lg:relative ">
                      <Label>Celular</Label>
                      <Input
                        placeholder="Escribe el celular"
                        name="celular1"
                        type="text"
                        value={values.celular1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorInputs errors={errors.celular1} touched={touched.celular1} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-0 cols-span-2">
                    <div className="w-full lg:relative ">
                      <Label>Correo 1</Label>
                      <Input
                        placeholder="Escribe el correo"
                        name="correo1"
                        type="text"
                        value={values.correo1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorInputs errors={errors.correo1} touched={touched.correo1} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-0 cols-span-2">
                    <div className="w-full lg:relative ">
                      <Label>Correo 2</Label>
                      <Input
                        placeholder="Escribe el correo"
                        name="correo2"
                        type="text"
                        value={values.correo2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorInputs errors={errors.correo2} touched={touched.correo2} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-0 cols-span-2">
                    <div className="w-full lg:relative ">
                      <Label>Correo 3</Label>
                      <Input
                        placeholder="Escribe el correo"
                        name="correo3"
                        type="text"
                        value={values.correo3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorInputs errors={errors.correo3} touched={touched.correo3} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-0 cols-span-2">
                    <div className="w-full lg:relative ">
                      <Label>Horario</Label>
                      <Input
                        placeholder="Escribe el horario"
                        name="horario1"
                        type="text"
                        value={values.horario1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorInputs errors={errors.horario1} touched={touched.horario1} />
                    </div>
                  </div>
                  <div className="w-full lg:relative col-span-2">
                    <Label>Direccion</Label>
                    <Input
                      placeholder="Escribe la direccion"
                      name="direccion"
                      type="text"
                      value={values.direccion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorInputs errors={errors.direccion} touched={touched.direccion} />
                  </div>
                  <div className="w-full lg:relative col-span-2">
                    <Label>Facebook</Label>
                    <Input
                      placeholder="Escribe el facebook"
                      name="facebook"
                      type="text"
                      value={values.facebook}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorInputs errors={errors.facebook} touched={touched.facebook} />
                  </div>
                  <div className="w-full lg:relative col-span-2">
                    <Label>Instagram</Label>
                    <Input
                      placeholder="Escribe el instagram"
                      name="instagram"
                      type="text"
                      value={values.instagram}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorInputs errors={errors.instagram} touched={touched.instagram} />
                  </div>
                  <div className="w-full lg:relative col-span-2">
                    <Label>Twitter</Label>
                    <Input
                      placeholder="Escribe el twitter"
                      name="twitter"
                      type="text"
                      value={values.twitter}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorInputs errors={errors.twitter} touched={touched.twitter} />
                  </div>
                  <div className="w-full lg:relative col-span-2">
                    <Label>Linkedin</Label>
                    <Input
                      placeholder="Escribe el linkedin"
                      name="linkedin"
                      type="text"
                      value={values.linkedin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorInputs errors={errors.linkedin} touched={touched.linkedin} />
                  </div>
                  <div className="w-full lg:relative col-span-2">
                    <Label>Youtube</Label>
                    <Input
                      placeholder="Escribe el youtube"
                      name="youtube"
                      type="text"
                      value={values.youtube}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorInputs errors={errors.youtube} touched={touched.youtube} />
                  </div>
                  <div className="w-full lg:relative col-span-2">
                    <Label>Whatsapp</Label>
                    <Input
                      placeholder="Escribe el whatsapp"
                      name="whatsapp"
                      type="text"
                      value={values.whatsapp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorInputs errors={errors.whatsapp} touched={touched.whatsapp} />
                  </div>
                </section>
                <div className="flex gap-2 w-full justify-end">
                  <input type="hidden" name="oculto" value="1" />
                  <Link href="/sistema/configuracion">
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
