import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/validations/contact.schema";
import { sendEmail } from "@/pages/contact-page/utils/email-utils";
import InputField from "@/pages/contact-page/components/ui/InputField";
import StatusModal from "@/pages/contact-page/components/ui/StatusModal";
import TextareaField from "@/pages/contact-page/components/ui/TextareaField";
import { SubmitButton } from "@/pages/contact-page/components/ui/SubmitButton";
import { useContactForm } from "@/pages/contact-page/hooks/useContactForm";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    // errors: show zod validation error before submit, isSubmit: true while onSubmit function is running, isSubmitSuccessful: true after a successful submit where onSubmit does not throw
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useContactForm(contactFormSchema);

  const [modalState, setModalState] = useState({
    open: false,
    success: false,
    message: "",
  });

  async function onSubmit(data: ContactFormValues) {
    // await delay(2000);
    // console.log(sanitizeData<ContactFormValues>(data));
    // const result = {
    //   success: false,
    //   text: "Inquiry submit successful",
    // };

    const result = await sendEmail(data);
    if (!result.success) {
      setError("root.apiError", {
        // prevents RHF marking form submission successful
        type: "apiError",
        message: result.text,
      });

      setModalState({
        open: true,
        success: false,
        message: `Error submitting: ${result.text}`,
      });
      return;
    }
    setModalState({
      open: true,
      success: true,
      message: result.text,
    });
  }

  return (
    <div
      id="contact-form"
      className="bg-light rounded-xl px-[clamp(2rem,calc(5vw_-_1rem),6.25rem)] py-[clamp(1.25rem,2vw,3.75rem)]"
    >
      <p className="text-center text-[clamp(1.125rem,1.5vw,2.5rem)] pb-[clamp(0.625rem,1.25vw,3rem)]">
        Contact
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className={"md:grid md:grid-cols-2 md:gap-6 4xl:gap-8"}>
          <InputField
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="John"
            error={errors.firstName}
            {...register("firstName")}
          >
            First Name
          </InputField>

          <InputField
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Doe"
            error={errors.lastName}
            {...register("lastName")}
          >
            Last Name
          </InputField>
        </div>

        <InputField
          id="email"
          type="email"
          autoComplete="email"
          placeholder="johndoe@example.com"
          error={errors.email}
          {...register("email")}
        >
          Email Address
        </InputField>

        <TextareaField
          id="userMessage"
          rows={6}
          placeholder="Please enter your message here."
          charCount={(watch("userMessage") || "").length}
          error={errors.userMessage}
          {...register("userMessage")}
        >
          Message
        </TextareaField>

        <SubmitButton
          isSubmitting={isSubmitting}
          isSubmitSuccessful={isSubmitSuccessful}
        />
      </form>

      {modalState.open && (
        <StatusModal
          success={modalState.success}
          message={modalState.message}
          onClose={() =>
            setModalState({
              open: false,
              success: false,
              message: "",
            })
          }
          onSuccessClose={reset}
        />
      )}
    </div>
  );
}
