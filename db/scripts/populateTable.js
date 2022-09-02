import query from "../index.js";
import { users } from "../../libs/data.js";
import { information } from "../../libs/data.js";

async function populateTable() {
  for (let i = 0; i < users.length; i++) {
    const email = users[i].email;
    const price = users[i].price;

    const res = await query(
      `INSERT INTO users (email, price) VALUES ($1, $2) RETURNING *`,
      [email, price]
    );
    console.log(res);
  }
}

async function populateTable2() {
  for (let i = 0; i < information.length; i++) {
    const email = information[i].email;
    const dogorcat = information[i].dogorcat;
    const gender = information[i].gender;
    const petsname = information[i].petsname;
    const breed = information[i].breed;
    const species = information[i].species;
    const age = information[i].age;
    const address = information[i].address;

    const res = await query(
      `INSERT INTO information (email, dogorcat, gender, petsname, breed, species, age, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [email, dogorcat, gender, petsname, breed, species, age, address]
    );
    console.log(res);
  }
}

populateTable();
populateTable2();
