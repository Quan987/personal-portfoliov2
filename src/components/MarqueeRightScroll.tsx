import {DataSkillsList} from "@/types/data";



export default function MarqueeLeftScroll({skills}: DataSkillsList) {

    const skillsLength = skills.length;

    return (

        <ul className={"marquee-track select-none pointer-events-none"} draggable={false}>
            {skills.map((item, index) => {
                return (
                    <li key={`${index}-${item.name}`}
                        style={{
                            right: `max(calc((var(--marquee-items-size) + var(--marquee-items-gap)) * ${skillsLength}), calc(100% + var(--marquee-items-size) + var(--marquee-items-gap)))`,
                            animationDelay: `calc(var(--marquee-speed) / ${skillsLength} * ${skillsLength - (index + 1)} * -1)`
                        }}
                        className={`marquee-item animate-marquee-right-scroll`}
                    >
                        <div className={"marquee-item-img"}>
                            {item.icon}
                        </div>
                        <h5 className={"marquee-item-text"}>{item.name}</h5>
                    </li>
                );
            })}
        </ul>

    );
}