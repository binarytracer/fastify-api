import { FastifyRequest, FastifyReply } from "fastify";
import { BaseError } from "./base.error";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function errorHandler(error: any, request: FastifyRequest, reply: FastifyReply) {
  // Handle Fastify validation errors
  if (error.validation) {
    return reply.status(400).send({
      error: "Validation Error",
      message: error.message,
      validation: error.validation,
    });
  }

  // Handle custom exceptions
  if (error instanceof BaseError) {
    return reply.status(error.statusCode).send({
      error: error.name,
      message: error.message,
    });
  }

  // Handle general errors
  return reply.status(error.statusCode || 500).send({
    error: error.name || "Internal Server Error",
    message: error.message || "An unexpected error occurred.",
  });
}
