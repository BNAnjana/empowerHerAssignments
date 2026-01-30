import express from 'express';
import userRoutes from './routes/user.routes.js';
import todoRoutes from './routes/todo.routes.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

export default app;
