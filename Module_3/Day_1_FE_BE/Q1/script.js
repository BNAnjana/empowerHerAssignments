// Fetch todos and store first 20 in Local Storage
function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
      const first20 = data.slice(0, 20);
      localStorage.setItem("todos", JSON.stringify(first20));
      renderTodos();
    })
    .catch(err => console.log("Error fetching todos:", err));
}

// Get todos from Local Storage
function getTodosFromStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

// Render todos on UI
function renderTodos() {
  const todos = getTodosFromStorage();
  const list = document.getElementById("todoList");
  const noTodosMessage = document.getElementById("noTodos");

  list.innerHTML = "";

  if (todos.length === 0) {
    noTodosMessage.style.display = "block";
    return;
  } else {
    noTodosMessage.style.display = "none";
  }

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${todo.title}</strong> <br>
      Status: ${todo.completed ? "Completed" : "Not Completed"} 
      <button onclick="deleteTodo(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

// Delete a todo from storage
function deleteTodo(index) {
  const todos = getTodosFromStorage();
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// Initialize the app
function initApp() {
  if (getTodosFromStorage().length === 0) {
    fetchTodos();
  } else {
    renderTodos();
  }
}

initApp();
