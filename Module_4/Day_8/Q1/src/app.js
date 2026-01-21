import express from "express";
import todoRoutes from "./routes/todo.routes.js";
import logger from "./middlewares/logger.middleware.js";
import rateLimiter from "./middlewares/rateLimiter.middleware.js";

const app = express();

app.use(express.json());
app.use(logger);
app.use(rateLimiter);

app.use("/api/todos", todoRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

export default app;
