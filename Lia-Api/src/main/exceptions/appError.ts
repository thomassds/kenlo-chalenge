export class AppError extends Error {
  protected statusCode: number;
  protected previousError?: Error;

  constructor(message: string, statusCode: number, previousError?: Error) {
    super(message);
    this.statusCode = statusCode;
    this.previousError = previousError;
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public getPrevious() {
    return this.previousError;
  }
}
