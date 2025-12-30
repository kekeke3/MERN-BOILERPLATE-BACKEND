import express from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
  userIdParam,
  paginationQuery,
} from "../middlewares/user.validation.js";
const router = express.Router();

router.get("/", paginationQuery, validate, getUsers);
router.get("/:id", userIdParam, validate, getUser);

export default router;
