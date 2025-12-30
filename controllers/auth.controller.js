import { addUser, loginUser } from "../services/user.service.js";
export const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userId = await addUser(email, password);

    res.status(201).json({ success: true, id: userId, email });
  } catch (error) {
    next(error);
  }
};

export const authenticateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
