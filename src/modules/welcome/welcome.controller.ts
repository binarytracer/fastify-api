import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export function welcomeController(app: FastifyInstance) {
  app.get("/", (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({
      message: "Welcome to the API",
      version: app.getEnvs<{ VERSION: string }>().VERSION,
    });
  });
}
