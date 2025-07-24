import FormInputError from "@/pages/ContactPage/components/FormInputError";
import { InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: FieldError;
  children?: ReactNode;
}

export default function InputField({
  id,
  error,
  children,
  ...props
}: InputFieldProps) {
  return (
    <div className="">
      <label htmlFor={id} className="">
        {children}
      </label>
      <input
        id={id}
        className={`contact-form-field ${
          error && "border-secondary-red focus-within:outline-secondary-red"
        }`}
        {...props}
      />
      <FormInputError error={error} />
    </div>
  );
}
