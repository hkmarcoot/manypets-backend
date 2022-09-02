import query from "../db/index.js";

const safeCatBreeds = ["Abyssinian", "Forest Cat", "Maine Coone"];
const safeDogBreeds = ["Alaskan Husky", "Harrier", "English Springer Spaniel"];
const riskyCities = ["London", "Manchester", "Nottingham"];
let safeBreeds = [];

async function getQuote(id) {
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
    let petApi = "";
    if (species === "cat") {
      petApi = "https://api.thecatapi.com/v1/breeds";
      safeBreeds = safeCatBreeds;
    } else if(species === "dog"){
      petApi = "https://api.thedogapi.com/v1/breeds";
      safeBreeds = safeDogBreeds;
    } else{
        return "Error: Invalid Species"
    }

    //Validate breed here

    if (safeBreeds.includes(breed)) {
      runningtotal = runningtotal * 0.9;
    }

    //Validate postcode, get the city the postcode belongs top:
    let city = "Cardiff"; //results of get request to postcode API go here

    if (riskyCities.includes(city)) {
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

  let responseObject = {
    status: 200,
    payload: totalPrice,
  };

  return responseObject;
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
