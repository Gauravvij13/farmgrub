export interface IServerError {
  statusCode: number;
  message: string;
}

type ErrorType = Partial<IServerError>;

export class ServerException extends Error {
  constructor({ statusCode, message }: ErrorType) {
    super(message);

    this.message = message || 'An unknown error occurred';
    this.status = statusCode || 520;
  }

  public status: number;

  public message: string;

  public toString() {
    return `${this.status}: ${this.message}`;
  }
}
