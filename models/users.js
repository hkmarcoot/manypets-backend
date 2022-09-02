import query from "../db/index.js";

//done
export async function getAllUsers() {
  const data = await query(`SELECT * FROM users;`);
  return data.rows.length;
}

export async function insertUser(body) {
  let params = body.email;
  const data = await query("INSERT INTO users (email) VALUES ($1) RETURNING *",[params])
}
