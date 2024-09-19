import { AppError } from "./appError";

export class DatabaseError extends AppError {
  constructor(message: string, previousError?: Error) {
    super(message, 500, previousError);
  }
}
