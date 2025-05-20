export function handleError(error: unknown): never {
    if (error instanceof Error) {
        if ('name' in error && error.name === 'TokenExpiredError') {
            throw new Error('jwt expired');
          }
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred");
 }
  