import { FastifyRequest, FastifyReply } from "fastify";

export function errorHandler(
  error: any,
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (error.validation) {
    reply.status(400).send({
      error: "Validation Error",
      message: error.message,
      validation: error.validation,
    });
  } else {
    // General errors
    reply.status(error.statusCode || 500).send({
      error: error.name || "Internal Server Error",
      message: error.message || "An unexpected error occurred.",
    });
  }
}
