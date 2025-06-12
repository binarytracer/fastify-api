import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { GetOneSchema, GetOneSchemaType } from "../../schemas";
import { UserService } from "./users.service";
import {
  CreateResponseSchema,
  CreateUserSchema,
  CreateUserSchemaType,
  GetUsersResponseSchema,
  UserSchema,
} from "./schemas";

const userService = new UserService();
export function userController(app: FastifyInstance) {
  const tags = ["Users"];

  app.get(
    "/users",
    {
      schema: {
        tags,
        description: "Get all users",
        response: {
          200: GetUsersResponseSchema,
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const users = await userService.findAll();
      return reply.send(users);
    }
  );

  app.get(
    "/users/:id",
    {
      schema: {
        tags,
        description: "Get a user by ID",
        params: GetOneSchema,
        response: {
          200: UserSchema,
        },
      },
    },
    async (
      request: FastifyRequest<{ Params: GetOneSchemaType }>,
      reply: FastifyReply
    ) => {
      const user = await userService.findById(request.params.id);
      if (!user) {
        return reply.status(404).send({ error: "User not found" });
      }
      return reply.send(user);
    }
  );

  app.post(
    "/users",
    {
      schema: {
        tags,
        description: "Create a new user",
        body: CreateUserSchema,
        response: {
          201: CreateResponseSchema,
        },
      },
    },
    async (
      request: FastifyRequest<{ Body: CreateUserSchemaType }>,
      reply: FastifyReply
    ) => {
      const user = await userService.create(request.body);
      return reply.status(201).send(user);
    }
  );

  app.put(
    "/users/:id",
    {
      schema: {
        description: "Update a user",
        tags: ["Users"],
        params: {
          type: "object",
          properties: {
            id: { type: "number" },
          },
        },
        body: CreateUserSchema,
      },
    },
    async (
      request: FastifyRequest<{ Params: { id: number }; Body: Partial<any> }>,
      reply: FastifyReply
    ) => {
      const user = await userService.update(request.params.id, request.body);
      if (!user) {
        return reply.status(404).send({ error: "User not found" });
      }
      return reply.send(user);
    }
  );

  app.delete(
    "/users/:id",
    {
      schema: {
        description: "Delete a user",
        tags: ["Users"],
        params: {
          type: "object",
          properties: {
            id: { type: "number" },
          },
        },
      },
    },
    async (
      request: FastifyRequest<{ Params: { id: number } }>,
      reply: FastifyReply
    ) => {
      await userService.delete(request.params.id);
      return reply.status(204).send();
    }
  );
}
