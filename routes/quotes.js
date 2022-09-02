import express from "express";
const router = express.Router();

// Add this in when merging models
// import { getPrice, postAPet } from "../models/users.js"; 

//done
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const price = await getPrice(id); // check the name when merging
  res.json({ success: true, payload: price });
});

router.post("/", async (req, res) => {
  // Before submitting the pet, trim any whitespace from each property
  const body = req.body;
  const pets = body.payload; //pets is an array of objects - each object is 1 pet
  for (let i = 0; i < pets.length; i++) {
    // check breed is valid, if it 
    const results = isBreedValid(pets[i].species, pets[i].breed)

    if (results === 0) {
      res.json({ success: false, message: "Invalid breed - none found."})
      return;
    }

    if (results > 1) {
      res.json({ success: false, message: "Multiple breed founds - please be more specific."})
      return;
    }
  }
  for (let i = 0; i < pets.length; i++) {
    postAPet(pets[i])
    res.json({ success: true, message: "Pet(s) submitted successfully."})
  }
});

async function isBreedValid(species, breed) {
  let api;
  if (species === 'cat') {
    api = 'https://api.thecatapi.com/v1/breeds'
  } else if (species === 'dog') {
    api = 'https://api.thedogapi.com/v1/breeds'
  }

  console.log(api + '/search?q=' + breed.replace(' ', '_'));
  const response = await fetch(api + '/search?q=' + breed.replace(' ', '_'));
  const payload = await response.json();

  return payload.length // update this later -> if length is 0, say no breed found, if length is > 1, say be more specific
}

export default router;
