
"use client";

import React, { useState } from 'react'
import { LogoIcon } from '@/components/shared/icons';
import Link from 'next/link';
import SalesLearn from './components/SalesLearn';
import InventorieLearn from './components/InventorieLearn';
import ReceiptLearn from './components/ReceiptLearn';
import DebtsLearn from './components/DebtsLearn';
import ExpensesLearn from './components/ExpensesLearn';
import { DraggableBackWidget } from '@/components/shared/general';






interface Tab {
    id: number;
    name: string;
    hover: string;
    icon: React.ReactNode;
    component: React.ReactNode;
}


const tabs: Tab[] = [
    {
        id: 1,
        name: "Sales",
        hover: "bg-akauntme",
        icon: <svg className='size-6' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" aria-hidden="true"><path d="M19.72 8.093 13.13 14.68l-3.876-3.875-5.038 5.038M19.72 8.093h-4.651m4.65 0v4.65"></path></svg>,
        component: <SalesLearn />

    },

    {
        id: 2,
        name: "Inventories",
        hover: "bg-amber-500",
        icon: <svg className='size-6' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" aria-hidden="true"><path d="M9.217 13.909h-5.18c-.573 0-1.037.464-1.037 1.036v5.18c0 .573.464 1.037 1.036 1.037h5.18c.573 0 1.037-.464 1.037-1.036v-5.18c0-.573-.464-1.037-1.036-1.037ZM9.217 2.512h-5.18C3.463 2.512 3 2.975 3 3.548v5.18c0 .573.464 1.036 1.036 1.036h5.18c.573 0 1.037-.463 1.037-1.036v-5.18c0-.573-.464-1.036-1.036-1.036ZM20.614 13.909h-5.18c-.573 0-1.036.464-1.036 1.036v5.18c0 .573.463 1.037 1.036 1.037h5.18c.572 0 1.036-.464 1.036-1.036v-5.18c0-.573-.463-1.037-1.036-1.037ZM17.254 2.26l-3.14 3.14a.888.888 0 0 0 0 1.256l3.14 3.14a.888.888 0 0 0 1.256 0l3.14-3.14a.888.888 0 0 0 0-1.256l-3.14-3.14a.888.888 0 0 0-1.256 0Z"></path></svg>,
        component: <InventorieLearn />

    },
    {
        id: 3,
        name: "Receipts",
        hover: "bg-blue-500",
        icon: <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
            <path d="M11.5 0C5.1664891 0 0 5.1664939 0 11.5C0 17.833506 5.1664891 23 11.5 23C17.833511 23 23 17.833506 23 11.5C23 5.1664939 17.833511 0 11.5 0 z M 11.5 3C16.212192 3 20 6.7878114 20 11.5C20 16.212189 16.212192 20 11.5 20C6.7878084 20 3 16.212189 3 11.5C3 6.7878114 6.7878084 3 11.5 3 z M 11.476562 4.9785156 A 1.50015 1.50015 0 0 0 10 6.5L10 11.5 A 1.50015 1.50015 0 0 0 10.439453 12.560547L12.439453 14.560547 A 1.50015 1.50015 0 1 0 14.560547 12.439453L13 10.878906L13 6.5 A 1.50015 1.50015 0 0 0 11.476562 4.9785156 z M 23.820312 6C24.244312 6.948 24.563766 7.952 24.759766 9L35.5 9C37.43 9 39 10.57 39 12.5L39 14L24.759766 14C24.562766 15.048 24.243313 16.052 23.820312 17L39 17L39 35.5C39 37.43 37.43 39 35.5 39L12.5 39C10.57 39 9 37.43 9 35.5L9 24.759766C7.952 24.562766 6.948 24.243313 6 23.820312L6 35.5C6 39.084 8.916 42 12.5 42L35.5 42C39.084 42 42 39.084 42 35.5L42 12.5C42 8.916 39.084 6 35.5 6L23.820312 6 z M 24 21 A 2.5 2.5 0 0 0 24 26 A 2.5 2.5 0 0 0 24 21 z M 32.5 21 A 2.5 2.5 0 0 0 32.5 26 A 2.5 2.5 0 0 0 32.5 21 z M 15.5 30 A 2.5 2.5 0 0 0 15.5 35 A 2.5 2.5 0 0 0 15.5 30 z M 24 30 A 2.5 2.5 0 0 0 24 35 A 2.5 2.5 0 0 0 24 30 z" />
        </svg>,
        component: <ReceiptLearn />


    },
    {
        id: 4,
        name: "Debts",
        hover: "bg-rose-500",
        icon: <svg className='size-6' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" aria-hidden="true"><path d="M15.069 13.519v1.55l.775.775m-8.139-1.938L4.217 15.07l1.836-5.426-1.836-5.426 8.526 3.488m-6.2 1.938h3.875m9.302 5.426a4.65 4.65 0 1 1-9.302 0 4.65 4.65 0 0 1 9.302 0Z"></path></svg>,
        component: <DebtsLearn />

    },
    {
        id: 5,
        name: "Expenses",
        hover: "bg-orange-500",
        icon: <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
            <path d="M12.5 4C10.032499 4 8 6.0324991 8 8.5L8 39.5C8 41.967501 10.032499 44 12.5 44L35.5 44C37.967501 44 40 41.967501 40 39.5L40 8.5C40 6.0324991 37.967501 4 35.5 4L12.5 4 z M 12.5 7L35.5 7C36.346499 7 37 7.6535009 37 8.5L37 39.5C37 40.346499 36.346499 41 35.5 41L12.5 41C11.653501 41 11 40.346499 11 39.5L11 8.5C11 7.6535009 11.653501 7 12.5 7 z M 16.5 11 A 1.50015 1.50015 0 1 0 16.5 14L31.5 14 A 1.50015 1.50015 0 1 0 31.5 11L16.5 11 z M 16.5 20 A 1.5 1.5 0 0 0 16.5 23 A 1.5 1.5 0 0 0 16.5 20 z M 22.5 20 A 1.50015 1.50015 0 1 0 22.5 23L31.5 23 A 1.50015 1.50015 0 1 0 31.5 20L22.5 20 z M 16.5 26 A 1.5 1.5 0 0 0 16.5 29 A 1.5 1.5 0 0 0 16.5 26 z M 22.5 26 A 1.50015 1.50015 0 1 0 22.5 29L31.5 29 A 1.50015 1.50015 0 1 0 31.5 26L22.5 26 z M 16.5 32 A 1.5 1.5 0 0 0 16.5 35 A 1.5 1.5 0 0 0 16.5 32 z M 22.5 32 A 1.50015 1.50015 0 1 0 22.5 35L31.5 35 A 1.50015 1.50015 0 1 0 31.5 32L22.5 32 z" />
        </svg>,
        component: <ExpensesLearn />

    }

];






