import bcrypt from "bcrypt"
import "dotenv/config"

import jwt from "jsonwebtoken"

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET

export async function hashPassword(password) {

    return  await bcrypt.hash(password, SALT_ROUNDS)

}

export function generateToken(user) {
    return jwt.sign(
        {id: user.id, email: user.email},
        JWT_SECRET,

        {expiresIn: '1h'}
    )
}
export async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}