import ContactForm from "@/pages/ContactPage/components/ContactForm";
import ContactFormBanner from "@/pages/ContactPage/components/ContactFormBanner";

export default function Contact() {
  return (
    <section id={"contact"} className="">
      <div className="grid grid-cols-2 rounded-lg shadow-lg 2xl:mx-20">
        <ContactFormBanner />
        <ContactForm />
      </div>
    </section>
  );
}
