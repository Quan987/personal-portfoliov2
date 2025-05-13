import {logo, data} from '@/data/data-constants'
import HorizontalLine from "@/components/ui/HorizontalLine";
import EmbeddedLink from "@/components/ui/EmbeddedLink.tsx";
import ParagraphText from "@/components/ui/ParagraphText.tsx";

export default function About() {
    return (
        <section id="about" className="py-12 scroll-m-12">
            <div className="flex items-center justify-center gap-3">
                <HorizontalLine lineWidth = {"w-full"}/>
                <h2 className="text-2xl font-bold text-midnight-navy tracking-wider shrink-0">About Me</h2>
                <HorizontalLine lineWidth = {"w-full"}/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <ParagraphText text={data.aboutP1} className={"py-2 opacity-60"}/>
                    <ParagraphText text={data.aboutP2} className={"py-2 opacity-60"}/>
                    <ParagraphText text={data.aboutP3} className={"py-2 opacity-60"}>
                        Let’s connect—follow me on <EmbeddedLink link={data.linkedin} title="Linkedin"/> or <EmbeddedLink link={data.instagram} title="Instagram"/> to stay in touch!
                    </ParagraphText>
                </div>
                <figure className="p-8 hover-scale cursor-pointer select-none">
                    <img loading="lazy" src={logo.actionFigure} alt="actionFigure" className="size-full inline-block rounded-[2rem] pointer-events-none shadow-[1.3rem_1.3rem_1.3rem_-0.625rem_rgba(0,0,0,0.2)]"/>
                </figure>
            </div>
        </section>
    );
}

