'use client';
import Image from 'next/image';
import { FooterWidget, HeaderWidget } from '@/components/shared/general';
import { LogoIcon } from '@/components/shared/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {

    const items = [
        { id: 0, valueTitle: 'Be a force for good', valueDesc: 'Making the world a better place through positive actions, inclusion and diversity.' },
        { id: 1, valueTitle: 'Be a force for good', valueDesc: 'Making the world a better place through positive actions, inclusion and diversity.' },
        { id: 2, valueTitle: 'Be a force for good', valueDesc: 'Making the world a better place through positive actions, inclusion and diversity.' },
        { id: 3, valueTitle: 'Be a force for good', valueDesc: 'Making the world a better place through positive actions, inclusion and diversity.' },
        { id: 4, valueTitle: 'Be a force for good', valueDesc: 'Making the world a better place through positive actions, inclusion and diversity.' },
        { id: 5, valueTitle: 'Be a force for good', valueDesc: 'Making the world a better place through positive actions, inclusion and diversity.' },

    ];
    return (
        <>
            <main>
                <div className='shadow-md'>
                    <HeaderWidget />
                </div>

                <div className='pt-24'>
                    <section className="relative  overflow-hidden bg-white" style={{ backgroundImage: 'url("/images/ring-effect-2.svg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
                        <div className='mt-2 flex flex-col justify-center items-center gap-y-4 lg:mt-10 text-center text-2xl md:text-5xl font-extrabold tracking-wide text-akauntme-2'>
                            <LogoIcon type='alone' className='fill-current size-20' />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-akauntme-deep via-teal-500 to-cyan-500'>
                                Akauntme
                            </span>
                        </div>

                        <div className='h-screen about-hero-bg bg-cover bg-no-repeat bg-center relative flex justify-center '>
                            <div className='absolute top-4 left-5  lg:top-40 lg:left-20 size-32 md:size-48  rounded-2xl overflow-hidden'>
                                <Image src="/images/a-lady-desiging.webp" className='size-[inherit] object-cover' width={200} height={200} alt='A Lady Designing' priority />
                            </div>

                            <div className='absolute top-4 right-5  lg:-top-20 lg:right-20 size-40 md:size-48 lg:size-[300px]  rounded-2xl overflow-hidden'>
                                <Image src="/images/two-ladies-smiling.webp" className='size-[inherit] object-cover' width={200} height={200} alt='A Lady Designing' priority />
                            </div>

                            <div className='absolute top-[300px] right-5  lg:-top-40 lg:left-20 size-32 md:size-48 lg:size-[250px]  rounded-2xl overflow-hidden'>
                                <Image src="/images/smiling-man.webp" className='size-[inherit] object-cover' width={200} height={200} alt='A Lady Designing' priority />
                            </div>

                            <div className='absolute bottom-4 left-5  lg:bottom-20 lg:left-20 size-52  rounded-2xl overflow-hidden'>
                                <Image src="/images/two-people-on-a-laptop.webp" className='size-[inherit] object-cover' width={200} height={200} alt='A Lady Designing' priority />
                            </div>

                            <div className='absolute bottom-[250px] left-5  lg:bottom-20 lg:left-[600px] size-32 md:size-40 lg:size-[300px]  rounded-2xl overflow-hidden'>
                                <Image src="/images/smiling-business-mother.webp" className='size-[inherit] object-cover' width={200} height={200} alt='A Lady Designing' priority />
                            </div>

                            <div className='absolute bottom-[5rem] right-5  lg:bottom-40 lg:right-20 size-32 md:size-40  rounded-2xl overflow-hidden'>
                                <Image src="/images/business-woman.webp" className='size-[inherit] object-cover' width={200} height={200} alt='A Lady Designing' priority />
                            </div>

                            <div className='relative z-30'>
                                <h1 className='mt-[15rem] font-canva lg:mt-[13rem] text-2xl md:text-5xl lg:text-7xl font-extrabold tracking-wide  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-akauntme-2 min-w-sm text-center lg:max-w-4xl'>
                                    Empowering Businesses to <span className='akauntme-focus-attract-intention'>Grow</span>
                                </h1>

                            </div>

                        </div>

                        <div className='py-10 px-7 lg:py-20 flex flex-col justify-center items-center gap-y-4 text-center bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-500  text-white'>
                            <h2 className='text-xl md:text-2xl max-w-7xl'>
                                Launched in 2025,
                                At Akauntme, we believe that every business — whether it&apos;s a small startup or an established company—deserves to have their financial story told with clarity and purpose. Our journey began when we realized that the existing tools weren’t telling that story the right way. For too long, businesses were forced to rely on complex, hard-to-navigate software that treated inventory and financial data as mere numbers, not as living, breathing aspects of their growth.
                            </h2>
                            <div className='h-[0.5px] mx-auto container bg-gray-300'></div>
                            <div className='grid gap-4 grid-cols-2 md:grid-cols-4  w-full max-w-5xl mt-4'>
                                <div className='flex flex-col items-center justify-center gap-y-1'>
                                    <h1 className='uppercase font-semibold text-2xl lg:text-4xl'>10M</h1>
                                    <span className='text-gray-200'>MAUS</span>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-y-1'>
                                    <h1 className='uppercase font-semibold text-2xl lg:text-4xl'>100B+</h1>
                                    <span className='text-gray-200'>Business Data Stored</span>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-y-1'>
                                    <h1 className='uppercase font-semibold text-2xl lg:text-4xl'>10</h1>
                                    <span className='text-gray-200'>Countries</span>
                                </div>



                                <div className='flex flex-col items-center justify-center gap-y-1'>
                                    <h1 className='uppercase font-semibold text-2xl lg:text-4xl'>10+</h1>
                                    <span className='text-gray-200'>Languages</span>
                                </div>
                            </div>
                        </div>

                        <div className='py-10 px-7 lg:py-20'>

                            <h1 className='text-center text-2xl md:text-5xl font-extrabold tracking-wide  text-blue-950'>
                                A Brief History
                            </h1>

                            <div className='flex justify-center mt-4 lg:mt-10'>

                                <div className='max-w-[72rem]'>
                                    <div className='group relative flex gap-x-3'>
                                        <div className='min-w-[50px] '>
                                            <h2>2023</h2>
                                        </div>
                                        <div className="relative after:absolute after:top-7 after:content-[''] after:bottom-1 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-300 ">
                                            <div className="relative justify-center size-[1rem] z-10 flex items-center left-1">
                                                <div className=" bg-gray-400 rounded-full size-2"></div>
                                            </div>
                                        </div>
                                        <div className='pb-10 flex-grow'>
                                            <div className='grid grid-cols-1 gap-y-4 lg:grid-cols-2 '>

                                                <p className="dark:text-neutral-500 max-w-[400px]">
                                                    Initial concept for Preline begins, inspired by the need for a streamlined UI component library built rjx3z Tailwind CSS.
                                                </p>

                                                <div className='rounded-2xl'>
                                                    <Image src="/images/planning.jfif" className='rounded-2xl' priority width={500} height={500} alt='A man planning with a woman' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='group relative flex gap-x-3'>
                                        <div className='min-w-[50px] '>
                                            <h2>2023</h2>
                                        </div>
                                        <div className="relative after:absolute after:top-7 after:content-[''] after:bottom-1 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-300 ">
                                            <div className="relative justify-center size-[1rem] z-10 flex items-center left-1">
                                                <div className=" bg-gray-400 rounded-full size-2"></div>
                                            </div>
                                        </div>
                                        <div className='pb-10 flex-grow'>
                                            <div className='grid grid-cols-1 gap-y-4 lg:grid-cols-2 '>

                                                <p className="dark:text-neutral-500 max-w-[400px]">
                                                    Initial concept for Preline begins, inspired by the need for a streamlined UI component library built rjx3z Tailwind CSS.
                                                </p>

                                                <div className='rounded-2xl bg-red-700'>
                                                    <Image src="/images/planning.jfif" className='rounded-2xl' priority width={500} height={500} alt='A man planning with a woman' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='py-10 px-7 lg:py-20'>

                            <h1 className='text-center text-2xl md:text-5xl font-extrabold tracking-wide  text-blue-950'>
                                Our Values
                            </h1>

                            <div className="w-full mt-10">
                                <Swiper
                                    modules={[Pagination]}
                                    spaceBetween={20}
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    {items.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="h-[300px] lg:h-[500px] bg-gradient-to-b from-blue-600 to-akauntme-2 text-white flex items-center justify-center rounded-xl">
                                                <div className="flex flex-col items-center justify-center gap-y-4 w-full h-full p-5">
                                                    <h1 className='text-2xl font-bold'>{item.valueTitle}</h1>
                                                    <p className='text-center text-lg'>{item.valueDesc}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>




                        </div>



                    </section>
                </div >

                <div className='pt-0'>

                    <section className="relative py-20 overflow-hidden bg-white" style={{ backgroundImage: 'url("/images/ring-effect-2.svg")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', }}>
                        <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
                            <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
                        </span>
                        <span className="absolute bottom-0 left-0"> </span>
                        <div className="relative px-16 mx-auto max-w-7xl">
                            <p className=" text-center text-2xl md:text-5xl font-extrabold tracking-wide text-akauntme-deep">
                                Our Team
                            </p>
                            <h2 className="relative text-center  mt-5 mb-10 text-2xl font-semibold leading-tight lg:text-3xl">

                            </h2>
                            <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                        <Image
                                            priority
                                            alt="Image"
                                            width={500}
                                            height={500}
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-03.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Mark Okechukwu</h3>
                                            <p className="text-akauntme-deep">CEO and Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                                        <Image
                                            priority
                                            alt="Image"
                                            width={500}
                                            height={500}
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-07.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Carl Jones</h3>
                                            <p className="text-akauntme-deep text-[14px]">CTO and Co-Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50" />
                                        <Image
                                            priority
                                            alt="Image"
                                            width={500}
                                            height={500}
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-20.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Susan Peterson</h3>
                                            <p className="text-akauntme-deep">Marketing Directory</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                                        <Image
                                            priority
                                            alt="Image"
                                            width={500}
                                            height={500}
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-09.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Tommy Barnes</h3>
                                            <p className="text-akauntme-deep">Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                                        <Image
                                            priority
                                            alt="Image"
                                            width={500}
                                            height={500}
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-14.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Ron Jenson</h3>
                                            <p className="text-akauntme-deep">Senior Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50" />
                                        <Image
                                            priority
                                            alt="Image"
                                            width={500}
                                            height={500}
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-13.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Pete Tompkins</h3>
                                            <p className="text-akauntme-deep">Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                                        <Image
                                            priority
                                            alt="Image"
                                            width={500}
                                            height={500}
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-16.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Kelly Richards</h3>
                                            <p className="text-akauntme-deep">Sales Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center col-span-1">
                                    <div className="relative p-5">
                                        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                        <Image
                                            priority
                                            alt="Image"
                                            width={500}
                                            height={500}
                                            className="relative z-20 w-full rounded-full"
                                            src="https://cdn.devdojo.com/images/june2021/avt-08.jpg"
                                        />
                                    </div>
                                    <div className="mt-3 space-y-2 text-center">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>Alexis Jordan</h3>
                                            <p className="text-akauntme-deep">Affiliate Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                < FooterWidget />

            </main >
        </>
    );
}

export default About;