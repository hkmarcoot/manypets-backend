/*
- Import query from db/index.js 
- Write SQL query to create a table - look at the books data to decide on columns and name 
- Use our query function and hand it our SQL string inside of a createBooksTable function 
- Call our createBooksTable function
*/

import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email TEXT, price INTEGER)`;

const sqlString2 = `CREATE TABLE IF NOT EXISTS information (id SERIAL PRIMARY KEY, email TEXT, dogorcat TEXT, gender TEXT, petsname: TEXT, breed TEXT, species TEXT, age INTEGER, address TEXT)`;

async function createTable() {
  const res = await query(sqlString);
  console.log("Created users table", res);
}

async function createTable2() {
  const res = await query(sqlString2);
  console.log("Created information table", res);
}

createTable();
createTable2();
