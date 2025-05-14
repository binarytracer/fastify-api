import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { CreateUserSchema, GetUsersResponseSchema } from "../schemas";

export function userController(app: FastifyInstance) {
  app.get(
    "/users",
    {
      schema: GetUsersResponseSchema,
    },
    (request: FastifyRequest, reply: FastifyReply) => {
      return reply.send([{ id: 1, name: "John Doe" }]);
    }
  );

  app.post(
    "/users",
    {
      schema: {
        body: CreateUserSchema,
        description: "Create a new user",
        tags: ["Users"],
        response: {
          201: CreateUserSchema,
        },
      },
    },
    (request: FastifyRequest, reply: FastifyReply) => {
      return reply.status(201).send(request.body);
    }
  );
}
