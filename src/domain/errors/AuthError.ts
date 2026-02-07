export enum AuthErrorKind {
  USER_NOT_FOUND,
  INVALID_PASSWORD,
  USER_ALREADY_EXISTS,
  UNKNOWN_ERROR,
}

export class AuthError extends Error {
  kind: AuthErrorKind;

  constructor(kind: AuthErrorKind, message?: string) {
    super(message);
    this.kind = kind;
  }
}