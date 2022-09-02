import query from "../db/index.js";

//done
export async function postAPet(information) {
  const data = await query(
    `INSERT INTO information
  (
    petsname,
    gender,
    email,
    species,
    breedType,
    breed,
    age,
    address
  )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *; 
  `,
    [
      information.petsname,
      information.gender,
      information.email,
      information.species,
      information.breedType,
      information.breed,
      information.age,
      information.address,
    ]
  );
  return data.rows;
};

export async function postAUser(user){
  const data = await query(
    `INSERT INTO `
  )
}

//specify the structure of the object
//fill the object from post req (pets[i])
//posted to pets table
