export default function ContactFormBanner() {
  return (
    <div
      className={
        "bg-primary-dark text-foreground-secondary flex flex-col items-center 2xl:p-25"
      }
    >
      <p className={"text-3xl"}>Let's Connect</p>
      <div className={"text-center"}>
        <p className={"mt-10"}>
          I'd love to hear from you — whether you have a question, want to
          collaborate on a project, or just want to say hello. Please take a
          moment to fill out the contact form, and I'll get back to you as soon
          as I can.
        </p>
        <p className={"mt-10"}>Looking forward to connecting!</p>
      </div>
    </div>
  );
}
