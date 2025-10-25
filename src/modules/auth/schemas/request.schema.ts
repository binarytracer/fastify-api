import { Type, Static } from "@sinclair/typebox";

export const PostSignUpSchema = Type.Object({
  email: Type.String(),
  password: Type.String(),
});
export type PostSignUp = Static<typeof PostSignUpSchema>;

export const PostLoginSchema = Type.Object({
  email: Type.String(),
  password: Type.String(),
});
export type PostLogin = Static<typeof PostLoginSchema>;