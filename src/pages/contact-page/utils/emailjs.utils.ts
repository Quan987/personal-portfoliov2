import { escapeHTML } from "@/utils/sanitize-user-input";
import emailjs from "@services/emailjs.service";
import { FormInput } from "@validations/contact.schema";

export type SendMailResponseType = {
  success: boolean;
  message: string;
};

export async function sendEmail(
  data: FormInput
): Promise<SendMailResponseType> {
  const serviceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!serviceID || !templateID) {
    return {
      success: false,
      message: "Missing EmailJS configuration. Please try again later.",
    };
  }

  const sanitizedData = escapeHTML(data);

  console.log(sanitizedData);

  try {
    const response = await emailjs.send(serviceID, templateID, sanitizedData);
    if (response.status !== 200) {
      throw new Error(
        `EmailJS service responded with an error: ${response.text}. Please try again later.`
      );
    }

    return {
      success: true,
      message: "Inquiry submitted successfully!",
    };
  } catch (error) {
    const msg =
      error instanceof Error && error.message // error instanceof Error mean we are the one who throw it
        ? error.message // This becomes: "Email service responded with an error if response.status is not 200"
        : "Failed to submit request. Please try again later."; // Use for something goes wrong in an unexpected way like network fail (e.g., a throw "Oops!" or throw null)
    return {
      success: false,
      message: msg,
    };
  }
}
