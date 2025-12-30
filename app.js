import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/error.middleware.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";
import authMiddleware from "./middlewares/auth.middleware.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* FRONTEND <-> BACKEND  */
app.use(cors());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", authMiddleware, userRoutes);
app.use("/api/tasks", authMiddleware, taskRoutes);
app.use(errorHandler);

export default app;
