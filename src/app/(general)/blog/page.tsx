import Link from 'next/link';
import Image from 'next/image';
import BlogSliderWidget from "./components/BlogSliderWidget";
import BlogPosts from './types/BlogPosts';
import { HeaderWidget, FooterWidget } from "@/components/shared/general";


const Blog = () => {
    return <>
        <main className='mb-20'>
            <div className='shadow-md'>
                <HeaderWidget />
            </div>

            <div className='pt-20 relative'>
                {/* style={{ clipPath: 'ellipse(90% 70% at 50% 30%)' }} */}
                <div className="bg-cover bg-[60%] bg-no-repeat relative z-30 h-auto flex  justify-center items-center bg-blue-50 flex-col  px-4 pt-5 md:px-20 md:p-10">
                    <h1 className='text-center lg:lead text-3xl md:text-3xl pt-10 pb-5 lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500'>AkauntBook Blog</h1>
                    <p className='max-w-[500px] text-center mt-5 mb-12 text-blue-950'>
                        Get behind the scenes on our process, exciting news, and the people making dreams come true for hundreds of businesses.
                    </p>
                    <BlogSliderWidget />
                </div>

                <div className='flex justify-center mt-10'>
                    <div className='px-4 pt-5  w-full max-w-screen-xl'>
                        <div className='flex justify-between flex-col md:flex-row gap-y-5'>
                            <div>
                                <h1 className='text-2xl md:text-3xl font-semibold text-blue-950'>All stores</h1>
                                <p className='text-lg max-w-[400px] mt-2'>
                                    Everything you need to know, about everything we do.
                                </p>
                            </div>
                            <div>
                                <div className='flex items-center gap-x-1  md:w-[400px]'>
                                    <div className='w-full flex items-center relative'>
                                        <div className='absolute inset-2 w-8 flex justify-center items-center'>
                                            <svg className='size-5 fill-akauntme-dark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                                <path d="M20.5 6C12.509634 6 6 12.50964 6 20.5C6 28.49036 12.509634 35 20.5 35C23.956359 35 27.133709 33.779044 29.628906 31.75L39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453L31.75 29.628906C33.779044 27.133709 35 23.956357 35 20.5C35 12.50964 28.490366 6 20.5 6 z M 20.5 9C26.869047 9 32 14.130957 32 20.5C32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016C26.405717 30.776199 23.602614 32 20.5 32C14.130953 32 9 26.869043 9 20.5C9 14.130957 14.130953 9 20.5 9 z" />
                                            </svg>
                                        </div>
                                        <input type="search" placeholder='Search Blog' className='w-full indent-6 border-2 border-gray-400 focus:border-akauntme-2 outline-0 focus:outline-0 rounded-xl px-4 py-3' />

                                    </div>
                                    <button className='bg-akauntme-2 text-white rounded-xl px-4 py-3'>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-10'>
                    <div className='px-4 pt-5 gap-y-10 md:gap-x-3 w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


                        {BlogPosts.map((blog, idx) => (

                            <Link key={idx} href={`/blog/${blog.slug}`} className='block hover:shadow-lg shadow-akauntme-2/50 transition-shadow duration-300 rounded-lg p-4 bg-white border-2 border-akauntme-2 hover:border-akauntme-2/50'>
                                <Image src={blog.image} alt='Blog Post Image' width={250} height={216} className='w-full h-[350px] rounded-lg object-cover mb-4' />
                                <div>
                                    <div className='flex justify-between items-center mb-2 text-sm'>
                                        <h6 className='text-blue-700 font-semibold'>{blog.category}</h6>
                                        <p className='text-gray-500'>{blog.date}</p>
                                    </div>
                                    <h4 className='text-[max(16px,_1.4rem)] font-semibold text-blue-950 '>
                                        {blog.title}
                                    </h4>
                                    <p className='italic text-gray-500 mt-2 font-semibold'>
                                        By {blog.author}
                                    </p>
                                </div>
                            </Link>
                        ))}







                    </div>
                </div>


            </div>

        </main >
        <FooterWidget />
    </>
}


export default Blog;