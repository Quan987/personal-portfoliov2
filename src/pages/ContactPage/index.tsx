import ContactForm from "@/pages/ContactPage/components/ContactForm";
import ContactFormBanner from "@/pages/ContactPage/components/ContactFormBanner";
import { CONTACT } from "@/pages/ContactPage/contact.constants";

export function Contact() {
  return (
    <section id="contact">
      <div className="grid grid-cols-2 shadow-lg 2xl:mx-20 overflow-hidden rounded-md">
        <ContactFormBanner
          title={CONTACT.header}
          subheader1={CONTACT.subheader1}
          subheader2={CONTACT.subheader2}
        />
        <ContactForm />
      </div>
    </section>
  );
}
