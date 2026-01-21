import { TodoModel } from "../models/todo.model.js";
import ApiError from "../utils/ApiError.js";

export const getTodos = (req, res, next) => {
  try {
    const todos = TodoModel.getAll();
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    next(error);
  }
};

export const getTodoById = (req, res, next) => {
  try {
    const todo = TodoModel.getById(req.params.id);
    if (!todo) throw new ApiError(404, "Todo not found");

    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    next(error);
  }
};

export const createTodo = (req, res, next) => {
  try {
    const { title } = req.body;
    const todo = TodoModel.create(title);

    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    next(error);
  }
};

export const updateTodo = (req, res, next) => {
  try {
    const updatedTodo = TodoModel.update(req.params.id, req.body);
    if (!updatedTodo) throw new ApiError(404, "Todo not found");

    res.status(200).json({ success: true, data: updatedTodo });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = (req, res, next) => {
  try {
    const deletedTodo = TodoModel.delete(req.params.id);
    if (!deletedTodo) throw new ApiError(404, "Todo not found");

    res.status(200).json({ success: true, message: "Todo deleted" });
  } catch (error) {
    next(error);
  }
};
