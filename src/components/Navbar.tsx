import NonMobileMenu from "@/components/nav/NonMobileMenu";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/nav/MobileMenu";

export default function Navbar() {
    return (
        <header className={"navbar-size flex justify-between items-center sticky top-0 z-50 bg-midnight-navy"}>
            <Logo/>
            <nav className="">
                <MobileMenu/>
                <NonMobileMenu/>
            </nav>
        </header>
    )
}