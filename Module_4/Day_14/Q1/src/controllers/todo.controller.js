import { supabase } from '../config/supabase.js';

export const createTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  try {
    const { data, error } = await supabase
      .from('todos')
      .insert([
        {
          title,
          description,
          user_id: userId
        }
      ])
      .select();

    if (error) throw error;

    res.status(201).json({
      message: 'Todo created',
      todo: data[0]
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserTodos = async (req, res) => {
  const { userId } = req.params;

  try {
    const { data: user } = await supabase
      .from('users')
      .select('id')
      .eq('id', userId)
      .single();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { data } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId);

    res.json({ todos: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const updates = req.body;

  try {
    const { data: todo } = await supabase
      .from('todos')
      .select('id')
      .eq('id', todoId)
      .single();

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    const { data, error } = await supabase
      .from('todos')
      .update(updates)
      .eq('id', todoId)
      .select();

    if (error) throw error;

    res.json({
      message: 'Todo updated',
      todo: data[0]
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  try {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', todoId);

    if (error) throw error;

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
