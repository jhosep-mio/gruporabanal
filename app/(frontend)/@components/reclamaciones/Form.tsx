'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { toast } from '@/hooks/use-toast'
import { SchemaReclamaciones } from '@/components/schemas/Schema'
import { ErrorInputs } from '@/components/error-inputs'

export const Form = () => {
  const [loadingCorreo, setLoadingCorreo] = useState(false)

  const enviarCorreo = async (values: any): Promise<void> => {
    setLoadingCorreo(true)
    const data = new FormData()
    data.append('personType', values.personType) // Persona natural o jurídica
    data.append('nombres', values.nombres) // Nombres
    data.append('apellidos', values.apellidos) // Apellidos
    data.append('email', values.email) // Correo electrónico
    data.append('tipoDocumento', values.tipoDocumento) // Tipo de documento
    data.append('numeroDocumento', values.numeroDocumento) // Número de documento
    data.append('razonSocial', values.razonSocial) // Razón social (opcional si es persona jurídica)
    data.append('claimType', values.claimType) // Tipo de reclamo (reclamo o queja)
    data.append('servicioBrindado', values.servicioBrindado) // Servicio brindado
    data.append('detalle', values.detalle)

    try {
      const respuesta = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mailing/enviarReclamacion`, data)

      if (respuesta.data.status) {
        toast({
          title: 'Correo enviado',
          variant: 'success',
          duration: 3000
        })
        resetForm()
      } else {
        toast({
          title: 'Error al enviar el correo',
          variant: 'destructive',
          duration: 3000
        })
        resetForm()
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error al enviar el correo',
        variant: 'destructive',
        duration: 3000
      })
    }
    setLoadingCorreo(false)
  }
  const { handleSubmit, handleChange, errors, values, touched, handleBlur, isSubmitting, resetForm } = useFormik({
    initialValues: {
      personType: 'natural',
      nombres: '',
      apellidos: '',
      email: '',
      tipoDocumento: 'dni',
      numeroDocumento: '',
      razonSocial: '',
      claimType: 'reclamo',
      servicioBrindado: '',
      detalle: ''
    },
    validationSchema: SchemaReclamaciones,
    onSubmit: enviarCorreo
  })

  useEffect(() => {
    if (errors && isSubmitting) {
      const firstErrorKey = Object.keys(errors)[0]
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0]
      if (firstErrorElement) {
        firstErrorElement.focus()
      }
    }
  }, [touched, errors, isSubmitting])
  return (
    <>
      <form className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Formulario de Reclamo</h2>

        {/* Sección 1: Datos Personales */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Datos Personales</h3>
          <div className="flex space-x-4 mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="personType"
                value="natural"
                onChange={handleChange}
                checked={values.personType === 'natural'}
                className="mr-2 rounded border-gray-300"
              />
              Persona Natural
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="personType"
                value="juridica"
                onChange={handleChange}
                checked={values.personType === 'juridica'}
                className="mr-2 rounded border-gray-300"
              />
              Persona Jurídica
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="nombres">
                Nombres
              </label>
              <input
                id="nombres"
                name="nombres"
                type="text"
                className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300 bg-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombres}
                placeholder="Ingresa tus nombres"
              />
              <ErrorInputs errors={errors.nombres} touched={touched.nombres} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="apellidos">
                Apellidos
              </label>
              <input
                id="apellidos"
                name="apellidos"
                type="text"
                className="bg-white w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.apellidos}
                placeholder="Ingresa tus apellidos"
              />
              <ErrorInputs errors={errors.apellidos} touched={touched.apellidos} />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="bg-white w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="correo@ejemplo.com"
            />
            <ErrorInputs errors={errors.email} touched={touched.email} />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1" htmlFor="tipoDocumento">
              Tipo de Documento
            </label>
            <select
              id="tipoDocumento"
              name="tipoDocumento"
              className="bg-white w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tipoDocumento}
            >
              <option value="dni">DNI</option>
              <option value="pasaporte">Pasaporte</option>
              <option value="carnet extranjería">Carnet de Extranjería</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1" htmlFor="numeroDocumento">
              Número de Documento
            </label>
            <input
              id="numeroDocumento"
              name="numeroDocumento"
              type="text"
              className="bg-white w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numeroDocumento}
              placeholder="Número de documento"
            />
            <ErrorInputs errors={errors.numeroDocumento} touched={touched.numeroDocumento} />
          </div>
        </div>

        {/* Sección 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Información del Reclamo</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="razonSocial">
              Razón Social
            </label>
            <input
              id="razonSocial"
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-secondary outline-none bg-white"
              placeholder="Nombre de la empresa"
              name="razonSocial"
              value={values.razonSocial}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorInputs errors={errors.razonSocial} touched={touched.razonSocial} />
          </div>

          <div className="flex space-x-4 mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="claimType"
                value="reclamo"
                checked={values.claimType === 'reclamo'}
                onChange={handleChange}
                className="mr-2 rounded border-gray-300"
              />
              Reclamo
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="claimType"
                value="queja"
                checked={values.claimType === 'queja'}
                onChange={handleChange}
                className="mr-2 rounded border-gray-300"
              />
              Queja
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="servicioBrindado">
              Servicio Brindado
            </label>
            <input
              id="servicioBrindado"
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-secondary outline-none bg-white"
              placeholder="Especifica el servicio"
              name="servicioBrindado"
              value={values.servicioBrindado}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorInputs errors={errors.servicioBrindado} touched={touched.servicioBrindado} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="detalle">
              Detalle del Reclamo o Queja
            </label>
            <textarea
              id="detalle"
              rows={5}
              className="w-full p-2 border rounded-md focus:ring focus:ring-secondary outline-none bg-white"
              placeholder="Describe detalladamente el reclamo o queja"
              name="detalle"
              value={values.detalle}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorInputs errors={errors.detalle} touched={touched.detalle} />
          </div>
        </div>
        <div className="mt-6">
          <button
            type={loadingCorreo ? 'button' : 'submit'}
            className="w-full bg-secondary_web text-white p-3 rounded-md hover:bg-secondary_web_dark transition"
          >
            {loadingCorreo ? 'Enviando...' : 'Enviar Reclamo'}
          </button>
        </div>
      </form>
    </>
  )
}
