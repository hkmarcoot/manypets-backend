import express from "express";
const router = express.Router();

import { getAllUsers, insertUser } from "../models/users.js";

//done
router.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json({ success: true, message: `number of users`, payload: allUsers });
});

router.post("/", async (req, res) => {
  body = req.body;
  const user = await insertUser(body);
  res.json({ success: true, message: `user added`, payload: user });
});


export default router;
