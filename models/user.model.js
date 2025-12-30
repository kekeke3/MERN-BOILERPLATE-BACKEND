import db from "../config/db.js";
import bcrypt from "bcrypt";

async function createUser(email, password) {
  // Hash the password
  const saltRounds = 10; // Adjust for security/performance
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const [result] = await db.query(
    "INSERT INTO users (email,password) VALUES(?,?)",
    [email, hashedPassword]
  );

  return result.insertId;
}

async function authenticateUser(password, existingUser) {
  const isMatch = await bcrypt.compare(password, existingUser.password);
  return isMatch;
}

async function findUserByEmail(email) {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ? ", [
    email,
  ]);

  return rows[0];
}

async function getAllUsers() {
  const [rows] = await db.query("SELECT * FROM users ");
  return rows;
}

async function getSpecificUser(id) {
  const [row] = await db.query("SELECT * FROM users where id = ?", [id]);
  return row;
}

export default {
  createUser,
  findUserByEmail,
  getAllUsers,
  getSpecificUser,
  authenticateUser,
};
