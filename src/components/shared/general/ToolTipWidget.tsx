"use client";
import { useState, ReactNode } from 'react';

interface TooltipProps {
    children?: ReactNode;
    text?: ReactNode;
    textColor?: string;
    className?: string;
    position?: 'left' | 'left-2' | 'right' | '';
    bg?: string;
}

const ToolTipWidget: React.FC<TooltipProps> = ({
    children = "",
    text = "",
    className = "",
    position = "",
    bg = "",
    textColor = "",
}) => {
    const [isVisible, setIsVisible] = useState(false);

    let positionClasses = '';
    switch (position) {
        case 'left':
            positionClasses = '-bottom-2 -left-12';
            break;
        case 'left-2':
            positionClasses = 'bottom-4 -left-4';
            break;
        case 'right':
            positionClasses = 'lg:-bottom-11 left-1/2';
            break;
        default:
            positionClasses = 'lg:-bottom-11 left-1/2';
    }

    return (
        <div className={`relative inline-block ${className}`}>
            <div
                className="relative z-10 cursor-pointer rounded-md"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                {children}
            </div>

            {isVisible && text ? (
                <div
                    className={`${positionClasses} rounded-md z-[10000] absolute font-semibold -bottom-11 transform -translate-x-1/2 mb-2 w-max px-2 py-1.5 ${bg ? 'bg-' + bg : 'bg-gray-900'
                        }  text-xs rounded-lg shadow-lg ${textColor ? 'text-' + textColor : 'text-white'}`}>
                    {text}
                </div>
            ) : null}
        </div>
    );
};

export default ToolTipWidget;
