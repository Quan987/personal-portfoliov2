import data from "@/data/data-constants";


export default function Home() {
    return (
        <section id="home" className="grid grid-cols-2 my-35">
            <div className="text-pretty pl-30">
                <div className="">
                    <h2 className="font-bold text-[2.8rem] leading-13">
                        I Build What You Imagine — <span className={"text-orange-600"}>Right in the Browser.</span>
                    </h2>
                    <p className={"py-5 opacity-60 leading-7"}>{data.heroHeadline}</p>
                </div>

                <a
                    href={"#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable={false}
                    className="hover-tilt inline-block uppercase bg-orange-600 text-white border-orange-600 hover:bg-white hover:text-orange-600  text-sm px-7 py-3 my-12 rounded-md border-1"
                >Get In Touch</a>
            </div>

            <figure className="justify-items-center">
                <img loading="lazy" src={data.actionFigure} alt="actionFigure" draggable={false}
                     className="hover-scale cursor-pointer block w-xs rounded-[3rem] shadow-2xl"/>

            </figure>
        </section>
    );
}

// bg-[url('./assets/images/background/polygon.svg')]
// shadow-[1.3rem_1.3rem_1.3rem_-0.625rem_rgba(0,0,0,0.2)]