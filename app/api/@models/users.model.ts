/* eslint-disable camelcase */

import { ResultSetHeader, RowDataPacket } from 'mysql2'
import { conexion } from '../@connection/mysql'

interface User {
  name: string;
  id_rol: number;
  email: string;
}

const findAll = async () => {
  const [result] = await conexion.query(
    'SELECT id, name, id_rol, email FROM users'
  )
  return result
}

const create = async ({
  name,
  id_rol,
  email,
  password
}: {
  name: string;
  id_rol: number;
  email: string;
  password: string;
}) => {
  const [insertResult] = await conexion.query<ResultSetHeader>(
    'INSERT INTO users (name, id_rol, email, password) VALUES (?, ?, ?, ?)',
    [name, id_rol, email, password]
  )
  const newUserId = insertResult.insertId
  const [rows] = await conexion.query<RowDataPacket[]>(
    'SELECT name, id_rol, email FROM users WHERE id = ?',
    [newUserId]
  )

  return rows[0] as User
}

const update = async ({ name, id_rol, email, password, id }: any) => {
  const [result] = await conexion.query(
    'UPDATE users SET name = ?, id_rol = ?, email = ?, password = ? WHERE id = ?',
    [name, id_rol, email, password, id]
  )
  return result
}

const findoOneByEmail = async (email: any) => {
  const [result] = await conexion.query<RowDataPacket[]>('SELECT * FROM users WHERE email = ?', [
    email
  ])
  return result[0]
}

const findoOneByID = async (id: any) => {
  const [result] = await conexion.query<RowDataPacket[]>('SELECT * FROM users WHERE id = ? ', [
    id
  ])
  return result[0]
}

export const UserModel = {
  create,
  findoOneByEmail,
  update,
  findoOneByID,
  findAll
}
