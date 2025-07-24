import FormFieldError from "@/pages/ContactPage/components/FormFieldError";
import { ReactNode, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  error?: FieldError;
  children?: ReactNode;
}

export default function TextareaField({
  id,
  error,
  children,
  ...props
}: InputFieldProps) {
  return (
    <div className="">
      <label htmlFor={id}>{children}</label>
      <textarea
        id={id}
        className={`contact-form-field resize-none ${
          error && "border-secondary-red focus-within:outline-secondary-red"
        }`}
        {...props}
      />
      <FormFieldError error={error} />
    </div>
  );
}
