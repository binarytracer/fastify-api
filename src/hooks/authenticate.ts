import { FastifyRequest } from "fastify";
import { JWTService } from "../modules/auth/jwt.service";
import { UnauthorizedError } from "../handlers";

interface AuthenticatedRequest extends FastifyRequest {
  user?: {
    userId: number;
    email: string;
  };
}

export async function authenticate(
  request: AuthenticatedRequest
): Promise<void> {
  // Extract token from Authorization header
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("No token provided");
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    throw new UnauthorizedError("No token provided");
  }

  // Verify token
  const jwtService = new JWTService();
  const payload = jwtService.verifyToken(token);

  if (!payload) {
    throw new UnauthorizedError("Invalid or expired token");
  }

  // Attach user info to request
  request.user = payload;
}
