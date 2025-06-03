import data from "@/data/dataConstants.ts";
import HorizontalLine from "@/components/ui/HorizontalLine";
import EmbeddedLink from "@/components/ui/EmbeddedLink.tsx";
import ParagraphText from "@/components/ui/ParagraphText.tsx";

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

export default function About() {
  return (
    <section id="about" className="relative size-fit">
      <div className="relative size-fit grid grid-cols-2">
        <h1 className="absolute uppercase tracking-wide font-medium 2xl:text-9xl 2xl:right-70 2xl:top-5">
          About Me
        </h1>
        <div className="pointer-none select-none absolute bottom-0 right-0 bg-black h-3 w-30"></div>

        <figure className=" bg-silver w-fit 2xl:h-[45rem] 2xl:pt-30 2xl:px-15">
          <img
            src={data.profileImage.image}
            alt={data.profileImage.alt}
            draggable="false"
            className="block pointer-none select-none h-full"
          />
        </figure>
        <div className="self-center">
          <div className="2xl:pt-25 2xl:pl-40 text-lg text-zinc-500">
            <p className="about-paragraph text-2xl text-black font-medium">
              {data.aboutP1}
            </p>
            <p className="about-paragraph">{data.aboutP2}</p>
            <p className="about-paragraph">{data.aboutP3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
