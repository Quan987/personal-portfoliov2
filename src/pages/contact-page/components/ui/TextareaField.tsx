import FormFieldError from "@/pages/contact-page/components/ui/FormFieldError";
import { TEXTAREA_MAX_LENGTH } from "@/pages/contact-page/constants/contact.config.constants";
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
  maxLength = TEXTAREA_MAX_LENGTH,
  children,
  ...props
}: InputFieldProps) {
  return (
    <div className="text-[clamp(0.75rem,0.85vw,2rem)]">
      <label htmlFor={id} className="hover:cursor-pointer">
        {children}
      </label>
      <textarea
        id={id}
        maxLength={maxLength}
        className={`contact-form-field resize-none ${
          error && "form-field-error"
        }`}
        {...props}
      />
      <div className="flex justify-between text-muted-text">
        <FormFieldError error={error} />
        <span className="text-[0.65rem] md:text-xs 2xl:text-sm 4xl:text-lg">
          {maxLength - charCount} characters remaining
        </span>
      </div>
    </div>
  );
}
