import z from "zod";

export const schema = z.object({
  firstName: z
    .string({ required_error: "First name is required." })
    .trim()
    .nonempty({ message: "First name is required." })
    .min(2, "Must be at least 2 characters.")
    .max(100, "Must not exceed 100 characters.")
    .regex(/^[A-Za-z0-9]+$/, "Only letters and numbers allowed.")
    .transform((name) => name.charAt(0).toUpperCase() + name.slice(1)),

  lastName: z
    .string({ required_error: "Last name is required." })
    .trim()
    .nonempty({ message: "Last name is required." })
    .min(2, "Must be at least 2 characters.")
    .max(100, "Must not exceed 100 characters.")
    .regex(/^[A-Za-z0-9]+$/, "Only letters and numbers allowed.")
    .transform((name) => name.charAt(0).toUpperCase() + name.slice(1)),
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .nonempty({ message: "Email is required." })
    .min(2, "Must be at least 2 characters.")
    .email("Please enter a valid email address."),
  userMessage: z
    .string({ required_error: "Message is required." })
    .trim()
    .nonempty({ message: "Message is required." })
    .min(10, { message: "Must be at least 10 characters." })
    .max(250, { message: "Must not exceed 250 characters." }),
});

export type FormInput = z.infer<typeof schema>;
