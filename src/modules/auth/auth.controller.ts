import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PostLogin, PostLoginSchema, PostSignUpSchema } from "./schemas/request.schema";

export function authController(app: FastifyInstance) {
  const tags = ["Auth"];

  app.addHook("preHandler", async (request, reply) => {

    const body = request.body as { email?: string };
    
    if(body.email){
      body.email = body.email.toLowerCase();
    }

  });
  app.post("/signup",{
    schema: {
      tags,
      description: "Sign up",
      body: PostSignUpSchema,
    }},(request: FastifyRequest, reply: FastifyReply) => {
      return reply.send(request.body);
    }
  );

  app.post("/login",{
    schema: {
      tags,
      description: "Login",
      body: PostLoginSchema,
    }},(request: FastifyRequest<{ Body: PostLogin }>, reply: FastifyReply) => {
      return reply.send(request.body);
    }
  );

}
