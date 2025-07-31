import FormFieldError from "@/pages/contact-page/components/FormFieldError";
import { InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  error?: FieldError;
  children?: ReactNode;
};

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
        className={`contact-form-field ${error && "form-field-error"}`}
        {...props}
      />
      <FormFieldError error={error} />
    </div>
  );
}
