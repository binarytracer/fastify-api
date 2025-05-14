import { Type } from "@sinclair/typebox";

export const CreateUserSchema = Type.Object(
  {
    name: Type.String(),
    email: Type.String(),
  },
  { additionalProperties: false }
);

export const UserSchema = Type.Object(
  {
    id: Type.String(),
    name: Type.String(),
    email: Type.String(),
  },
  { additionalProperties: false }
);

export const GetUsersResponseSchema = {
  description: "Retrieve a list of users",
  tags: ["Users"],
  response: {
    200: Type.Array(UserSchema),
  },
};
