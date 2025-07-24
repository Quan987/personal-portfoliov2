import ContactForm from "@/pages/ContactPage/components/ContactForm";
import ContactFormBanner from "@/pages/ContactPage/components/ContactFormBanner";

export default function Contact() {
  return (
    <section id={"contact"} className="">
      <div className="grid grid-cols-2 shadow-lg 2xl:mx-20 overflow-hidden rounded-md">
        <ContactFormBanner />
        <ContactForm />
      </div>
    </section>
  );
}
