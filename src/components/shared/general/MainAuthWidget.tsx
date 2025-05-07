'use client'
import Link from "next/link";
import { useState, useEffect, ReactNode, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import {
    LogoIcon, DashboardIcon, SalesIcon, StocksIcon,
    ReportsIcon, SettingsIcon, MarketplaceIcon,
    InvoiceIcon,
} from "@/components/shared/icons"
import { usePathname } from "next/navigation";
import DarkModeWidget from "./DarkModeWidget";
import GeneralSearchWidget from "./GeneralSearchWidget";
import ToolTipWidget from "./ToolTipWidget";


interface MainAuthProps {
    children: ReactNode;
    className?: string;
}


const MainAuthWidget: React.FC<MainAuthProps> = ({ children, className }) => {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const [isProfile, setIsProfile] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null)
    // const notifyRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsProfile(false)
                setIsNotification(false)
            }
        }

        if (isProfile || isNotification) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isProfile, isNotification])



    const [isExpanded, setIsExpanded] = useState(true);
    useEffect(() => {
        document.body.className = "overflow-hidden";
    }, [])

    const toggleSidebar = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        localStorage.setItem('isAkauntmeExpanded', JSON.stringify(newState));
    };

    useEffect(() => {
        const storedState = localStorage.getItem('isAkauntmeExpanded');
        if (storedState !== null) {
            setIsExpanded(JSON.parse(storedState));
        }
    }, []);

    const Links = [
        {
            id: 1, name: "Dashboard",
            icon: <DashboardIcon className='size-5 fill-current' type="filled" />,
            link: '/dashboard',
            title: 'Dashboard'
        },
        {
            id: 2, name: "Sales",
            icon: <SalesIcon className='size-5 fill-current' />,
            link: '/sales',
            title: 'Sales'
        },
        {
            id: 3, name: "Invoice",
            icon: <InvoiceIcon className='size-5 fill-current' />,
            link: '/invoice',
            title: 'Invoice'
        },
        {
            id: 4, name: "Stocks",
            icon: <StocksIcon className='size-5 fill-current' />,
            link: '/stocks',
            title: 'Stocks'
        },
        {
            id: 5, name: "Marketplace",
            icon: <MarketplaceIcon type="filled" className='size-5 fill-current' />,
            link: '/marketplace',
            title: 'Marketplace'
        },


        {
            id: 7, name: "Reports",
            icon: <ReportsIcon className='size-5 fill-current' />,
            link: '/reports',
            title: 'Reports'
        },

        // {
        //     id: 6, name: "Expenses",
        //     icon: <ExpensesIcon className='size-5 fill-current' />,
        //     link: '/expenses',
        //     title: 'Expenses'
        // },


        // {
        //     id: 8, name: "Activities",
        //     icon: <ActivitiesIcon className='size-5 fill-current' />,
        //     link: '/activities',
        //     title: 'Activities'
        // },

        {
            id: 9, name: "Settings",
            icon: <SettingsIcon className='size-5 fill-current' type='filled' />,
            link: '/settings',
            title: 'Settings'
        },



    ];

    return (
        <div className={`flex w-full overflow-hidden ${className} relative `}>
            <div className={`relative flex h-screen ${isExpanded ? "w-[14%]" : "w-[5%]"} hidden lg:block transition-width duration-300 bg-gradient-to-tr to-akauntme from-indigo-500  dark:to-zinc-800 dark:from-zinc-950 relative`}>

                <button
                    onClick={toggleSidebar}
                    className="text-white self-end p-1.5 shadow-md  rounded-full 
                focus:outline-none absolute right-1 top-6 z-[1000]"
                >
                    {isExpanded ?
                        <svg className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path d="M21.470703 8.9863281 A 1.50015 1.50015 0 0 0 20.439453 9.4394531L6.4394531 23.439453 A 1.50015 1.50015 0 0 0 6.4394531 25.560547L20.439453 39.560547 A 1.50015 1.50015 0 1 0 22.560547 37.439453L11.121094 26L40.5 26 A 1.50015 1.50015 0 1 0 40.5 23L11.121094 23L22.560547 11.560547 A 1.50015 1.50015 0 0 0 21.470703 8.9863281 z" />
                        </svg>
                        :
                        <svg className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path d="M26.484375 8.984375 A 1.50015 1.50015 0 0 0 25.439453 11.560547L36.878906 23L7.5 23 A 1.50015 1.50015 0 1 0 7.5 26L36.878906 26L25.439453 37.439453 A 1.50015 1.50015 0 1 0 27.560547 39.560547L41.560547 25.560547 A 1.50015 1.50015 0 0 0 41.560547 23.439453L27.560547 9.4394531 A 1.50015 1.50015 0 0 0 26.484375 8.984375 z" />
                        </svg>
                    }
                </button>



                <div className="flex flex-col justify-between h-full p-4  relative">
                    <div>
                        <div className='border-b border-white/20 shadow-sm py-3 text-center flex items-center justify-center 
                        '>

                            <h1 className={`text-white flex items-center gap-x-2 font-bold text-xl ${isExpanded ? "block" : "hidden"} text-center`}>
                                <LogoIcon type="alone" className="size-6 fill-white" /> Akauntme

                            </h1>
                            <h1 className={`text-white font-bold text-xl ${isExpanded ? "hidden" : "block mr-2"} text-center flex justify-center`}>
                                <LogoIcon type="alone" className="size-6 fill-white" />
                            </h1>
                        </div>


                        <ul className="mt-10 flex flex-col h-[70vh] justify-around relative">


                            {
                                Links.map((e, index) => {
                                    return (
                                        <motion.li className="text-white dark:text-gray-200 text-lg group" key={index}
                                            whileHover={{
                                                scale: 0.95,
                                            }}
                                            whileTap={{
                                                scale: 1
                                            }}

                                        >
                                            <Link

                                                href={e.link}
                                                className={`${pathname === e.link ? '' : ''} flex items-center gap-x-2  rounded-md group ${isExpanded ? "" : "justify-center"}`}
                                            >
                                                {isExpanded ?
                                                    <div className={`hidden lg:block  hover:bg-white rounded-md  hover:text-indigo-500  dark:hover:text-zinc-600 p-1 group-hover:bg-white group-hover:text-indigo-500 dark:group-hover:text-zinc-600 ${pathname === e.link ? 'bg-white dark:bg-zinc-100 text-indigo-500 dark:text-zinc-600' : 'bg-transparent text-white'}`}>{e.icon}</div>
                                                    :

                                                    <ToolTipWidget text={`${e.title}`} bg="akauntme" className={`rounded-md *:hover:bg-white *:hover:text-indigo-500 *:dark:hover:text-zinc-600`} position="">
                                                        <div className={` rounded-md  p-1 ${pathname === e.link ? 'text-indigo-500 dark:text-zinc-600 bg-white' : 'text-white hover:text-indigo-500 dark:hover:text-zinc-600 bg-transparent hover:bg-white'}`}>{e.icon}</div>
                                                    </ToolTipWidget>

                                                }



                                                <div className={` ${isExpanded ? "block" : "hidden"} text-sm font-semibold p-1 rounded-md`}>
                                                    {e.name}
                                                </div>
                                            </Link>
                                        </motion.li>
                                    )
                                })
                            }

                        </ul>
                        <div className="mt-16">
                            <motion.div className="text-white text-lg flex gap-x-1 items-center"
                                whileHover={{
                                    scale: 0.95,
                                }}
                                whileTap={{
                                    scale: 1
                                }}
                            >
                                {/* <Link href="#" className={`flex items-center gap-x-[-10px] ${isExpanded ? "" : "justify-center"} *:hover:bg-white *:hover:text-indigo-500 `}>
                                    <div className='bg-transparent hover:bg-white rounded-md text-white hover:text-indigo-500 p-2'>
                                        <LogoutIcon className="size-5 fill-current" type="desktop" />

                                    </div>
                                    <div className={` ${isExpanded ? "block" : "hidden"} text-base font-semibold p-1 rounded-md`}>
                                        Logout
                                    </div>
                                </Link> */}

                                <DarkModeWidget close={isExpanded} />
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div >
            <div className={` ${isExpanded ? 'w-full lg:w-[86%]' : 'w-full lg:w-[95%]'} bg-white dark:bg-zinc-900 overflow-y-auto h-screen overflow-x-hidden`}>
                <div className="mb-10 pt-4  text-gray-700 z-[900]">

                    {/* 
                    <div className="px-5 bg-gradient-to-r absolute w-auto z-[1000] from-red-500 via-purple-400 to-blue-500 rounded-md my-2 shadow-lg shadow-akauntme/30">
                        <div className="max-w-[85rem] px-4 py-2.5 sm:px-6 lg:px-8 mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="text-center md:text-start">
                                    <p className="text-xs flex items-center gap-x-1 text-white uppercase tracking-wider font-bold">
                                        Akauntme
                                        <div>
                                            <svg className='size-4 fill-gray-100 stroke-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                <path d="M38.28125 5.3144531C38.006566 5.3328158 37.730624 5.3832154 37.458984 5.4667969 A 1.50015 1.50015 0 0 0 37.416016 5.4804688L18.197266 12.017578L9.0878906 12.705078 A 1.50015 1.50015 0 0 0 9.0585938 12.707031C6.2315486 12.976227 4 15.337314 4 18.199219L4 25.800781C4 28.213351 5.6211273 30.187683 7.8125 30.935547L8.7050781 39.314453C8.8709469 41.470747 10.73155 43 12.800781 43C15.100781 43 16.900391 41.086105 16.900391 38.900391L16.900391 31.904297L18.103516 31.984375L37.316406 38.519531 A 1.50015 1.50015 0 0 0 37.359375 38.533203C39.532492 39.201855 41.900391 37.52779 41.900391 35.199219L41.900391 26.230469C43.412051 25.658203 44.5 24.205783 44.5 22.5C44.5 20.794217 43.412051 19.341797 41.900391 18.769531L41.900391 8.8007812L41.896484 8.90625C41.981023 7.7227104 41.42825 6.603279 40.564453 5.9667969C40.132555 5.6485558 39.62839 5.4410173 39.095703 5.3535156C38.82936 5.3097648 38.555934 5.2960905 38.28125 5.3144531 z M 38.611328 8.3105469C38.684712 8.3230234 38.742055 8.3510535 38.785156 8.3828125C38.871356 8.4463305 38.919758 8.4768985 38.904297 8.6933594 A 1.50015 1.50015 0 0 0 38.900391 8.8007812L38.900391 35.199219C38.900391 35.669708 38.667445 35.796078 38.242188 35.666016L18.882812 29.080078 A 1.50015 1.50015 0 0 0 18.5 29.003906L15.5 28.802734 A 1.50015 1.50015 0 0 0 13.900391 30.300781L13.900391 38.900391C13.900391 39.514676 13.500781 40 12.800781 40C12.270012 40 11.729444 39.527691 11.695312 39.083984 A 1.50015 1.50015 0 0 0 11.691406 39.041016L10.691406 29.640625 A 1.50015 1.50015 0 0 0 9.3417969 28.306641C7.9688441 28.175883 7 27.138876 7 25.800781L7 18.199219C7 16.861124 7.9688441 15.824117 9.3417969 15.693359L17 15.117188L17 24.5 A 1.50015 1.50015 0 1 0 20 24.5L20 14.574219L38.341797 8.3339844C38.448517 8.3011474 38.537944 8.2980704 38.611328 8.3105469 z" />
                                            </svg>
                                        </div>
                                    </p>
                                    <p className="mt-1 text-white font-medium text-[10px] sm:text-sm">
                                        Latest updates and Features
                                    </p>
                                </div>

                                <div className=" text-center flex md:text-start justify-end gap-x-1 items-center">

                                    <a className="py-1 sm:py-2 px-2 sm:px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none" href="../figma.html">
                                        Learn more
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </a>

                                    <a className="p-2 size-7 text-xl flex justify-center items-center gap-x-2 font-thin rounded-full text-gray-200 hover:text-white shadow-sm hover:bg-gray-50/50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
                                        &times;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <header className={` ${isExpanded ? 'w-full lg:w-[86%]' : 'w-full lg:w-[95%]'}  flex justify-between items-center border-b top-0 z-[2000] border-gray-100 dark:border-zinc-600 px-5 py-2 lg:py-3.5 fixed bg-white dark:bg-zinc-900`}>
                        <div className="flex lg:hidden w-[10%] relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-white bg-gradient-to-tr from-akauntme to-blue-500 dark:from-zinc-700 dark:to-zinc-600 rounded-md focus:outline-none"
                            >
                                {isOpen ?

                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 fill-white" viewBox="0 0 48 48" >
                                        <path d="M38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375L24 21.171875L10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062L21.171875 24L7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062L24 26.828125L37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938L26.828125 24L40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z" />
                                    </svg>

                                    : <svg className="size-4 stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>}
                            </button>
                        </div>

                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-14 left-0 right-0 mt-2 bg-white dark:bg-zinc-800 shadow-md overflow-hidden lg:hidden z-[3000] border-b  border-akauntme dark:border-zinc-600"
                        >
                            <ul className="flex space-x-4 p-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                                {
                                    Links.map((e, index) => {
                                        return (
                                            <li key={index} className="relative">
                                                <Link href={e.link}
                                                    className={`${pathname === e.link ? 'text-akauntme dark:text-zinc-800 bg-akauntme/5 dark:bg-zinc-100 shadow-inner shadow-akauntme/10' : 'text-gray-600 dark:text-zinc-200 bg-transparent'} flex items-center gap-x-1 px-4 py-2  hover:text-akauntme dark:hover:text-zinc-200 hover:bg-akauntme/5 dark:hover:bg-zinc-900 rounded-md hover:shadow-inner hover:shadow-akauntme/10`}

                                                >
                                                    {e.icon}
                                                    {e.name}
                                                </Link>
                                            </li>)
                                    })
                                }

                            </ul>
                        </motion.div>
                        <GeneralSearchWidget />
                        <div className="flex items-center gap-x-2">
                            <button onClick={() => setIsNotification(prev => !prev)} className="rounded-full size-8 flex justify-center items-center border border-indigo-500/50 dark:border-zinc-700 shadow-md shadow-akauntme/20 dark:shadow-zinc-900">
                                <svg className="size-4 stroke-indigo-500 dark:stroke-zinc-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                </svg>
                            </button>
                            <div>
                                <button
                                    onClick={() => setIsProfile(prev => !prev)}
                                    className="rounded-full size-10   text-white bg-contain border-2 shadow-md focus:border-indigo-400"
                                    style={{ backgroundImage: "url('/images/user.jpeg')" }}
                                >

                                </button>

                                <AnimatePresence>
                                    {isProfile && (
                                        <motion.div
                                            ref={modalRef}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute mt-2 w-60 right-2 z-[3000] origin-top-right bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg"
                                        >
                                            <div className="py-2 text-sm text-gray-700 dark:text-zinc-100 space-y-2">


                                                <a href="#" className="block px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center gap-x-2">

                                                        <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                            <path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.346499 31 37 31.653501 37 32.5L37 33.699219C37 35.364355 35.927463 37.127823 33.677734 38.5625C31.428006 39.997177 28.068841 41 24 41C19.931159 41 16.571994 39.997177 14.322266 38.5625C12.072537 37.127823 11 35.364355 11 33.699219L11 32.5C11 31.653501 11.653501 31 12.5 31 z" />
                                                        </svg>
                                                        My profile
                                                    </div>

                                                </a>

                                                <a href="#" className="block px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center gap-x-2">
                                                        <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                            <path d="M24 4C22.423103 4 20.902664 4.1994284 19.451172 4.5371094 A 1.50015 1.50015 0 0 0 18.300781 5.8359375L17.982422 8.7382812C17.878304 9.6893592 17.328913 10.530853 16.5 11.009766C15.672739 11.487724 14.66862 11.540667 13.792969 11.15625L13.791016 11.15625L11.125 9.9824219 A 1.50015 1.50015 0 0 0 9.4257812 10.330078C7.3532865 12.539588 5.7626807 15.215064 4.859375 18.201172 A 1.50015 1.50015 0 0 0 5.4082031 19.845703L7.7734375 21.580078C8.5457929 22.147918 9 23.042801 9 24C9 24.95771 8.5458041 25.853342 7.7734375 26.419922L5.4082031 28.152344 A 1.50015 1.50015 0 0 0 4.859375 29.796875C5.7625845 32.782665 7.3519262 35.460112 9.4257812 37.669922 A 1.50015 1.50015 0 0 0 11.125 38.015625L13.791016 36.841797C14.667094 36.456509 15.672169 36.511947 16.5 36.990234C17.328913 37.469147 17.878304 38.310641 17.982422 39.261719L18.300781 42.164062 A 1.50015 1.50015 0 0 0 19.449219 43.460938C20.901371 43.799844 22.423103 44 24 44C25.576897 44 27.097336 43.800572 28.548828 43.462891 A 1.50015 1.50015 0 0 0 29.699219 42.164062L30.017578 39.261719C30.121696 38.310641 30.671087 37.469147 31.5 36.990234C32.327261 36.512276 33.33138 36.45738 34.207031 36.841797L36.875 38.015625 A 1.50015 1.50015 0 0 0 38.574219 37.669922C40.646713 35.460412 42.237319 32.782983 43.140625 29.796875 A 1.50015 1.50015 0 0 0 42.591797 28.152344L40.226562 26.419922C39.454197 25.853342 39 24.95771 39 24C39 23.04229 39.454197 22.146658 40.226562 21.580078L42.591797 19.847656 A 1.50015 1.50015 0 0 0 43.140625 18.203125C42.237319 15.217017 40.646713 12.539588 38.574219 10.330078 A 1.50015 1.50015 0 0 0 36.875 9.984375L34.207031 11.158203C33.33138 11.54262 32.327261 11.487724 31.5 11.009766C30.671087 10.530853 30.121696 9.6893592 30.017578 8.7382812L29.699219 5.8359375 A 1.50015 1.50015 0 0 0 28.550781 4.5390625C27.098629 4.2001555 25.576897 4 24 4 z M 24 7C24.974302 7 25.90992 7.1748796 26.847656 7.3398438L27.035156 9.0644531C27.243038 10.963375 28.346913 12.652335 30 13.607422C31.654169 14.563134 33.668094 14.673009 35.416016 13.904297L37.001953 13.207031C38.219788 14.669402 39.183985 16.321182 39.857422 18.130859L38.451172 19.162109C36.911538 20.291529 36 22.08971 36 24C36 25.91029 36.911538 27.708471 38.451172 28.837891L39.857422 29.869141C39.183985 31.678818 38.219788 33.330598 37.001953 34.792969L35.416016 34.095703C33.668094 33.326991 31.654169 33.436866 30 34.392578C28.346913 35.347665 27.243038 37.036625 27.035156 38.935547L26.847656 40.660156C25.910002 40.82466 24.973817 41 24 41C23.025698 41 22.09008 40.82512 21.152344 40.660156L20.964844 38.935547C20.756962 37.036625 19.653087 35.347665 18 34.392578C16.345831 33.436866 14.331906 33.326991 12.583984 34.095703L10.998047 34.792969C9.7799772 33.330806 8.8159425 31.678964 8.1425781 29.869141L9.5488281 28.837891C11.088462 27.708471 12 25.91029 12 24C12 22.08971 11.087719 20.290363 9.5488281 19.160156L8.1425781 18.128906C8.8163325 16.318532 9.7814501 14.667839 11 13.205078L12.583984 13.902344C14.331906 14.671056 16.345831 14.563134 18 13.607422C19.653087 12.652335 20.756962 10.963375 20.964844 9.0644531L21.152344 7.3398438C22.089998 7.1753403 23.026183 7 24 7 z M 24 16C19.599487 16 16 19.59949 16 24C16 28.40051 19.599487 32 24 32C28.400513 32 32 28.40051 32 24C32 19.59949 28.400513 16 24 16 z M 24 19C26.779194 19 29 21.220808 29 24C29 26.779192 26.779194 29 24 29C21.220806 29 19 26.779192 19 24C19 21.220808 21.220806 19 24 19 z" />
                                                        </svg>
                                                        Settings
                                                    </div>

                                                </a>

                                                <a href="#" className="block px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center gap-x-2">
                                                        <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                            <path d="M24 4C12.972066 4 4 12.972074 4 24C4 35.027926 12.972066 44 24 44C35.027934 44 44 35.027926 44 24C44 12.972074 35.027934 4 24 4 z M 24 7C33.406615 7 41 14.593391 41 24C41 33.406609 33.406615 41 24 41C14.593385 41 7 33.406609 7 24C7 14.593391 14.593385 7 24 7 z M 24 13C20.704135 13 18 15.704135 18 19L18 19.5 A 1.50015 1.50015 0 1 0 21 19.5L21 19C21 17.325865 22.325865 16 24 16C25.674135 16 27 17.325865 27 19C27 21.340909 26.39136 21.634239 25.324219 22.472656C24.790648 22.891865 24.091764 23.375202 23.494141 24.189453C22.896517 25.003704 22.5 26.138742 22.5 27.5 A 1.50015 1.50015 0 1 0 25.5 27.5C25.5 26.646758 25.665983 26.300186 25.912109 25.964844C26.158236 25.629501 26.584352 25.296698 27.175781 24.832031C28.35864 23.902698 30 22.159091 30 19C30 15.704135 27.295865 13 24 13 z M 24 32 A 2 2 0 0 0 24 36 A 2 2 0 0 0 24 32 z" />
                                                        </svg>
                                                        Help & Supports
                                                    </div>

                                                </a>

                                                <a href="#" className="block px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center gap-x-2">
                                                        <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                            <path d="M11.5 6C8.4802259 6 6 8.4802259 6 11.5L6 36.5C6 39.519774 8.4802259 42 11.5 42L29.5 42C32.519774 42 35 39.519774 35 36.5 A 1.50015 1.50015 0 1 0 32 36.5C32 37.898226 30.898226 39 29.5 39L11.5 39C10.101774 39 9 37.898226 9 36.5L9 11.5C9 10.101774 10.101774 9 11.5 9L29.5 9C30.898226 9 32 10.101774 32 11.5 A 1.50015 1.50015 0 1 0 35 11.5C35 8.4802259 32.519774 6 29.5 6L11.5 6 z M 33.484375 15.484375 A 1.50015 1.50015 0 0 0 32.439453 18.060547L36.878906 22.5L15.5 22.5 A 1.50015 1.50015 0 1 0 15.5 25.5L36.878906 25.5L32.439453 29.939453 A 1.50015 1.50015 0 1 0 34.560547 32.060547L41.560547 25.060547 A 1.50015 1.50015 0 0 0 41.560547 22.939453L34.560547 15.939453 A 1.50015 1.50015 0 0 0 33.484375 15.484375 z" />
                                                        </svg>
                                                        Sign out
                                                    </div>

                                                </a>

                                                <div className="border-t border-gray-200 dark:border-zinc-600 md:hidden">
                                                    <div className="mt-5 mx-10">
                                                        <DarkModeWidget />
                                                    </div>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {isNotification && (
                                        <motion.div
                                            ref={modalRef}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute mt-2 w-[260px] md:w-[320px] p-2 lg:w-[400px] right-2 z-[1000] origin-top-right bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg"
                                        >
                                            <h1>Notification</h1>
                                            {/* <div className="py-2 text-sm text-gray-700 dark:text-zinc-100 space-y-2">


                                                <a href="#" className="block px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center gap-x-2">

                                                        <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                            <path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.346499 31 37 31.653501 37 32.5L37 33.699219C37 35.364355 35.927463 37.127823 33.677734 38.5625C31.428006 39.997177 28.068841 41 24 41C19.931159 41 16.571994 39.997177 14.322266 38.5625C12.072537 37.127823 11 35.364355 11 33.699219L11 32.5C11 31.653501 11.653501 31 12.5 31 z" />
                                                        </svg>
                                                        My profile
                                                    </div>

                                                </a>

                                                <a href="#" className="block px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center gap-x-2">
                                                        <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                            <path d="M24 4C22.423103 4 20.902664 4.1994284 19.451172 4.5371094 A 1.50015 1.50015 0 0 0 18.300781 5.8359375L17.982422 8.7382812C17.878304 9.6893592 17.328913 10.530853 16.5 11.009766C15.672739 11.487724 14.66862 11.540667 13.792969 11.15625L13.791016 11.15625L11.125 9.9824219 A 1.50015 1.50015 0 0 0 9.4257812 10.330078C7.3532865 12.539588 5.7626807 15.215064 4.859375 18.201172 A 1.50015 1.50015 0 0 0 5.4082031 19.845703L7.7734375 21.580078C8.5457929 22.147918 9 23.042801 9 24C9 24.95771 8.5458041 25.853342 7.7734375 26.419922L5.4082031 28.152344 A 1.50015 1.50015 0 0 0 4.859375 29.796875C5.7625845 32.782665 7.3519262 35.460112 9.4257812 37.669922 A 1.50015 1.50015 0 0 0 11.125 38.015625L13.791016 36.841797C14.667094 36.456509 15.672169 36.511947 16.5 36.990234C17.328913 37.469147 17.878304 38.310641 17.982422 39.261719L18.300781 42.164062 A 1.50015 1.50015 0 0 0 19.449219 43.460938C20.901371 43.799844 22.423103 44 24 44C25.576897 44 27.097336 43.800572 28.548828 43.462891 A 1.50015 1.50015 0 0 0 29.699219 42.164062L30.017578 39.261719C30.121696 38.310641 30.671087 37.469147 31.5 36.990234C32.327261 36.512276 33.33138 36.45738 34.207031 36.841797L36.875 38.015625 A 1.50015 1.50015 0 0 0 38.574219 37.669922C40.646713 35.460412 42.237319 32.782983 43.140625 29.796875 A 1.50015 1.50015 0 0 0 42.591797 28.152344L40.226562 26.419922C39.454197 25.853342 39 24.95771 39 24C39 23.04229 39.454197 22.146658 40.226562 21.580078L42.591797 19.847656 A 1.50015 1.50015 0 0 0 43.140625 18.203125C42.237319 15.217017 40.646713 12.539588 38.574219 10.330078 A 1.50015 1.50015 0 0 0 36.875 9.984375L34.207031 11.158203C33.33138 11.54262 32.327261 11.487724 31.5 11.009766C30.671087 10.530853 30.121696 9.6893592 30.017578 8.7382812L29.699219 5.8359375 A 1.50015 1.50015 0 0 0 28.550781 4.5390625C27.098629 4.2001555 25.576897 4 24 4 z M 24 7C24.974302 7 25.90992 7.1748796 26.847656 7.3398438L27.035156 9.0644531C27.243038 10.963375 28.346913 12.652335 30 13.607422C31.654169 14.563134 33.668094 14.673009 35.416016 13.904297L37.001953 13.207031C38.219788 14.669402 39.183985 16.321182 39.857422 18.130859L38.451172 19.162109C36.911538 20.291529 36 22.08971 36 24C36 25.91029 36.911538 27.708471 38.451172 28.837891L39.857422 29.869141C39.183985 31.678818 38.219788 33.330598 37.001953 34.792969L35.416016 34.095703C33.668094 33.326991 31.654169 33.436866 30 34.392578C28.346913 35.347665 27.243038 37.036625 27.035156 38.935547L26.847656 40.660156C25.910002 40.82466 24.973817 41 24 41C23.025698 41 22.09008 40.82512 21.152344 40.660156L20.964844 38.935547C20.756962 37.036625 19.653087 35.347665 18 34.392578C16.345831 33.436866 14.331906 33.326991 12.583984 34.095703L10.998047 34.792969C9.7799772 33.330806 8.8159425 31.678964 8.1425781 29.869141L9.5488281 28.837891C11.088462 27.708471 12 25.91029 12 24C12 22.08971 11.087719 20.290363 9.5488281 19.160156L8.1425781 18.128906C8.8163325 16.318532 9.7814501 14.667839 11 13.205078L12.583984 13.902344C14.331906 14.671056 16.345831 14.563134 18 13.607422C19.653087 12.652335 20.756962 10.963375 20.964844 9.0644531L21.152344 7.3398438C22.089998 7.1753403 23.026183 7 24 7 z M 24 16C19.599487 16 16 19.59949 16 24C16 28.40051 19.599487 32 24 32C28.400513 32 32 28.40051 32 24C32 19.59949 28.400513 16 24 16 z M 24 19C26.779194 19 29 21.220808 29 24C29 26.779192 26.779194 29 24 29C21.220806 29 19 26.779192 19 24C19 21.220808 21.220806 19 24 19 z" />
                                                        </svg>
                                                        Settings
                                                    </div>

                                                </a>

                                                <a href="#" className="block px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center gap-x-2">
                                                        <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                            <path d="M24 4C12.972066 4 4 12.972074 4 24C4 35.027926 12.972066 44 24 44C35.027934 44 44 35.027926 44 24C44 12.972074 35.027934 4 24 4 z M 24 7C33.406615 7 41 14.593391 41 24C41 33.406609 33.406615 41 24 41C14.593385 41 7 33.406609 7 24C7 14.593391 14.593385 7 24 7 z M 24 13C20.704135 13 18 15.704135 18 19L18 19.5 A 1.50015 1.50015 0 1 0 21 19.5L21 19C21 17.325865 22.325865 16 24 16C25.674135 16 27 17.325865 27 19C27 21.340909 26.39136 21.634239 25.324219 22.472656C24.790648 22.891865 24.091764 23.375202 23.494141 24.189453C22.896517 25.003704 22.5 26.138742 22.5 27.5 A 1.50015 1.50015 0 1 0 25.5 27.5C25.5 26.646758 25.665983 26.300186 25.912109 25.964844C26.158236 25.629501 26.584352 25.296698 27.175781 24.832031C28.35864 23.902698 30 22.159091 30 19C30 15.704135 27.295865 13 24 13 z M 24 32 A 2 2 0 0 0 24 36 A 2 2 0 0 0 24 32 z" />
                                                        </svg>
                                                        Help & Supports
                                                    </div>

                                                </a>

                                                <a href="#" className="block px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700">
                                                    <div className="flex items-center gap-x-2">
                                                        <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                            <path d="M11.5 6C8.4802259 6 6 8.4802259 6 11.5L6 36.5C6 39.519774 8.4802259 42 11.5 42L29.5 42C32.519774 42 35 39.519774 35 36.5 A 1.50015 1.50015 0 1 0 32 36.5C32 37.898226 30.898226 39 29.5 39L11.5 39C10.101774 39 9 37.898226 9 36.5L9 11.5C9 10.101774 10.101774 9 11.5 9L29.5 9C30.898226 9 32 10.101774 32 11.5 A 1.50015 1.50015 0 1 0 35 11.5C35 8.4802259 32.519774 6 29.5 6L11.5 6 z M 33.484375 15.484375 A 1.50015 1.50015 0 0 0 32.439453 18.060547L36.878906 22.5L15.5 22.5 A 1.50015 1.50015 0 1 0 15.5 25.5L36.878906 25.5L32.439453 29.939453 A 1.50015 1.50015 0 1 0 34.560547 32.060547L41.560547 25.060547 A 1.50015 1.50015 0 0 0 41.560547 22.939453L34.560547 15.939453 A 1.50015 1.50015 0 0 0 33.484375 15.484375 z" />
                                                        </svg>
                                                        Sign out
                                                    </div>

                                                </a>
                                            </div> */}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                    </header>
                    {children}

                </div>
                <button className="absolute flex flex-col justify-center items-center right-10 lg:left-[92%] z-[1000] bottom-14 lg:bottom-10 ">
                    <div className="h-8 hidden mx-10 lg:block">
                        <svg className="size-12" viewBox="0 0 20 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.02415 5C8.00414 5 7.98413 4.9895 7.96412 4.97899C7.9341 4.95798 7.91409 4.90546 7.9241 4.86345L8.20981 3.74542C8.30437 3.37539 8.1799 2.9838 7.88904 2.73628L7.12839 2.08894C7.07206 2.041 6.99433 1.99474 7.00047 1.92102C7.00103 1.91429 7.00209 1.90765 7.00361 1.90126C7.01361 1.85924 7.05364 1.82773 7.09366 1.82773L8.13688 1.76975C8.53593 1.74757 8.88346 1.48991 9.02064 1.11452L9.36777 0.16458C9.39244 0.0970734 9.41961 0.014202 9.49032 0.00134975C9.49517 0.000468987 9.50005 0 9.50493 0C9.54495 0 9.58497 0.0315126 9.59498 0.0630252L9.97922 1.11452C10.1164 1.48991 10.4639 1.74757 10.863 1.76975L11.9062 1.82773C11.9462 1.82773 11.9862 1.85924 11.9962 1.90126C12.0063 1.94328 11.9962 1.98529 11.9662 2.01681L11.1208 2.73628C10.83 2.9838 10.7055 3.37539 10.8001 3.74542L11.0858 4.86345C11.0958 4.90546 11.0858 4.94748 11.0457 4.97899C11.0427 4.9811 11.0395 4.9831 11.0361 4.98497C10.9732 5.01977 10.9056 4.95868 10.846 4.9184L10.0647 4.39066C9.72646 4.16224 9.2834 4.16224 8.94521 4.39066L8.12109 4.94731C8.0899 4.96837 8.06178 5 8.02415 5Z" />
                            <path d="M0.867728 6.90448C0.858349 6.90448 0.84897 6.89956 0.839591 6.89464C0.825522 6.88479 0.816142 6.86017 0.820832 6.84048L0.872653 6.6377C0.967216 6.26766 0.842749 5.87608 0.551891 5.62855L0.455023 5.54611C0.423867 5.5196 0.37991 5.49186 0.389387 5.45206C0.394076 5.43237 0.412835 5.4176 0.431593 5.4176L0.571153 5.40984C0.970208 5.38766 1.31773 5.13 1.45491 4.75461L1.49514 4.64452C1.50827 4.60858 1.52353 4.56091 1.56179 4.56091C1.58055 4.56091 1.59931 4.57568 1.604 4.59045L1.66399 4.75461C1.80116 5.13 2.14869 5.38766 2.54774 5.40984L2.6873 5.4176C2.70606 5.4176 2.72482 5.43237 2.72951 5.45206C2.7342 5.47176 2.72951 5.49145 2.71544 5.50622L2.57169 5.62855C2.28084 5.87608 2.15637 6.26766 2.25093 6.6377L2.30275 6.84048C2.30744 6.86017 2.30275 6.87987 2.28399 6.89464C2.25347 6.916 2.21684 6.88412 2.18597 6.86327L2.12151 6.81974C1.78332 6.59131 1.34026 6.59131 1.00207 6.81974L0.913165 6.87979C0.898549 6.88966 0.885366 6.90448 0.867728 6.90448Z" />
                            <path d="M16.7522 6.45299C16.7375 6.45299 16.7228 6.44527 16.7081 6.43756C16.6861 6.42213 16.6714 6.38355 16.6787 6.35269L16.8475 5.6921C16.9421 5.32206 16.8176 4.93048 16.5268 4.68295L16.1055 4.32444C16.0567 4.28289 15.9878 4.23942 16.0027 4.17706C16.01 4.1462 16.0394 4.12305 16.0688 4.12305L16.6604 4.09017C17.0594 4.06799 17.4069 3.81033 17.5441 3.43494L17.7354 2.91165C17.7559 2.85534 17.7798 2.78064 17.8398 2.78064C17.8692 2.78064 17.8986 2.80378 17.9059 2.82693L18.1281 3.43494C18.2653 3.81033 18.6128 4.06799 19.0119 4.09017L19.6035 4.12305C19.6329 4.12305 19.6622 4.1462 19.6696 4.17706C19.6769 4.20792 19.6696 4.23878 19.6475 4.26192L19.1528 4.68295C18.862 4.93048 18.7375 5.32206 18.8321 5.6921L19.0009 6.35269C19.0082 6.38355 19.0009 6.41441 18.9715 6.43756C18.9237 6.47103 18.8662 6.42108 18.8179 6.3884L18.3995 6.10584C18.0613 5.87741 17.6183 5.87741 17.2801 6.10583L16.8234 6.41429C16.8005 6.42976 16.7798 6.45299 16.7522 6.45299Z" />
                        </svg>
                    </div>
                    <div className="size-12 border border-transparent shadow-md shadow-akauntme/50 dark:shadow-none bg-gradient-to-tr from-teal-600 to-akauntme rounded-full flex justify-center items-center">
                        <svg className="size-8" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8315 4.67346C18.8315 3.84504 19.5031 3.17346 20.3315 3.17346C21.16 3.17346 21.8315 3.84503 21.8315 4.67346V12.1735H20.8315C19.727 12.1735 18.8315 11.278 18.8315 10.1735V4.67346Z" fill="white" />
                            <circle opacity="1" cx="16.8315" cy="11.1735" r="1" fill="white" />
                            <path d="M14.8316 12.4182H9.94954C9.09367 12.1133 8.48047 11.2953 8.48047 10.3339C8.48047 10.2349 8.4883 10.1359 8.50134 10.0395L9.37026 8.55975L10.701 6.29578L14.8316 12.4182Z" fill="white" />
                            <path d="M9.91556 4.60242L6.38771 10.8551L5.9937 11.5559C5.9937 11.5559 5.98848 11.5611 5.98587 11.5637C5.55533 12.0847 4.90559 12.4182 4.17497 12.4182H0L4.96561 3.78957L5.35962 3.10178C5.35962 3.10178 5.36049 3.10091 5.36223 3.09918L7.04527 0.173462L8.84573 2.95068L9.35716 3.74268L9.91556 4.60242Z" fill="white" />
                        </svg>
                    </div>
                </button>

            </div>

        </div >
    );
}

export default MainAuthWidget;