import express from 'express'
import { getAllUsers,postAllusers } from '../controllers/userController.js';

const router = express.Router();

router.get("/",getAllUsers)
router.post("/",postAllusers)

export default router
