import pg from "pg";
// import { db } from "../config.js";

import { connectionString } from "../config.js";

// console.log(process.env.TESTING);

const pool = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

// const pool = new pg.Pool({
//     user: db.user,
//     host: db.host,
//     database: db.database,
//     password: db.password,
//     port: db.port,
//     ssl: {rejectUnauthorized: false}
// });

export default function query(text, params) {
  return pool.query(text, params);
}
