import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ReceiptLearn = () => {
    return (<motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className='h-auto bg-blue-500 lg:w-10/12 text-white p-4 overflow-y-auto'>

        <section className="flex flex-col md:flex-row w-full md:justify-between">
            <div className="z-30 h-auto">
                <h3 className="text-xl sm:text-2xl">How to add sales in Akauntme</h3>
                <h1 className="text-3xl sm:text-3xl md:text-6xl font-semibold max-w-96 mt-10">Your Sales scratchpad</h1>
                <p className="mt-4 text-base sm:text-xl">
                    Dream up, gather, and polish your content ideas in one place
                </p>

                <div className="mt-6 ">
                    <Link href='/(auth)register' className='bg-gray-900 max-w-xs group hover:bg-postscheduler  relative shadow-lg text-white hover:text-white transition-all rounded-full border  hover:border-white py-2 md:py-2.5 px-6 text-center text-xs lg:text-lg'>
                        Get Started now
                        <div className='absolute w-[98%] group-hover:bg-black transition-all  bg-white h-6 sm:h-10 md:h-12 left-0 -z-10 -bottom-1 sm:-bottom-2 rounded-full'></div>
                    </Link>
                </div>


            </div>
            <div className=" h-auto flex items-start justify-end relative">
                <Image src="/images/create-hero.webp" width={600} height={600} alt="Create Hero image" />
            </div>
        </section>




        {/* <section className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-4 mt-10">
            <div className="space-y-3">
                <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true"><path d="M21.697 30.417h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.745 1.745h8.72c.963 0 1.744-.781 1.744-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM21.697 11.232h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.745 1.745h8.72c.963 0 1.744-.781 1.744-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM40.882 30.417h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.744 1.745h8.72c.964 0 1.745-.781 1.745-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM35.226 10.81l-5.285 5.284a1.495 1.495 0 0 0 0 2.115l5.285 5.285c.584.584 1.53.584 2.114 0l5.286-5.285a1.495 1.495 0 0 0 0-2.114l-5.285-5.286a1.495 1.495 0 0 0-2.115 0Z"></path></svg>
                </div>
                <h2 className="font-semibold text-xl">Organize your content</h2>
                <p className="leading-6">
                    Sort your future posts into easy-to-find categories, giving you a clean, simple view of what's coming next.
                </p>

            </div>

            <div className="space-y-3">
                <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true"><path d="M21.697 30.417h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.745 1.745h8.72c.963 0 1.744-.781 1.744-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM21.697 11.232h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.745 1.745h8.72c.963 0 1.744-.781 1.744-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM40.882 30.417h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.744 1.745h8.72c.964 0 1.745-.781 1.745-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM35.226 10.81l-5.285 5.284a1.495 1.495 0 0 0 0 2.115l5.285 5.285c.584.584 1.53.584 2.114 0l5.286-5.285a1.495 1.495 0 0 0 0-2.114l-5.285-5.286a1.495 1.495 0 0 0-2.115 0Z"></path></svg>
                </div>
                <h2 className="font-semibold text-xl">Organize your content</h2>
                <p className="leading-6">
                    Sort your future posts into easy-to-find categories, giving you a clean, simple view of what's coming next.
                </p>

            </div>

            <div className="space-y-3">
                <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true"><path d="M21.697 30.417h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.745 1.745h8.72c.963 0 1.744-.781 1.744-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM21.697 11.232h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.745 1.745h8.72c.963 0 1.744-.781 1.744-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM40.882 30.417h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.744 1.745h8.72c.964 0 1.745-.781 1.745-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM35.226 10.81l-5.285 5.284a1.495 1.495 0 0 0 0 2.115l5.285 5.285c.584.584 1.53.584 2.114 0l5.286-5.285a1.495 1.495 0 0 0 0-2.114l-5.285-5.286a1.495 1.495 0 0 0-2.115 0Z"></path></svg>
                </div>
                <h2 className="font-semibold text-xl">Organize your content</h2>
                <p className="leading-6">
                    Sort your future posts into easy-to-find categories, giving you a clean, simple view of what's coming next.
                </p>

            </div>

            <div className="space-y-3">
                <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true"><path d="M21.697 30.417h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.745 1.745h8.72c.963 0 1.744-.781 1.744-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM21.697 11.232h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.745 1.745h8.72c.963 0 1.744-.781 1.744-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM40.882 30.417h-8.72c-.964 0-1.745.781-1.745 1.744v8.72c0 .964.781 1.745 1.744 1.745h8.72c.964 0 1.745-.781 1.745-1.744v-8.72c0-.964-.78-1.745-1.744-1.745ZM35.226 10.81l-5.285 5.284a1.495 1.495 0 0 0 0 2.115l5.285 5.285c.584.584 1.53.584 2.114 0l5.286-5.285a1.495 1.495 0 0 0 0-2.114l-5.285-5.286a1.495 1.495 0 0 0-2.115 0Z"></path></svg>
                </div>
                <h2 className="font-semibold text-xl">Organize your content</h2>
                <p className="leading-6">
                    Sort your future posts into easy-to-find categories, giving you a clean, simple view of what's coming next.
                </p>

            </div>
        </section> */}

    </motion.div>)
}


export default ReceiptLearn;