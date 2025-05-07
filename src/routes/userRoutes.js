import express from 'express'
import { createUser, getAllUsers, deleteUser, updateUser, getUserId } from '../controllers/userController.js'
import { validate } from '../middleware/validate.js'
import { createUserSchema, updatedUserSchema } from '../schemas/userSchemas.js'
const router = express.Router()

router.get('/', getAllUsers)

router.get("/:id", getUserId)

router.post('/', validate(createUserSchema), createUser)

router.put('/:id', updateUser(updatedUserSchema), updateUser)

router.delete('/:id', deleteUser)

export default router