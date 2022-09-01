import query from "../index.js";
// import users from "../../libs/data.js";
// import information from "../../libs/data.js";

const sqlString = `DROP TABLE users;`;
const sqlString2 = `DROP TABLE information;`;

async function deleteUsersTable() {
  const res = await query(sqlString);
  console.log("Users table deleted:", res);
}

async function deleteInfoTable() {
  const res = await query(sqlString2);
  console.log("Info table deleted:", res);
}

deleteUsersTable();
deleteInfoTable();
