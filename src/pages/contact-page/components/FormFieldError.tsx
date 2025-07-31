import { FieldError } from "react-hook-form";

type FormError = {
  error?: FieldError;
};

export default function FormFieldError({ error }: FormError) {
  return <p className="h-8 text-sm text-status-error">{error?.message}</p>;
}
