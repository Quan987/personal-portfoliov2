import HorizontalLine from "@/components/ui/HorizontalLine";
import Button from "@/components/ui/Button.tsx";


export default function Contact() {
    return (
        <section id={"contact"} className="py-35 w-full -scroll-m-35">

            <div className="flex items-center justify-center gap-1 pointer-events-none select-none py-15">
                <HorizontalLine lineWidth={"w-6"}/>
                <hr className="size-4 border-2 border-midnight-navy rounded-full shrink-0"/>
                <HorizontalLine lineWidth={"w-6"}/>
            </div>


           <div className={"grid grid-cols-2 rounded-md overflow-hidden bg-tangerine shadow-xl"}>
               <div className={"text-black px-15 py-45 flex flex-col items-center justify-center"}>
                   <h5 className={"text-3xl font-bold"}>Send Me a Message</h5>
                   <div className={"text-lg text-center"}>
                       <p className={"py-6"}>Whether you have a question, want to start a project or simply want to connect.</p>
                       <p className={"py-6"}>Please fill in the form to get in touch with me.</p>
                   </div>
               </div>

               <div className="h-full bg-white  px-18 py-10">
                   <h5 className="text-3xl text-center text-midnight-navy font-bold tracking-wider py-5">Contact</h5>
                   <form autoComplete="on" className={""}>

                     <div className={"grid grid-cols-2 gap-6 py-2"}>
                         <div className={"input-container"}>
                             <label htmlFor="firstName">First Name</label>
                             <input name="firstName" type="text" id="firstName" placeholder="John" maxLength={100} required className={""}/>
                         </div>
                         <div className={"input-container"}>
                             <label htmlFor="lastName">Last Name</label>
                             <input name="lastName" type="text" id="lastName" placeholder="Doe" maxLength={100} required className={""}/>
                         </div>
                     </div>

                      <div className={"input-container py-3"}>
                          <label htmlFor="email">Email Address</label>
                          <input name="email" type="email" id="email" placeholder="johndoe@company.com" autoComplete="on" maxLength={100} required className={""}/>
                      </div>

                      <div className={"input-container py-3"}>
                          <label htmlFor="message">Message</label>
                          <textarea name="message" id="message" placeholder="Please enter your message here. Maximum 250 characters." maxLength={250} rows={6} required className={"resize-none"}/>
                      </div>

                       <div className={"pt-10"}>
                           <Button>
                               Send Message
                           </Button>
                       </div>
                   </form>
               </div>
           </div>
        </section>

    );
}


// TODO work on contact form (ui only) then work on Footer
// Then do tablet screen then laptop screen, then large laptop screen.
//     Finish nonmobile nav
// Then add functionality to resume button
// Then do Form