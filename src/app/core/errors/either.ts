export class Success<E, S> {
  readonly value: S;

  constructor(value: S) {
    this.value = value;
  }

  isSuccess(): this is Success<E, S> {
    return true;
  }

  isError(): this is Success<E, S> {
    return false;
  }
}

export class Error<E, S> {
  readonly value: E;

  constructor(value: E) {
    this.value = value;
  }

  isSuccess(): this is Success<E, S> {
    return false;
  }

  isError(): this is Success<E, S> {
    return true;
  }
}

export type Either<E, S> = Success<E, S> | Error<E, S>;

export const success = <E, S>(value: S): Either<E, S> => {
  return new Success(value);
};

export const error = <E, S>(value: S): Either<E, S> => {
  return new Error(value);
};
