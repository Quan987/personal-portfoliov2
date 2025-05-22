import {DataSkillsList} from "@/types/data";




export default function MarqueeLeftScroll({skills}: DataSkillsList) {

    const skillsLength = skills.length;

    return (

        <ul className={"marquee-track select-none pointer-events-none"} draggable={false}>
            {skills.map((item, index) => {
                return (
                    <li key={`${index}-${item.name}`}
                        style={{
                            left: `max(calc((var(--marquee-items-size) + var(--marquee-items-gap)) * ${skillsLength}), 100%)`,
                            animationDelay: `calc(var(--marquee-speed) / ${skillsLength} * ${skillsLength - (index + 1)} * -1)`

                        }}
                        className={`marquee-item animate-marquee-left-scroll`}
                    >
                       <div className={"marquee-item-img"}>
                           <img src={item.icon} alt={item.name} className={""}/>
                       </div>
                        <h5 className={"marquee-item-text"}>{item.name}</h5>
                    </li>
                );
            })}
        </ul>

    );
}