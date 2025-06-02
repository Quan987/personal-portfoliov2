import {DataSocialMedia} from "@/types/data.ts";


interface MenuItems {
    menuItems: string[];
}

export default function NonMobileMenu({menuItems}: MenuItems) {
    return (
        <div className={"hidden lg:flex justify-between items-center 2xl:text-lg 2xl:p-2"}>
            <div className={"flex justify-center items-center 2xl:gap-2 2xl:text-2xl"}>
                <h1 className={"flex items-center justify-center bg-beige text-navy-blue rounded-full font-bold uppercase 2xl:size-11 pointer-events-none select-none"}>Q</h1>
                <p className={""}>Dev.</p>
            </div>

            <ul className="flex justify-center 2xl:gap-15">
                {menuItems.map((menuItem, index) => (
                    <li key={`${menuItem}-${index}`}>
                        <a href={`#${menuItem.toLowerCase()}`} className={"tracking-wider font-normal hover:text-white"}
                           draggable={false}>{menuItem}</a>
                    </li>
                ))}
            </ul>

            <a href={"#contact"}
               className={"inline-block text-navy-blue bg-silver rounded-full hover:bg-white hover:text-black 2xl:py-2 2xl:px-8"}>Contact Me</a>

        </div>
    )
}

//li => w-full flex justify-center

//flex items-center justify-center gap-0 active:text-orange-600

// <aside className={`hidden lg:block`}>
//     <ul className="flex justify-center 2xl:gap-7">
//         {socialMedia.map((media, index) => (
//             <li key={`${index}-${media.name}`} className={""}>
//                 <a href={media.link} target="_blank" rel="noopener noreferrer" draggable={false}
//                    className={"inline-block 2xl:size-8"}>
//                     {media.icon}
//                 </a>
//             </li>
//         ))}
//     </ul>
// </aside>