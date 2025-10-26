export interface CustomError extends Error {
  statusCode: number;
  name: string;
}

export abstract class BaseError extends Error implements CustomError {
  public readonly statusCode: number;
  public readonly name: string;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, name: string, isOperational: boolean = true) {
    super(message);

    this.statusCode = statusCode;
    this.name = name;
    this.isOperational = isOperational;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
