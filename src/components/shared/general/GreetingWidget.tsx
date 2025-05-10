'use client';

import { useEffect, useState } from 'react';
import LoaderWidget from './LoaderWidget';

type GreetingData = {
    message: string;
    icon: React.ReactElement;
};

interface GreetingProps {
    user?: string;
}

const getGreeting = (): GreetingData => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        // Morning
        return {
            message: 'Good Morning',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m6.364 1.636l-1.414 1.414M20 12h-2M17.364 17.364l-1.414-1.414M12 20v-2M6.636 17.364l1.414-1.414M4 12H2m2.636-6.364l1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z" />
                </svg>
            ),
        };
    } else if (hour >= 12 && hour < 17) {
        // Afternoon
        return {
            message: 'Good Afternoon',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0-4a1 1 0 011 1v2a1 1 0 11-2 0V1a1 1 0 011-1zm0 22a1 1 0 011-1v-2a1 1 0 10-2 0v2a1 1 0 011 1zm10-10a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM4 12a1 1 0 01-1 1H1a1 1 0 110-2h2a1 1 0 011 1z" />
                </svg>
            ),
        };
    } else if (hour >= 17 && hour < 20) {
        // Evening
        return {
            message: 'Good Evening',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-gray-900 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
            ),
        };
    } else {
        // Night
        return {
            message: 'Good Night',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.75 15.5A9 9 0 1112.5 2.25 7.5 7.5 0 0021.75 15.5z" />
                </svg>
            ),
        };
    }
};

const GreetingWidget: React.FC<GreetingProps> = ({ user }) => {
    const [greeting, setGreeting] = useState<GreetingData>(getGreeting());

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(getGreeting());
        }, 60 * 1000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center gap-x-2">
            <div className="size-6">{greeting.icon}</div>
            <span className="font-semibold">{greeting.message}</span>{user ? `${user}` : <LoaderWidget className='text-akauntme mt-2' />}
        </div>
    );
};

export default GreetingWidget;
