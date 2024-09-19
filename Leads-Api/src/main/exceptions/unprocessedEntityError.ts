import { AppError } from "./index";

export class UnprocessedEntityError extends AppError {
  private errors: string[];

  constructor(errors: string[]) {
    super("", 422);
    this.errors = errors || [];
  }

  getErrors() {
    return this.errors;
  }
}
