import query from "../db/index.js";

//done
export async function getAllUsers() {
  const data = await query(`SELECT * FROM users;`);
  return data.rows.length;
}
