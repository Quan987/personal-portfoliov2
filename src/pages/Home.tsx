import {data} from '@/data/data-constants.ts'
import DownloadIcon from "@/components/icons/DownloadIcon.tsx";

export default function Home() {
    return (
        <section id="./" className="mt-50 mb-66 text-pretty">
            <div className="text-3xl font-bold">
                <h1 className="uppercase bg-gradient-to-r from-midnight-navy via-sky-glow to-blue-flare text-transparent bg-clip-text">
                    Hey, I'm {data.name}
                </h1>
                <h2 className="mt-4 mb-8 opacity-60">{data.heroTitle}</h2>
                <p className="text-base leading-6.5 font-normal opacity-60">{data.heroHeadline}</p>
            </div>
            <a href={"#"} target="_blank"
               className="flex justify-center gap-2 button-animation interactive-text my-24 rounded-md opacity-90 hover:opacity-70 bg-midnight-navy tracking-widest w-fit px-10 py-4">
                <span className="inline-block">Resume</span>
                <DownloadIcon/>
            </a>
        </section>
    )
}