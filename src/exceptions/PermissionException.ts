import { Exception } from './Exception';

export class PermissionException extends Exception {
  constructor(
    message: string = 'This account does not have sufficient permissions to complete the requested action',
  ) {
    super('permission', { message }, message);
    this.message = message;
  }
}
