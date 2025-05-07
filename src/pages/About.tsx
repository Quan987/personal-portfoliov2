import {logo, data} from '@/data/data-constants.ts'

export default function About() {
    return (
        <section id="about" className="about">
            <div className="flex items-center justify-center font-bold text-2xl pb-4 gap-4">
                <hr className="horizontal-line"/>
                <h2 className="text-midnight-navy shrink-0">
                    About Me
                </h2>
                <hr className="horizontal-line"/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="opacity-70">
                    <p className="py-2">{data.aboutP1}</p>
                    <p className="py-2">{data.aboutP2}</p>
                    <p className="py-2">{data.aboutP3} Let’s connect—follow me on <span className="underline text-midnight-navy"><a href={data.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a></span> or <span className="underline text-midnight-navy"><a href={data.instagram} target="_blank" rel="noreferrer noopener">Instagram</a></span> to stay in touch!
                    </p>
                </div>

                <div className="px-8 py-12 scale-animation cursor-pointer select-none">
                    <img src={logo.actionFigure} alt="actionFigure" className="rounded-[2.5rem] shadow-[1.875rem_1.875rem_1.875rem_-0.625rem_rgba(0,0,0,0.2)] pointer-events-none"/>
                </div>
            </div>
        </section>
    )
}

