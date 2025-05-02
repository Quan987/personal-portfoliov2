import {useEffect, useState, useRef} from "react";
import {images, data} from "@/constants/data-constants";



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
                <div className={"flex justify-center items-center md:hidden"}>
                    <button onClick={toggleMenu} className={"z-60"}>
                        <img src={!isOpen ? images.menuOpenDarkMode : images.menuCloseDarkMode} alt="menuOpenLight"/>
                    </button>
                </div>

            {/* Drop down menu */}
                {!initialLoad.current && (
                    <ul className={`drop-down-menu ${isOpen ? "animate-dropDownIn pointer-events-auto" : "animate-dropDownOut pointer-events-none"}`}>
                        {data.navItems.map((item, i) => (
                            <li key={i} className={"py-2"}>
                                <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}
                                   className={"nav-item-text"}>{item}</a>
                            </li>
                        ))}
                    </ul>
                )}
        </>
    )
}