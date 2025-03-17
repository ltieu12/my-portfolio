import { ContactLink } from "../components/ContactLink";
import Form from "../components/Form";

export const ContactPage = () => {
    return (
        <>
            <div className='container mx-auto px-12 md:px-24 mt-20 mb-32 lg:flex lg:justify-between lg:items-center'>
                <div className="lg:w-1/2 text-left space-y-5">
                    <h1 className="text-6xl lg:text-7xl font-Clash">Let's Talk!</h1>
                    <p>I'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to shoot me a message!</p>
                    <ul className="py-6 lg:pb-0 lg:pt-16 space-y-1">
                        <li>
                            <ContactLink src={"Gmail"} text={"tieunhatlam1210@gmail.com"} />
                        </li>
                        <li>
                            <ContactLink src={"LinkedIn"} text={"Lam Tieu"} />
                        </li>
                        <li>
                            <ContactLink src={"Instagram"} text={"@lamtieu.12_"} />
                        </li>
                    </ul>
                </div>
                <div className="w-full max-w-lg">
                    <Form />
                </div>
            </div>
        </>
    );
}