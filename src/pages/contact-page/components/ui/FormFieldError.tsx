import { FieldError } from "react-hook-form";

type FormError = {
  error?: FieldError;
};

export default function FormFieldError({ error }: FormError) {
  return (
    <p className="text-error h-[clamp(1.25rem,1.45vw,2rem)] text-[clamp(0.65rem,0.75vw,1.125rem)]">
      {error?.message}
    </p>
  );
}
