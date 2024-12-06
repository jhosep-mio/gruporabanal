import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LoginForm } from './FormLogin/login-form'
import { ToogleTheme } from '@/components/toggle-theme'
export default function Login () {
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Inicio de sesión</CardTitle>
          <CardDescription className="text-center">Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{' '}
            <Link href="#" className="underline">
              Registrate
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="absolute top-2 right-2">
        <ToogleTheme />
      </div>
    </section>
  )
}