const Learn = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);


    const getColorFromHover = (activeTab: string, tabs: Tab[]): string => {
        const activeTabInfo = tabs.find(tab => tab.name === activeTab); // Find the active tab's info
        if (activeTabInfo) {
            const match = activeTabInfo.hover.match(/bg-(.+)/); // Extract the color part from the hoverClass
            return match ? match[1] : 'black'; // Return the color part or default to 'black'
        }
        return 'black'; // Fallback if no match
    };


    // Function to get the class for the tab, including dynamic color based on the active tab
    const getTabClass = (tabName: string): string => {
        const color = getColorFromHover(activeTab, tabs);
        return activeTab === tabName ? `${color}` : 'blue-500'; // Use extracted color for active tab
    };





    return <>
        <main>
            <div className='hidden'>
                <div className='fill-akauntme text-akauntme border-akauntme hover:bg-akauntme'></div>
                <div className='fill-blue-500 text-blue-500 border-blue-500 hover:bg-blue-500'></div>
                <div className='fill-rose-500 text-rose-500 border-rose-500 hover:bg-rose-500'></div>
                <div className='fill-amber-500 text-amber-500 border-amber-500 hover:bg-amber-500'></div>
                <div className='fill-orange-500 text-orange-500 border-orange-500 hover:bg-orange-500'></div>
            </div>


            <section className="w-full flex lg:flex-row flex-col border-t border-white lg:border-transparent h-screen overflow-hidden">
                <div className='lg:border-r border-gray-300 h-auto space-x-4 lg:w-2/12 flex items-start lg:block justify-center lg:justify-start overflow-hidden'>

                    <div className={`mt-2 pl-2 lg:w-full lg:py-4 text-center lg:text-xl lg:border-b border-${getTabClass(activeTab)} shadow-xs`}>
                        <Link href="/" className='md:hidden flex flex-col gap-y-1 justify-center items-center'>
                            <LogoIcon type='alone' className={`w-10 h-5 fill-${getTabClass(activeTab)}`} />
                            <p className={`font-semibold text-${getTabClass(activeTab)}`}>Learn</p>
                        </Link>

                        <div className='hidden md:flex justify-center gap-x-1'>
                            <span className={`italic text-${getTabClass(activeTab)} font-semibold`}>Akauntme</span>
                            <span className='font-normal'>Learn</span>
                        </div>

                    </div>

                    <div className='mt-2.5 mb-2 flex after:opacity-100 after:ml-[-100px] after:w-[100px] after:content-[""] after:bg-linear-to-l after:absolute after:from-red-700 after:to-transparent  w-full relative lg:space-y-10 lg:flex-col justify-between py-2 md:py-4.5 lg:mx-0 overflow-x-auto scrollbar-hide'>



                        {tabs.map((tab) => (

                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.name)}
                                className={` transition  mx-2 cursor-pointer whitespace-nowrap h-10 md:h-auto  rounded-full  px-3 py-1 lg:p-4 flex items-center gap-x-4 
                                ${activeTab === tab.name ? `${tab.hover} text-white hover:shadow-gray-300/40` : `bg-transparent text-black hover:text-white hover:shadow-md hover:shadow-teal-300/50 hover:${tab.hover}`} 
                                `}

                            >

                                {tab.icon}
                                {tab.name}

                            </button>
                        ))}
                    </div>

                </div>

                <>

                    {tabs.find((tab) => tab.name === activeTab)?.component

                    }

                </>

            </section>


        </main>
        <DraggableBackWidget />



    </>
}

export default Learn;