import { sign } from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

export function verifyToken(payload: { id: string }) {
  return sign(payload, secret!);
}
