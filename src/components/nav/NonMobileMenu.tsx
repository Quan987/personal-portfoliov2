import {DataSocialMedia} from "@/types/data.ts";


export default function NonMobileMenu({data}: DataSocialMedia) {
    return (
            <aside className={`hidden lg:block`}>
                <ul className="flex justify-center gap-6 2xl:gap-7 w-full h-screen lg:h-fit ">
                    {data.map((media, index) => (
                        <li key={`${index}-${media.name}`}
                            className={"w-full flex justify-center"}>
                            <a href={media.link} target="_blank" rel="noopener noreferrer" draggable={false}
                               className={"flex items-center justify-center gap-0 active:text-orange-600"}>
                                    <img src={media.logo} alt={`${media.name.toLowerCase()}-logo`} draggable={false}
                                         className={"size-7"}/>

                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
    )
}