
interface EmbeddedLinkProps {
    link: string;
    title: string;
}

export default function EmbeddedLink({link, title}:EmbeddedLinkProps) {
    return (
        <span className="text-blue-500 hover:underline">
            <a href={link} target="_blank" rel="noreferrer noopener">{title}</a>
        </span>
    )
}