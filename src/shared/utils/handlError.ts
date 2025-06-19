export function handleError(error: unknown): never {
    if (error instanceof Error) {
        if ('name' in error && error.name === 'TokenExpiredError') {
            throw new Error('jwt expired');
          }
           // Mongoose buffering timeout or not connected
    if (
      error.message.includes('buffering timed out') ||
      error.message.includes('failed to connect to server') ||
      error.message.includes('MongooseServerSelectionError') ||
      error.message.includes('MongoNetworkError')
    ) {
      throw new Error('Service is temporarily unavailable. Please try again later.');
    }
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred");
 }
  