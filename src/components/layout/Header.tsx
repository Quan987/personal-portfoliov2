import NavMenu from "@/components/layout/NavMenu";
import SocialMenu from "@/components/layout/SocialMenu";

// isChecked ? "animate-slide-in" : "animate-slide-out"
export default function Header() {
  return (
    <header className={"z-header 2xl:py-5 2xl:px-15 2xl:text-lg"}>
      <nav className="flex justify-between items-center">
        <div className={"font-medium text-primary-dark"}>Quan Tran</div>

        {/* Navigation internal */}
        <NavMenu />

        {/* Navigation external */}
        <SocialMenu />
      </nav>
    </header>
  );
}
