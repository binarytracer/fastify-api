import { BaseError } from "./base.error";

export class ConflictError extends BaseError {
  constructor(message: string = "Conflict") {
    super(message, 409, "Conflict Error");
  }
}
