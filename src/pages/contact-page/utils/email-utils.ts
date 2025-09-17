import { sanitizeData } from "@/pages/contact-page/utils/form-utils";
import { delay } from "@/utils/time-utils";
import emailjs from "@services/emailjs.service";
import { type EmailJSResponseStatus } from "@emailjs/browser";
import { type ContactFormValues } from "@validations/contact.schema";

import {
  EMAIL_INITIAL_DELAY_MS,
  EMAIL_RETRY_COUNT,
  EMAIL_RETRY_DELAY_MS,
} from "@/pages/contact-page/configs/contact.config.constants";
import { HTTP_STATUS } from "@/constants/http.constants";

type SendMailResponseType = {
  success: boolean;
  text: string;
};

async function retry<T>(
  fn: () => Promise<T>,
  retries: number = EMAIL_RETRY_COUNT,
  delayMs: number = EMAIL_RETRY_DELAY_MS
): Promise<T> {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries)
        throw new Error("Exceeds attempt limit. All retries failed.");
      await delay(delayMs);
      delayMs *= 2;
      attempt++;
    }
  }
  // unreachable, but satisfies TypeScript promise resolve
  throw new Error("Retry failed unexpectedly");
}

export async function sendEmail(
  data: ContactFormValues
): Promise<SendMailResponseType> {
  const serviceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!serviceID || !templateID) {
    return {
      success: false,
      text: "Missing EmailJS configuration. Please try again later.",
    };
  }

  await delay(EMAIL_INITIAL_DELAY_MS);
  const sanitizedData = sanitizeData<ContactFormValues>(data);

  try {
    const response = await retry<EmailJSResponseStatus>(() =>
      emailjs.send(serviceID, templateID, sanitizedData)
    );
    if (response.status !== HTTP_STATUS.OK) {
      throw new Error(
        `EmailJS service responded with an error: ${response.text}. Please try again later.`
      );
    }

    return {
      success: true,
      text: "Inquiry submitted successfully!",
    };
  } catch (error) {
    const msg =
      error instanceof Error // error instanceof Error mean we are the one who throw it
        ? error.message // This becomes: "Email service responded with an error if response.status is not 200"
        : "Failed to submit request. Please try again later."; // Use for something goes wrong in an unexpected way like network fail (e.g., a throw "Oops!" or throw null)
    return {
      success: false,
      text: msg,
    };
  }
}
