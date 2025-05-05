'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const items = [
    {
        id: 0, Title: 'Sales', TitleDesc: [
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" className='size-8 fill-current' viewBox="0 0 48 48" >
                        <path d="M6.5 7 A 2.5 2.5 0 0 0 6.5 12 A 2.5 2.5 0 0 0 6.5 7 z M 12.5 8 A 1.5 1.5 0 0 0 12.5 11 A 1.5 1.5 0 0 0 12.5 8 z M 18.5 8 A 1.5 1.5 0 0 0 18.5 11 A 1.5 1.5 0 0 0 18.5 8 z M 24.5 8 A 1.5 1.5 0 0 0 24.5 11 A 1.5 1.5 0 0 0 24.5 8 z M 30.5 8 A 1.5 1.5 0 0 0 30.5 11 A 1.5 1.5 0 0 0 30.5 8 z M 36.5 8 A 1.5 1.5 0 0 0 36.5 11 A 1.5 1.5 0 0 0 36.5 8 z M 42.5 8 A 1.5 1.5 0 0 0 42.5 11 A 1.5 1.5 0 0 0 42.5 8 z M 42.5 14 A 1.5 1.5 0 0 0 42.5 17 A 1.5 1.5 0 0 0 42.5 14 z M 27 15C23.704135 15 21 17.704135 21 21C21 22.616954 21.801437 23.977864 22.646484 25.386719C23.491532 26.795574 24.469887 28.125726 25.121094 28.972656 A 1.50015 1.50015 0 0 0 25.123047 28.972656C26.048956 30.175274 27.951044 30.175274 28.876953 28.972656 A 1.50015 1.50015 0 0 0 28.878906 28.972656C29.530113 28.125726 30.508468 26.795574 31.353516 25.386719C32.198469 23.977864 33 22.616954 33 21C33 17.704135 30.295865 15 27 15 z M 27 18C28.674135 18 30 19.325865 30 21C30 21.254046 29.526453 22.601355 28.78125 23.84375C28.199257 24.814044 27.565836 25.659806 27 26.421875C26.434164 25.659806 25.800743 24.814044 25.21875 23.84375C24.473547 22.601355 24 21.254046 24 21C24 19.325865 25.325865 18 27 18 z M 42.5 20 A 1.5 1.5 0 0 0 42.5 23 A 1.5 1.5 0 0 0 42.5 20 z M 6.5 26 A 1.5 1.5 0 0 0 6.5 29 A 1.5 1.5 0 0 0 6.5 26 z M 12.5 26 A 1.5 1.5 0 0 0 12.5 29 A 1.5 1.5 0 0 0 12.5 26 z M 18.5 26 A 1.5 1.5 0 0 0 18.5 29 A 1.5 1.5 0 0 0 18.5 26 z M 36.5 26 A 1.5 1.5 0 0 0 36.5 29 A 1.5 1.5 0 0 0 36.5 26 z M 42.5 26 A 1.5 1.5 0 0 0 42.5 29 A 1.5 1.5 0 0 0 42.5 26 z M 6.5 32 A 1.5 1.5 0 0 0 6.5 35 A 1.5 1.5 0 0 0 6.5 32 z M 42.5 37 A 2.5 2.5 0 0 0 42.5 42 A 2.5 2.5 0 0 0 42.5 37 z M 6.5 38 A 1.5 1.5 0 0 0 6.5 41 A 1.5 1.5 0 0 0 6.5 38 z M 12.5 38 A 1.5 1.5 0 0 0 12.5 41 A 1.5 1.5 0 0 0 12.5 38 z M 18.5 38 A 1.5 1.5 0 0 0 18.5 41 A 1.5 1.5 0 0 0 18.5 38 z M 24.5 38 A 1.5 1.5 0 0 0 24.5 41 A 1.5 1.5 0 0 0 24.5 38 z M 30.5 38 A 1.5 1.5 0 0 0 30.5 41 A 1.5 1.5 0 0 0 30.5 38 z M 36.5 38 A 1.5 1.5 0 0 0 36.5 41 A 1.5 1.5 0 0 0 36.5 38 z" />
                    </svg>
                , content: "Track every sale in real-time,and watch your business bloom."
            },
            {
                icon:

                    <svg xmlns="http://www.w3.org/2000/svg" className='size-8 fill-current' viewBox="0 0 48 48" >
                        <path d="M33.5 8 A 1.50015 1.50015 0 1 0 33.5 11L42.5 11 A 1.50015 1.50015 0 1 0 42.5 8L33.5 8 z M 5.5 14 A 1.50015 1.50015 0 1 0 5.5 17L14.5 17 A 1.50015 1.50015 0 1 0 14.5 14L5.5 14 z M 33.5 14 A 1.50015 1.50015 0 1 0 33.5 17L42.5 17 A 1.50015 1.50015 0 1 0 42.5 14L33.5 14 z M 5.5 20 A 1.50015 1.50015 0 1 0 5.5 23L14.5 23 A 1.50015 1.50015 0 1 0 14.5 20L5.5 20 z M 33.5 20 A 1.50015 1.50015 0 1 0 33.5 23L42.5 23 A 1.50015 1.50015 0 1 0 42.5 20L33.5 20 z M 5.5 26 A 1.50015 1.50015 0 1 0 5.5 29L14.5 29 A 1.50015 1.50015 0 1 0 14.5 26L5.5 26 z M 19.5 26 A 1.50015 1.50015 0 1 0 19.5 29L28.5 29 A 1.50015 1.50015 0 1 0 28.5 26L19.5 26 z M 33.5 26 A 1.50015 1.50015 0 1 0 33.5 29L42.5 29 A 1.50015 1.50015 0 1 0 42.5 26L33.5 26 z M 5.5 32 A 1.50015 1.50015 0 1 0 5.5 35L14.5 35 A 1.50015 1.50015 0 1 0 14.5 32L5.5 32 z M 19.5 32 A 1.50015 1.50015 0 1 0 19.5 35L28.5 35 A 1.50015 1.50015 0 1 0 28.5 32L19.5 32 z M 33.5 32 A 1.50015 1.50015 0 1 0 33.5 35L42.5 35 A 1.50015 1.50015 0 1 0 42.5 32L33.5 32 z M 5.5 38 A 1.50015 1.50015 0 1 0 5.5 41L14.5 41 A 1.50015 1.50015 0 1 0 14.5 38L5.5 38 z M 19.5 38 A 1.50015 1.50015 0 1 0 19.5 41L28.5 41 A 1.50015 1.50015 0 1 0 28.5 38L19.5 38 z M 33.5 38 A 1.50015 1.50015 0 1 0 33.5 41L42.5 41 A 1.50015 1.50015 0 1 0 42.5 38L33.5 38 z" />
                    </svg>
                , content: "Sales made simple — record, review, and rejoice with Akauntme"
            },
            {
                icon:
                    <svg width="24" height="24" className='size-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.75" y="8.75" width="6.5" height="6.5" strokeWidth="1.5" rx="1" stroke="currentColor"></rect><circle cx="3.5" cy="12" r="1.5" fill="currentColor"></circle><circle cx="12" cy="3.5" r="1.5" transform="rotate(90 12 3.5)" fill="currentColor"></circle><circle cx="20.5" cy="12" r="1.5" fill="currentColor"></circle><circle cx="12" cy="20.5" r="1.5" transform="rotate(90 12 20.5)" fill="currentColor"></circle></svg>
                , content: "Never lose a transaction. Akauntme captures every moment you grow."
            },
            {
                icon:
                    <svg width="32" height="32" className='size-8' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M11.75 24.457c0-.69.56-1.25 1.25-1.25h6a1.25 1.25 0 0 1 0 2.5h-6c-.69 0-1.25-.56-1.25-1.25Zm1 3.26c0-.69.56-1.25 1.25-1.25h4a1.25 1.25 0 1 1 0 2.5h-4c-.69 0-1.25-.56-1.25-1.25ZM9.64 5.673A8.937 8.937 0 0 1 16.003 3c2.387 0 4.676.961 6.363 2.673a9.19 9.19 0 0 1 2.636 6.441 7.44 7.44 0 0 1-.585 3.01 7.35 7.35 0 0 1-1.733 2.493c-.852.867-1.3 1.648-1.477 2.622a1.217 1.217 0 0 1-1.416.99 1.232 1.232 0 0 1-.976-1.435c.29-1.598 1.055-2.812 2.165-3.938a4.883 4.883 0 0 0 1.201-1.704c.268-.633.4-1.317.389-2.006v-.021c0-1.766-.692-3.46-1.924-4.709a6.52 6.52 0 0 0-4.643-1.95 6.521 6.521 0 0 0-4.643 1.95 6.706 6.706 0 0 0-1.924 4.709c0 1.062.218 2.332 1.572 3.714a7.323 7.323 0 0 1 2.18 3.936 1.232 1.232 0 0 1-.955 1.45c-.659.134-1.3-.3-1.43-.967A4.848 4.848 0 0 0 9.305 17.6c-1.925-1.952-2.302-3.911-2.302-5.475A9.19 9.19 0 0 1 9.64 5.673Z" fill="currentColor"></path></svg>
                , content: "Sell smarter, not harder. Akauntme keeps your sales on point."
            },
        ], valueDesc: 'Sales', bg: 'from-purple-500 to-pink-500',
        bgImg: '/images/tester.webp',
        bgImgMob: '/images/tester-mobile.webp',
    },
    {
        id: 1, Title: 'Expenses', TitleDesc: [
            { icon: "Icon", content: "Stay in charge of every naira spent — effortlessly." },
            { icon: "Icon2", content: "Smart expense tracking that helps your profits breathe." },
            { icon: "Icon3", content: "Your expenses deserve attention — Akauntme keeps them crystal clear." },
            { icon: "Icon4", content: "Spend wisely. Grow bravely. Akauntme is your guide." },
        ], valueDesc: 'Expenses', bg: 'from-violet-500 to-fuchsia-500 hover:from-fuchsia-500 to-violet-500',
        bgImg: '/images/tester-2.webp',
        bgImgMob: '/images/tester-mobile-2.webp',

    },
    {
        id: 2, Title: 'Debts', TitleDesc: [
            { icon: "Icon", content: "Never forget who owes you — Akauntme remembers for you." },
            { icon: "Icon2", content: "Turn debts into opportunities with smart tracking." },
            { icon: "Icon3", content: "Manage debts gracefully, collect payments easily." },
            { icon: "Icon4", content: "Akauntme: Where debts don’t drag your dreams down." },
        ], valueDesc: 'Debts', bg: 'from-sky-500 to-indigo-500',
        bgImg: '/images/tester-3.webp',
        bgImgMob: '/images/tester-mobile-3.webp',

    },
    {
        id: 3, Title: 'Inventories', TitleDesc: [
            { icon: "Icon", content: "Inventory chaos? Calm it with Akauntme." },
            { icon: "Icon2", content: "Know what’s in stock, what’s out, and what’s flying off the shelf." },
            { icon: "Icon3", content: "Manage products with ease — no more guessing games." },
            { icon: "Icon4", content: "Inventory made effortless, so you can focus on growth." },
        ], valueDesc: 'Inventories', bg: 'from-cyan-500 to-blue-500',
        bgImg: '/images/tester-4.webp',
        bgImgMob: '/images/tester-mobile-4.webp',

    },
    {
        id: 4, Title: 'Receipts', TitleDesc: [
            { icon: "Icon", content: "Instant, beautiful receipts — just a tap away." },
            { icon: "Icon2", content: "Proof of business, styled by Akauntme." },
            { icon: "Icon3", content: "Create, send, and store receipts without the paperwork mess." },
            { icon: "Icon4", content: "Secure your sales with sleek digital receipts." },
        ], valueDesc: 'Receipts', bg: 'from-amber-500 to-yellow-500',
        bgImg: '/images/tester-5.webp',
        bgImgMob: '/images/tester-mobile-5.webp',


    },
    {
        id: 5, Title: 'Payment', TitleDesc: [
            { icon: "Icon", content: "Payments, wallets, and more — FinTech power built into your business." },
            { icon: "Icon2", content: "Akauntme bridges banking and bookkeeping effortlessly." },
            { icon: "Icon3", content: "Send, receive, and manage money — all inside Akauntme." },
            { icon: "Icon4", content: "Grow your wallet, grow your world — the future of business finance is here" },
        ], valueDesc: 'Payment', bg: 'from-rose-500 to-red-500',
        bgImg: '/images/tester-2.webp',
        bgImgMob: '/images/tester-mobile-2.webp',

    },

    {
        id: 7, Title: 'MarketMe', TitleDesc: [
            { icon: "Icon", content: "Showcase your business to the world — MarketMe is your stage" },
            { icon: "Icon2", content: "Sales made simple — record, review, and rejoice with Akauntme" },
            { icon: "Icon3", content: "Never lose a transaction. Akauntme captures every moment you grow." },
            { icon: "Icon4", content: "Sell smarter, not harder. Akauntme keeps your sales on point." },
        ], valueDesc: 'MarketMe', bg: 'from-cyan-500 to-indigo-500',
        bgImg: '/images/tester-4.webp',
        bgImgMob: '/images/tester-mobile-4.webp',

    },



];


