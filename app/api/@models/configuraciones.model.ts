/* eslint-disable camelcase */

import { RowDataPacket } from 'mysql2'
import { conexion } from '../@connection/mysql'

const findoOneByid = async (id: any) => {
  const [result] = await conexion.query<RowDataPacket[]>('SELECT * FROM configuraciones WHERE id = ?', [id])
  return result[0]
}

const update = async (
  titulo1: string,
  titulo2: string,
  titulo3: string,
  descripcion: string,
  imagen1: string,
  imagen2: string,
  telefono: string,
  celular1: string,
  correo1: string | null,
  correo2: string,
  correo3: string,
  horario1: string,
  direccion: string | null,
  facebook: string,
  instagram: string,
  twitter: string,
  linkedin: string,
  youtube: string,
  whatsapp: string,
  updated_at: Date,
  id: any
) => {
  const [result] = await conexion.query(
    'UPDATE configuraciones SET titulo1 = ?, titulo2 = ?, titulo3 = ?, descripcion = ?, imagen1 = ?, imagen2 = ?, telefono = ?, celular1 = ?, correo1 = ?, correo2 = ?, correo3 = ?, horario1 = ?, direccion = ?, facebook = ?, instagram = ?, twitter = ?, linkedin = ?, youtube = ?, whatsapp = ?, updated_at = ?  WHERE id = ?',
    [
      titulo1,
      titulo2,
      titulo3,
      descripcion,
      imagen1,
      imagen2,
      telefono,
      celular1,
      correo1,
      correo2,
      correo3,
      horario1,
      direccion,
      facebook,
      instagram,
      twitter,
      linkedin,
      youtube,
      whatsapp,
      updated_at,
      id
    ]
  )
  return result
}

export const ConfiguracionesModel = {
  findoOneByid,
  update
}
