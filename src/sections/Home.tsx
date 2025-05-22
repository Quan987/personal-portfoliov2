import data from "@/data/data-constants";
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
        <section id="home" className="grid grid-cols-2 gap-20 py-35">
            <div className={"justify-items-start "}>
                <div className="text-pretty h-full flex flex-col">
                    <h2 className="font-bold text-[2.6rem] 2xl:text-[3.6rem] leading-13 2xl:leading-16">
                        I Build What You Imagine —{" "}
                        <span className={"text-orange-500"}>Right in the Browser.</span>
                    </h2>
                    <p className={"2xl:py-6 2xl:text-lg text-black/60 leading-7"}>{data.heroHeadline}</p>

                    <Button onClick={handleClick}>
                        Get In Touch
                    </Button>
                </div>
            </div>


            <div className={"relative"}>
                <div className={"h-full overflow-hidden flex flex-col "}>
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
