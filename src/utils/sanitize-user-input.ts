import { FormInput } from "@/validations/contact.schema";

// export function escapeHTML(str: string): string {
//   return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
// }

/**
 * Escapes `<` and `>` characters in every string field of a form input object.
 *
 * @param data - An FormInput object containing user-provided string fields.
 * @returns A new FormInput object with escaped HTML characters in all fields.
 */
export function escapeHTML(data: FormInput) {
  const escaped = {} as FormInput;

  for (const [key, value] of Object.entries(data)) {
    escaped[key as keyof FormInput] = value
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  return escaped;
}
