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
}

export async function postAUser(user) {
  const data = await query(`INSERT INTO `);
}

//specify the structure of the object
//fill the object from post req (pets[i])
//posted to pets table

const safeCatBreeds = ["Abyssinian", "Forest Cat", "Maine Coone"];
const safeDogBreeds = ["Alaskan Husky", "Harrier", "English Springer Spaniel"];
const riskyRegions = ["London", "Greater Manchester", "North West"];
let safeBreeds = [];

export async function getQuote(id) {
  let params = Number(id);
  let sqlString =
    "SELECT * FROM users INNER JOIN information ON users.email = information.email WHERE users.id = $1";

  const response = await query(sqlString, [params]);
  let data = response.rows;

  let totalPrice = 0;
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const basePrice = 120;
    let runningtotal = basePrice;

    const { species, breed, age, address } = data[i];
    if (species === "cat") {
      safeBreeds = safeCatBreeds;
    } else if (species === "dog") {
      safeBreeds = safeDogBreeds;
    } else {
      return "Error: Invalid Species";
    }

    //Validate breed here

    if (safeBreeds.includes(breed)) {
      runningtotal = runningtotal * 0.9;
    }

    //Validate postcode, get the city the postcode belongs top:
    //results of get request to postcode API go here

    if (riskyRegions.includes(address)) {
      runningtotal = runningtotal * 1.15;
    }

    let ageYears = Math.floor(age / 12); //gives an integer

    if (ageYears <= 5) {
      runningtotal = runningtotal * (1 + ageYears * 0.05);
    } else if (5 < ageYears <= 10) {
      runningtotal = runningtotal * (1.25 + (ageYears - 5) * 0.1);
    } else {
      runningtotal = runningtotal * 1.75;
    }

    console.log(runningtotal);
    totalPrice += runningtotal;
  }

  if (data.length > 1) {
    totalPrice *= 0.9;
  }

  totalPrice = +totalPrice.toFixed(2);

  return totalPrice;
}

// async function test(id){
//     let params = Number(id)
//     let sqlString = "SELECT * FROM users INNER JOIN information ON users.email = information.email WHERE users.id = $1"

//     const response = await query(sqlString, [params])
//     console.log(response.rows)
// }

// async function users(){
//     const response = await query("SELECT * FROM users")
//     console.log(response.rows)
// }

// async function information(){
//     const response = await query("SELECT * FROM information")
//     console.log(response.rows)
// }

// test(2)

let test = await getQuote(1);
console.log(test);
