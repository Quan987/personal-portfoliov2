import data from "@/data/data-constants";
import TechStackCard from "@/components/TechStackCard.tsx";
import {CSSProperties} from "react";

export default function Home() {

    return (
        <section id="home" className="grid grid-cols-2 py-22">
            <div className={"justify-items-start"}>
                <div className=" text-pretty w-xs xl:w-lg ">
                    <h2 className="font-bold text-[2.6rem] xl:text-[4rem] leading-13 xl:leading-18">
                        I Build What You Imagine —{" "}
                        <span className={"text-orange-500"}>Right in the Browser.</span>
                    </h2>
                    <p className={"py-5 xl:py-7 opacity-60 leading-7"}>{data.heroHeadline}</p>

                    <a
                        href={"#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="hover-tilt inline-block uppercase bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500   text-sm px-10 py-3.5 rounded-md border-1"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>


            <ul className={"border-1  border-black relative overflow-hidden"}>
                {data.skills.map((item, index) => {
                    return (
                        <li key={`${index}-${item.name}`}
                            className={`animate-marquee size-(--marquee-items-w) bg-orange-600 rounded-md absolute`}
                            style={{
                                left: `max(calc((var(--marquee-items-w) + 1rem) * ${data.skills.length}), 100%)`,
                                animationDelay: `calc(var(--marquee-speed) / ${data.skills.length} * ${data.skills.length - (index + 1)} * -1)`
                            }}
                        >
                            <img src={item.icon} alt={item.name} className={""}/>
                            <h3>{item.name}</h3>
                        </li>
                    );
                })}
            </ul>


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