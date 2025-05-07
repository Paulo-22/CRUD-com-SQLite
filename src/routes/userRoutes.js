import express from 'express'
import { getAllUsers, createUser, deleteUser, getUserId, registerUser, updateUser} from '../controllers/userController.js'


const router = express.Router();

router.get('/', getAllUsers);

router.get("/:id", getUserId);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post("/register", registerUser);

export default router