import { supabase } from '../config/supabase.js';

export const findUserByEmail = async (email) => {
  return supabase.from('users').select('*').eq('email', email).single();
};

export const createUser = async (data) => {
  return supabase.from('users').insert(data).select().single();
};

export const getAllUsers = async () => {
  return supabase.from('users').select('*');
};

export const getUserById = async (id) => {
  return supabase.from('users').select('*').eq('id', id).single();
};

export const updateUser = async (id, data) => {
  return supabase.from('users').update(data).eq('id', id).select().single();
};

export const deleteUser = async (id) => {
  return supabase.from('users').delete().eq('id', id);
};
