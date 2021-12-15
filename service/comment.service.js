import connection from './database'


export const addComment = async (nickname, content, article_id) => {
  const statement = `INSERT INTO comment (nickname, content, article_id) VALUES (?, ?, ?)`
  const [result] = await connection.execute(statement, [nickname, content, article_id])
  return result
}

export const addCount = async (id) => {
  const statement = `UPDATE article SET comment = comment + 1 WHERE id = ?`
  const [result] = await connection.execute(statement, [id])
  return result
}
export const getList = async (id) => {
  const statement = `SELECT * FROM comment WHERE article_id = ?`
  const [result] = await connection.execute(statement, [id])
  return result
}

