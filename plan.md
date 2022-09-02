Input: JSON:
{
"message": "jdflsihjpoa"
"status": 200
"payload": [
{
petId:
name:
gender:
email: sfdkushdgsdh@gmail.com
species: Cat
breedType: Cross/Mixed/Pedigree
breed: Tabby
age: 9 (in months)
address: Postcode

        }
    ]
    }

    users: [
        {
        userId: 1
        email: sfdkushdgsdh@gmail.com
        }
    ]

Base price: £120 a year

Species: To establish which 3rd party API to use
Breed: Make a fetch request to the API with the breed in the search params
IF Valid:
Check if the breed is within our array of safeBreeds
If in thee array:
Apply a 10% discount to the price
Else: Carry on
IF Not Valid: Send back an error to the client saying breed is not valid stop the api there

Address: Send fetch request to postcode API with the postcode provided:
If Valid:
Extract the city from the response from the postcode API
Check if cirt is in our riskyCitys array:
If in array:
Apply 15% price increase on the cover

Age: Add 5% for every year up to 5 yrs, add 10% for every year up to 10%

    -   Get age in months
    -   divide by 12, Math.floor to get age in years
    -   IF age <= 5, priceIncrease = age*5%
    -   IF  5 < age <= 10, priceIncrease = 25 + (age-5)*10
    -   IF age > 10, priceIncrease = 75%

TOTAL prices for each pet quote

Multipet:

- Bool
- If TRUE, -10% from total price
- ELSE nothing

Routes: - /quotes // POST request endpoint to send pet info (data) to db

    -   /quotes/id  // GET request endpoint - get all the associated pets returned, calculates price for all insurance

Final: Price

Output: Price (yearly or monthly) for all the pets

Workload division:

- Logic
  - Models
  - Calculation of price based on
    - number of pets
    - address
    - breed
    - age
  - returning quote

Routes - Create above routes for POST and GET requests - Populating both users & information table with dummy data -

- Validaiton



- - - - - - - - - - - 
Models function plans:

export async function postAPet() {

    const data = await query
}
