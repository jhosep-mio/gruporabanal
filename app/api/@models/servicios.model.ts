/* eslint-disable camelcase */

import { RowDataPacket } from 'mysql2'
import { conexion } from '../@connection/mysql'

const create = async ({ titulo, url, imagen1, resumen, descripcion, created_at, updated_at }: any) => {
  const [rows] = await conexion.query<RowDataPacket[]>(
    'INSERT INTO servicios (titulo, url, imagen1, resumen, descripcion, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [titulo, url, imagen1, resumen, descripcion, created_at, updated_at]
  )
  return rows[0]
}

const findAll = async () => {
  const [result] = await conexion.query('SELECT * FROM servicios ORDER BY id DESC')
  const [[{ total_count }]] = await conexion.query<RowDataPacket[]>('SELECT COUNT(*) as total_count FROM servicios')
  return {
    servicios: result,
    totalCount: total_count // Aquí se usa el nombre correcto total_count
  }
}

const findoOneByid = async (id: any) => {
  const [result] = await conexion.query<RowDataPacket[]>('SELECT * FROM servicios WHERE id = ?', [id])
  return result[0]
}

const findoOneByName = async (name: any) => {
  const [result] = await conexion.query<RowDataPacket[]>('SELECT * FROM servicios WHERE url = ?', [name])
  return result[0]
}

const findoAllNoName = async (name: any) => {
  const [result] = await conexion.query<RowDataPacket[]>('SELECT * FROM servicios WHERE url != ?', [name])
  return result
}

const update = async (titulo: string, url: string, resumen: string, descripcion: string | null, imagen1: string, updated_at: Date, id: any) => {
  const [result] = await conexion.query('UPDATE servicios SET titulo = ?, url = ?, resumen = ?, descripcion = ?, imagen1 = ?, updated_at = ?  WHERE id = ?', [
    titulo,
    url,
    resumen,
    descripcion,
    imagen1,
    updated_at,
    id
  ])
  return result
}

const deleteServicio = async (id: string) => {
  const [result] = await conexion.query('DELETE FROM servicios WHERE id = ?', [id])
  return result
}

export const ServiciosModel = {
  create,
  findAll,
  findoOneByName,
  deleteServicio,
  findoOneByid,
  update,
  findoAllNoName
}
