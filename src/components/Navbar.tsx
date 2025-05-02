import NonMobileMenu from "./nav/NonMobileMenu.tsx";
import Logo from "./Logo.tsx";
import MobileMenu from "./nav/MobileMenu.tsx";

export default function Navbar() {
    return (
        <>
            <header className={"flex justify-between items-center sticky top-0 z-50 px-4 py-3 bg-dark-navy-blue"}>
                <Logo/>
                <nav className="flex justify-between items-center px-2">
                    <MobileMenu/>
                    <NonMobileMenu/>
                </nav>
            </header>
        </>
    )
}