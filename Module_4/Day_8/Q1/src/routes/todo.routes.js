import express from "express";
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from "../controllers/todo.controller.js";

import validateTodo from "../middlewares/validateTodo.middleware.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", validateTodo, createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
