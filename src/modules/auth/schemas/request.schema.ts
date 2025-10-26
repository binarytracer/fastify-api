import { Type, Static } from "@sinclair/typebox";

export const PostSignUpReqSchema = Type.Object({
  email: Type.String({ format: "email" }),
  name: Type.String({ minLength: 5 }),
  password: Type.String(),
});
export type PostSignUpReq = Static<typeof PostSignUpReqSchema>;

export const PostLoginSchema = Type.Object({
  email: Type.String({ format: "email" }),
  password: Type.String({ minLength: 4 }),
});
export type PostLogin = Static<typeof PostLoginSchema>;
