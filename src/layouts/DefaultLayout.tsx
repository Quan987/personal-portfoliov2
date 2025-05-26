import Header from "@/components/Header.tsx";
import {ReactNode} from "react";
import Footer from "@/components/Footer.tsx";

interface LayoutProps {
    children: ReactNode;
}

export default function DefaultLayout({children}: LayoutProps) {
    return (
        <>
            <Header/>
            <main className={"px-100"}>
                {children}
            </main>
            <Footer/>
        </>
    );
}
