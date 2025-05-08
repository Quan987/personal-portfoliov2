import {useEffect, useState, useRef} from "react";
import {data} from "@/data/data-constants.ts";
import MenuCloseIcon from "@/components/icons/MenuCloseIcon";
import MenuOpenIcon from "@/components/icons/MenuOpenIcon.tsx";


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
        <nav className="lg:hidden">
            <button type="button" onClick={toggleMenu} className={"relative flex items-center z-60 text-beige"}>
                {!isOpen ? <MenuOpenIcon/> : <MenuCloseIcon/>}
            </button>

            {/* Drop down menu */}
            {!initialLoad.current && (
                <ul className={`${isOpen ? "animate-slide-down-in" : "animate-slide-up-out pointer-events-none"} fixed inset-0 size-full z-50 bg-midnight-navy flex flex-col items-center justify-center gap-20 text-2xl`}>
                    {data.navItems.map((item, i) => (
                        <li key={`${item}-${i}`}>
                            <a href={item.toLowerCase() === "home" ? "./" : "#" + item.toLowerCase()}
                               onClick={toggleMenu}
                               className={"interactive-text-beige uppercase font-bold tracking-wide"}>{item}</a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}