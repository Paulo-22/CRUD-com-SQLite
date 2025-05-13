import express from 'express'
import { getAllUsers, createUser, deleteUser, getUserId, registerUser, updateUser, login} from '../controllers/userController.js'
import { authenticate } from '../middleware/authenticador.js';
import { validate } from '../middleware/validate.js';
import { loginSchemas } from '../schemas/userSchema.js';


const router = express.Router();

router.get('/', getAllUsers);

router.get("/:id", getUserId);

router.post('/', createUser);

router.put('/:id', authenticate, updateUser);

router.delete('/:id', authenticate, deleteUser);

router.post("/register", registerUser);

router.post('/login', validate(loginSchemas),login)

export default router