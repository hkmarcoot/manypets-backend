import express from "express";
const router = express.Router();

import { getAllUsers } from "../models/users.js";

//done
router.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json({ success: true, message: `number of users`, payload: allUsers });
});
export default router;
