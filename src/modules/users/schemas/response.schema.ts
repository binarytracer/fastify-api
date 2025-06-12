import { Static, Type } from "@sinclair/typebox";
import { DateTimeSchema } from "../../../schemas";

export const CreateResponseSchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  email: Type.String(),
  createdAt: DateTimeSchema,
  updatedAt: DateTimeSchema,
});

export const UserSchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  email: Type.String(),
  createdAt: DateTimeSchema,
  updatedAt: DateTimeSchema,
});

export type UserSchemaType = Static<typeof UserSchema>;

export const GetUsersResponseSchema = Type.Array(UserSchema);
