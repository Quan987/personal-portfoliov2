import { ABOUT } from "@/pages/about-page/about.constants";
import AboutBanner from "@/pages/about-page/components/AboutBanner";
import AboutContent from "@/pages/about-page/components/AboutContent";

export function About() {
  return (
    <section id="about">
      <div className="relative size-fit grid grid-cols-2">
        <AboutBanner header={ABOUT.header} illustration={ABOUT.illustration} />
        <AboutContent
          subheader1={ABOUT.subheader1}
          subheader2={ABOUT.subheader2}
          subheader3={ABOUT.subheader3}
          skillsIcon={ABOUT.skillIcons}
        />
      </div>
    </section>
  );
}
