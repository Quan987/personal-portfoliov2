

export default function Contact() {
    return (
        <section className="h-100">

            {/*<div className="flex items-center justify-center gap-1 pointer-events-none select-none">*/}
            {/*    <HorizontalLine lineWidth={"w-4"}/>*/}
            {/*    <hr className="h-3 w-3 border border-midnight-navy rounded-full shrink-0"/>*/}
            {/*    <HorizontalLine lineWidth={"w-4"}/>*/}
            {/*</div>*/}
            <h2 className="text-2xl text-midnight-navy font-bold tracking-wider">Send Me a Message</h2>
            <p className="opacity-60">Please fill in the form to get in touch with me.</p>


            <div className="bg-white">

                <form autoComplete="on">
                    <div>
                        <label htmlFor="name">Your name:</label>
                        <input name="name" type="text" id="name" placeholder="ACB" maxLength={100} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Your email address:</label>
                        <input name="email" type="email" id="email" placeholder="example@example.com" autoComplete="on"
                               required/>
                    </div>
                    <div>
                        <label htmlFor="message">Your message:</label>
                        <textarea name="message" id="message" placeholder="Your message" required/>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>

    );
}


// TODO work on contact form (ui only) then work on Footer
// Then do tablet screen then laptop screen, then large laptop screen.
//     Finish nonmobile nav
// Then add functionality to resume button
// Then do Form