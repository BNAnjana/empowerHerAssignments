import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import * as userService from '../services/user.service.js';

export const createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password, age, role } = req.body;

    const { data: existingUser } = await userService.findUserByEmail(email);
    if (existingUser)
      return res.status(409).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await userService.createUser({
      name,
      email,
      password: hashedPassword,
      age,
      role
    });

    if (error) throw error;

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { data, error } = await userService.getAllUsers();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { data, error } = await userService.getUserById(req.params.id);
    if (!data) return res.status(404).json({ message: 'User not found' });
    if (error) throw error;
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { data, error } = await userService.updateUser(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: 'User not found' });
    if (error) throw error;
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
