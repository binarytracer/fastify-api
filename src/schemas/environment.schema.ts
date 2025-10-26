import { Type } from "@sinclair/typebox";

export const EnvironmentSchema = Type.Object({
  PORT: Type.Number(),
  VERSION: Type.String(),
  JWT_SECRET: Type.String(),
  JWT_EXPIRES_IN: Type.Number(),
});
