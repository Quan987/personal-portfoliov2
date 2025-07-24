import ContactForm from "@/pages/ContactPage/components/ContactForm";
import ContactFormBanner from "@/pages/ContactPage/components/ContactFormBanner";

export default function Contact() {
  return (
    <section id={"contact"} className="2xl:px-20">
      <div className="grid grid-cols-2 rounded-lg bg-primary-dark shadow-lg">
        <ContactFormBanner />
        <ContactForm />
      </div>
      {/* <ContactFormDecoration /> */}
    </section>
  );
}
