import * as jwt from "jsonwebtoken";
import { JwtTokenPayload } from "../../schemas/jwt.schema";

export class JWTService {
  private readonly secret: string;
  private readonly expiresIn: number;

  constructor() {
    this.secret = String(process.env.JWT_SECRET);
    this.expiresIn = Number(process.env.JWT_EXPIRES_IN);
  }

  generateToken(payload: jwt.JwtPayload): string {
    // Ensure 'expiresIn' is passed as a string for compatibility, and secret is a string
    const token = jwt.sign(payload, this.secret, { expiresIn: this.expiresIn }) as string;

    if (!token) {
      throw new Error("Failed to generate token");
    }

    return token;
  }

  verifyToken(token: string): JwtTokenPayload | null {
    try {
      return jwt.verify(token, this.secret) as JwtTokenPayload;
    } catch (_error) {
      return null;
    }
  }
}
