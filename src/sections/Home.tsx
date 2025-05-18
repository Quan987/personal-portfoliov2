import data from "@/data/data-constants";

export default function Home() {
    return (
        <section id="home" className="grid grid-cols-2 py-22">
            <div className={"justify-items-start"}>
                <div className=" text-pretty w-xs xl:w-lg ">
                    <h2 className="font-bold text-[2.6rem] xl:text-[4rem] leading-13 xl:leading-18">
                        I Build What You Imagine —{" "}
                        <span className={"text-orange-500"}>Right in the Browser.</span>
                    </h2>
                    <p className={"py-5 xl:py-7 opacity-60 leading-7"}>{data.heroHeadline}</p>

                    <a
                        href={"#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="hover-tilt inline-block uppercase bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500  text-sm px-7 py-3 rounded-md border-1"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>


            <div className={"justify-items-end"}>
                <figure className="hover-scale w-fit">
                    <div className={"relative"}>
                        <img
                            loading="lazy"
                            src={data.actionFigure}
                            alt="actionFigure"
                            draggable={false}
                            className="object-contain cursor-pointer block w-xs xl:w-[25rem] rounded-[2rem] shadow-xl"
                        />
                        <p className={"tracking-wider absolute bottom-6 left-0 -rotate-90 origin-bottom-left"}>Limited
                            Edition:
                            Overthinking Included</p>
                    </div>
                </figure>
            </div>
        </section>
    );
}

// bg-[url('./assets/images/background/polygon.svg')]
// shadow-[1.3rem_1.3rem_1.3rem_-0.625rem_rgba(0,0,0,0.2)]
