interface FormStatusMessageProps {
  success?: boolean;
  error?: string;
}

export default function FormStatusMessage({
  success,
  error,
}: FormStatusMessageProps) {
  return (
    <p
      className={`${error && "text-red-500"} ${
        success && "text-blue-500"
      } mt-4 2xl:text-md `}
    >
      {error}
      {success && "Inquiry submitted successfully!"}
    </p>
  );
}
