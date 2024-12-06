'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import axios from 'axios'
import { toast } from '@/hooks/use-toast'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { ErrorInputs } from '@/components/error-inputs'
import { Eye, EyeOff } from 'lucide-react'

const Schema = Yup.object().shape({
  email: Yup.string().email('Email invalido').required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido').min(1)
})

export function LoginForm () {
  const [showPassword, setShowPassword] = useState(false)
  const [loadingC, setLoading] = useState(false)

  const validar = async (values: any): Promise<void> => {
    setLoading(true)
    const datos = {
      email: values.email,
      password: values.password
    }
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`, datos)
      if (data.status) {
        toast({
          duration: 3000,
          variant: 'success',
          title: 'Usuario identificado correctamente'
        })
        window.location.reload()
      }
    } catch (error: any) {
      let dataError = error.request.response
      if (dataError) {
        dataError = JSON.parse(dataError)
        if (dataError.message == 'Complete todos los campos') {
          toast({
            duration: 3000,
            variant: 'destructive',
            title: 'Complete todos los campos'
          })
        } else if (dataError.message == 'Contraseña incorrecta') {
          toast({
            duration: 3000,
            variant: 'destructive',
            title: 'Contraseña incorrecta'
          })
        } else {
          toast({
            duration: 3000,
            variant: 'destructive',
            title: 'El usuario no existe'
          })
        }
      } else {
        toast({
          duration: 3000,
          variant: 'destructive',
          title: 'El usuario no existe'
        })
      }
      setLoading(false)
    }
  }

  const { handleSubmit, handleChange, errors, values, touched, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Schema,
    onSubmit: validar
  })

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2 relative">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorInputs errors={errors.email} touched={touched.email} />
      </div>
      <div className="grid gap-2 relative">
        <div className="flex items-center">
          <Label htmlFor="password">Contraseña</Label>
          <Link href="#" className="ml-auto inline-block text-sm underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {showPassword ? (
            <EyeOff
              onClick={() => {
                setShowPassword(!showPassword)
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-primary w-5 hover:cursor-pointer"
            />
          ) : (
            <Eye
              onClick={() => {
                setShowPassword(!showPassword)
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-primary w-5 hover:cursor-pointer"
              name="password"
            />
          )}
        </div>
        <ErrorInputs errors={errors.password} touched={touched.password} />
      </div>
      <Button type={loadingC ? 'button' : 'submit'} className="w-full">
        {loadingC ? 'Validando...' : 'Ingresar'}
      </Button>
    </form>
  )
}
