import axios from "./AxiosInstance";

// Fetch all todos
export const getTodos = async () => {
  const response = await axios.get("/todos");
  return response.data;
};

// Fetch todo by ID
export const getTodoById = async (id) => {
  const response = await axios.get(`/todos/${id}`);
  return response.data;
};