import data from "@/data/data-constants";
import useShuffleSkills from "@/hooks/useShuffleSkills";
import MarqueeLeftScroll from "@/components/MarqueeLeftScroll";
import MarqueeRightScroll from "@/components/MarqueeRightScroll";
import {DataSkill} from "@/types/data.ts";


export default function Home() {
    const skillSet: DataSkill[][] = useShuffleSkills(data.skills, 3)
    
    return (
        <section id="home" className="grid grid-cols-2 gap-20 py-35">
            <div className={"justify-items-start"}>
                <div className="text-pretty h-full">
                    <h2 className="font-bold text-[2.6rem] xl:text-[4rem] leading-13 xl:leading-18">
                        I Build What You Imagine —{" "}
                        <span className={"text-orange-500"}>Right in the Browser.</span>
                    </h2>
                    <p className={"py-5 xl:py-7 text-black/60 leading-7"}>{data.heroHeadline}</p>

                    <a
                        href={"#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="hover-tilt inline-block uppercase bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 text-sm px-10 py-3.5 rounded-md border-1"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>


            <div className={"relative"}>
                <div className={"h-full overflow-hidden flex flex-col "}>
                    {skillSet.map((skills, index) =>
                        index % 2 === 0 ? (
                            <MarqueeLeftScroll key={index} skills={skills} />
                        ) : (
                            <MarqueeRightScroll key={index} skills={skills} />
                        )
                    )}
                </div>

                <p className={"absolute -bottom-7 right-0 uppercase font-bold tracking-widest text-black/60 text-sm"}>Technic<span
                    className="relative bottom-[1px]">@</span>l Skills</p>
            </div>
        </section>
    );
}

// bg-[url('./assets/images/background/polygon.svg')]
// shadow-[1.3rem_1.3rem_1.3rem_-0.625rem_rgba(0,0,0,0.2)]

//
// <figure className="hover-scale w-fit">
//     <div className={"relative"}>
//         <img
//             loading="lazy"
//             src={data.actionFigure}
//             alt="actionFigure"
//             draggable={false}
//             className="object-contain cursor-pointer block w-xs xl:w-[25rem] rounded-[2rem] shadow-xl"
//         />
//         <p className={"tracking-wider absolute bottom-6 left-0 -rotate-90 origin-bottom-left"}>Limited
//             Edition:
//             Overthinking Included</p>
//     </div>
// </figure>