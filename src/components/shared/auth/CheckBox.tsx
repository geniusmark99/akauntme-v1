import React, { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const CheckBox = ({ className = '', ...props }: CheckboxProps) => {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 ' +
                className
            }
        />
    );
}

export default CheckBox