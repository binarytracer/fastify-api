import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  PostLogin,
  PostLoginSchema,
  PostSignUpReq,
  PostSignUpReqSchema,
} from "./schemas/request.schema";
import { AuthService } from "./auth.service";
import { lowerCaseEmail } from "./hooks/lower-case-email";
import { PostLoginResponseSchema, PostSignUpResponseSchema } from "./schemas/response.schema";
import { UnauthorizedError } from "../../handlers";

export function authController(app: FastifyInstance) {
  const tags = ["Auth"];
  const authService = new AuthService();

  app.addHook("preHandler", lowerCaseEmail);

  app.post(
    "/signup",
    {
      schema: {
        tags,
        description: "Sign up",
        body: PostSignUpReqSchema,
        response: {
          201: PostSignUpResponseSchema,
        },
      },
    },
    async (request: FastifyRequest<{ Body: PostSignUpReq }>, reply: FastifyReply) => {
      try {
        await authService.signup(request.body);

        return reply.send({
          message: "User created successfully",
          token: "asdasd",
        });
      } catch (error) {
        return reply.status(400).send({
          error: error instanceof Error ? error.message : "Signup failed",
        });
      }
    }
  );

  app.post(
    "/login",
    {
      schema: {
        tags,
        description: "Login",
        body: PostLoginSchema,
        response: {
          200: PostLoginResponseSchema,
        },
      },
    },
    async (request: FastifyRequest<{ Body: PostLogin }>, reply: FastifyReply) => {
      const { email, password } = request.body;
      const result = await authService.login(email, password);

      if (!result) {
        throw new UnauthorizedError("Invalid email or password");
      }

      return reply.send({
        token: result.token,
      });
    }
  );
}
