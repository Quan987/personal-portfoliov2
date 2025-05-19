import {DataSkillIcon} from "@/types/data";


export default function MarqueeLeftScroll({skills}: DataSkillIcon) {

    const skillsLength = skills.length;

    return (

        <ul className={"h-(--marquee-items-h) relative border-1 border-blue-600"}>
            {skills.map((item, index) => {
                return (
                    <li key={`${index}-${item.name}`}
                        className={`animate-marquee-right-scroll w-(--marquee-items-w) h-(--marquee-items-h) bg-orange-600 rounded-md absolute`}
                        style={{
                            right: `max(calc((var(--marquee-items-w) + var(--marquee-items-gap)) * ${skillsLength}), calc(100% + var(--marquee-items-w) + var(--marquee-items-gap)))`,
                            animationDelay: `calc(var(--marquee-speed-right-scroll) / ${skillsLength} * ${skillsLength - (index + 1)} * -1)`
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