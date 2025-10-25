import { Static, Type } from "@sinclair/typebox";
import { DateTimeSchema } from "../../../schemas";

export const UserModelSchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  email: Type.String(),
  createdAt: DateTimeSchema,
  updatedAt: DateTimeSchema,
});

export type UserModel = Static<typeof UserModelSchema>;