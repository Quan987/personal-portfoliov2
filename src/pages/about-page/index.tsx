import { ABOUT } from "@/constants/about.constants";
import AboutBanner from "@/pages/about-page/components/AboutBanner";
import AboutContent from "@/pages/about-page/components/AboutContent";

export default function About() {
  return (
    <section id="about">
      <div className="lg:grid lg:grid-cols-2">
        <AboutBanner header={ABOUT.header} illustration={ABOUT.illustration} />
        <AboutContent
          subheader={ABOUT.subheader}
          skillsIcon={ABOUT.skillIcons}
        />
      </div>
    </section>
  );
}
