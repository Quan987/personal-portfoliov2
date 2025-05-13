import {useEffect, useState} from "react";
import {data} from "@/data/data-constants";
import MenuCloseIcon from "@/components/icons/MenuCloseIcon";
import MenuOpenIcon from "@/components/icons/MenuOpenIcon";
import Menu from "@/components/ui/Menu.tsx";

let initialLoad = true;

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (initialLoad) {
            initialLoad = false;
        }
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen])

    function toggleMenu() {
        setIsOpen(prev => !prev);
    }

    return (
        <div className="lg:hidden">
            <button type="button" onClick={toggleMenu} className={"relative flex items-center z-60 text-beige"}>
                {!isOpen ? <MenuOpenIcon/> : <MenuCloseIcon/>}
            </button>

            {/* Drop down menu */}
            {!initialLoad && (
                <Menu data={data.navItems} onToggleMenu={toggleMenu} className={`mobile-menu ${isOpen ? "animate-slide-down-in" : "animate-slide-up-out pointer-events-none"}`} />
            )}
        </div>
    )
}
