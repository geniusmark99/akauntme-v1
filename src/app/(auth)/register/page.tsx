'use client'
import React from 'react'
import { LogoIcon } from '@/components/shared/icons';
import Link from 'next/link';

const Register = () => {
    return (
        <div className='h-auto overflow-y-auto overflow-x-hidden lg:overflow-hidden lg:h-[100dvh]'>
            <div className='flex flex-col lg:flex-row-reverse w-full '>
                <div className='hidden lg:flex flex-col w-full lg:w-6/12  bg-white rounded-2xl justify-center items-center'>
                    <div className='mb-10'>
                        <div className='flex items-end gap-x-2  justify-center text-center'>
                            <LogoIcon type='alone' className='fill-indigo-500 size-10' />
                            <h1 className='text-indigo-500 text-2xl font-semibold'>Akauntme</h1>
                        </div>
                        <p className='text-indigo-500 italic text-sm text-center indent-6'>Your smart accounting buddy...</p>

                    </div>

                    <div className='h-[500px] w-[300px] flex justify-center items-center bg-white border shadow-md rounded-2xl'>
                        <div className='h-[460px] w-[290px] bg-white border shadow-md mx-4 my-4 rounded-2xl'>

                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-6/12 flex flex-col overflow-hidden relative  justify-center items-center bg-gradient-to-r from-indigo-600 via-akauntme to-blue-600 lg:p-10'>
                    <div className='md:hidden flex my-5 flex-col'>
                        <h1 className='text-2xl font-semibold text-white   items-end flex gap-x-2'>
                            <LogoIcon type='alone' className='size-10 fill-white' />
                            Akauntme
                        </h1>
                        <p className='text-white italic text-sm text-center'>Your smart accounting buddy...</p>

                    </div>

                    <div className='flex justify-center flex-col items-center border border-white/20 mx-5 w-full lg:w-[500px] rounded-2xl backdrop-blur-md bg-white/10 py-5'>
                        <div className='w-full px-4 lg:px-10'>
                            <h1 className='text-center text-2xl lg:text-3xl font-semibold mb-10 text-white'>Register</h1>
                            <form action="#" className='flex flex-col gap-y-4 items-center w-full'>
                                <div className='flex gap-y-1 flex-col w-full lg:min-w-[350px] relative'>
                                    <label htmlFor="fullname" className='text-white'>Full name</label>
                                    <div className='flex items-center relative'>
                                        <div className='absolute inset-2 top-1 lg:top-2 size-9 flex justify-center items-center'>
                                            <svg className='size-5 lg:size-6 fill-white/80' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                <path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.346499 31 37 31.653501 37 32.5L37 33.699219C37 35.364355 35.927463 37.127823 33.677734 38.5625C31.428006 39.997177 28.068841 41 24 41C19.931159 41 16.571994 39.997177 14.322266 38.5625C12.072537 37.127823 11 35.364355 11 33.699219L11 32.5C11 31.653501 11.653501 31 12.5 31 z" />
                                            </svg>
                                        </div>
                                        <input type="text" id='fullname' autoComplete='none' placeholder='John doe' className='indent-3 border-2 w-full outline-none hover:border-white/40 focus:border-white/40 focus:outline-none focus:ring-0 bg-transparent text-white border-white/20 placeholder:text-white/60 py-2 lg:py-3 px-10 rounded-xl' />
                                    </div>
                                </div>

                                <div className='flex gap-y-1 flex-col w-full lg:min-w-[300px] relative'>
                                    <label htmlFor="email" className='text-white'>Email</label>

                                    <div className='flex items-center relative'>
                                        <div className='absolute inset-2 top-1 lg:top-2  size-9 flex justify-center items-center'>
                                            <svg className='size-5 lg:size-6 fill-white/80' viewBox="0 0 48 48" >
                                                <path d="M24 4C12.972292 4 4 12.972292 4 24C4 35.027708 12.972292 44 24 44C26.46846 44 28.839993 43.551537 31.027344 42.730469 A 1.50015 1.50015 0 1 0 29.972656 39.921875C28.116007 40.618807 26.10554 41 24 41C14.593708 41 7 33.406292 7 24C7 14.593708 14.593708 7 24 7C33.406292 7 41 14.593708 41 24L41 26.5C41 29.003499 39.003499 31 36.5 31C33.996501 31 32 29.003499 32 26.5L32 24L32 15.5 A 1.50015 1.50015 0 1 0 29 15.5L29 16.566406C27.419516 14.984362 25.331498 14 23 14C17.942095 14 14 18.59527 14 24C14 29.40473 17.942095 34 23 34C25.872367 34 28.382558 32.516731 30.017578 30.246094C31.319489 32.483151 33.739215 34 36.5 34C40.624501 34 44 30.624501 44 26.5L44 24C44 12.972292 35.027708 4 24 4 z M 23 17C26.214095 17 29 20.03073 29 24C29 27.96927 26.214095 31 23 31C19.785905 31 17 27.96927 17 24C17 20.03073 19.785905 17 23 17 z" />
                                            </svg>
                                        </div>
                                        <input type="email" id='email' autoComplete='off' placeholder='youremail.com@gmail.com' className='indent-3 border-2 w-full outline-none hover:border-white/40 focus:border-white/40 focus:outline-none focus:ring-0 bg-transparent text-white border-white/20 placeholder:text-white/60 py-2 lg:py-3 px-10 rounded-xl' />
                                    </div>

                                </div>



                                <div className='flex gap-y-1 flex-col w-full lg:min-w-[300px] relative'>
                                    <label htmlFor="business_type" className='text-white'>Business Type</label>

                                    <div className='flex items-center relative'>
                                        <div className='absolute inset-2 top-1 lg:top-2  size-9 flex justify-center items-center'>

                                            <svg className='size-5 lg:size-6 fill-white/80' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                <path d="M18.5 6C16.585045 6 15 7.5850452 15 9.5L15 12L7.5 12C5.5850452 12 4 13.585045 4 15.5L4 39.5C4 41.414955 5.5850452 43 7.5 43L40.5 43C42.414955 43 44 41.414955 44 39.5L44 15.5C44 13.585045 42.414955 12 40.5 12L33 12L33 9.5C33 7.5850452 31.414955 6 29.5 6L18.5 6 z M 18.5 9L29.5 9C29.795045 9 30 9.2049548 30 9.5L30 12L18 12L18 9.5C18 9.2049548 18.204955 9 18.5 9 z M 7.5 15L40.5 15C40.795045 15 41 15.204955 41 15.5L41 29L27 29L27 28.5C27 27.672 26.328 27 25.5 27L22.5 27C21.672 27 21 27.672 21 28.5L21 29L7 29L7 15.5C7 15.204955 7.2049548 15 7.5 15 z M 7 32L21 32L21 32.5C21 33.328 21.672 34 22.5 34L25.5 34C26.328 34 27 33.328 27 32.5L27 32L41 32L41 39.5C41 39.795045 40.795045 40 40.5 40L7.5 40C7.2049548 40 7 39.795045 7 39.5L7 32 z" />
                                            </svg>
                                        </div>
                                        <input type="text" id='business_type' autoComplete='none' placeholder='Retailer' className='indent-3 border-2 w-full outline-none hover:border-white/40 focus:border-white/40 focus:outline-none focus:ring-0 bg-transparent text-white border-white/20 placeholder:text-white/60 py-2 lg:py-3 px-10 rounded-xl' />
                                    </div>
                                </div>




                                <div className='flex gap-y-1 flex-col w-full lg:min-w-[300px] relative'>
                                    <label htmlFor="password" className='text-white'>Password</label>
                                    <div className='flex items-center relative'>
                                        <div className='absolute inset-2 top-1 lg:top-2 size-9 flex justify-center items-center'>
                                            <svg className='size-5 lg:size-6 fill-white/80' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                <path d="M14.5 5C9.2710594 5 5 9.2710634 5 14.5C5 19.728937 9.2710594 24 14.5 24C16.830242 24 18.9665 23.147359 20.623047 21.744141L30.378906 31.5L25.439453 36.439453 A 1.50015 1.50015 0 1 0 27.560547 38.560547L32.5 33.621094L35.878906 37L32.439453 40.439453 A 1.50015 1.50015 0 1 0 34.560547 42.560547L38 39.121094L40.439453 41.560547 A 1.50015 1.50015 0 1 0 42.560547 39.439453L39.234375 36.113281 A 1.50015 1.50015 0 0 0 38.888672 35.767578L33.734375 30.613281 A 1.50015 1.50015 0 0 0 33.388672 30.267578L22.582031 19.460938C23.475106 18.013915 24 16.317708 24 14.5C24 9.2710634 19.728941 5 14.5 5 z M 14.5 8C18.107621 8 21 10.892381 21 14.5C21 15.968914 20.5152 17.315597 19.703125 18.400391 A 1.50015 1.50015 0 0 0 19.255859 18.935547C18.071877 20.205446 16.385984 21 14.5 21C10.892379 21 8 18.107619 8 14.5C8 10.892381 10.892379 8 14.5 8 z" />
                                            </svg>
                                        </div>
                                        <input type="password" id='password' autoComplete='none' placeholder='**********' className='indent-3 placeholder:absolute placeholder:top-5 border-2 w-full outline-none hover:border-white/40 focus:border-white/40 focus:outline-none focus:ring-0 bg-transparent text-white border-white/20 placeholder:text-white/60  py-2 lg:py-3 px-10 rounded-xl' />
                                    </div>
                                </div>


                                <button className="w-full mt-3 max-w-sm lg:min-w-[300px] py-3 px-10 rounded-xl text-center font-semibold backdrop-blur-md bg-white/10 border border-white/20 text-white  shadow-lg hover:bg-white/20 transition duration-300">Register</button>


                            </form>
                        </div>


                        <div className='mt-10 flex flex-col gap-y-4'>
                            <p className='text-center text-white'>Already have an account?</p>


                            <Link href="/login" className="w-full max-w-sm lg:min-w-[300px] py-3 px-10 rounded-xl text-center font-semibold backdrop-blur-md bg-white/10 border border-white/20 text-white  shadow-lg hover:bg-white/20 transition duration-300">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register;