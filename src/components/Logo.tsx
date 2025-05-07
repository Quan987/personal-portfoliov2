import {logo} from "@/data/data-constants.ts";

export default function Logo() {
    return (
        <div className={"logo select-none border-2 border-solid border-beige rounded-full overflow-hidden"}>
            <img src={logo.profile} alt="profile-logo"
                 className={"logo object-cover pointer-events-none"}/>
        </div>
    )
}

