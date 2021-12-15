import connection from './database'

export const getUserByName = async (name) => {
  const statement = `SELECT * FROM user WHERE name = ?`
  const result = await connection.execute(statement, [name])
  return result[0]
}