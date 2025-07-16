import ContactForm from "@/pages/ContactPage/components/ContactForm";

export default function Contact() {
  return (
    <section id={"contact"} className="2xl:px-20 2xl:pt-10">
      <div
        className={
          "grid grid-cols-2 rounded-lg overflow-hidden bg-black shadow-lg "
        }
      >
        <div
          className={
            "text-white flex flex-col items-center 2xl:px-20 2xl:py-30"
          }
        >
          <h5 className={"text-3xl"}>Let's Connect</h5>
          <div className={"text-center"}>
            <p className={"2xl:pt-5"}>
              I'd love to hear from you — whether you have a question, want to
              collaborate on a project, or just want to say hello. Please take a
              moment to fill out the contact form, and I'll get back to you as
              soon as I can.
            </p>
            <p className={"2xl:pt-10"}>Looking forward to connecting!</p>
          </div>
        </div>

        {/* Contact form */}
        <div className="h-full bg-white 2xl:px-20 2xl:py-10">
          <h5 className="text-3xl text-center 2xl:pb-8">Contact</h5>
          <ContactForm />
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 pointer-events-none select-none 2xl:p-10">
        <hr className="w-6 border-1 border-black rounded-3xl " />
        <hr className="size-4 border-1 border-midnight-navy rounded-full shrink-0" />
        <hr className="w-6 border-1 border-black rounded-3xl " />
      </div>{" "}
    </section>
  );
}
