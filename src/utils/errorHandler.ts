// Error handling utilities

export const ErrorTypes = {
  NOT_FOUND: 'NOT_FOUND',
  SERVER_ERROR: 'SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN: 'UNKNOWN'
} as const;

export type ErrorType = typeof ErrorTypes[keyof typeof ErrorTypes];

export const getErrorType = (error: any): ErrorType => {
  if (error?.status === 404 || error?.response?.status === 404) {
    return ErrorTypes.NOT_FOUND;
  }
  
  if (error?.status >= 500 || error?.response?.status >= 500) {
    return ErrorTypes.SERVER_ERROR;
  }
  
  if (error?.code === 'NETWORK_ERROR' || !navigator.onLine) {
    return ErrorTypes.NETWORK_ERROR;
  }
  
  return ErrorTypes.UNKNOWN;
};

export const handleError = (error: any) => {
  const errorType = getErrorType(error);
  
  switch (errorType) {
    case ErrorTypes.SERVER_ERROR:
      // Redirect to server error page
      window.location.href = '/server-error';
      break;
    case ErrorTypes.NOT_FOUND:
      // Stay on 404 page (handled by catch-all route)
      break;
    case ErrorTypes.NETWORK_ERROR:
      // Redirect to server error page for network issues
      window.location.href = '/server-error';
      break;
    default:
      // Default to 404 page
      break;
  }
};

// Global error handler for unhandled errors
export const setupGlobalErrorHandler = () => {
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    handleError(event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    handleError(event.reason);
  });
};

