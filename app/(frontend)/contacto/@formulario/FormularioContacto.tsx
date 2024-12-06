'use client'
import { ErrorInputs } from '@/components/error-inputs'
import { SchemaForm } from '@/components/schemas/Schema'
import { toast } from '@/hooks/use-toast'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'

export const FormularioContacto = () => {
  const [loading, setLoading] = useState(false)

  const payment = async (): Promise<void> => {
    setLoading(true)
    const formData = new FormData()
    formData.append('ruc', values.ruc)
    formData.append('nombres', values.nombres)
    formData.append('email', values.email)
    formData.append('mensaje', values.mensaje)
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mailing/sendMail`, formData)
      console.log(data)
      if (data.ok == true) {
        toast({
          title: 'Correo enviado',
          variant: 'success',
          duration: 300
        })
        resetForm()
      } else {
        toast({
          title: 'Error al enviar correo',
          variant: 'destructive',
          duration: 300
        })
      }
    } catch (error) {
      toast({
        title: 'Error al enviar correo',
        variant: 'destructive',
        duration: 300
      })
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const { handleSubmit, handleChange, errors, values, touched, handleBlur, resetForm } = useFormik({
    initialValues: {
      ruc: '',
      nombres: '',
      email: '',
      mensaje: ''
    },
    validationSchema: SchemaForm,
    onSubmit: payment
  })

  return (
    <>
      <p className="border-l-4 border-gray-300 pl-2 font-proximaSemibold text-xl text-black">Reserva una cita</p>
      <h3 className="font-roundkeyMedium text-5xl uppercase mt-4 text-black">Envianos un mensaje</h3>
      <span className="block w-40 my-3 h-[5px] bg-main border-md"></span>
      <p className="font-proximaRegular text-lg text-black">
        Somos una empresa dedicada al Comercio Exterior, formada por una corporación con mas de 25 años de experiencia en el comercio exterior.
      </p>
      <form className="flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-6 mt-6 w-full lg:w-[80%]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 col-span-2">
          <label htmlFor="" className="text-black">
            RUC de la empresa
          </label>
          <div className="w-full relative">
            <input
              className=" bg-[#d5f2fe6d] w-full rounded-lg px-2 py-2 border border-black/20 outline-none text-black"
              type="text"
              value={values.ruc}
              onChange={handleChange}
              name="ruc"
              onBlur={handleBlur}
            />
            <ErrorInputs errors={errors.ruc} touched={touched.ruc} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-black">
            Nombre
          </label>
          <div className="w-full relative">
            <input
              type="text"
              className=" w-full bg-[#d5f2fe6d] rounded-lg px-2 py-2 border border-black/20 outline-none text-black"
              value={values.nombres}
              onChange={handleChange}
              name="nombres"
              onBlur={handleBlur}
            />
            <ErrorInputs errors={errors.nombres} touched={touched.nombres} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-black">
            Email
          </label>
          <div className="w-full relative">
            <input
              type="email"
              className=" w-full bg-[#d5f2fe6d] rounded-lg px-2 py-2 border border-black/20 outline-none text-black"
              value={values.email}
              onChange={handleChange}
              name="email"
              onBlur={handleBlur}
            />
            <ErrorInputs errors={errors.email} touched={touched.email} />
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:col-span-2">
          <label htmlFor="" className="text-black">
            Mensaje o asunto
          </label>
          <div className="w-full relative">
            <textarea
              className=" bg-[#d5f2fe6d] rounded-lg w-full px-2 py-2 border border-black/20 outline-none h-[180px] text-black"
              value={values.mensaje}
              onChange={handleChange}
              name="mensaje"
              onBlur={handleBlur}
            ></textarea>
            <ErrorInputs errors={errors.mensaje} touched={touched.mensaje} />
          </div>
        </div>
        <div className="w-full col-span-2 flex justify-end">
          <button
            disabled={loading}
            type={loading ? 'button' : 'submit'}
            className={`px-10 py-2 text-lg font-bold text-white rounded-lg text-center w-fit transition-colors ${
              loading ? 'bg-secondary_web' : 'bg-primary_web hover:bg-secondary_web'
            }`}
          >
            Enviar{' '}
          </button>
        </div>
      </form>
    </>
  )
}