const HomeSliderWidget = () => {

    const [openPopup, setOpenPopup] = useState<{ [key: number]: string | null }>({});
    const [isMobile, setIsMobile] = useState(false);

    const handleSlideClick = (swiperIndex: number, content: string) => {
        setOpenPopup((prevState) => ({
            ...prevState,
            [swiperIndex]: content
        }));
    };

    const handleClosePopup = (swiperIndex: number) => {
        setOpenPopup((prevState) => ({
            ...prevState,
            [swiperIndex]: null
        }));
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // mobile if width <= 768px
        };

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className=" w-full z-[100]">

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{

                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1280: {
                        slidesPerView: 7,
                    },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}

                loop
                className="w-full mt-20 mx-auto flex justify-center items-center h-auto py-20"
            >
                {items.map((item, swiperIndex) => (
                    <SwiperSlide key={item.id} className='w-full'>
                        <div
                            className={`h-[200px] bg-no-repeat bg-center bg-cover opacity-90 bg-gradient-to-r ${item.bg} scale-95 transition-all hover:scale-100 lg:h-[300px]  text-akauntme-2 flex items-center justify-center rounded-xl cursor-pointer`}
                            onClick={() => handleSlideClick(swiperIndex, item.valueDesc)}
                            style={{ backgroundImage: `url(${item.bgImg})` }}
                        >
                            <div className="flex flex-col  gap-y-4 w-full h-full p-5">
                                <h1 className='text-base md:text-xl text-center font-bold text-white drop-shadow-2xl'>{item.Title}</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {Object.keys(openPopup).map((swiperIndex) => {
                const index = parseInt(swiperIndex);
                return openPopup[index] ? (
                    <motion.div
                        key={swiperIndex}
                        className="fixed inset-0 bg-black/60 bg-opacity-20 flex justify-center items-center z-[5000]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white h-[90%] lg:h-auto relative rounded-2xl shadow-lg sm:w-full md:w-full lg:max-w-3xl mt-30 lg:mt-0  mx-4 z-[6000]"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >

                            <button
                                onClick={() => handleClosePopup(index)}
                                className="hidden md:flex justify-center size-10 items-center absolute -top-10 -right-10 mt-4  bg-gray-700 opacity-65 hover:bg-gray-900 cursor-pointer text-white rounded-full"
                            >
                                <svg className='size-4' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m4 4 8 8m-8 0 8-8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
                            </button>
                            <div className='flex md:hidden justify-center items-center m-2'>
                                <button onClick={() => handleClosePopup(index)} className='cursor-pointer h-1.5 w-2/12 bg-gray-400 rounded-2xl'></button>
                            </div>

                            <h1 className='md:hidden text-2xl text-center font-semibold'>{openPopup[index]}</h1>

                            <div className="flex flex-col-reverse md:flex-col gap-y-4 lg:flex-row lg:w-full bottom-0 relative">
                                <div className='w-full md:w-6/12 px-8 py-2 md:py-8 h-full'>
                                    <h1 className='hidden md:block text-2xl lg:text-3xl text-center font-semibold'>{openPopup[index]}</h1>
                                    <ul className='flex flex-col mt-4'>
                                        {items[index].TitleDesc.map((item, index) => (
                                            <li key={index} className='flex items-start gap-x-2 lg:gap-x-4'>
                                                <div className='size-12 p-1.5 border border-gray-200 rounded-xl text-gray-800'>{item.icon}</div>
                                                <p className='h-20 text-left'>
                                                    <span className=''>{item.content}</span>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`py-3 cursor-pointer mt-4 px-2 transition-all bg-gradient-to-tr ${items[index].bg} w-full rounded-2xl text-center text-white`}>Get Started</button>

                                </div>
                                <div className='md:hidden w-full overflow-hidden'>
                                    <div className='h-[200px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${items[index].bgImgMob})` }} draggable={false}></div>

                                </div>
                                <div className='hidden md:block w-full md:w-6/12  md:h-[600px] bg-center bg-cover bg-no-repeat rounded-tr-2xl rounded-br-2xl' style={{ backgroundImage: `url(${items[index].bgImg})` }} draggable={false}>
                                </div>

                            </div>

                        </motion.div>
                    </motion.div>
                ) : null;
            })}
        </div>
    );
}

export default HomeSliderWidget;