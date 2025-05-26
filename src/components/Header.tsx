import data from "@/data/dataConstants";
import MobileMenu from "@/components/nav/MobileMenu";
import NonMobileMenu from "@/components/nav/NonMobileMenu";

// isChecked ? "animate-slide-in" : "animate-slide-out"

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full 2xl:py-8 2xl:px-16">
      <h1 className={"font-bold tracking-wider text-3xl"}>Quan <span className={"text-blue-900"}>Tran .</span></h1>
      {/*<MobileMenu socialMedia={data.socialMedia} />*/}
      <NonMobileMenu socialMedia={data.socialMedia} />
    </header>
  );
}
