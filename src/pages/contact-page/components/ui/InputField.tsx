import FormFieldError from "@/pages/contact-page/components/ui/FormFieldError";
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
    <div className="text-[clamp(0.75rem,0.85vw,2rem)]">
      <label htmlFor={id} className="hover:cursor-pointer">
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
