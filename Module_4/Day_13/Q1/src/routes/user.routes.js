import express from 'express';
import * as controller from '../controllers/user.controller.js';
import {
  createUserValidation,
  updateUserValidation
} from '../validations/user.validation.js';

const router = express.Router();

router.post('/', createUserValidation, controller.createUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.put('/:id', updateUserValidation, controller.updateUser);
router.delete('/:id', controller.deleteUser);

export default router;
