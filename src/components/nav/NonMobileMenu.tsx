import Menu from "@/components/ui/Menu.tsx";
import {data} from "@/data/data-constants";


export default function NonMobileMenu() {
    return (
        <Menu data={data.navItems} className={"hidden md:flex justify-evenly items-center gap-10 text-beige"}/>
    )
}