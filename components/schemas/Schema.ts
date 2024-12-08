import * as Yup from 'yup'

export const SchemaReclamaciones = Yup.object().shape({
  nombres: Yup.string().required('Este campo es obligatorio.'),
  apellidos: Yup.string().required('Este campo es obligatorio.'),
  email: Yup.string().email('Formato de correo inválido').required('Este campo es obligatorio.'),
  numeroDocumento: Yup.string().required('Este campo es obligatorio.'),
  razonSocial: Yup.string().test('razonSocial-conditional', 'La razón social es obligatoria para personas jurídicas.', function (value) {
    const { personType } = this.parent // Accede al valor de 'personType' desde el contexto
    if (personType === 'juridica' && !value) {
      return false // Retorna false si el campo es vacío y personType es 'juridica'
    }
    return true // Si no, lo considera válido
  }),
  servicioBrindado: Yup.string().required('Este campo es obligatorio.'),
  detalle: Yup.string().required('Este campo es obligatorio.')
})

export const SchemaPago = Yup.object().shape({
  nombres: Yup.string().required('Este campo es requerido').min(3, 'Debe tener como minimo 3 digitos').max(20, 'Debe tener menos de 20 caracteres'),
  method: Yup.string().required('Este campo es requerido'),
  nombre_recibe: Yup.string().when('method', (method: any, schema) =>
    method != 'retiro'
      ? schema.required('Este campo es requerido').min(3, 'Debe tener como minimo 3 digitos').max(20, 'Debe tener menos de 20 caracteres')
      : schema
  ),
  numero_recibe: Yup.string().when('method', (method: any, schema) =>
    method != 'retiro'
      ? schema.required('Este campo es requerido').min(7, 'Debe tener como minimo 7 digitos').max(20, 'Debe tener menos de 20 caracteres')
      : schema
  ),
  direccion: Yup.string().when('method', (method: any, schema) =>
    method != 'retiro'
      ? schema.required('Este campo es requerido').min(7, 'Debe tener como minimo 7 digitos').max(100, 'Debe tener menos de 100 caracteres')
      : schema
  ),
  departamento: Yup.string().when('method', (method: any, schema) =>
    method != 'retiro' ? schema.required('Este campo es requerido').min(1, 'Debe tener como minimo 1 digitos') : schema
  ),
  distrito: Yup.string().when('method', (method: any, schema) =>
    method != 'retiro' ? schema.required('Este campo es requerido').min(1, 'Debe tener como minimo 1 digitos') : schema
  ),
  apellidos: Yup.string().required('Este campo es requerido').min(3, 'Debe tener como minimo 3 digitos').max(20, 'Debe tener menos de 20 caracteres'),
  mensaje: Yup.string().nullable().max(200, 'Debe tener menos de 200 caracteres'),
  celular: Yup.string().required('Este campo es requerido').min(7, 'Debe tener como minimo 7 digitos').max(20, 'Debe tener menos de 20 caracteres'),
  email: Yup.string().required('Este campo es requerido').email('Introduce un email válido').max(40, 'Debe tener menos de 40 caracteres')
})

export const SchemaForm = Yup.object().shape({
  nombres: Yup.string().required('Este campo es requerido').min(3, 'Debe tener como minimo 3 digitos').max(255, 'Debe tener menos de 255 caracteres'),
  ruc: Yup.string().required('Este campo es requerido').max(255, 'Debe tener menos de 255 caracteres'),
  mensaje: Yup.string().required('Este campo es requerido').max(255, 'Debe tener menos de 255 caracteres'),
  email: Yup.string().required('Este campo es requerido').email('Introduce un email válido').max(255, 'Debe tener menos de 255 caracteres')
})

export const SchemaBrief = Yup.object().shape({
  nombres: Yup.string().required('Este campo es requerido').min(1),
  email: Yup.string().email('Email invalido').required('Este campo es requerido'),
  celular: Yup.string().required('Este campo es requerido').min(9, 'El numero debe tener 9 digitos').max(9, 'El numero debe tener 9 digitos')
})
// CATEGORIAS
export const SchemaCategorias = Yup.object().shape({
  nombre: Yup.string().required('Este campo es requerido').min(1)
})

// PRODUCTOS
export const ScheamaProductos = Yup.object().shape({
  idCategoria: Yup.number().required('El campo es requerido'),
  nombre: Yup.string().required('El campo es requerido'),
  precio: Yup.number().required('El campo es requerido').positive('El valor no puede ser negativo'),
  cantidad: Yup.number().required('El campo es requerido').positive('El valor no puede ser negativo'),
  oferta: Yup.number().nullable().min(0, 'El valor no puede ser negativo')
})

// PRIMERASECCION
export const ScheamaPrimeraSeccion = Yup.object().shape({
  nombre: Yup.string().required('El campo es requerido'),
  descripcion: Yup.string().required('El campo es requerido')
})

// SEGUNDA SECCION
export const ScheamaSegundaSeccion = Yup.object().shape({
  titulo: Yup.string().required('El campo es requerido'),
  descripcion: Yup.string().required('El campo es requerido')
})

// VALORES
export const ScheamaValores = Yup.object().shape({
  titulo: Yup.string().required('El campo es requerido')
})

// VALORES
export const SchemaValores = Yup.object().shape({
  mapa: Yup.string().required('El campo es requerido'),
  mapa2: Yup.string().required('El campo es requerido')
})

// CONFIGURACION

// VALORES
export const ScheamaBanner = Yup.object().shape({
  titulo1: Yup.string().required('El campo es requerido'),
  texto: Yup.string().required('El campo es requerido')
})

export const SchemaBlogs = Yup.object().shape({
  titulo: Yup.string().required('El campo es requerido'),
  resumen: Yup.string().required('El campo es requerido')
})

export const SchemaConfiguracion = Yup.object().shape({
  titulo1: Yup.string().required('El campo es requerido'),
  titulo2: Yup.string().required('El campo es requerido'),
  titulo3: Yup.string().required('El campo es requerido')
})
// TRANSACCIONES

export const SchemaTransacciones = Yup.object().shape({
  id_transaccion: Yup.number().required('El campo es requerido'),
  nombres: Yup.string().required('El campo es requerido'),
  apellidos: Yup.string().required('El campo es requerido'),
  status: Yup.string().required('El campo es requerido'),
  tipo: Yup.string().required('El campo es requerido'),
  order_id: Yup.string().required('El campo es requerido'),
  email: Yup.string().required('El campo es requerido'),
  celular: Yup.string().required('El campo es requerido'),
  comentario: Yup.string().nullable(),
  delivery: Yup.string().required('El campo es requerido'),
  total_pago: Yup.string().required('El campo es requerido'),
  array_productos: Yup.string().required('El campo es requerido'),
  estado: Yup.number().required('El campo es requerido')
})
