'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

type DraggableBackButtonProps = {
    classNameProps?: string;
};

const DraggableBackWidget: React.FC<DraggableBackButtonProps> = ({ classNameProps = '' }) => {
    const router = useRouter();

    return (
        <motion.div

            className="fixed bottom-5 right-5 z-50 cursor-pointer group"
        >



            <button
                onClick={() => router.back()}
                className={`group-hover:-translate-x-2 group-hover:scale-100  ${classNameProps} transition-all scale-95 w-14 h-14 rounded-full  bg-white text-akauntme flex items-center justify-center shadow-lg`}
                aria-label="Go Back"
            >
                <ArrowLeft className='stroke-black' />
            </button>


        </motion.div>
    );
}


export default DraggableBackWidget;