import { Type } from "@sinclair/typebox";

export const EnvironmentSchema = Type.Object({
  PORT: Type.Number(),
  VERSION: Type.String(),
});
