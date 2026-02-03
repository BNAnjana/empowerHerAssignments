import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import todoRoutes from './routes/todo.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export default app;
