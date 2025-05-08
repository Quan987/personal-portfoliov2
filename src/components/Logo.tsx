import {logo} from "@/data/data-constants.ts";

export default function Logo() {
    return (
        <div className={"select-none pointer-events-none overflow-hidden"}>
            <img loading="lazy" src={logo.profile} alt="logo-profile"
                 className={"size-12 object-fill border-2 border-solid border-beige rounded-full"}/>
        </div>
    )
}

