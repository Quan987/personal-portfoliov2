import {DataSkillIcon} from "@/types/data";


export default function Marquee({skills}: DataSkillIcon) {

    const skillsLength = skills.length;

    return (
        <ul className={"border-1  border-black relative overflow-hidden"}>
            {skills.map((item, index) => {
                return (
                    <li key={`${index}-${item.name}`}
                        className={`animate-marquee size-(--marquee-items-w) bg-orange-600 rounded-md absolute`}
                        style={{
                            left: `max(calc((var(--marquee-items-w) + var(--marquee-items-gap)) * ${skillsLength}), 100%)`,
                            animationDelay: `calc(var(--marquee-speed) / ${skillsLength} * ${skillsLength - (index + 1)} * -1)`
                        }}
                    >
                        <img src={item.icon} alt={item.name} className={""}/>
                        <h3>{item.name}</h3>
                    </li>
                );
            })}
        </ul>
    );
}