import {data} from '@/data/data-constants.ts'

export default function Home() {
    return (
        <section id="./" className="home text-pretty">
            <h1 className="home-name uppercase font-bold bg-gradient-to-r from-midnight-navy via-sky-glow to-blue-flare text-transparent bg-clip-text">
                Hey, I'm {data.name}
            </h1>
            <h2 className="home-title font-bold opacity-60">{data.heroTitle}</h2>
            <p className="home-head-line opacity-70">{data.heroHeadline}</p>
            <div className="mt-20 w-fit cursor-pointer">
                <a href={"#"} target="_blank" className="home-button interactive-text button-animation opacity-90 tracking-widest border-solid border-midnight-navy border-2 rounded-md bg-midnight-navy">Resume</a>
            </div>
        </section>
    )
}