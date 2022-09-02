
Input: JSON:
{
    "message": "jdflsihjpoa"
    "status": 200
    "payload": [
        {
            name:
            gender: 
            email: 
            species: Cat
            breedType: Cross/Mixed/Pedigree
            breed: Tabby
            age: 9 (in months)
            address: Postcode

        }
    ]
    }


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


Final: Price

Output: Price (yearly or monthly) for all the pets