interface NavItem {
    name: string;
    id: number;
}

export default function NavItem({name, id}: NavItem) {
    return (
        <li><a href={`#${id}`} className={""}>{name}</a></li>
    )
}