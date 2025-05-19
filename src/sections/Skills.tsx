import data from '@/data/data-constants'
import Marquee from "@/components/Marquee.tsx";
import HorizontalLine from "@/components/ui/HorizontalLine";

export default function Skills() {
    return (
        <section id="skills" className="">
            <div className="flex justify-center items-center gap-3">
                <HorizontalLine lineWidth={"w-3/12"} />
                <h2 className="text-2xl text-midnight-navy font-bold tracking-wider shrink-0">Tech Stacks</h2>
                <HorizontalLine lineWidth={"w-full"} />
            </div>

            {/*<div className="group w-screen relative left-1/2 -translate-x-1/2 flex overflow-hidden">*/}
            {/*    <ul className="my-5 flex animate-infinite-scroll group-hover:[animation-play-state:paused]">*/}
            {/*        {[...data.skills, ...data.skills].map((item, index) => (*/}
            {/*            <li key={`${index}-${item.name}`}*/}
            {/*                className="hover-scale h-32 w-28 mx-4 bg-midnight-navy rounded-md ">*/}
            {/*                <Marquee title={item.name} icon={item.icon}/>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
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