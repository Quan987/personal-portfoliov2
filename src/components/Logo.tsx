import images from "@/constants/image-data";

export default function Logo() {
    return (
        <div className={"flex items-center justify-center gap-4"}>
            <div className={"w-12 h-12 border-2 border-solid border-beige rounded-full overflow-hidden"}>
                <img src={images.profile} alt="profile-logo"
                     className={"w-12 h-12 object-cover"}/>
            </div>
            {/*<div className={"inline-block bg-gradient-to-r from-golden via-golden-sand to-golden-bronze text-transparent bg-clip-text uppercase font-bold tracking-widest"}>*/}
            <div className={"text-beige uppercase font-bold tracking-widest"}>
                Quan@dev
            </div>
        </div>
    )
}