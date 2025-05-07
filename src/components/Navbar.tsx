import NonMobileMenu from "@/components/nav/NonMobileMenu";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/nav/MobileMenu";

export default function Navbar() {
    return (
        <header className={"navbar flex justify-between items-center fixed w-full top-0 z-50 bg-midnight-navy "}>
            <Logo/>
            <nav className="">
                <MobileMenu/>
                <NonMobileMenu/>
            </nav>
        </header>
    )
}