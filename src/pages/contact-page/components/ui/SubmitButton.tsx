import { getButtonLabel } from "@/pages/contact-page/utils/form-utils";

type SubmitButton = {
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
};

export function SubmitButton({
  isSubmitting,
  isSubmitSuccessful,
}: SubmitButton) {
  return (
    <button
      type="submit"
      disabled={isSubmitting || isSubmitSuccessful} // isSubmitting false and isSubmitSuccessful true make this a true
      className={`btn-primary hover-tilt text-[clamp(0.65rem,0.85vw,1.35rem)] px-[clamp(1.25rem,1.25vw,2rem)] py-[clamp(0.525rem,0.65vw,1.25rem)] mt-[clamp(0.75rem,1.25vw,2.5rem)] ${
        (isSubmitting || isSubmitSuccessful) &&
        "bg-surface border-surface no-interact"
      }`}
    >
      {getButtonLabel(isSubmitting, isSubmitSuccessful)}
    </button>
  );
}
