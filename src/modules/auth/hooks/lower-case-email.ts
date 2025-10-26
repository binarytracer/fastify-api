import { FastifyRequest, FastifyReply } from "fastify";

export async function lowerCaseEmail(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const body = request.body as { email?: string };

  if (body.email) {
    body.email = body.email.toLowerCase();
  }
}
