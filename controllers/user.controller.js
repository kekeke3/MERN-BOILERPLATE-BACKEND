import { fetchUsers, fetchUser, addUser } from "../services/user.service.js";

const getUsers = async (req, res, next) => {
  try {
    let { limit = 10, page = 1 } = req.query; // default values
    limit = parseInt(limit);
    page = parseInt(page);

    const users = await fetchUsers(); // get all users

    // Calculate start and end index for pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedUsers = users.slice(startIndex, endIndex);

    res.status(200).json({
      page,
      limit,
      total: users.length,
      data: paginatedUsers,
    });
  } catch (error) {
    next(error);
  }
};
const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await fetchUser(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export { getUsers, getUser };
