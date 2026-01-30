import { supabase } from '../config/supabase.js';

export const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists with this email'
      });
    }

    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email, password }])
      .select();

    if (error) throw error;

    res.status(201).json({
      message: 'User registered successfully',
      user: data[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
