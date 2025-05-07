import Link from 'next/link';
import { FooterWidget, HeaderWidget } from '@/components/shared/general';


const Pricing = () => {
    return (
        <>
            <main>
                <div className='shadow-md'>
                    <HeaderWidget />
                </div>

                <div className='pt-24'>
                    <section
                        id="pricing"
                        aria-label="Pricing"
                        className="py-20 sm:py-32"
                    >
                        <div className="mx-6 lg:mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                            <div className="md:text-center">
                                <h2 className="font-display text-3xl text-center tracking-tight text-slate-900 
                                sm:text-4xl">
                                    <span className="relative whitespace-nowrap">
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 281 40"
                                            preserveAspectRatio="none"
                                            className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                                            />
                                        </svg>
                                        <span className="relative">Simple pricing,</span>
                                    </span>{" "}
                                    {/* */}for everyone.
                                </h2>
                                <p className="mt-4 text-lg text-center text-slate-500">
                                    It doesn&apos;t matter what size your business is, our software would work
                                    well for you.
                                </p>
                            </div>
                            <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
                                {/* Section Start */}
                                <section className="flex flex-col rounded-3xl px-6 sm:px-8 shadow-sm shadow-blue-400/50 py-8 lg:order-none">

                                    <h3 className="mt-5 font-display text-lg text-slate-900">Starter</h3>
                                    <p className="mt-2 text-base text-slate-600">
                                        Good for anyone who is self-employed and just getting started.
                                    </p>
                                    <p className="order-first font-display text-5xl font-light tracking-tight
                                     text-slate-800">
                                        &#8358;1000 <span className='text-base'>per Month</span>
                                    </p>
                                    <ul
                                        role="list"
                                        className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-600"
                                    >
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Send 10 quotes and invoices</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Connect up to 2 bank accounts</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Track up to 15 expenses per month</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Manual payroll support</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Export up to 3 reports</span>
                                        </li>
                                    </ul>
                                    <Link
                                        className="group inline-flex ring-1 items-center bg-transparent hover:bg-blue-600 justify-center 
                                        rounded-full py-2 px-4 text-sm focus:outline-none ring-blue-700
                                         text-blue-500 hover:text-white  hover:ring-blue-500  focus-visible:outline-white mt-8"
                                        color="white"
                                        aria-label="Get started with the Starter plan for $9"
                                        href="/register"
                                    >
                                        Get started
                                    </Link>
                                </section>
                                {/* Section End */}

                                {/* Section Start */}
                                <section className="flex flex-col rounded-3xl px-6 sm:px-8 bg-gradient-to-tr from-blue-600 to-akauntme-2 py-8 lg:order-none">
                                    <h3 className="mt-5 font-display text-lg text-white">Small business</h3>
                                    <p className="mt-2 text-base text-white">
                                        Perfect for small / medium sized businesses.
                                    </p>
                                    <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                                        &#8358;3000 <span className='text-base'>per Month</span>
                                    </p>
                                    <ul
                                        role="list"
                                        className="order-last mt-10 flex flex-col gap-y-3 text-sm text-white"
                                    >
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-white"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Send 25 quotes and invoices</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-white"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Connect up to 5 bank accounts</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-white"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Track up to 50 expenses per month</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-white"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Automated payroll support</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-white"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Export up to 12 reports</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-white"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Bulk reconcile transactions</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-white"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Track in multiple currencies</span>
                                        </li>
                                    </ul>
                                    <a
                                        className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8"
                                        color="white"
                                        aria-label="Get started with the Small business plan for $15"
                                        href="/register"
                                    >
                                        Get started
                                    </a>
                                </section>
                                {/* Section End */}

                                {/* Section Start */}
                                <section className="flex flex-col rounded-3xl px-6 sm:px-8 shadow-sm shadow-blue-400/50 py-8 lg:order-none">

                                    <h3 className="mt-5 font-display text-lg text-slate-900">Enterprise</h3>
                                    <p className="mt-2 text-base text-slate-600">
                                        For even the bigger enterprise companies.
                                    </p>
                                    <div className='flex items-center order-first justify-between'>
                                        <p className=" font-display text-5xl font-light tracking-tight
                                     text-slate-800">
                                            &#8358;5000
                                        </p>
                                        <div className='rounded-full py-2 px-3 text-white text-sm bg-gradient-to-tr from-teal-500 to-blue-500 shadow-inner shadow-blue-400'>
                                            Coming soon
                                        </div>
                                    </div>

                                    <ul
                                        role="list"
                                        className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-600">
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Send unlimited quotes and invoices</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Connect up to 15 bank accounts</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Track up to 200 expenses per month</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Automated payroll support</span>
                                        </li>
                                        <li className="flex">
                                            <svg
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                                            >
                                                <path
                                                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                                    strokeWidth={0}
                                                />
                                                <circle
                                                    cx={12}
                                                    cy={12}
                                                    r="8.25"
                                                    fill="none"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="ml-4">Export up to 25 reports, including TPS</span>
                                        </li>
                                    </ul>
                                    <Link
                                        className="group inline-flex ring-1 items-center bg-transparent hover:bg-blue-600 justify-center 
                                        rounded-full py-2 px-4 text-sm focus:outline-none ring-blue-700
                                         text-blue-500 hover:text-white  hover:ring-blue-500  focus-visible:outline-white mt-8"
                                        color="white"
                                        aria-label="Get started with the Starter plan for $9"
                                        href="/register"
                                    >
                                        Get started
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </section>

                </div>



                <FooterWidget />
            </main>
        </>
    );
}

export default Pricing;