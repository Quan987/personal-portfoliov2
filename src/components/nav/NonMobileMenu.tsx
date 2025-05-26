import {DataSocialMedia} from "@/types/data.ts";


export default function NonMobileMenu({socialMedia}: DataSocialMedia) {
    return (
        <aside className={`hidden lg:block`}>
            <ul className="flex justify-center 2xl:gap-7">
                {socialMedia.map((media, index) => (
                    <li key={`${index}-${media.name}`} className={""}>
                        <a href={media.link} target="_blank" rel="noopener noreferrer" draggable={false}
                           className={"inline-block 2xl:size-8"}>
                            {media.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

//li => w-full flex justify-center

//flex items-center justify-center gap-0 active:text-orange-600