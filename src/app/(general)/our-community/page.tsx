import Link from 'next/link';
import Image from 'next/image';
import { FooterWidget, HeaderWidget } from '@/components/shared/general';


const Community = () => {
    return <>
        <main>
            <div className='shadow-md'>
                <HeaderWidget />
            </div>

            <div className='pt-20 relative'>
                <div style={{ clipPath: 'ellipse(90% 70% at 50% 30%)' }} className="bg-cover bg-[60%] bg-no-repeat relative z-30 h-[50vh] md:h-[40vh] lg:h-[80vh] flex  justify-center items-center bg-blue-50 flex flex-col  px-10 pt-5 md:px-20 md:p-10">
                    <h1 className='font-semibold text-center text-4xl md:text-3xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500'>COMING SOON</h1>
                    <p className='mt-4 text-base md:text-xl text-blue-950 text-center'>Get started everyone! We are building a community for you that is awesome.</p>
                    <div className='mt-4 flex  md:flex-row gap-4'>
                        <Link href="/" className='py-1.5 md:py-2 px-4 bg-cyan-600 text-white hover:scale-105 transition mt-8 rounded-xl'>Home</Link>
                        <Link href="/" className='py-1.5 md:py-2 px-4 bg-cyan-600 text-white hover:scale-105 transition mt-8 rounded-xl'>Features</Link>
                    </div>
                </div>
            </div>

        </main>
    </>
}

export default Community;
