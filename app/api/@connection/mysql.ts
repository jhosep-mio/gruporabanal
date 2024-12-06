import mysql from 'mysql2/promise'
const dbconfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 20, // Límite de conexiones simultáneas
  queueLimit: 0 // Sin límite en la cola de solicitudes
}

export const conexion = mysql.createPool(dbconfig)
export const testConnection = async () => {
  try {
    const connection = await conexion.getConnection()
    console.log('Base de datos conectada')
    connection.release()
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error)
    setTimeout(testConnection, 5000)
  }
}

testConnection()
