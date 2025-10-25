import {  Type } from "@sinclair/typebox";
import { DateTimeSchema } from "../../../schemas";
import { UserModelSchema } from "./model";

export const CreateResponseSchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  email: Type.String(),
  createdAt: DateTimeSchema,
  updatedAt: DateTimeSchema,
});

export const GetUsersResponseSchema = Type.Array(UserModelSchema);
export const GetUserResponseSchema = UserModelSchema;
