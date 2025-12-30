import db from "../config/db.js";

async function createTask(title, isCompleted = false, userId) {
  const [result] = await db.query(
    "INSERT INTO tasks (title, completed, user_id) VALUES(?,?,?)",
    [title, isCompleted, userId]
  );

  return result.insertId;
}

async function getAllTasks() {
  const [rows] = await db.query("SELECT * FROM tasks");

  return rows;
}

async function getSpecificTask(taskId) {
  const [row] = await db.query("SELECT * FROM tasks WHERE id = ?", taskId);
  return row[0];
}

async function getTasksByUser(userId) {
  const [rows] = await db.query("SELECT * FROM tasks where user_id = ?", [
    userId,
  ]);

  return rows;
}

export default { createTask, getAllTasks, getSpecificTask, getTasksByUser };

/* title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  user_id INT, */
