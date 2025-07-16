interface MenuProps {
    className?: string;
    data: string[];
    onToggleMenu?: () => void;
}

export default function Menu({className, data, onToggleMenu}: MenuProps) {
    return (
        <ul className={className}>
            {data.map((item: string, i) => (
                <li key={`${item}-${i}`}>
                    <a href={item.toLowerCase() === "home" ? "./" : "#" + item.toLowerCase()}
                       onClick={onToggleMenu}
                       className={"hover-underline interactive-text-beige uppercase font-bold tracking-wide"}>{item}</a>
                </li>
            ))}
        </ul>)
}