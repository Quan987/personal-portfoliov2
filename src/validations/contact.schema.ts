import z from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required." })
    .nonempty({ message: "First name is required." })
    .trim()
    .min(2, "Must be at least 2 characters.")
    .max(100, "Must not exceed 100 characters.")
    .regex(/^[A-Za-z0-9]+$/, "Only letters and numbers allowed.")
    .transform((name) => name.charAt(0).toUpperCase() + name.slice(1)),

  lastName: z
    .string({ required_error: "Last name is required." })
    .nonempty({ message: "Last name is required." })
    .trim()
    .min(2, "Must be at least 2 characters.")
    .max(100, "Must not exceed 100 characters.")
    .regex(/^[A-Za-z0-9]+$/, "Only letters and numbers allowed.")
    .transform((name) => name.charAt(0).toUpperCase() + name.slice(1)),
  email: z
    .string({ required_error: "Email is required." })
    .nonempty({ message: "Email is required." })
    .trim()
    .min(2, "Must be at least 2 characters.")
    .email("Please enter a valid email address."),
  userMessage: z
    .string({ required_error: "Message is required." })
    .nonempty({ message: "Message is required." })
    .trim()
    .min(10, { message: "Must be at least 10 characters." })
    .max(250, { message: "Must not exceed 250 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactFormSchema = typeof contactFormSchema;
