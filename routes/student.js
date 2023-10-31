import express from "express";
import { getUserByName } from "./helper.js";
import { authorizedUser } from "../middleware/auth.js"

const router = express.Router();

export const studentRouter = router;