import data from "@/data/data-constants.ts";


export default function TechStackCard() {
    const skills = [...data.skills, ...data.skills]

    return (
       <div className={"flex"}>
           <ul className="flex flex-col gap-5 animate-scroll-vertical">
               {skills.map((item, index) => (
                   <li key={`${index}-${item.name}`} className="size-28 flex flex-col items-center justify-center gap-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
                       <div className="rounded-full bg-silver-white pointer-events-none size-12 p-3">
                           <img loading="lazy" src={item.icon} alt={item.name}/>
                       </div>
                       <h5 className="text-center text-silver-white">{item.name}</h5>
                   </li>
               ))}
           </ul>
       </div>
    );
}