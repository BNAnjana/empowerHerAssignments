import { useState } from "react";
import TodosList from "./TodosList";

export default function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h1>Todo App</h1>

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  );
}
