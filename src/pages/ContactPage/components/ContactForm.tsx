import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { delay } from "@utils/delay";
import {
  FormInput,
  schema as contactSchema,
} from "@validations/contact.schema";
import InputField from "@/pages/ContactPage/components/InputField";
import TextareaField from "@/pages/ContactPage/components/TextareaField";
import { sendEmail } from "@/pages/ContactPage/utils/emailjs.utils";
import StatusModal from "@/components/ui/StatusModal";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    // errors: show zod validation error before submit, isSubmit: true while onSubmit function is running, isSubmitSuccessful: true after a successful submit where onSubmit does not throw
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInput>({
    resolver: zodResolver(contactSchema),
    mode: "all",
  });

  const [modalState, setModalState] = useState({
    open: false,
    success: false,
    message: "",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timeOut = setTimeout(reset, 2000);
      return () => clearTimeout(timeOut);
    }
  }, [isSubmitSuccessful]);

  async function onSubmit(data: FormInput) {
    await delay(2000);
    // const result = await sendEmail(data);
    console.log(data);
    const result = {
      success: false,
      message: "Inquiry submit successful",
    };

    if (!result.success) {
      setError("root.apiError", {
        // prevents RHF marking successful
        type: "apiError",
        message: result.message,
      });

      setModalState({
        open: true,
        success: false,
        message: `Error submitting: ${result.message}`,
      });
      return;
    }
    setModalState({
      open: true,
      success: true,
      message: result.message,
    });
  }

  function getButtonLabel(): string {
    if (isSubmitting) return "Submitting...";
    if (isSubmitSuccessful) return "Resetting...";
    return "Send Message";
  }

  return (
    <div id="contact-form" className="bg-primary-light h-full px-20 py-10">
      <p className="text-3xl text-center pb-10">Contact</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"grid grid-cols-2 gap-6"}>
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

        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful} // isSubmitting false and isSubmitSuccessful true make this a true
          className={`w-fit bg-primary-dark text-foreground-secondary rounded-md border-1 border-primary-dark hover-tilt hover:-translate-y-1 hover:translate-x-1 hover:bg-primary-light hover:text-foreground-primary text-md mt-5 px-9 py-3 ${
            (isSubmitting || isSubmitSuccessful) &&
            "bg-secondary-surface border-secondary-surface pointer-events-none select-none"
          }`}
        >
          {getButtonLabel()}
        </button>
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
        />
      )}
    </div>
  );
}
