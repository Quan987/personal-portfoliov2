import {data} from '@/constants/data-constants'

export default function Home() {
    return (
        <section id="home" className="text-pretty mt-36 tracking-wide">
            <h1 className="text-3xl uppercase font-bold bg-gradient-to-r from-midnight-navy via-sky-glow to-blue-flare text-transparent bg-clip-text">Hey,
                I'm {data.name}</h1>
            <h2 className="text-lg mt-3 uppercase font-bold opacity-70">{data.heroTitle}</h2>
            <p className="text-base leading-7 mt-6 opacity-70">{data.heroHeadline}</p>
            <div className="mt-20 w-fit h-fit cursor-pointer">
                <a className="py-4 px-12 opacity-90 text-beige uppercase font-bold tracking-widest border-solid border-midnight-navy border-2 rounded-md bg-midnight-navy">Resume</a>
            </div>
        </section>
    )
}