/* eslint-disable camelcase */

import { RowDataPacket } from 'mysql2'
import { conexion } from '../connection/mysql'

const create = async ({ imagen, titulo1, titulo2, texto }: any) => {
  const [rows] = await conexion.query<RowDataPacket[]>(
    'INSERT INTO banners (imagen1, titulo1, titulo2, texto) VALUES (?, ?, ?, ?)',
    [imagen, titulo1, titulo2, texto]
  )
  return rows[0]
}

const findAll = async (page: number, pageSize: number) => {
  const offset = (page - 1) * pageSize
  const [result] = await conexion.query(
    'SELECT * FROM banners LIMIT ? OFFSET ?',
    [pageSize, offset]
  )
  const [[{ total_count }]] = await conexion.query<RowDataPacket[]>(
    'SELECT COUNT(*) as total_count FROM banners'
  )
  return {
    banners: result,
    totalCount: total_count // Aquí se usa el nombre correcto total_count
  }
}

const findoOneByName = async (imagen1: any) => {
  const [result] = await conexion.query<RowDataPacket[]>(
    'SELECT * FROM banners WHERE imagen1 = ?',
    [imagen1]
  )
  return result[0]
}

const findoOneByName2 = async (imagen2: any) => {
  const [result] = await conexion.query<RowDataPacket[]>(
    'SELECT * FROM banners WHERE imagen2 = ?',
    [imagen2]
  )
  return result[0]
}

const findoOneByid = async (id: any) => {
  const [result] = await conexion.query<RowDataPacket[]>(
    'SELECT * FROM banners WHERE id = ?',
    [id]
  )
  return result[0]
}

const update = async (
  id: any,
  newImagen: string,
  titulo1: string,
  titulo2: string,
  texto: string
) => {
  const [result] = await conexion.query(
    'UPDATE banners SET imagen1 = ?, titulo1 = ?, titulo2 = ?, texto = ?  WHERE id = ?',
    [newImagen, titulo1, titulo2, texto, id]
  )
  return result
}

const deleteBanner = async (id: number) => {
  const [result] = await conexion.query('DELETE FROM banners WHERE id = ?', [
    id
  ])
  return result
}

export const BannersModel = {
  create,
  findAll,
  findoOneByName,
  deleteBanner,
  findoOneByid,
  update,
  findoOneByName2
}
