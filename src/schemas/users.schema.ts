import { Type } from "@sinclair/typebox";

export const CreateUserSchema = Type.Object(
  {
    name: Type.String(),
    email: Type.String(),
    password: Type.String(),
  },
  { additionalProperties: false }
);

export const UserSchema = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    email: Type.String(),
    createdAt: Type.String({ format: "date-time" }),
    updatedAt: Type.String({ format: "date-time" }),
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
