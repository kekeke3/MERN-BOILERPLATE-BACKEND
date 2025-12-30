import {
  fetchTasks,
  fetchTask,
  fetchTasksByUser,
  addTask,
} from "../services/task.service.js";

export const getTasks = async (req, res, next) => {
  try {
    let { limit = 10, page = 1 } = req.query; // default values
    limit = parseInt(limit);
    page = parseInt(page);

    const tasks = await fetchTasks(); // fetch all tasks

    // Pagination logic
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedTasks = tasks.slice(startIndex, endIndex);

    res.status(200).json({
      page,
      limit,
      total: tasks.length,
      data: paginatedTasks,
    });
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const task = await fetchTask(taskId);

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const getTasksByUser = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const tasksByUser = await fetchTasksByUser(userId);

    res.status(200).json(tasksByUser);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const { title, isCompleted, userId } = req.body;
    const result = await addTask(title, isCompleted, userId);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
