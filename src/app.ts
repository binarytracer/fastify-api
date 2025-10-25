import fastify from "fastify";
import { errorHandler } from "./handlers";
import fastifyEnv from "@fastify/env";
import { EnvironmentSchema } from "./schemas";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { userController } from "./modules/users/users.controller";
import { welcomeController } from "./modules/welcome/welcome.controller";
import fastifyNoAdditionalProperties from "fastify-no-additional-properties";
import { authController } from "./modules/auth/auth.controller";

const app = fastify({
  ajv: {
    customOptions: {
      allErrors: true,
    },
  },
});

app.register(fastifyNoAdditionalProperties);
app.register(fastifyEnv, {
  dotenv: true,
  schema: EnvironmentSchema,
});

// swagger configuration
app.register(fastifySwagger, {
  openapi: {
    openapi: "3.0.0",
    info: {
      title: "API",
      description: "API",
      version: process.env.VERSION || "0.0.1",
    },
  },
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "none",
    deepLinking: true,
  },
});

// routes
app.register(userController,{prefix: "/users"});
app.register(welcomeController,{prefix: "/"});
app.register(authController,{prefix: "/auth"});
app.setErrorHandler(errorHandler);

export default app;
