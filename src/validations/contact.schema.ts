import z from "zod";

export const schema = z.object({
  firstName: z
    .string({ required_error: "First name is required." })
    .trim()
    .nonempty({ message: "First name cannot be empty." })
    .min(2, "First name must contains at least 2 characters")
    .max(100, "First name must not exceed 100 characters.")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, astrophes, and hyphen"
    )
    .transform((name) => name.charAt(0).toUpperCase() + name.slice(1)),

  lastName: z
    .string({ required_error: "Last name is required." })
    .trim()
    .nonempty({ message: "First name cannot be empty." })
    .min(2, "Last name must contains at least 2 characters")
    .max(100, "Last name must not exceed 100 characters.")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, astrophes, and hyphen"
    )
    .transform((name) => name.charAt(0).toUpperCase() + name.slice(1)),
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .nonempty({ message: "Email cannot be empty." })
    .min(2, "Email must contain at least 2 characters")
    .email("Please enter a valid email address."),
  userMessage: z
    .string({ required_error: "Message is required." })
    .trim()
    .nonempty({ message: "Message cannot be empty." })
    .min(10, { message: "Message must be at least 10 characters." })
    .max(250, { message: "Message must not exceed 250 characters." }),
});

export type FormInput = z.infer<typeof schema>;
