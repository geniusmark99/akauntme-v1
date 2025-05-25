'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import BlogPosts from '../types/BlogPosts';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const BlogSliderWidget = () => {
    return <>

        <div className="w-full py-4 ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full max-w-screen-xl mx-auto rounded-[30px] lg:shadow-md shadow-akauntme-2/50"
            >
                {BlogPosts.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="flex flex-col md:flex-row  overflow-hidden bg-white ">
                            <div className="bg-linear-60 from-[#0057FF] to-cyan-500 text-white p-6 md:p-12 md:w-1/2 flex flex-col justify-between">
                                <div>
                                    <div className="text-sm mb-10">
                                        <span className="mr-2">{slide.category}</span>
                                        <span className="bg-yellow-300 text-black rounded-full px-3 py-1 text-xs font-semibold">Top Stories</span>
                                    </div>
                                    <Link href={`/blog/${slide.slug}`} className="text-2xl md:text-4xl font-bold leading-tight mb-4 block">
                                        {slide.title}
                                    </Link>
                                    <p className="text-sm font-light">
                                        {slide.date} &nbsp; by <span className="font-semibold">{slide.author}</span>
                                    </p>

                                    <div className="absolute bottom-6 left-10 lg:left-[40%] flex space-x-4">
                                        <div className="prev-btn w-10 h-10 rounded-full bg-white text-[#0057FF] flex items-center justify-center shadow cursor-pointer">
                                            ←
                                        </div>
                                        <div className="next-btn w-10 h-10 rounded-full bg-white text-[#0057FF] flex items-center justify-center shadow cursor-pointer">
                                            →
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="md:w-1/2 flex h-[350px] md:h-auto items-center object-contain justify-center p-4 bg-gray-100" style={{ backgroundRepeat: "no-repeat", backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div ></>
}


export default BlogSliderWidget;