'use client'
import { GreetingWidget, ToolTipWidget, CustomPopupWidget, LoaderWidget } from "@/components/shared/general";
import { useAuth } from "@/hooks/auth";
import { useProducts } from '@/hooks/product'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';



const dashboard = () => {

    const { user } = useAuth({ middleware: 'auth' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { products, lowStockProducts, productsError, lowStockError } = useProducts()

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const [isFormOpen, setIsFormOpen] = useState(false);



    type Product = {
        id: number
        name: string
        price: number
        category: string
        description: string
        created_at: string
        stock: number
    }
    const [activeTab, setActiveTab] = useState<'All' | 'Low Stock'>('All')

    const filteredProducts = activeTab === 'All'
        ? products
        : lowStockProducts


    return <>
        <div className="px-5 mt-[70px] lg:mt-[80px]">
            <div className="flex justify-between items-center pt-2 pb-4">
                <h1 className="text-base sm:text-xl md:text-2xl flex items-center font-semibold dark:text-zinc-200">
                    <GreetingWidget user={user?.name} />
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
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h2 className='text-base lg:text-xl text-indigo-800 font-semibold'>Total Items</h2>
                                    <h1 className='text-xl lg:text-3xl font-semibold'>0</h1>
                                </div>





                                <ToolTipWidget text={`New Item`} bg="indigo-600" >
                                    <button onClick={() => setIsFormOpen(true)} className='size-10 flex justify-center items-center bg-white rounded-xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="size-6 stroke-indigo-600"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                                    </button>
                                </ToolTipWidget>

                            </div>
                            <div className='bg-indigo-600 h-full mt-4 relative rounded-tl-2xl rounded-tr-2xl flex items-center justify-between'>
                                <div className='flex items-center px-4 w-full mb-16 justify-between'>
                                    <div className=' flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-indigo-400 size-14'>
                                            <path d="M21.2 8.3L22 3 16.7 3.8z" />
                                            <path d="M4.7 15.6L3.3 14.2 8 9.6 9.5 11.1 13.6 6.9 15.2 8.4 19 4.6 20.4 6 15.2 11.2 13.6 9.7 9.5 13.9 8 12.4zM19 11H21V22H19zM15 13H17V22H15zM11 15H13V22H11zM7 17H9V22H7zM3 19H5V22H3zM5.5 2C3.6 2 2 3.6 2 5.5S3.6 9 5.5 9 9 7.4 9 5.5 7.4 2 5.5 2zM6.2 7.5H4.8V5L4 5.3v-1l1.9-.8h.3C6.2 3.5 6.2 7.5 6.2 7.5z" />
                                        </svg>
                                    </div>
                                    {/* <button onClick={() => setIsSaleChart(true)} className='bg-indigo-400 px-3 text-sm hover:bg-indigo-500 border border-transparent hover:border-indigo-800 py-2 rounded-full'>View Charts</button> */}
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

            </div>

            <CustomPopupWidget isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} motionType="scale"
                confirmOnClose confirmMessage="Do you want to close?">
                <div className='flex flex-col md:flex-row items-center rounded-xl justify-center gap-y-4 gap-x-2 w-full '>
                    <div className='lg:p-2 w-full'>

                    </div>
                </div>


            </CustomPopupWidget>

            <div className="mt-10">
                <h1 className="text-xl font-bold mb-4">Inventories</h1>
                <ul>

                    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-md">
                        <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                            <div className="flex gap-3 border-b border-akauntme w-full md:w-auto">
                                {['All', 'Valid account', 'Fake account'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as any)}
                                        className={`
                                            px-3 py-2 text-sm font-medium border-b-2
                                           ${activeTab === tab
                                                ? 'border-akauntme text-akauntme'
                                                : 'border-transparent text-gray-600 hover:text-akauntme cursor-pointer'}
                                        `}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <input
                                    type="text"
                                    placeholder="Search projects"
                                    className="px-3 py-2 border-2 border-gray-400 focus:border-blue-600 outline-0 rounded-md w-full md:w-64 "
                                />
                                <button className="px-4 py-2 flex  items-center gap-x-2 border-2 border-gray-400 focus:border-blue-600  rounded-md text-sm">

                                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m3 16 4 4 4-4"></path>
                                        <path d="M7 20V4"></path>
                                        <path d="m21 8-4-4-4 4"></path>
                                        <path d="M17 4v16"></path>
                                    </svg>

                                    Export</button>
                            </div>
                        </div>

                        {/* <div className="overflow-x-auto">
                            <div className="min-w-full divide-y divide-gray-200 text-sm">
                                <div className="bg-gray-50 text-left">
                                    <div className="flex items-center">
                                        <div className="p-3">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="p-3 font-normal">Name</div>
                                        <div className="p-3 font-normal">Address</div>
                                        <div className="p-3 font-normal whitespace-nowrap">Signed up</div>
                                        <div className="p-3 font-normal">Email</div>
                                        <div className="p-3 font-normal">Phone</div>
                                    </div>
                                </div>
                                <div className="divide-y">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                        {filteredProducts?.map(product => (
                                            <div key={product.id} className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow">
                                                <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">{product.name}</h3>
                                                <p className="text-sm text-zinc-600 dark:text-zinc-300">₦{product.price}</p>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Stock: {product.stock}</p>
                                                <p className="text-sm text-zinc-400 dark:text-zinc-500">Category: {product.category}</p>
                                                {product.image && (
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        width={100}
                                                        height={100}
                                                        className="mt-2 object-cover rounded"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div> */}



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
                                                                Stock
                                                            </span>
                                                        </div>
                                                    </th>

                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                                Categories
                                                            </span>
                                                        </div>
                                                    </th>

                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                                Description
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

                                                    <th scope="col" className="px-6 py-3 text-end">Edit</th>
                                                </tr>
                                            </thead>

                                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                                {filteredProducts?.map((product: Product) => (
                                                    <tr key={product.id}>
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
                                                                    <div className="grow">
                                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{product.name}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{product.stock}</span>
                                                            </div>
                                                        </td>
                                                        <td className="size-px whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">

                                                                    {product.category}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="size-px whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <div className="flex items-center gap-x-3 overflow-hidden w-[200px]">
                                                                    {product.description}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="size-px whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                                    {product.created_at}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="size-px whitespace-nowrap">
                                                            <div className="px-6 py-1.5">
                                                                <button className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
                                                                    Edit
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </ul>
            </div >

        </div >

    </>
}


export default dashboard;