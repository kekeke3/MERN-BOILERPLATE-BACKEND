import taskModel from "../models/task.model.js";

export const fetchTasks = async () => {
  return await taskModel.getAllTasks();
};

export const fetchTask = async (taskId) => {
  return await taskModel.getSpecificTask(taskId);
};

export const fetchTasksByUser = async (userId) => {
  return await taskModel.getTasksByUser(userId);
};

export const addTask = async (title, isCompleted = false, userId) => {
  return await taskModel.createTask(title, isCompleted, userId);
};
