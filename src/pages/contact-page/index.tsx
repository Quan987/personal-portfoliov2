import ContactForm from "@/pages/contact-page/components/ContactForm";
import ContactFormBanner from "@/pages/contact-page/components/ContactFormBanner";
import { CONTACT } from "@/constants/contact.constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="sm:px-[clamp(0.5rem,calc(5vw_-_1rem),6.25rem)]"
    >
      <div className="shadow-md overflow-hidden rounded-xl h-full grid lg:grid-cols-2">
        <ContactFormBanner
          title={CONTACT.header}
          subheader1={CONTACT.subheader1}
          subheader2={CONTACT.subheader2}
          subheader3={CONTACT.subheader3}
        />
        <ContactForm />
      </div>
    </section>
  );
}
