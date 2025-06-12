import { Static, Type } from "@sinclair/typebox";

export const CreateUserSchema = Type.Object({
  name: Type.String(),
  email: Type.String(),
  password: Type.String(),
});

export type CreateUserSchemaType = Static<typeof CreateUserSchema>;
