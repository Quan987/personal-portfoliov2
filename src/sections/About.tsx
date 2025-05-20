import data from "@/data/data-constants";
import HorizontalLine from "@/components/ui/HorizontalLine";
import EmbeddedLink from "@/components/ui/EmbeddedLink.tsx";
import ParagraphText from "@/components/ui/ParagraphText.tsx";

export default function About() {
    return (
        <section id="about" className="py-35 scroll-m-12 border-1 border-black">
            <div className="flex items-center justify-center gap-3">
                <HorizontalLine lineWidth={"w-10"}/>
                <h2 className="uppercase font-bold tracking-wider shrink-0 text-3xl">About Me</h2>
                <HorizontalLine lineWidth={"w-10"}/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <ParagraphText text={data.aboutP1} className={"about-text"}/>
                    <ParagraphText text={data.aboutP2} className={"about-text"}/>
                    <ParagraphText text={data.aboutP3} className={"about-text"}>
                        Let’s connect—follow me on <EmbeddedLink link={""} title="Linkedin"/> or <EmbeddedLink link={""}
                                                                                                               title="Instagram"/> to
                        stay in touch!
                    </ParagraphText>
                </div>


                <figure className="hover-scale w-fit">
                    <div className={"relative"}>
                        <img
                            loading="lazy"
                            src={data.actionFigure}
                            alt="actionFigure"
                            draggable={false}
                            className="object-contain cursor-pointer block w-xs 2xl:w-[25rem] rounded-[2rem] shadow-xl"
                        />
                        <p className={"tracking-wider absolute bottom-6 left-0 -rotate-90 origin-bottom-left"}>Limited
                            Edition:
                            Overthinking Included</p>
                    </div>
                </figure>

            </div>
        </section>
    );
}

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