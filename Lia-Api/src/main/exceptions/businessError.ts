import { AppError } from "./index";

export class BusinessError extends AppError {
  private appInternalCode: number;

  constructor(message: string, appInternalCode: number) {
    super(message, 400);
    this.appInternalCode = appInternalCode;
  }

  public getAppInternalCode() {
    return this.appInternalCode;
  }
}
