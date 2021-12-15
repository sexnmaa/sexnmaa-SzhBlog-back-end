import connection from './database'

export const add = async (content) => {
  const statement = `INSERT INTO barrage (content) VALUES (?)`
  const [result] = await connection.execute(statement, [content])
  return result
}

export const getList = async () => {
  const statement = `SELECT * FROM barrage ORDER BY createAt DESC`
  const [result] = await connection.execute(statement)
  return result
}

