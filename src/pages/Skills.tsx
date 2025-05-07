import {data} from '@/data/data-constants'
import Card from "@/components/Card.tsx";

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="flex flex-row justify-center items-center gap-4">
                <hr className="w-3/12 border-1 rounded-2xl border-midnight-navy opacity-70"/>
                <h1 className="text-2xl text-midnight-navy tracking-wider font-bold">Technologies</h1>
                <hr className="horizontal-line"/>
            </div>

            <div className="w-screen relative left-1/2 -translate-x-1/2 flex overflow-hidden">
                <ul className="flex py-8 animate-infinite-scroll">
                    {[...data.skills, ...data.skills].map((item, index) => (
                        <li key={`${index}${item.name}`}
                            className={`mx-4 bg-midnight-navy rounded-md scale-animation`}>

                            <Card title={item.name} icon={item.icon}/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-row justify-center items-center gap-4">
                <hr className="horizontal-line" />
                <div className="h-4 w-4 border border-midnight-navy rounded-full shrink-0"></div>
                <hr className="horizontal-line"/>
            </div>
        </section>
    );
}

// scale-animation select-none
// ${index % 2 === 0 ? 'translate-y-12 card-down' : '-translate-y-12 card-up'}`
// shadow-[inset_0_8px_10px_-6px_rgba(0,0,0,0.6),inset_0_-8px_10px_-6px_rgba(0,0,0,0.6)]
// .skills-cards {
//     position: relative;
// }
//
// .skills-cards:not(:last-child)::after {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 200px; /* length of the diagonal line */
//     height: 5px;
//     background-color: var(--color-silver-white);
//     transform-origin: left center;
// }
// .card-up::after {
//     transform: translate(calc(-50% + 6rem), -50%) rotate(45deg); /* downward line */
// }
//
// .card-down::after {
//     transform: translate(calc(-50% + 6rem), -50%) rotate(-45deg); /* upward line */
// }