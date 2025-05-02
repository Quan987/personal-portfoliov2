import {images} from "@/constants/data-constants";

export default function Logo() {
    return (
        <div className={"logo-size border-2 border-solid border-beige rounded-full overflow-hidden"}>
            <img src={images.profile} alt="profile-logo"
                 className={"logo-size object-cover pointer-events-none"}/>
        </div>
    )
}

