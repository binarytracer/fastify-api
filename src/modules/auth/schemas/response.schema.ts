import { Static, Type } from "@sinclair/typebox";

export const PostLoginResponseSchema = Type.Object({
  token: Type.String(),
});

export type PostLoginResponse = Static<typeof PostLoginResponseSchema>;

export const PostSignUpResponseSchema = Type.Object({
  message: Type.String(),
  token: Type.String(),
});

export type PostSignUpResponse = Static<typeof PostSignUpResponseSchema>;
