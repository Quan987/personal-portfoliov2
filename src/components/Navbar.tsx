import NonMobileMenu from "@/components/nav/NonMobileMenu";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/nav/MobileMenu";

export default function Navbar() {
    return (
        <header className={"px-8 py-4 flex justify-between items-center fixed inset-x-0 top-0 z-100 bg-midnight-navy"}>
            <Logo/>
            <MobileMenu/>
            <NonMobileMenu/>
        </header>
    )
}