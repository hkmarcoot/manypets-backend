import express from "express";
const router = express.Router();

// Add this in when merging models
import { postAPet } from "../models/quotes.js";

//done
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const price = await getPrice(id); // check the name when merging
  res.json({ success: true, payload: price });
});

router.post("/", async (req, res) => {
  // Before submitting the pet, trim any whitespace from each property
  const pets = req.body;
  console.log(pets);
  //pets is an array of objects - each object is 1 pet
  
  // for (let i = 0; i < pets.length; i++) {
    postAPet(pets);
    res.json({ success: true, message: "Pet(s) submitted successfully." });
  // }
});


export default router;
