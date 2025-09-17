import { FORM_ERROR_DELAY_MS } from "@/pages/contact-page/configs/contact.config.constants";
import {
  type ContactFormSchema,
  type ContactFormValues,
} from "@/validations/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useContactForm(schema: ContactFormSchema) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    delayError: FORM_ERROR_DELAY_MS,
    reValidateMode: "onBlur",
  });

  return form;
}
