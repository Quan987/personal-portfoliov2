import NavItem from "@/components/nav/NavItem.tsx";

const items = ["Home", "About", "Project", "Contact"];


export default function NonMobileMenu() {
    return (
        <ul className={"hidden md:flex justify-evenly"}>
            {items.map((item, id) => (
                <NavItem key={id} name={item} id={id}/>
            ))}
        </ul>
    )
}