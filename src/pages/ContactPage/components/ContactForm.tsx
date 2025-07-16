import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputError from "./FormInputError";
import { useEffect } from "react";
import FormStatusMessage from "./FormStatusMessage";
import { delay } from "@utils/delay";
import {
  FormInput,
  schema as contactSchema,
} from "@validations/contact.schema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    // errors: show zod validation error before submit, isSubmit: true while onSubmit function is running, isSubmitSuccessful: true after a successful submit where onSubmit does not throw
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInput>({
    resolver: zodResolver(contactSchema),
    mode: "all",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log("SUbmit successful");
      const timeOut = setTimeout(reset, 20000);
      return () => clearTimeout(timeOut);
    }
  }, [isSubmitSuccessful]);

  async function onSubmit(data: FormInput) {
    try {
      await delay(2000);
      // const result = await sendEmail(data);
      const result = {
        success: false,
        message: "Testing",
      };

      throw new Error("Testing the exception");

      console.log(data);
      if (!result.success) {
        setError("root.exception", {
          type: "sendEmailError",
          message: result.message,
        });
        return;
      }
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Something went wrong."; //error instanceof Error meaning the Error we throw (ie: throw new Error...)
      setError("root.exception", {
        type: "exception",
        message: msg,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"grid grid-cols-2 gap-6"}>
        <div className="">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="John"
            {...register("firstName")}
            className={
              errors.firstName
                ? "focus-within:outline-red-500 border-red-500"
                : ""
            }
          />
          {errors.firstName && (
            <FormInputError>{errors.firstName.message}</FormInputError>
          )}
        </div>

        <div className="">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Doe"
            {...register("lastName")}
            className={
              errors.lastName
                ? "focus-within:outline-red-500 border-red-500"
                : ""
            }
          />
          {errors.lastName && (
            <FormInputError>{errors.lastName.message}</FormInputError>
          )}
        </div>
      </div>

      <div className={errors.email ? "mt-3" : "mt-4"}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          autoComplete="email"
          placeholder="johndoe@example.com"
          {...register("email")}
          className={
            errors.email ? "focus-within:outline-red-500 border-red-500" : ""
          }
        />
        {errors.email && (
          <FormInputError>{errors.email.message}</FormInputError>
        )}
      </div>

      <div className={errors.userMessage ? "mt-3" : "mt-4"}>
        <label htmlFor="userMessage">Message</label>
        <textarea
          id="userMessage"
          rows={6}
          placeholder="Please enter your message here. Maximum 250 characters."
          {...register("userMessage")}
          className={`resize-none ${
            errors.userMessage
              ? "focus-within:outline-red-500 border-red-500"
              : ""
          }`}
        />
        {errors.userMessage && (
          <FormInputError>{errors.userMessage.message}</FormInputError>
        )}
      </div>

      <button
        type="submit"
        // isSubmitting false and isSubmitSuccessful true make this a true
        disabled={isSubmitting || isSubmitSuccessful}
        onClick={() => console.log("Clicked")}
        className="w-fit bg-black text-white text-md rounded-md border-1 border-black transition-all duration-200 hover:-translate-1 hover:bg-white hover:text-black mt-8 2xl:px-10 2xl:py-2.5"
        style={{
          backgroundColor: isSubmitting || isSubmitSuccessful ? "#FF0000" : "",
        }}
      >
        {isSubmitting ? "Submitting..." : "Send Message"}
      </button>

      <FormStatusMessage
        error={errors.root?.exception.message}
        success={isSubmitSuccessful}
      />
    </form>
  );
}

{
  /* <input
            id="firstName"
            type="text"
            placeholder="John"
            {...register("firstName", { 
              // required: "First name is required.",
              // maxLength: {
              //   value: 100,
              //   message: "First name must not exceed 100 characters.",
              // },
              // pattern: {
              //   value: /^[a-zA-Z\s'-]+$/,
              //   message:
              //     "First name can only contain letters, spaces, astrophes, and hyphen",
              // },
              // validate: (val) => {
              //   if (!val.includes("name")) {
              //     return "Val must return a name";
              //   }
              //   return true;
              // },
          //   })}
          //   className={"2xl:my-[0.25rem]"}
          // />
          */
}
