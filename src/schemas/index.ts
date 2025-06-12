import { Static, Type } from "@sinclair/typebox";

export * from "./environment.schema";

export const UUIDSchema = Type.String({ format: "uuid" });

export const GetOneSchema = Type.Object({
  id: Type.Number(),
});
export type GetOneSchemaType = Static<typeof GetOneSchema>;

export const DateSchema = Type.String({ format: "date" });
export const DateTimeSchema = Type.String({ format: "date-time" });

export const PaginationSchema = Type.Object({
  page: Type.Number({ default: 1 }),
  limit: Type.Number({ default: 10 }),
});
