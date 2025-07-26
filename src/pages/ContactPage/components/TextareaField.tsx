import FormFieldError from "@/pages/ContactPage/components/FormFieldError";
import { ReactNode, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type InputFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  charCount: number;
  maxLength?: number;
  error?: FieldError;
  children?: ReactNode;
};

export default function TextareaField({
  id,
  error,
  charCount = 0,
  maxLength = 250,
  children,
  ...props
}: InputFieldProps) {
  return (
    <div className="">
      <label htmlFor={id}>{children}</label>
      <textarea
        id={id}
        maxLength={maxLength}
        className={`contact-form-field resize-none ${
          error && "form-field-error"
        }`}
        {...props}
      />
      <div className="flex justify-between text-foreground-muted">
        <FormFieldError error={error} />
        <span className="text-sm">
          {maxLength - charCount} characters remaining
        </span>
      </div>
    </div>
  );
}
