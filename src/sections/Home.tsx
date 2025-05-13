import {data} from '@/data/data-constants'
import DownloadIcon from "@/components/icons/DownloadIcon";
import ParagraphText from "@/components/ui/ParagraphText";

export default function Home() {
    return (
        <section id="./" className="my-64 text-pretty">
            <div className="text-3xl font-bold">
                <h1 className="uppercase bg-gradient-to-r from-midnight-navy via-sky-glow to-blue-flare text-transparent bg-clip-text">Hey, I'm Quan Tran.</h1>
                <h2 className="my-6 text-black/60">I build what you imagine — right in the browser.</h2>
                <ParagraphText text={data.heroHeadline} className={"text-base text-black/60 leading-7 font-normal"}/>
            </div>
            <a href={"#"} target="_blank" rel="noopener noreferrer" className="interactive-text-beige uppercase hover-tilt flex justify-center gap-2 w-fit my-24 px-10 py-4 opacity-90 rounded-md bg-midnight-navy tracking-widest active:bg-black/80 hover:bg-black/80">
                <span className="font-normal">Resume</span>
                <DownloadIcon/>
            </a>
        </section>
    );
}