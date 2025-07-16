// import data from "@/data/dataIndex";
import Navbutton from "@/components/ui/Navbutton";
import { HERO } from "@/pages/HomePage/home.constants";

export default function Home() {
  return (
    <section id="home" className="2xl:pt-10">
      <div className="size-full grid grid-cols-2 2xl:gap-20">
        <div className="flex flex-col gap-12 2xl:p-10">
          <h1 className="2xl:text-7xl 2xl:leading-21 font-medium">
            {HERO.title}
          </h1>
          <div className="flex flex-col gap-10 2xl:pr-30">
            <p className="text-pretty text-lg text-zinc-500">{HERO.subtitle}</p>
            <Navbutton link="/contact" cssClass="2xl:px-7 2xl:py-3">
              Get in Touch
            </Navbutton>
          </div>
        </div>
        <div className="self-center size-full">
          <img
            src={HERO.illustration.image}
            alt={HERO.illustration.alt}
            draggable={false}
            loading="lazy"
            className="animate-float size-full"
          />
        </div>
      </div>
    </section>
  );
}

// export default function Home() {
//     // const skillSet: DataSkill[][] = useShuffleSkills(data.skills, 3)

//     // function handleClick(event: MouseEvent<HTMLButtonElement>) {
//     //     event.preventDefault();
//     //     event.stopPropagation();
//     //     document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
//     // }

//     return (
// <section id="home" className="grid grid-cols-2 2xl:gap-20 scroll-mt-35 py-20">
//     <div className={"flex flex-col justify-between"}>
//            <div>
//                <h1 className="font-bold 2xl:text-[3.5rem] 2xl:leading-17">
//                    I'm <span className={"text-beige underline underline-offset-10"}>Quan Tran,</span>
//                    {" "}I Build What You Imagine —{" "} Right in the Browser.
//                </h1>
//                <p className={"2xl:py-5 2xl:text-lg text-neutral-500 leading-7"}>{data.heroHeadline}</p>
//            </div>
//             {/*<Button onClick={handleClick}>*/}
//             {/*    Get In Touch*/}
//             {/*</Button>*/}
//     </div>
//
//     <figure className="w-full h-full justify-items-center animate-banner">
//         <div className={"w-fit relative"}>
//             <img
//                 loading="lazy"
//                 src={data.actionFigure}
//                 alt="actionFigure"
//                 draggable={false}
//                 className="inline-block object-contain cursor-pointer w-xs 2xl:w-[30rem] rounded-[2rem] drop-shadow-2xl"
//             />
//             <p className={"tracking-wider absolute bottom-7 right-0 rotate-90 origin-bottom-right text-black/60 text-sm"}>Limited Edition: Overthinking Included</p>
//         </div>
//     </figure>
//
//
//
// </section>

//         <section></section>
//     );
// }

// bg-[url('./assets/images/background/polygon.svg')]
// shadow-[1.3rem_1.3rem_1.3rem_-0.625rem_rgba(0,0,0,0.2)]

{
  /*<div className={"relative"}>*/
}
{
  /*    <div className={"h-full overflow-hidden flex flex-col mask-x-from-95% mask-x-to-100%"}>*/
}
{
  /*        {skillSet.map((skills, index) =>*/
}
{
  /*            index % 2 === 0 ? (*/
}
{
  /*                <MarqueeLeftScroll key={`leftMarquee${index}`} skills={skills} />*/
}
{
  /*            ) : (*/
}
{
  /*                <MarqueeRightScroll key={`rightMarquee${index}`} skills={skills} />*/
}
{
  /*            )*/
}
{
  /*        )}*/
}
{
  /*    </div>*/
}

{
  /*    <p className={"absolute -bottom-7 right-0 uppercase font-bold tracking-widest text-black/60 text-sm"}>Technic<span*/
}
{
  /*        className="relative bottom-[1px]">@</span>l Skills</p>*/
}
{
  /*</div>*/
}
