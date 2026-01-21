import { v4 as uuidv4 } from "uuid";

let todos = [];

export const TodoModel = {
  getAll() {
    return todos;
  },

  getById(id) {
    return todos.find(todo => todo.id === id);
  },

  create(title) {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
      createdAt: new Date()
    };
    todos.push(newTodo);
    return newTodo;
  },

  update(id, updates) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return null;

    todos[index] = { ...todos[index], ...updates };
    return todos[index];
  },

  delete(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return null;

    return todos.splice(index, 1)[0];
  }
};
