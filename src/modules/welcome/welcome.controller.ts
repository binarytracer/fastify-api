import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export function welcomeController(app: FastifyInstance) {
  const tags = ["Welcome"];

  app.get("",{
    schema: {
      tags,
      description: "Welcome to the API",
    }},(request: FastifyRequest, reply: FastifyReply) => {
      return reply.send({
        message: "Welcome to the API",
        version: app.getEnvs<{ VERSION: string }>().VERSION,
      });
    }
  );

}
