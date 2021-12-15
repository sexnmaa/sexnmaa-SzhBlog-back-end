import connection from './database'

// export const upload = async (url, id) => {
//   const statement = `UPDATE article SET url = ? WHERE id = ?`
//   const [result] = await connection.execute(statement, [url, id])
//   return result
// }

export const uploadBg = async (url) => {
  const statement = `INSERT INTO picture (url) VALUE (?)`
  const [result] = await connection.execute(statement, [url])
  return result
}
export const getList = async () => {
  const statement = `SELECT * FROM picture`
  const [result] = await connection.execute(statement)
  return result
}