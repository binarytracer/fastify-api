import { Static, Type } from "@sinclair/typebox";

export const JwtTokenPayloadSchema = Type.Object({
  userId: Type.Number(),
  email: Type.String(),
});

export type JwtTokenPayload = Static<typeof JwtTokenPayloadSchema>;
