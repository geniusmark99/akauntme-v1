'use client'
import { GreetingWidget, ToolTipWidget, CustomPopupWidget, LoaderWidget, FireConfettiWidget } from "@/components/shared/general";
import { useAuth } from "@/hooks/auth";
import { motion } from "framer-motion";
import { useProducts } from '@/hooks/product'
import { EmptyStateIcon } from "@/components/shared/icons";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import * as Yup from 'yup'
import { ErrorMessage, Formik, Form, Field, FormikHelpers } from "formik";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';



const dashboard = () => {


    type Product = {
        id?: number
        name: string
        price: number
        category: string
        description: string
        created_at?: string
        stock: number
    }

    const { user } = useAuth({ middleware: 'auth' });
    const { updateProduct, createProduct, deleteProduct } = useProducts();
    const [isDeleteProduct, setIsDeleteProduct] = useState(false);
    const [productToDelete, setProductToDelete] = useState<Product | null>(null);
    const [editProduct, setEditProduct] = useState<Product | null>(null);
    const [addProduct, setAddProduct] = useState<Product | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);


    const { products, productsError } = useProducts();
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleEditClick = (product: Product) => {
        setEditProduct(product);
        setIsEditOpen(true);
    };

    const handleAddProduct = (product: Product) => {
        setAddProduct(product);
    };

    const handleDelete = async () => {
        if (productToDelete) {
            try {
                await deleteProduct(productToDelete.id!);

                // 🎉 Fire confetti
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                });

                toast.success("Product deleted successfully!");


                setTimeout(() => {
                    setShowConfetti(false);
                }, 3000);

                setIsDeleteProduct(false);
                setProductToDelete(null);
            } catch (error) {
                toast.error("Failed to delete product");
                console.error('Delete error:', error);
            }
        }
    };


    const ProductSchema = Yup.object().shape({
        name: Yup.string()
            .required('The product name field is required.'),
        price: Yup.number()
            .required('The product price field is required.'),
        category: Yup.string()
            .required('The product category field is required.'),
        description: Yup.string()
            .required('The product description field is required.'),
        stock: Yup.number()
            .required('The product stock field is required.'),
    })

    const [activeTab, setActiveTab] = useState<'All' | 'Low Stock'>('All')

    const filteredProducts = activeTab === 'All'
        ? products
        : ''



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

                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold">Edit Product</h2>
                            <Formik
                                validationSchema={ProductSchema}
                                initialValues={{
                                    name: '',
                                    price: '',
                                    category: '',
                                    description: '',
                                    stock: '',
                                }}

                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                    try {
                                        await createProduct(values);
                                        toast.success('Product added successfully');
                                        resetForm();
                                        setIsFormOpen(false);
                                        setTimeout(() => {
                                            FireConfettiWidget()
                                        }, 300);
                                    } catch (error) {
                                        console.error('Update failed:', error);
                                        toast.error('Failed to add product');
                                    } finally {
                                        setSubmitting(false);
                                    }
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="space-y-3">
                                        <Field
                                            name="name"
                                            type="text"
                                            className="w-full border px-3 py-2 rounded"
                                            placeholder="Add product name"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-xs text-red-500 flex w-9/12 md:w-6/12"
                                        />

                                        <Field
                                            name="category"
                                            type="text"
                                            className="w-full border px-3 py-2 rounded"
                                            placeholder="Add product category"
                                        />
                                        <ErrorMessage
                                            name="category"
                                            component="div"
                                            className="text-xs text-red-500 flex w-9/12 md:w-6/12"
                                        />

                                        <Field
                                            name="price"
                                            type="number"
                                            className="w-full border px-3 py-2 rounded"
                                            placeholder="Add product price"
                                        />
                                        <ErrorMessage
                                            name="price"
                                            component="div"
                                            className="text-xs text-red-500 flex w-9/12 md:w-6/12"
                                        />

                                        <Field
                                            name="stock"
                                            type="number"
                                            className="w-full border px-3 py-2 rounded"
                                            placeholder="Add product stock"
                                        />
                                        <ErrorMessage
                                            name="stock"
                                            component="div"
                                            className="text-xs text-red-500 flex w-9/12 md:w-6/12"
                                        />

                                        <Field
                                            as="textarea"
                                            name="description"
                                            className="w-full border px-3 py-2 rounded"
                                            placeholder="Add Product description"
                                        />
                                        <ErrorMessage
                                            name="description"
                                            component="div"
                                            className="text-xs text-red-500 flex w-9/12 md:w-6/12"
                                        />

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                                        >
                                            {isSubmitting ? <><LoaderWidget className="text-white" /> Adding...</> : 'Add Product'}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>


            </CustomPopupWidget>

            <div className="mt-10">
                <h1 className="text-xl lg:text-2xl font-semibold mb-4 dark:text-gray-100">Inventories</h1>
                <ul>

                    <div className=" bg-white dark:bg-zinc-800 rounded-xl">
                        <div className="flex flex-wrap items-center justify-between mb-4 gap-4 w-full border-b border-zinc-300">
                            <div className="flex gap-3 w-full md:w-auto py-3">
                                {['All', 'Out of Stock', 'Low Stock Items'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as any)}
                                        className={`
                                                px-3 py-2 text-sm font-medium border-b-2 hover:bg-akauntme hover:text-white rounded-md
                                            ${activeTab === tab
                                                ? 'border-akauntme bg-akauntme text-white'
                                                : 'border-transparent text-gray-600 dark:text-gray-200 hover:text-akauntme cursor-pointer'}
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
                                    className="px-3 py-2 border-2 border-gray-200 focus:border-blue-600 outline-0 rounded-md w-full md:w-64 "
                                />
                                <button className="px-4 py-2 flex bg-akauntme text-white items-center gap-x-2 border-2 border-transparent focus:border-blue-600  rounded-md text-sm">

                                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m3 16 4 4 4-4"></path>
                                        <path d="M7 20V4"></path>
                                        <path d="m21 8-4-4-4 4"></path>
                                        <path d="M17 4v16"></path>
                                    </svg>

                                    Export</button>
                            </div>
                        </div>


                        <div className="">
                            <div className="max-w-[85rem] py-10 mx-auto">
                                <div className="flex flex-col">
                                    <div className="-m-1.5 overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                            <thead className="bg-gray-50 dark:bg-neutral-800">
                                                <tr>
                                                    <th scope="col" className="ps-6 py-3 text-start px-1">
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
                                                                Price
                                                            </span>
                                                        </div>
                                                    </th>

                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                                Category
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

                                                    <th scope="col" className="px-6 py-3 text-end font-normal">Edit/Delete</th>
                                                </tr>
                                            </thead>

                                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                                {filteredProducts && filteredProducts.length > 0 ?
                                                    filteredProducts?.map((product: Product) => (

                                                        <tr key={product.id}>
                                                            <td className="size-px whitespace-nowrap px-3">
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
                                                                        <div className="">
                                                                            <div className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{product.name}</div>
                                                                            <div className="block text-sm w-[200px] font-normal overflow-hidden text-gray-500 dark:text-neutral-500">{product.description}</div>
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

                                                                        &#8358;{product.price}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="size-px whitespace-nowrap">
                                                                <div className="px-6 py-3">
                                                                    <div className="flex items-center gap-x-3 overflow-hidden w-[200px]">
                                                                        {product.category}
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
                                                                <div className="px-6 py-1.5 flex items-center gap-x-2">

                                                                    <button
                                                                        className="mt-3 cursor-pointer flex items-center gap-x-1 px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm"
                                                                        onClick={() => handleEditClick(product)}
                                                                    >
                                                                        <svg className="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                                            <path d="M36 5.0097656C34.205301 5.0097656 32.410791 5.6901377 31.050781 7.0507812L8.9160156 29.183594C8.4960384 29.603571 8.1884588 30.12585 8.0253906 30.699219L5.0585938 41.087891 A 1.50015 1.50015 0 0 0 6.9121094 42.941406L17.302734 39.974609 A 1.50015 1.50015 0 0 0 17.304688 39.972656C17.874212 39.808939 18.39521 39.50518 18.816406 39.083984L40.949219 16.949219C43.670344 14.228094 43.670344 9.7719064 40.949219 7.0507812C39.589209 5.6901377 37.794699 5.0097656 36 5.0097656 z M 36 7.9921875C37.020801 7.9921875 38.040182 8.3855186 38.826172 9.171875 A 1.50015 1.50015 0 0 0 38.828125 9.171875C40.403 10.74675 40.403 13.25325 38.828125 14.828125L36.888672 16.767578L31.232422 11.111328L33.171875 9.171875C33.957865 8.3855186 34.979199 7.9921875 36 7.9921875 z M 29.111328 13.232422L34.767578 18.888672L16.693359 36.962891C16.634729 37.021121 16.560472 37.065723 16.476562 37.089844L8.6835938 39.316406L10.910156 31.521484 A 1.50015 1.50015 0 0 0 10.910156 31.519531C10.933086 31.438901 10.975086 31.366709 11.037109 31.304688L29.111328 13.232422 z" />
                                                                        </svg>

                                                                        Edit
                                                                    </button>

                                                                    <button
                                                                        className="mt-3 cursor-pointer flex items-center gap-x-1 px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded text-sm"

                                                                        onClick={() => {
                                                                            setProductToDelete(product);
                                                                            setIsDeleteProduct(true);
                                                                        }}
                                                                    >

                                                                        <svg className="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                                            <path d="M24 4C20.491685 4 17.570396 6.6214322 17.080078 10L10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10L6.5 10 A 1.50015 1.50015 0 1 0 6.5 13L8.6386719 13L11.15625 39.029297C11.427329 41.835926 13.811782 44 16.630859 44L31.367188 44C34.186411 44 36.570826 41.836168 36.841797 39.029297L39.361328 13L41.5 13 A 1.50015 1.50015 0 1 0 41.5 10L38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10L30.919922 10C30.429604 6.6214322 27.508315 4 24 4 z M 24 7C25.879156 7 27.420767 8.2681608 27.861328 10L20.138672 10C20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13L36.347656 13L33.855469 38.740234C33.730439 40.035363 32.667963 41 31.367188 41L16.630859 41C15.331937 41 14.267499 40.033606 14.142578 38.740234L11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5L19 34.5 A 1.50015 1.50015 0 1 0 22 34.5L22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5L26 34.5 A 1.50015 1.50015 0 1 0 29 34.5L29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z" />
                                                                        </svg>

                                                                        Delete
                                                                    </button>

                                                                </div>




                                                            </td>


                                                        </tr>


                                                    ))

                                                    :
                                                    (
                                                        <tr>
                                                            <td colSpan={7} className="text-center py-10">
                                                                <div className="flex flex-col items-center justify-center space-y-2  h-[40vh]">
                                                                    <EmptyStateIcon />
                                                                    <p className="text-gray-700 text-lg dark:text-neutral-600 ">No products added</p>
                                                                    <p className="text-gray-500 dark:text-neutral-400 text-sm">

                                                                        No Products added yet. add product to see the update.
                                                                    </p>
                                                                    <button onClick={() => setIsFormOpen(true)} className="flex justify-center items-center gap-x-2 bg-akauntme px-3 py-2 rounded-xl outline-2 cursor-pointer outline-transparent focus:outline-akauntme/50 text-white text-center">

                                                                        <svg
                                                                            className="size-5"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <path d="M5 12h14" />
                                                                            <path d="M12 5v14" />
                                                                        </svg>

                                                                        Add Product
                                                                    </button>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }


                                            </tbody>
                                        </table>

                                        {isEditOpen && editProduct && (

                                            <CustomPopupWidget
                                                isOpen={isEditOpen}
                                                motionType="scale"
                                                onClose={() => {
                                                    setIsEditOpen(false);
                                                    setEditProduct(null);
                                                }}

                                            >
                                                <div className="p-4 space-y-4">
                                                    <h2 className="text-xl font-bold">Edit Product</h2>
                                                    <Formik
                                                        initialValues={{
                                                            id: editProduct.id,
                                                            name: editProduct.name,
                                                            price: editProduct.price,
                                                            category: editProduct.category,
                                                            description: editProduct.description || '',
                                                            stock: editProduct.stock,
                                                        }}

                                                        onSubmit={async (values, { setSubmitting }) => {
                                                            try {
                                                                await updateProduct(editProduct.id!, values);
                                                                toast.success('Product updated successfully', {
                                                                    position: 'bottom-right'
                                                                });
                                                                setTimeout(() => {
                                                                    FireConfettiWidget()
                                                                }, 300);
                                                            } catch (error) {
                                                                console.error('Update failed:', error);
                                                                toast.error('Failed to update product');
                                                            } finally {
                                                                setSubmitting(false);
                                                                setIsEditOpen(false);
                                                                setEditProduct(null);
                                                            }
                                                        }}
                                                    >
                                                        {({ isSubmitting }) => (
                                                            <Form className="space-y-3">
                                                                <Field
                                                                    name="name"
                                                                    type="text"
                                                                    className="w-full border px-3 py-2 rounded"
                                                                    placeholder="Product Name"
                                                                />
                                                                <Field
                                                                    name="category"
                                                                    type="text"
                                                                    className="w-full border px-3 py-2 rounded"
                                                                    placeholder="Product Category"
                                                                />

                                                                <Field
                                                                    name="price"
                                                                    type="number"
                                                                    className="w-full border px-3 py-2 rounded"
                                                                    placeholder="Product Price"
                                                                />
                                                                <Field
                                                                    name="stock"
                                                                    type="number"
                                                                    className="w-full border px-3 py-2 rounded"
                                                                    placeholder="Product Stock"
                                                                />
                                                                <Field
                                                                    as="textarea"
                                                                    name="description"
                                                                    className="w-full border px-3 py-2 rounded"
                                                                    placeholder="Description"
                                                                />

                                                                <button
                                                                    type="submit"
                                                                    disabled={isSubmitting}
                                                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                                                                >
                                                                    Save Changes
                                                                </button>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </div>
                                            </CustomPopupWidget>
                                        )}


                                        {isDeleteProduct && productToDelete && (
                                            <motion.div
                                                className="fixed inset-0 backdrop-blur-sm z-[2000] flex justify-center items-center"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                onClick={() => setIsDeleteProduct(false)}
                                            >



                                                <motion.div
                                                    className="bg-white dark:bg-zinc-900 w-full max-w-md mx-auto rounded-2xl p-6 shadow-xl"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.8, opacity: 0 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Delete Product</h2>
                                                    <p className="text-gray-600 dark:text-neutral-300 mb-6">
                                                        Are you sure you want to delete <strong>{productToDelete.name}</strong>?
                                                    </p>
                                                    <div className="flex justify-end gap-3">
                                                        <button
                                                            className="px-4 py-2 rounded-2xl bg-teal-500 text-gray-200 dark:bg-teal-500 dark:text-white hover:bg-teal-600"
                                                            onClick={() => {
                                                                setIsDeleteProduct(false);
                                                                setProductToDelete(null);
                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            className="px-4 py-2 rounded-2xl bg-red-500 text-white hover:bg-red-600"
                                                            onClick={() => {
                                                                handleDelete();
                                                                // handleDelete(productToDelete.id!); // implement this logic
                                                                setIsDeleteProduct(false);
                                                                setProductToDelete(null);
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        )}



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