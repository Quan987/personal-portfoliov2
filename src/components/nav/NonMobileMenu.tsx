

const items = ["Home", "About", "Project", "Contact"];


export default function NonMobileMenu() {
    return (
        <ul className={"hidden md:flex justify-evenly items-center gap-10 text-beige"}>
            {items.map((item, id) => (
                <li key={`${id}${item}`} className="cursor-pointer hover:text-white">
                    <a href={`#${item.toLowerCase()}`} className="px-2 py-4 uppercase text-lg">{item}</a>
                </li>
            ))}
        </ul>
    )
}