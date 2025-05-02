import images from "@/constants/image-data";
import {useEffect, useState, useRef} from "react";
import data from "@/data/profile-data.json";


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const initialLoad = useRef(true);

    useEffect(() => {
        initialLoad.current = false;
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen])

    function toggleMenu() {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            {/* Toggle button */}
                <div className={"flex md:hidden z-60"}>
                    <button onClick={toggleMenu}>
                        <img src={!isOpen ? images.menuOpenDarkMode : images.menuCloseDarkMode} alt="menuOpenLight"/>
                    </button>
                </div>

            {/* Drop down menu */}
                {!initialLoad.current && (
                    <ul className={`fixed top-0 left-0 w-screen h-svh z-50 flex flex-col items-center justify-center gap-16 bg-dark-navy-blue text-3xl ${isOpen ? "animate-dropDownIn pointer-events-auto" : "animate-dropDownOut pointer-events-none"}`}>
                        {data.navItems.map((item, i) => (
                            <li key={i} className={" py-2 "}>
                                <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}
                                   className={" text-beige uppercase font-bold tracking-wider active:text-white"}>{item}</a>
                            </li>
                        ))}
                    </ul>
                )}
        </>
    )
}