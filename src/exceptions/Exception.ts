export class Exception<T = any> {
  constructor(eventName: string, detail: T, message?: string) {
    this.message = message;
    window.dispatchEvent(new CustomEvent(`${eventName}exception`, { detail }));
  }

  message?: string;

  public toString() {
    return this.message;
  }
}
