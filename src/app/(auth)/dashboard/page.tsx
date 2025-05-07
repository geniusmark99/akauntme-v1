'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { SalesWidget } from '@/components/general';
import { MainAuthWidget, CustomPopupWidget, ToolTipWidget } from '@/components/shared/general';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { DSalesIcon, DdebtsIcon, DExpensesIcon, DStockIcon, SearchIcon, FilterIcon } from '@/components/shared/icons';





const tabs = [
    { icon: <DSalesIcon className="size-7 md:size-10" />, title: "Sales", content: `SALES` },
    { icon: <DdebtsIcon className="size-7 md:size-10" />, title: "Debts", content: `DEBTS` },
    { icon: <DExpensesIcon className="size-7 md:size-10" />, title: "Expenses", content: `EXPENSES` },
    { icon: <DStockIcon className="size-7 md:size-10" />, title: "Stocks", content: `STOCKS` }
];


const Dashboard = () => {


    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        document.body.classList.remove("overflow-y-auto");
    })

    const [isSaleChart, setIsSaleChart] = useState(false);




    const [items, showItems] = useState(false);
    const [newItems, addNewItems] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        document.body.classList.remove("overflow-y-auto");
    })



    return <>
        <MainAuthWidget>
            <div className="px-5 mt-[70px] lg:mt-[80px]">
                <div className="flex justify-between items-center pt-2 pb-4">
                    <h1 className="text-lg sm:text-2xl md:text-3xl flex items-center font-semibold dark:text-zinc-200">Good morning Mark!

                        <Image src="/images/morning-love.png" alt='Morning Greetings love image' style={{ width: "auto", height: "auto" }} width={50} height={50} priority />

                    </h1>
                </div>


                <div className='items-center flex justify-center'>
                    <Swiper
                        className='w-full mt-2  py-10 h-[150px]'
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        navigation={false}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide className=" h-[200px] text-white rounded-xl">
                            <div className='p-3 shadow-md shadow-indigo-400/20 bg-indigo-400 dark:bg-indigo-400/80  h-[inherit] rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h2 className='text-base lg:text-xl text-indigo-800 font-semibold'>Total Items</h2>
                                        <h1 className='text-xl lg:text-3xl font-semibold'>0</h1>
                                    </div>

                                </div>
                                <div className='bg-indigo-600 h-full mt-4 relative rounded-tl-2xl rounded-tr-2xl flex items-center justify-between'>
                                    <div className='flex items-center px-4 w-full mb-16 justify-between'>
                                        <div className=' flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-indigo-400 size-14'>
                                                <path d="M21.2 8.3L22 3 16.7 3.8z" />
                                                <path d="M4.7 15.6L3.3 14.2 8 9.6 9.5 11.1 13.6 6.9 15.2 8.4 19 4.6 20.4 6 15.2 11.2 13.6 9.7 9.5 13.9 8 12.4zM19 11H21V22H19zM15 13H17V22H15zM11 15H13V22H11zM7 17H9V22H7zM3 19H5V22H3zM5.5 2C3.6 2 2 3.6 2 5.5S3.6 9 5.5 9 9 7.4 9 5.5 7.4 2 5.5 2zM6.2 7.5H4.8V5L4 5.3v-1l1.9-.8h.3C6.2 3.5 6.2 7.5 6.2 7.5z" />
                                            </svg>
                                        </div>
                                        <button onClick={() => setIsSaleChart(true)} className='bg-indigo-400 px-3 text-sm hover:bg-indigo-500 border border-transparent hover:border-indigo-800 py-2 rounded-full'>View Charts</button>


                                    </div>


                                </div>
                            </div>
                        </SwiperSlide>



                        <SwiperSlide className=" h-[200px] text-white rounded-xl">
                            <div className='p-3 shadow-md shadow-teal-400/20 bg-teal-400 dark:bg-teal-400/80   h-[inherit] rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h2 className='text-base lg:text-xl text-teal-800 font-semibold'>Inventory value</h2>
                                        <h1 className='text-xl lg:text-3xl font-semibold'>&#8358;160,000</h1>
                                    </div>

                                </div>
                                <div className='bg-teal-600 h-full mt-4 relative rounded-tl-2xl rounded-tr-2xl flex items-center justify-between'>
                                    <div className='flex items-center px-4 w-full mb-16 justify-between'>
                                        <div className=' flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-teal-400 size-14'>
                                                <path d="M3 11H21V21H3z" opacity=".3" />
                                                <path d="M8 16c0-.6-.4-1-1-1s-1 .4-1 1c0 .6.4 1 1 1S8 16.6 8 16zM18 16c0-.6-.4-1-1-1s-1 .4-1 1c0 .6.4 1 1 1S18 16.6 18 16z" />
                                                <path d="M21,22H3c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v10C22,21.6,21.6,22,21,22z M4,20h16v-8H4V20z" />
                                                <path d="M20.5 10A1.5 1.5 0 1 0 20.5 13 1.5 1.5 0 1 0 20.5 10zM20.5 19A1.5 1.5 0 1 0 20.5 22 1.5 1.5 0 1 0 20.5 19zM3.5 10A1.5 1.5 0 1 0 3.5 13 1.5 1.5 0 1 0 3.5 10zM3.5 19A1.5 1.5 0 1 0 3.5 22 1.5 1.5 0 1 0 3.5 19zM12 13A3 3 0 1 0 12 19 3 3 0 1 0 12 13zM13 8.4L10 5.4 7.5 8 6 6.5 10 2.6 13 5.6 15.3 3.3 16.7 4.7z" />
                                                <path d="M18 7L18 2 13 2z" />
                                            </svg>
                                        </div>
                                        <button className='bg-teal-400 px-3 text-sm hover:bg-teal-500 border border-transparent hover:border-teal-800 py-2 rounded-full'>View Charts</button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className=" h-[200px]  text-white rounded-xl">
                            <div className='p-3 shadow-md shadow-amber-400/20 bg-amber-400 dark:bg-amber-400/80  h-[inherit] rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h2 className='text-base lg:text-xl text-amber-800 font-semibold'>Low Stock Items</h2>
                                        <h1 className='text-xl lg:text-3xl font-semibold'>500</h1>
                                    </div>

                                </div>
                                <div className='bg-amber-600 h-full mt-4 relative rounded-tl-2xl rounded-tr-2xl flex items-center justify-between'>
                                    <div className='flex items-center px-4 w-full mb-16 justify-between'>
                                        <div className=' flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-amber-400 size-14' viewBox="0 0 24 24" >
                                                <path d="M21 14L15 14 14 12 11 14 9 14 9 5 21 5z" opacity=".3" />
                                                <path d="M22 8L8 8 8 10 22 10z" />
                                                <path d="M20,4H10C8.9,4,8,4.9,8,6v7c0,0.9,0.6,1.7,1.5,1.9l3-1.9H10V6h10v7h-5.3l0.6,0.8L14.4,15H20c1.1,0,2-0.9,2-2V6 C22,4.9,21.1,4,20,4z" />
                                                <path d="M8.6,21H3c-1.1,0-2-0.9-2-2l0-6c0-0.8,0.1-1.7,1.2-2.4l6.1-4.2l1.1,1.7l-6.2,4.2C3,12.5,3,12.5,3,13l0,6l5.6,0 c0.8,0,1.5-0.4,2-1l0.1-0.1l3.4-3.8c0.1-0.1,0.1-0.3-0.1-0.5l-0.2-0.2l-4.2,2.5l-1-1.7l5.7-3.4l1.3,1.6c0.7,0.9,0.7,2.1,0.1,3 l-3.4,3.8C11.3,20.3,10,21,8.6,21z" />
                                            </svg>
                                        </div>
                                        <button className='bg-amber-400 px-3 text-sm hover:bg-amber-500 border border-transparent hover:border-amber-800 py-2 rounded-full'>View Charts</button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className=" h-[200px]  text-white rounded-xl">
                            <div className='p-3 shadow-md shadow-rose-400/20 bg-rose-400 dark:bg-rose-400/80   h-[inherit] rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h2 className='text-base lg:text-xl text-rose-800 font-semibold'>Out of Stock</h2>
                                        <h1 className='text-xl lg:text-3xl font-semibold'>&#8358;160,000</h1>
                                    </div>

                                </div>
                                <div className='bg-rose-600 h-full mt-4 relative rounded-tl-2xl rounded-tr-2xl flex items-center justify-between'>
                                    <div className='flex items-center px-4 w-full mb-16 justify-between'>
                                        <div className=' flex justify-center items-center'>

                                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-rose-400 size-14' viewBox="0 0 24 24" >
                                                <path d="M3 8H5V21H3zM7 11H9V21H7zM11 13H13V21H11zM15 16H17V21H15zM19 18H21V21H19zM21.2 9.6L22 14.9 16.7 14.2z" />
                                                <path d="M19 13.3L15.2 9.5 13.6 11 9.9 7.3 8.4 8.8 3 3.4 4.4 2 8.4 6 9.9 4.5 13.6 8.2 15.2 6.7 20.4 11.9z" />
                                            </svg>
                                        </div>
                                        <button className='bg-rose-400 px-3 text-sm hover:bg-rose-500 border border-transparent hover:border-rose-800 py-2 rounded-full'>View Charts</button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>


                    <CustomPopupWidget isOpen={isSaleChart} onClose={() => setIsSaleChart(false)} motionType="scale"
                        confirmOnClose
                        confirmMessage="Close chart?">
                        <div className='flex flex-col md:flex-row items-center rounded-xl justify-center gap-y-4 gap-x-2 w-full  px-4'>
                            <div className='p-2 w-full'>
                                <div className='flex'>
                                    {/* <h1 className='text-2xl font-semibold'>Total Sales</h1> */}
                                </div>

                                {/* <SalesWidget /> */}

                            </div>


                        </div>

                    </CustomPopupWidget>

                </div>
            </div>

            <div className="mb-10 flex flex-col mt-4 gap-y-8 px-3 lg:px-5 ">
                <div className="flex flex-col">
                    <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-y-5 lg:gap-y-4 lg:gap-x-4 ">
                        <div className=" lg:row-span-3 lg:mt-3 lg:max-h-[670px] relative bg-white dark:bg-zinc-800 rounded-md border border-gray-300 dark:border-zinc-600/20">

                            {
                                newItems ? <motion.div className="h-[60vh] absolute w-full z-[50] rounded-b-lg shadow-md bg-white p-4 border-t dark:border-zinc-600/20"

                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 65, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab similique ipsum vel possimus aliquam mollitia non quaerat laborum doloribus nobis accusamus, soluta rem excepturi reiciendis dicta necessitatibus fugit repellat dolor!
                                </motion.div> :
                                    ''
                            }


                            <div className="flex justify-between items-center p-4 lg:border-b border-gray-100 dark:border-zinc-600/20">
                                <h2 className="font-semibold">Items</h2>
                                <div className="flex items-center gap-x-2 -z-[00]">


                                    <ToolTipWidget text={`${newItems ? '' : 'Add sales,expenses and more'}`} bg="akauntme dark:bg-zinc-800-2">
                                        <button
                                            onClick={() => addNewItems(!newItems)}
                                            className="border border-gray-300 dark:border-gray-500 shadow-xs gap-x-2 px-2 py-1 rounded-lg flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                                className={`${newItems ? 'rotate-45' : ''} transition-all fill-gray-900 dark:fill-gray-300 size-4`}
                                            >
                                                <path d="M23.976562 4.9785156 A 1.50015 1.50015 0 0 0 22.5 6.5L22.5 22.5L6.5 22.5 A 1.50015 1.50015 0 1 0 6.5 25.5L22.5 25.5L22.5 41.5 A 1.50015 1.50015 0 1 0 25.5 41.5L25.5 25.5L41.5 25.5 A 1.50015 1.50015 0 1 0 41.5 22.5L25.5 22.5L25.5 6.5 A 1.50015 1.50015 0 0 0 23.976562 4.9785156 z" />
                                            </svg>
                                            Add new

                                        </button>
                                    </ToolTipWidget>
                                    <button
                                        onClick={() => showItems(!items)}

                                        className="border border-gray-300 dark:border-gray-500  px-2 py-2 flex lg:hidden justify-center items-center rounded-lg">
                                        <svg
                                            className={`${items ? 'rotate-180' : ''} transition-all fill-gray-900 dark:fill-gray-300 size-4`}
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                            <path d="M41.586,12.586L24,30.172L6.414,12.586c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l19,19 C22.977,34.805,23.488,35,24,35s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828S42.367,11.805,41.586,12.586z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className={`${items ? 'flex absolute z-[10] lg:relative' : 'hidden'} shadow-md 
        shadow-akauntme/30 h-[80vh] lg:shadow-none w-full mt-1 lg:mt-0 py-10 rounded-lg lg:rounded-none border-t lg:border-none
         bg-white dark:bg-zinc-800 lg:bg-transparent lg:flex px-4 lg:py-6 overflow-y-hidden   custom-scrollbar mb-5`}
                            >
                                <ul className="w-full flex flex-col gap-y-5 overflow-x-hidden overflow-y-auto">
                                    {/* <li className="bg-gray-100 dark:bg-zinc-800-2 border dark:border-zinc-600/20 shadow-sm rounded-lg min-h-32 p-2 w-full">
                                        ccdd
                                    </li> */}

                                </ul>
                            </div>

                        </div>
                        <div className="lg:max-h-[200px] lg:col-span-2  gap-y-2 items-center flex flex-col lg:flex-row gap-x-1 justify-between w-full">
                            <div className="w-full lg:py-1 lg:px-2 flex flex-col justify-center bg-white border border-gray-300 cursor-pointer hover:border-akauntme shadow-sm rounded-xl dark:bg-zinc-800 dark:border-zinc-600/20">
                                <div className="p-4 md:p-5">
                                    <div className="my-2 flex justify-center items-center  bg-akauntme shadow-sm shadow-akauntme/50 rounded-lg size-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="fill-white size-6">
                                            <path d="M9.5273438 5 A 1.50015 1.50015 0 0 0 8 6.5L8 37.5C8 40.519774 10.480226 43 13.5 43L34.5 43C37.519774 43 40 40.519774 40 37.5L40 6.5 A 1.50015 1.50015 0 0 0 37.890625 5.1289062L33.96875 6.8730469L29.556641 5.1074219 A 1.50015 1.50015 0 0 0 28.443359 5.1074219L24 6.8847656L19.556641 5.1074219 A 1.50015 1.50015 0 0 0 18.443359 5.1074219L14.03125 6.8730469L10.109375 5.1289062 A 1.50015 1.50015 0 0 0 9.5273438 5 z M 19 8.1152344L23.443359 9.8925781 A 1.50015 1.50015 0 0 0 24.556641 9.8925781L29 8.1152344L33.443359 9.8925781 A 1.50015 1.50015 0 0 0 34.609375 9.8710938L37 8.8085938L37 37.5C37 38.898226 35.898226 40 34.5 40L13.5 40C12.101774 40 11 38.898226 11 37.5L11 8.8085938L13.390625 9.8710938 A 1.50015 1.50015 0 0 0 14.556641 9.8925781L19 8.1152344 z M 15.5 17 A 1.50015 1.50015 0 1 0 15.5 20L32.5 20 A 1.50015 1.50015 0 1 0 32.5 17L15.5 17 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L24.5 29 A 1.50015 1.50015 0 1 0 24.5 26L15.5 26 z M 30.5 26 A 1.50015 1.50015 0 1 0 30.5 29L32.5 29 A 1.50015 1.50015 0 1 0 32.5 26L30.5 26 z M 15.5 32 A 1.50015 1.50015 0 1 0 15.5 35L24.5 35 A 1.50015 1.50015 0 1 0 24.5 32L15.5 32 z M 30.5 32 A 1.50015 1.50015 0 1 0 30.5 35L32.5 35 A 1.50015 1.50015 0 1 0 32.5 32L30.5 32 z" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center gap-x-2 my-2">
                                        <p className="text-xs md:text-base tracking-wide text-akauntme font-semibold dark:text-gray-400">
                                            Total balance
                                        </p>
                                        <div className="hs-tooltip">
                                            <div className="hs-tooltip-toggle">
                                                <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                                    The number of daily users
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-1 flex items-center gap-x-2 justify-between">
                                        <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-indigo-950 dark:text-neutral-200">
                                            &#8358;72,540.00
                                        </h3>
                                        <div className="hidden lg:flex items-center gap-x-1 text-green-600 bg-green-500/20 px-2 py-1 rounded-md">
                                            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                            <span className="inline-block text-xs sm:text-sm">
                                                1.7%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:py-1 lg:px-2 flex flex-col justify-center bg-white border border-gray-300 cursor-pointer hover:border-akauntme shadow-sm rounded-xl dark:bg-zinc-800 dark:border-zinc-600/20">
                                <div className="p-4 md:p-5">
                                    <div className="my-2 flex justify-center items-center  bg-akauntme shadow-sm shadow-akauntme/50 rounded-lg size-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="fill-white size-6">
                                            <path d="M9.5273438 5 A 1.50015 1.50015 0 0 0 8 6.5L8 37.5C8 40.519774 10.480226 43 13.5 43L34.5 43C37.519774 43 40 40.519774 40 37.5L40 6.5 A 1.50015 1.50015 0 0 0 37.890625 5.1289062L33.96875 6.8730469L29.556641 5.1074219 A 1.50015 1.50015 0 0 0 28.443359 5.1074219L24 6.8847656L19.556641 5.1074219 A 1.50015 1.50015 0 0 0 18.443359 5.1074219L14.03125 6.8730469L10.109375 5.1289062 A 1.50015 1.50015 0 0 0 9.5273438 5 z M 19 8.1152344L23.443359 9.8925781 A 1.50015 1.50015 0 0 0 24.556641 9.8925781L29 8.1152344L33.443359 9.8925781 A 1.50015 1.50015 0 0 0 34.609375 9.8710938L37 8.8085938L37 37.5C37 38.898226 35.898226 40 34.5 40L13.5 40C12.101774 40 11 38.898226 11 37.5L11 8.8085938L13.390625 9.8710938 A 1.50015 1.50015 0 0 0 14.556641 9.8925781L19 8.1152344 z M 15.5 17 A 1.50015 1.50015 0 1 0 15.5 20L32.5 20 A 1.50015 1.50015 0 1 0 32.5 17L15.5 17 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L24.5 29 A 1.50015 1.50015 0 1 0 24.5 26L15.5 26 z M 30.5 26 A 1.50015 1.50015 0 1 0 30.5 29L32.5 29 A 1.50015 1.50015 0 1 0 32.5 26L30.5 26 z M 15.5 32 A 1.50015 1.50015 0 1 0 15.5 35L24.5 35 A 1.50015 1.50015 0 1 0 24.5 32L15.5 32 z M 30.5 32 A 1.50015 1.50015 0 1 0 30.5 35L32.5 35 A 1.50015 1.50015 0 1 0 32.5 32L30.5 32 z" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center gap-x-2 my-2">
                                        <p className="text-xs md:text-base tracking-wide text-akauntme font-semibold dark:text-gray-400">
                                            Total Sales
                                        </p>
                                        <div className="hs-tooltip">
                                            <div className="hs-tooltip-toggle">
                                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
                                                    The number of daily users
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-1 flex items-center gap-x-2 justify-between">
                                        <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-indigo-950 dark:text-neutral-200">
                                            &#8358;72,540.00
                                        </h3>
                                        <div className="hidden lg:flex items-center gap-x-1 text-green-600 bg-green-500/20 px-2 py-1 rounded-md">
                                            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                            <span className="inline-block text-xs sm:text-sm">
                                                1.7%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:max-h-[450px] p-2 lg:p-4 lg:col-span-2 lg:row-span-2 overflow-x-auto overflow-y-hidden  bg-white dark:bg-zinc-800 rounded-2xl border border-gray-300 shadow-sm dark:border-zinc-600/20">
                            <div className='relative'>
                                <h2 className='px-2.5 text-xl md:text-2xl font-semibold'>Quick Link</h2>
                                <div className="flex justify-between items-center p-2 w-full gap-x-2 lg:gap-x-4">

                                    {tabs.map((tab, index) => (
                                        <button
                                            key={index}
                                            className={` ${activeTab === index ? 'border-akauntme *:text-akauntme' : 'border-akauntme/10'
                                                }  focus:ring-0 focus:outline-none appearance-none flex flex-col justify-center items-center group  rounded-lg shado-sm h-[70px] w-full border-2  hover:border-akauntme hover:cursor-pointer lg:h-[90px] lg:w-full`}
                                            onClick={() => setActiveTab(index)}
                                        >

                                            {tab.icon}
                                            <h3 className="font-semibold text-sm md:text-base group-hover:text-akauntme">{tab.title}</h3>
                                        </button>
                                    ))}


                                </div>
                                <div className='relative flex flex-col gap-y-2 mx-2'>

                                    <motion.div
                                        className="absolute top-1 h-1 rounded-full bg-gradient-to-r from-akauntme/80 to-teal-500"
                                        layoutId="underline"
                                        style={{ width: `${100 / tabs.length}%`, left: `${(100 / tabs.length) * activeTab}%` }}
                                    >


                                    </motion.div>

                                    <div className="mt-3 p-4 border border-gray-300 rounded-lg">
                                        <p className="text-gray-700">{tabs[activeTab]['content']}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:-mt-5 bg-white border border-gray-300 dark:border-zinc-600/20 dark:bg-zinc-80 rounded-lg">
                    <div className="flex justify-between items-center border-b border-gray-300 dark:border-zinc-600/20  py-2 px-4">
                        <h1 className="text-sm lg:text-xl text-slate-700 font-semibold dark:text-gray-400">
                            Recent Activities
                        </h1>
                        <div className="flex items-center gap-x-1 lg:gap-x-4">
                            <div className="hidden lg:flex items-center bg-white dark:bg-zinc-800-2 border border-gray-300 dark:border-zinc-600/20 rounded-lg  px-2">
                                <SearchIcon className="size-4 fill-gray-600" />
                                <input type="text" placeholder="Search transactions" className="border-none  py-1.5 sm:py-2 bg-transparent outline-none ring-0 focus:outline-none focus:border-none appearance-none focus:ring-0" />
                            </div>
                            <button
                                className="border border-gray-300 flex lg:hidden dark:border-zinc-600/20 hover:bg-gray-100 dark:hover:bg-slate-900 rounded-lg bg-white dark:bg-zinc-800-2 p-2 items-center gap-x-1"

                            >

                                <SearchIcon className="size-4 fill-gray-600" />
                                <span className="text-sm">Search</span>

                            </button>

                            <button
                                className="border border-gray-300 dark:border-zinc-600/20 hover:bg-gray-100 dark:hover:bg-slate-900 rounded-lg bg-white dark:bg-zinc-800-2 p-2 flex items-center gap-x-2"

                            >
                                <FilterIcon className="size-3" />
                                <span className="text-sm">Filter</span>
                            </button>
                        </div>
                    </div>

                    <div className=" py-2 px-4">
                        <div className="max-w-[85rem] py-10 mx-auto">
                            <div className="flex flex-col">
                                <div className="-m-1.5 overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead className="bg-gray-50 dark:bg-neutral-800">
                                            <tr>
                                                <th scope="col" className="ps-6 py-3 text-start">
                                                    <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                                                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </th>

                                                <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Name
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Type
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Status
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Portfolio
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                            Created
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-end"></th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                            <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                                                            <span className="sr-only">Checkbox</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" /> */}
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Christina Bersh</span>
                                                                <span className="block text-sm text-gray-500 dark:text-neutral-500">christina@site.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Director</span>
                                                        <span className="block text-sm text-gray-500 dark:text-neutral-500">Human resources</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                            </svg>
                                                            Active
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="text-xs text-gray-500 dark:text-neutral-500">1/5</span>
                                                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200" role="progressbar" style={{ width: '25%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">28 Dec, 12:12</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                            <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                                                            <span className="sr-only">Checkbox</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" /> */}
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Christina Bersh</span>
                                                                <span className="block text-sm text-gray-500 dark:text-neutral-500">christina@site.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Director</span>
                                                        <span className="block text-sm text-gray-500 dark:text-neutral-500">Human resources</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                            </svg>
                                                            Active
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="text-xs text-gray-500 dark:text-neutral-500">1/5</span>
                                                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200" role="progressbar" style={{ width: '25%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">28 Dec, 12:12</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                            <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                                                            <span className="sr-only">Checkbox</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" /> */}
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Christina Bersh</span>
                                                                <span className="block text-sm text-gray-500 dark:text-neutral-500">christina@site.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Director</span>
                                                        <span className="block text-sm text-gray-500 dark:text-neutral-500">Human resources</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                            <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                            </svg>
                                                            Active
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="text-xs text-gray-500 dark:text-neutral-500">1/5</span>
                                                            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                                <div className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200" role="progressbar" style={{ width: '25%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">28 Dec, 12:12</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                                                            Edit
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>

                                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-neutral-400">
                                                <span className="font-semibold text-gray-800 dark:text-neutral-200">12</span> results
                                            </p>
                                        </div>

                                        <div>
                                            <div className="inline-flex gap-x-2">
                                                <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                                    Prev
                                                </button>

                                                <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                    Next
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </MainAuthWidget>
    </>
}

export default Dashboard;