import {logo, data} from '@/data/data-constants'
import HorizontalLine from "@/components/ui/HorizontalLine";
import EmbeddedLink from "@/components/ui/EmbeddedLink.tsx";

export default function About() {
    return (
        <section id="about" className="py-16 scroll-m-12">
            <div className="text-2xl flex items-center justify-center gap-3 font-bold">
                <HorizontalLine lineWidth = {"w-full"}/>
                <h2 className="text-midnight-navy tracking-wider shrink-0">About Me</h2>
                <HorizontalLine lineWidth = {"w-full"}/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="py-4 opacity-70">
                    <p className="py-2">{data.aboutP1}</p>
                    <p className="py-2">{data.aboutP2}</p>
                    <p className="py-2">{data.aboutP3} Let’s connect—follow me on <EmbeddedLink link={data.linkedin} title="Linkedin"/> or <EmbeddedLink link={data.instagram} title="Instagram"/> to stay in touch!
                    </p>
                </div>

                <figure className="m-8 scale-animation cursor-pointer select-none ">
                    <img loading="lazy" src={logo.actionFigure} alt="actionFigure" className="inline-block rounded-[2rem] shadow-[1.875rem_1.875rem_1.875rem_-0.625rem_rgba(0,0,0,0.2)] pointer-events-none"/>
                </figure>
            </div>
        </section>
    )
}

