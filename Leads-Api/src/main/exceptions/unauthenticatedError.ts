import { AppError } from "./index";

export class UnauthenticatedError extends AppError {
  constructor(message: string = "Unauthorized.") {
    super(message, 401);
  }
}
