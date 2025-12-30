import express from "express";
import {
  authenticateUser,
  createUser,
} from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { createUserBody } from "../middlewares/user.validation.js";
const router = express.Router();

router.post("/login", authenticateUser);

router.post("/register", createUserBody, validate, createUser);

export default router;
