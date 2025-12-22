import React from "react";
import { TodoProvider } from "./TodoProvider";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./index.css";

const Todos = () => {
  return (
    <TodoProvider>
      <div className="container">
      <h1>Todo App using Context API</h1>
      <AddTodo />
      <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Todos;
