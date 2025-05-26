import data from "@/data/dataConstants.ts";
import useShuffleSkills from "@/hooks/useShuffleSkills";
import MarqueeLeftScroll from "@/components/MarqueeLeftScroll";
import MarqueeRightScroll from "@/components/MarqueeRightScroll";
import {DataSkill} from "@/types/data";
import Button from "@/components/ui/Button.tsx";
import {MouseEvent} from "react";


export default function Home() {
    const skillSet: DataSkill[][] = useShuffleSkills(data.skills, 3)

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
    }
    
    return (
        <section id="home" className="grid grid-cols-2 2xl:gap-20 scroll-mt-35">
            <div className={"flex flex-col justify-between"}>
                   <div>
                       <h1 className="font-bold 2xl:text-[3.5rem] 2xl:leading-17">
                           I Build What You Imagine —{" "}
                           <span className={"text-blue-900"}>Right in the Browser.</span>
                       </h1>
                       <p className={"2xl:py-5 2xl:text-lg text-neutral-500 leading-7"}>{data.heroHeadline}</p>
                   </div>
                    <Button onClick={handleClick}>
                        Get In Touch
                    </Button>
            </div>


            <div className={"relative"}>
                <div className={"h-full overflow-hidden flex flex-col mask-x-from-95% mask-x-to-100%"}>
                    {skillSet.map((skills, index) =>
                        index % 2 === 0 ? (
                            <MarqueeLeftScroll key={`leftMarquee${index}`} skills={skills} />
                        ) : (
                            <MarqueeRightScroll key={`rightMarquee${index}`} skills={skills} />
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
