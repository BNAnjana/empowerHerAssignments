import express from 'express';
import {
  createTodo,
  getUserTodos,
  updateTodo,
  deleteTodo
} from '../controllers/todo.controller.js';

import { validateTodo } from '../validations/todo.validation.js';

const router = express.Router();

router.post('/add-todo', validateTodo, createTodo);
router.get('/get-my-todo/:userId', getUserTodos);
router.put('/update-todo/:todoId', updateTodo);
router.delete('/delete-todo/:todoId', deleteTodo);

export default router;
