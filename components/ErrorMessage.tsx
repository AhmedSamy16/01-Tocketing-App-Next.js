const ErrorMessage = ({ message }: { message?: string }) => {
  return !message ? null : <p className="text-red-400 mt-2">*{message}</p>;
};

export default ErrorMessage;
