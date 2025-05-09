import React from "react";


type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = "text", ...props }, ref) => {

        return (
            <input
                type={type}
                className={`${className} px-3 border-none outline-0 appearance-none rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                ref={ref}
                {...props}
            />
        )
    }
);

Input.displayName = "Input";

export { Input };







export default Input
