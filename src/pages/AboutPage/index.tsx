// export default function About() {
//   return (
//     <section id="about" className="py-35 scroll-m-12 bg">
//       <div className="flex flex-col items-center justify-center gap-3 py-15">
//         <h2 className="uppercase font-bold tracking-wider shrink-0 text-3xl">
//           About Me
//         </h2>
//         <HorizontalLine lineWidth={"w-8"} />
//       </div>

//       <div className="grid grid-cols-2 relative py-10 bg-silver">
//         <div className="corner-top-left pointer-events-none select-none" />
//         <div className="corner-bottom-right pointer-events-none select-none" />

//         <div className="justify-items-end 2xl:pl-15">
//           <ParagraphText text={data.aboutP1} className={"about-text"} />
//           <ParagraphText text={data.aboutP2} className={"about-text"} />
//           <ParagraphText text={data.aboutP3} className={"about-text"}>
//             Let’s connect—follow me on{" "}
//             <EmbeddedLink link={""} title="Linkedin" /> or{" "}
//             <EmbeddedLink link={""} title="Instagram" /> to stay in touch!
//           </ParagraphText>
//         </div>
//         <figure className="w-fit h-full justify-items-center bg-silver p-4 rounded-2xl">
//           <div className={"hover-scale w-fit relative"}>
//             <img
//               loading="lazy"
//               // src={data.actionFigure}
//               alt="actionFigure"
//               draggable={false}
//               className="inline-block object-contain cursor-pointer w-xs 2xl:w-[23rem] rounded-[2rem] drop-shadow-2xl"
//             />
//             <p
//               className={
//                 "tracking-wider absolute bottom-7 right-0 rotate-90 origin-bottom-right text-black/60 text-sm"
//               }
//             >
//               Limited Edition: Overthinking Included
//             </p>
//           </div>
//         </figure>
//       </div>
//     </section>
//   );
// }

import { ABOUT } from "@/pages/AboutPage/about.constants";
import AboutBanner from "@/pages/AboutPage/components/AboutBanner";
import AboutContent from "@/pages/AboutPage/components/AboutContent";

export default function About() {
  return (
    <section id="about" className="">
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
