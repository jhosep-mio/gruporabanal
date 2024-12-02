"use client";
import { Errors } from "@/public/shared/Errors";
import { SchemaForm } from "@/public/shared/Schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

export const FormularioContacto = () => {
  const [loading] = useState(false);

  const payment = async (): Promise<void> => {
    // setLoading(true)
    console.log("hola");
    toast.warning("Aun no disponible");
    // const formData = new FormData()
    // formData.append('nombres', values.nombres)
    // formData.append('apellidos', values.apellidos)
    // formData.append('celular', values.celular)
    // formData.append('email', values.email)
    // formData.append('mensaje', values.mensaje)

    // try {
    //   toast.warning('Aun no disponible')
    // //   const { data } = await axios.post(
    // //     `${Global.url}/checkout/sendMailContact`,
    // //     formData,
    // //     {
    // //       headers: {
    // //         'Content-Type': 'application/json'
    // //       }
    // //     }
    // //   )
    // //   if (data.ok == true) {
    // //     toast.success('Correo enviado')
    // //     resetForm()
    // //   }
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   setLoading(false)
    // }
  };

  const { handleSubmit, handleChange, errors, values, touched, handleBlur } =
    useFormik({
      initialValues: {
        ruc: "",
        nombres: "",
        email: "",
        mensaje: "",
      },
      validationSchema: SchemaForm,
      onSubmit: payment,
    });

  return (
    <>
      <p className="border-l-4 border-main pl-2 font-proximaSemibold text-xl">
        Reserva una cita
      </p>
      <h3 className="font-roundkeyMedium text-5xl uppercase mt-4">
        Envianos un mensaje
      </h3>
      <span className="block w-40 my-3 h-[5px] bg-main border-md"></span>
      <p className="font-proximaRegular text-lg">
        Somos una empresa dedicada al Comercio Exterior, formada por una
        corporación con mas de 15 años de experiencia en el comercio exterior.
      </p>
      <form
        className="flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-6 mt-6 w-full lg:w-[80%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 col-span-2">
          <label htmlFor="">RUC de la empresa</label>
          <div className="w-full relative">
            <input
              className=" bg-[#d5f2fe6d] w-full rounded-lg px-2 py-2 border border-black/20 outline-none"
              type="text"
              value={values.ruc}
              onChange={handleChange}
              name="ruc"
              onBlur={handleBlur}
            />
            <Errors errors={errors.ruc} touched={touched.ruc} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Nombre</label>
          <div className="w-full relative">
            <input
              type="text"
              className=" w-full bg-[#d5f2fe6d] rounded-lg px-2 py-2 border border-black/20 outline-none"
              value={values.nombres}
              onChange={handleChange}
              name="nombres"
              onBlur={handleBlur}
            />
            <Errors errors={errors.nombres} touched={touched.nombres} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <div className="w-full relative">
            <input
              type="email"
              className=" w-full bg-[#d5f2fe6d] rounded-lg px-2 py-2 border border-black/20 outline-none"
              value={values.email}
              onChange={handleChange}
              name="email"
              onBlur={handleBlur}
            />
            <Errors errors={errors.email} touched={touched.email} />
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:col-span-2">
          <label htmlFor="">Mensaje o asunto</label>
          <div className="w-full relative">
            <textarea
              className=" bg-[#d5f2fe6d] rounded-lg w-full px-2 py-2 border border-black/20 outline-none h-[180px]"
              value={values.mensaje}
              onChange={handleChange}
              name="mensaje"
              onBlur={handleBlur}
            ></textarea>
            <Errors errors={errors.mensaje} touched={touched.mensaje} />
          </div>
        </div>
        <div className="w-full col-span-2 flex justify-end">
          <button
            disabled={loading}
            type={loading ? "button" : "submit"}
            className={`px-10 py-2 text-lg font-bold text-white rounded-lg text-center w-fit transition-colors ${
              loading ? "bg-secondary" : "bg-primary hover:bg-secondary"
            }`}
          >
            Enviar{" "}
          </button>
        </div>
      </form>

      <Toaster position="top-center" richColors />
    </>
  );
};
