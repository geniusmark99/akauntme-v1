import { HeaderWidget, FooterWidget } from "@/components/shared/general";
import ContactFormWidget from "./component/ContactFormWidget";


const Contact = () => {
    return <>

        <main>
            <div className='shadow-md'>
                <HeaderWidget />

            </div>
            <div className='pt-20'>
                <div className="h-auto bg-blue-50 flex flex-col md:flex-row">
                    <div className="p-4 lg:p-20 w-full md:w-6/12">
                        <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl text-gray-800">Contact our sales team</h1>
                        <p className="mt-6">
                            We can give you a demo, help you choose the best plan, or create a personalized package to help your organization get the most out of Canva.
                        </p>
                        <ul className="flex flex-col gap-y-2 lg:gap-y-5 mt-6 lg:mt-10">
                            <li className="flex items-center gap-x-2">
                                <svg className="size-4 fill-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
                                    <path d="M14.5 2.792969L5.5 11.792969L1.851563 8.148438L1.5 7.792969L0.792969 8.5L1.148438 8.851563L5.5 13.207031L15.207031 3.5Z" />
                                </svg>

                                Create compelling content with speed.
                            </li>

                            <li className="flex items-center gap-x-2">
                                <svg className="size-4 fill-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
                                    <path d="M14.5 2.792969L5.5 11.792969L1.851563 8.148438L1.5 7.792969L0.792969 8.5L1.148438 8.851563L5.5 13.207031L15.207031 3.5Z" />
                                </svg>
                                Build, manage, and scale your brand with ease.
                            </li>
                            <li className="flex items-center gap-x-2">
                                <svg className="size-4 fill-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
                                    <path d="M14.5 2.792969L5.5 11.792969L1.851563 8.148438L1.5 7.792969L0.792969 8.5L1.148438 8.851563L5.5 13.207031L15.207031 3.5Z" />
                                </svg>
                                Streamline workflows and collaborate seamlessly across the content creation process.
                            </li>

                            <li className="flex items-center gap-x-2">
                                <svg className="size-4 fill-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
                                    <path d="M14.5 2.792969L5.5 11.792969L1.851563 8.148438L1.5 7.792969L0.792969 8.5L1.148438 8.851563L5.5 13.207031L15.207031 3.5Z" />
                                </svg>
                                Secure access with SSO for your global and growing teams.
                            </li>


                        </ul>
                    </div>
                    <div className="p-4 lg:p-20 w-full md:w-6/12">
                        <ContactFormWidget />
                    </div>
                </div>

            </div>

            < FooterWidget />

        </main>

    </>
}

export default Contact;