import { body, param, query } from "express-validator";

/* Param Validation */

export const userIdParam = [
  param("id")
    .exists()
    .withMessage("User ID is required")
    .isInt({ min: 1 })
    .withMessage("User ID must be a positive integer"),
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

/* Body Validation */

export const createUserBody = [
  body("email")
    .trim()
    .normalizeEmail()
    .exists()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("It should be a valid email"),
  body("password")
    .exists()
    .withMessage("Password is required")
    .bail()
    .isString()
    .withMessage("Password must be a string")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];
