import express from "express";
import userRoutes from './routes/userRoutes.js';

const app = express()

//permite que o Express entenda JSON no corpo da requsição
app.use(express.json())

//Define o endpoint /users para rotas de usuarios
app.use("/users", userRoutes)
export default app;