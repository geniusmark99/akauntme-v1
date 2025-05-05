"use client";
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const HeaderWidget = () => {

    const [isMobile, setIsMobile] = useState(false);
    const url = usePathname()
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <header className={` ${isScrolled ? 'border-transparent bg-transparent' : 'border-transparent bg-transparent'} border-b transition-all fixed w-full z-50 `}>
                <nav className='flex items-center mt-4 justify-between mx-2 md:mx-5 lg:mx-20 p-2'>
                    <div className='flex item-center gap-x-2 justify-start h-full w-auto z-20 relative overflow-visible'>
                        <div className={` ${isScrolled ? ' border-akauntme-deep/50' : 'border-transparent'} bg-white border transition-all relative rounded-full flex items-center  py-1 md:py-2 px-4
                       h-auto mr-0 `}>
                            <Link href='/' className='relative focus:outline-none'>
                                <div className={`${isScrolled ? 'before:bg-akauntme-deep' : 'before:bg-white/80'} flex items-center gap-x-1 justify-center relative before:hidden lg:before:flex
                                  `}>
                                    <svg className={` ${isScrolled ? '' : ''} fill-akauntme-2 size-5  transition-all`} width="65" height="54" viewBox="0 0 65 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M65.0002 53.663H43.6042C39.8534 52.3271 37.166 48.742 37.166 44.5289C37.166 44.095 37.2003 43.6611 37.2575 43.2387L41.0655 36.7535L46.8977 26.8315L65.0002 53.663Z" />
                                        <path d="M43.4551 19.41L27.9943 46.8123L26.2675 49.8837C26.2675 49.8837 26.2446 49.9065 26.2332 49.9179C24.3463 52.2014 21.4989 53.6629 18.2969 53.6629H0L21.7619 15.8477L23.4886 12.8334C23.4886 12.8334 23.4925 12.8296 23.5001 12.822L30.876 0L38.7666 12.1712L41.0079 15.6422L43.4551 19.41Z" />
                                    </svg>
                                    <span className={` ${isScrolled ? '' : ''} text-akauntme-2 font-semibold tracking-wide text-sm `}>Akauntme</span>
                                </div>
                            </Link>

                        </div>
                        <div className='md:hidden relative rounded-full flex justify-center items-center p-1 md:py-2 md:px-3 bg-white h-auto mr-0'>
                            <button
                                onClick={() => setIsMobile(!isMobile)}

                                className={`bg-gradient-to-tr hover:from-akauntme-2 hover:to-blue-600 text-white 
                                    ${isMobile ? 'from-akauntme-2 to-blue-600 text-white *:text-white' : 'from-akauntme-2 to-blue-600'} 
                                 *:hover:text-white flex gap-x-1 
                                 items-center hover:text-white cursor-pointer px-2 py-1 rounded-full border  shadow-md`}>

                                <div className='w-5'>

                                    {
                                        isMobile ?

                                            <svg className='fill-current' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="10.6066" width="15" height="2" rx="1" transform="rotate(-45 0 10.6066)" />
                                                <rect x="1.41418" width="15" height="2" rx="1" transform="rotate(45 1.41418 0)" />
                                            </svg>


                                            :
                                            <svg className='fill-current' width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="15" height="2" rx="1" />
                                                <rect y="6" width="15" height="2" rx="1" />
                                            </svg>
                                    }

                                </div>

                                Menu

                            </button>
                        </div>

                        <div className='hidden md:flex bg-white rounded-full items-center py-2 px-4 border border-akauntme-deep/50 shadow-md'>
                            <ul className='flex justify-between items-center'>
                                <li>
                                    <Link href="/platform"
                                        className={`${url === '/platform' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}
                                    >
                                        Platform
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/learn"

                                        className={`${url === '/learn' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}
                                    >
                                        Learn
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pricing"
                                        className={`${url === '/pricing' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}>
                                        Pricing
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact-us"
                                        className={`${url === '/contact-us' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}>

                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about"
                                        className={`${url === '/about' ? 'bg-akauntme-deep/10' : ''} text-akauntme-deep rounded-full py-1.5 px-4 hover:bg-akauntme-deep/10`}>
                                        About us
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className='flex gap-x-1 items-center'>
                        <div className={` ${isScrolled ? 'border-akauntme-deep/50' : ''} shadow-md bg-white flex items-center p-1 rounded-full relative h-full border border-transparent hover:border-akauntme-deep/50`}>

                            <Link href="/login" className={` ${isScrolled ? 'text-akauntme-deep hover:text-white hover:bg-gradient-to-tr from-blue-600 to-akauntme-2' : 'bg-gradient-to-tr from-blue-600 to-akauntme-2 text-white'} 
                        rounded-full px-2 py-0.5`}>Login</Link>
                        </div>
                        <div className={`  ${isScrolled ? 'border-akauntme-deep/50' : ''} shadow-md hidden md:flex bg-white items-center p-1 rounded-full border border-transparent hover:border-akauntme-deep/50`}>
                            <Link href="/register" className={` ${isScrolled ? 'text-akauntme-deep hover:text-white hover:bg-gradient-to-tr from-blue-600 to-akauntme-2' : 'bg-gradient-to-tr from-blue-600 to-akauntme-2 text-white'} 
                        rounded-full px-2 py-0.5 `}>Register</Link>
                        </div>
                    </div>
                </nav>

            </header>

            <motion.div
                animate={isMobile ? "open" : "closed"}
                style={{ opacity: 0, display: 'none' }}

                variants={{
                    open: {
                        y: 1,
                        opacity: 1,
                        display: 'block',
                        transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                        }
                    },
                    closed: {
                        y: 20,
                        opacity: 0,
                        display: 'none',
                        transition: {
                            duration: 0.3,
                            delay: 0.2
                        }
                    }
                }}

                className='bg-white fixed top-[4.5rem] lg:hidden w-full z-[1000]'>
                <div className='shadow-md rounded-lg mx-6 shadow-akauntme-deep/30 my-5'>
                    <div className='py-2 px-2 mx-4'>
                        <ul className='w-full flex flex-col gap-y-3'>
                            <li className='py-2'>
                                <Link href="/platform" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            Platform
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Manage,track what matters most in your business with <span className='text-akauntme-deep italic'>Akauntme</span>
                                    </div>

                                </Link>
                            </li>

                            <li className='py-2'>
                                <Link href="/learn" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            Learn
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Learn how <span className='text-akauntme-deep italic'>Akauntme</span> can be valuable for both your Business usage
                                    </div>

                                </Link>
                            </li>



                            <li className='py-2'>
                                <Link href="/pricing" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            Pricing
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Get the pricing plan that suites your Business usage
                                    </div>

                                </Link>
                            </li>



                            <li className='py-2'>
                                <Link href="/contact-us" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            Contact us
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Have any complain or recommendation, we are all ears.
                                    </div>

                                </Link>
                            </li>


                            <li className='py-2'>
                                <Link href="/about" className='relative before:w-full before:h-[0.15px] before:-bottom-2 before:absolute before:content-[""] before:bg-gray-200 flex flex-col items-start  gap-y-3 py-2 mx-2'>
                                    <div className='flex justify-between items-center gap-y-3 w-full'>
                                        <h1 className='semibold'>
                                            About us
                                        </h1>

                                        <div>
                                            <svg className='size-6 stroke-gray-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.71 12.23H5" stroke="black" strokeWidth="1.5"></path><path d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901" stroke="black" strokeOpacity="0.99" strokeWidth="1.5"></path></svg>
                                        </div>

                                    </div>

                                    <div className='text-xs text-gray-500'>
                                        Get to know the team behind Akauntme
                                    </div>

                                </Link>
                            </li>

                            <li className='py-2 w-full'>

                                <a href="#" className='rounded-full px-2 py-2 w-full  hover:bg-white hover:text-akauntme-deep hover:shadow-md text-white bg-akauntme-deep'>Book Demo</a>

                            </li>








                        </ul>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default HeaderWidget;