'use client';
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DarkIcon, LightIcon } from '@/components/shared/icons';

interface modeProps {
    close?: boolean
}

const DarkModeWidget = ({ close = true }: modeProps) => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);


    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        setDarkMode(!darkMode);
    };



    return (
        <div className=' px-2 bg-gradient-to-tr from-white to-gray-100 dark:from-zinc-900 dark:to-zinc-800 py-2 rounded-full relative'>
            <div className='flex justify-between items-center'>
                <motion.button
                    onClick={toggleDarkMode}
                    whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: {
                            delay: 0.25,
                            duration: 1,

                        }
                    }}

                    className='size-7 flex relative overflow-hidden transition-all justify-center items-center rounded-full bg-gray-100 dark:bg-zinc-700'>

                    <LightIcon className={`${!darkMode ? '-translate-x-8' : 'translate-x-0'} size-3.5 transition-all fill-akauntme absolute dark:fill-gray-100`} />

                    <DarkIcon className={`${darkMode ? 'translate-x-8' : 'translate-x-0'}  size-3.5 fill-akauntme absolute dark:fill-gray-500  transition-all`} />

                </motion.button>

                <div className={`${close ? 'opacity-100 flex' : 'opacity-0 hidden'} text-akauntme transition-all px-2 dark:text-gray-300 leading-5  justify-center items-center gap-x-2`}>
                    <p className='h-5 text-xs'>{darkMode ? 'Light' : 'Dark'}</p>

                </div>

            </div>
        </div>
    )
}


export default DarkModeWidget;