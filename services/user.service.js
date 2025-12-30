import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

async function addUser(email, password) {
  const existingUser = await userModel.findUserByEmail(email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  return await userModel.createUser(email, password);
}

async function loginUser(email, password) {
  const existingUser = await userModel.findUserByEmail(email);
  if (!existingUser) {
    throw new Error("No user found");
  }

  const isMatch = await userModel.authenticateUser(password, existingUser);

  if (!isMatch) {
    throw new Error("Password is invalid");
  }

  const token = jwt.sign(
    { id: existingUser.id, email: existingUser.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    success: true,
    token,
    userId: existingUser.id,
  };
}

async function fetchUsers() {
  return await userModel.getAllUsers();
}

async function fetchUser(id) {
  return await userModel.getSpecificUser(id);
}

export { addUser, fetchUsers, fetchUser, loginUser };
