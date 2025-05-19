import {DataSkillIcon} from "@/types/data";


export default function MarqueeLeftScroll({skills}: DataSkillIcon) {

    const skillsLength = skills.length;

    return (

        <ul className={"marquee-track"}>
            {skills.map((item, index) => {
                return (
                    <li key={`${index}-${item.name}`}
                        className={`marquee-item animate-marquee-left-scroll`}
                        style={{
                            left: `max(calc((var(--marquee-items-w) + var(--marquee-items-gap)) * ${skillsLength}), 100%)`,
                            animationDelay: `calc(var(--marquee-speed-left-scroll) / ${skillsLength} * ${skillsLength - (index + 1)} * -1)`
                        }}
                    >
                        <img src={item.icon} alt={item.name} className={""}/>
                        <h5>{item.name}</h5>
                    </li>
                );
            })}
        </ul>

    );
}