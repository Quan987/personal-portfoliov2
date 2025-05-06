import {useEffect, useState, useRef} from "react";
import {logo, data} from "@/data/data-constants.ts";


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const initialLoad = useRef(true);

    useEffect(() => {
        if (initialLoad) {
            initialLoad.current = false;
        }
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen])

    function toggleMenu() {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            {/* Toggle button */}
            <div className={"flex justify-center items-center md:hidden"}>
                <button onClick={toggleMenu} className={"z-60"}>
                    <img src={!isOpen ? logo.menuOpen : logo.menuClose} alt="menuOpenLight"/>
                </button>
            </div>

            {/* Drop down menu */}
            {!initialLoad.current && (
                <ul className={`drop-down-menu ${isOpen ? "animate-dropDownIn pointer-events-auto" : "animate-dropDownOut pointer-events-none"}`}>
                    {data.navItems.map((item, i) => (
                        <li key={i} className={"py-2"}>
                            <a href={item.toLowerCase() === "home" ? "./" : "#" + item.toLowerCase()}
                               onClick={toggleMenu}
                               className={"interactive-text tracking-widest"}>{item}</a>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}