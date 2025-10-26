import { Static, Type } from "@sinclair/typebox";

export const CreateUserSchema = Type.Object({
  name: Type.String(),
  email: Type.String(),
  password: Type.String(),
});

export type CreateUser = Static<typeof CreateUserSchema>;

export const GetIdSchema = Type.Object({
  id: Type.Number(),
});

export type GetId = Static<typeof GetIdSchema>;

export const UpdateUserSchema = Type.Partial(CreateUserSchema);
export type UpdateUser = Static<typeof UpdateUserSchema>;
