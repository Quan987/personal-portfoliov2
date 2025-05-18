import data from "@/data/data-constants";
import MobileMenu from "@/components/nav/MobileMenu";
import NonMobileMenu from "@/components/nav/NonMobileMenu";

// isChecked ? "animate-slide-in" : "animate-slide-out"

export default function Navbar() {
  return (
    <header className="flex justify-between items-center w-full px-10 py-6 lg:px-16 xl:px-14 xl:py-8">
      <h1
        className={"font-bold tracking-wider text-2xl md:text-3xl"}
      >
        Quan <span className={"text-orange-500"}>Tran .</span>
      </h1>
      <MobileMenu data={data.socialMedia} />
      <NonMobileMenu data={data.socialMedia} />
    </header>
  );
}
