const Input = ({ disabled = false, className = "", ...props }) => (
    <input
        disabled={disabled}
        className={`${className} px-3 border-none outline-0 appearance-none rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
