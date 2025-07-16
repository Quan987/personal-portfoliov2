import { ReactNode } from "react";

interface FormError {
  children?: ReactNode;
}

function FormInputError({ children }: FormError) {
  return <p className="text-red-500 2xl:text-sm mt-0">{children}</p>;
}

export default FormInputError;
