import connection from './database'

export const add = async (title, subtitle, content, url, userId) => {
  const statement = `INSERT INTO article (title, subtitle, content, url, user_id) VALUES (?, ?, ?, ?, ?);`
  const [result] = await connection.execute(statement, [title,subtitle, content, url, userId])
  return result
}

export const getLists = async (offset=0, size=5) => {
  console.log(offset, size);
  const statement = `SELECT id, title, subtitle, url, thumbs_up, comment, updateAt FROM article 
                    LIMIT ?, ?;`
  const [result] = await connection.execute(statement, [offset, size]) 
  return result
}

export const getCount = async () => {
  const statement = `SELECT COUNT(id) as count FROM article`
  const [result] = await connection.execute(statement)
  return result
}

export const getDetailById = async (id) => {
  const statement = `SELECT * FROM article WHERE id = ?;`
  const [result] = await connection.execute(statement, [id])
  return result
}

export const addLikes = async (id) => {
  const statement = `UPDATE article SET thumbs_up = thumbs_up + 1 WHERE id = ?`
  const [result] = await connection.execute(statement, [id])
  return result
}

