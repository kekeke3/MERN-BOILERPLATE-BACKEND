import { body, query, param } from "express-validator";

/* Body Validation */

export const createTaskBody = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .bail()
    .isString()
    .withMessage("Title must be a string"),
];

/* Query Validation */

export const paginationQuery = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be a positive integer"),
  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Limit must be a positive integer"),
];

/* Param Validation */
export const TaskIdParam = [
  param("id")
    .exists()
    .withMessage("Task ID is required")
    .isInt({ min: 1 })
    .withMessage("Task ID must be a positive integer"),
];

export const UserIdParam = [
  param("user_id")
    .exists()
    .withMessage("User ID is required")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),
];
