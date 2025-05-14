import NonMobileMenu from "@/components/nav/NonMobileMenu";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/nav/MobileMenu";
import {useState} from "react";



export default function Navbar() {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(prev => !prev);
    }

    const asideClasses = `
  bg-midnight text-beige p-4
  ${isChecked ? "animate-slide-in" : "animate-slide-out"} 
  mt-3 max-w-1/2 min-h-screen
  lg:mt-0 lg:max-w-full lg:min-h-0 lg:static lg:translate-x-0 lg:animate-none lg:flex
`;


    // flex justify-between items-center
    return (
        <>
            {/*<Logo/>*/}
            {/*<nav>*/}
            {/*    <MobileMenu/>*/}
            {/*    <NonMobileMenu/>*/}
            {/*</nav>*/}

            <div className="">
                <label className="hamburger-menu cursor-pointer m-2 z-20 lg:hidden">
                    <input id="menuCheckBox" type="checkbox" className="hidden peer" onChange={handleClick} />
                    <span className="hamburger-line peer-checked:rotate-45 peer-checked:translate-y-[8px]"/>
                    <span className="hamburger-line peer-checked:opacity-0 peer-checked:scale-x-0"/>
                    <span className="hamburger-line peer-checked:-rotate-45 peer-checked:-translate-y-[8px]"/>
                </label>



                <aside className={asideClasses}>
                    <nav className="flex flex-col gap-6 lg:flex-row lg:justify-end">
                      <label htmlFor="menuCheckBox">
                          <a href={"#about"} onClick={handleClick}>About</a>
                      </label>
                        <div>About</div>
                        <div>Project</div>
                        <div>Contact</div>
                    </nav>
                </aside>
            </div>
    </>


    )
}

// <header className={"bg-midnight px-8 py-4 fixed inset-x-0 top-0 z-100 bg-midnight-navy"}>