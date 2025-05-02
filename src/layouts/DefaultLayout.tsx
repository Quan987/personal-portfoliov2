import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";
import Project from "@/pages/Project.tsx";
import Contact from "@/pages/Contact.tsx";


export default function DefaultLayout() {
    return (
        <>
            <Navbar/>
            <main className={"px-2"}>
                <Home/>
                <About/>
                <Project/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}