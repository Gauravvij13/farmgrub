import { Exception } from './Exception';

export class AuthenticationException extends Exception {
  constructor(message: string = 'Authentication token has expired') {
    super('authentication', { message }, message);
    this.message = message;
  }
}
