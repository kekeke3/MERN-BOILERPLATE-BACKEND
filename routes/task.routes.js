import express from "express";
import {
  getTasks,
  getTask,
  getTasksByUser,
  createTask,
} from "../controllers/task.controller.js";
import {
  createTaskBody,
  paginationQuery,
  TaskIdParam,
  UserIdParam,
} from "../middlewares/task.validation.js";
import validate from "../middlewares/validate.middleware.js";

const router = express.Router();

router.get("/", paginationQuery, validate, getTasks);
router.get("/:id", TaskIdParam, validate, getTask);
router.get("/user/:user_id", UserIdParam, validate, getTasksByUser);

router.post("/", createTaskBody, validate, createTask);

export default router;
