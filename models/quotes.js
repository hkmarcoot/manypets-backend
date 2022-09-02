import query from "../db/index.js";


const safeBreeds = ["Abyssinian", "Moggy", "Siamese"];
const riskyCities = ["London","Manchester","Nottingham"];


async function getQuote(id){
    //SQL Query goe here
let sqlString = "SELECT * FROM information INNER JOIN users ON information.email = users.email WHERE user.id = $1"

    const response = await query(sqlString,[id])

    // const data = response.json()

    const data = {
        "message": "jdflsihjpoa",
        "status": 200,
        "payload": [
        {
        petId:1,
        name: "Simon",
        gender: "Male",
        email: "sfdkushdgsdh@gmail.com",
        species: "Cat",
        breedType: "Mixed",
        breed: "Abyssinian",
        age: 27,
        address: "NE22 7LE",
        }
            ]
    }

    let totalPrice = 0;
    for (let i = 0; i < data.payload.length; i++){
        const basePrice = 120;
        let runningtotal = basePrice;
        
        const {species, breed, age ,address} = data.payload[i];
        let petApi = ""
        if (species === "cat"){
            petApi = "https://api.thecatapi.com/v1/breeds"
        } else {
            petApi = "https://api.thedogapi.com/v1/breeds"
        }

        //Validate breed here

        if (safeBreeds.includes(breed)){
            runningtotal = runningtotal * 0.9
        }

        //Validate postcode, get the city the postcode belongs top: 
        let city = "London" //results of get request to postcode API go here

        if (riskyCities.includes(city)){
            runningtotal = runningtotal * 1.15 
        }

        let ageYears = Math.floor(age/12) //gives an integer

        if (ageYears <= 5){
            runningtotal = runningtotal * (1 + (ageYears*0.05))
        } else if (5 < ageYears <= 10){
            runningtotal = runningtotal * (1.25 + (ageYears-5)*0.1)
        } else {
            runningtotal = runningtotal * 1.75
        }

        totalPrice += runningtotal
    }

    if (data.payload.length > 1){
        totalPrice *= 0.9
    }

    let responseObject = {
        status: 200,
        payload : totalPrice,
    }

    return responseObject
}

async function test(id){
    let params = Number(id)
    let sqlString = "SELECT * FROM users INNER JOIN information ON users.email = information.email"

    const response = await query(sqlString)
    console.log(response.rows)
}

async function users(){
    const response = await query("SELECT * FROM users")
    console.log(response.rows)
}

async function information(){
    const response = await query("SELECT * FROM information")
    console.log(response.rows)
}
information()