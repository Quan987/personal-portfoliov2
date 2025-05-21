import ParagraphText from "@/components/ui/ParagraphText";
import {ProjectCardProps} from "@/types/data";


export default function ProjectCard({data}: ProjectCardProps) {
    return (
        <div
            className="hover-scale h-full bg-midnight-navy text-white bg-tangerine rounded-sm shadow-lg p-6 flex flex-col border-2 border-black">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor"
                     className="inline-block size-7 pointer-events-none select-none">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"/>
                </svg>
                <h5 className="text-xl my-2">{data.title}</h5>
            </div>

            <ParagraphText text={data.description} className={"text-sm mb-2 opacity-80"}/>
            <div className={"mt-auto"}>
                <ul className="text-xs flex items-center gap-2 my-3 flex-wrap opacity-80">
                    {data.stack.map((item, index) => (
                        <li key={`${item.trim()}-${index}`}>{item}</li>
                    ))}
                </ul>

                {!data.isEmpty && (
                    <a href={data.link} target="_blank" rel="noopener noreferrer"
                       className="inline-flex justify-center font-bold items-center gap-1 group-hover:text-black active:text-black"
                       draggable={false}>
                        <span className={""}>View Project</span>
                        {/*<img src={otherImage.linkImage.image} alt={otherImage.linkImage.name}*/}
                        {/*     className={"inline-block size-4"}/>*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor"
                             className="inline-block size-4 pointer-events-none select-none">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                        </svg>

                    </a>)}
            </div>

        </div>
    );
}