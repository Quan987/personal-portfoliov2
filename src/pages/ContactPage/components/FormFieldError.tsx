import { FieldError } from "react-hook-form";

interface FormError {
  error?: FieldError;
}

export default function FormFieldError({ error }: FormError) {
  return <p className="h-8 text-sm text-secondary-red">{error?.message}</p>;
}
