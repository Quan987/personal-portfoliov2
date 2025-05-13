import HorizontalLine from "@/components/ui/HorizontalLine.tsx";

export default function Contact() {
    return (
        <section>
            <div>
                <h2 className="text-2xl text-midnight-navy font-bold tracking-wider">Contact Me</h2>
                <div className="flex items-center gap-1">
                    <HorizontalLine lineWidth={"w-4"} />
                    <hr className="h-3 w-3 border border-midnight-navy rounded-full shrink-0" />
                    <HorizontalLine lineWidth={"w-4"} />
                </div>
            </div>

            <form></form>
        </section>

    );
}


// TODO work on contact form (ui only) then work on Footer
// Then do tablet screen then laptop screen, then large laptop screen.
//     Finish nonmobile nav
// Then add functionality to resume button
// Then do Form