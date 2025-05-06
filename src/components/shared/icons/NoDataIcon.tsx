import React from "react";
interface IconProps {
    className: string;
}

const NoDataIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        width={86}
        height={64}
        viewBox="0 0 86 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <rect x={80} y={43} width={6} height={21} />
        <rect y={22} width={6} height={42} />
        <rect x={10} y={7} width={6} height={57} />
        <rect x={20} y={17} width={6} height={47} />
        <rect x={30} y={2} width={6} height={62} />
        <rect x={40} y={28} width={6} height={36} />
        <rect x={50} width={6} height={64} />
        <rect x={60} y={16} width={6} height={48} />
        <rect x={70} y={9} width={6} height={55} />
    </svg>
);


export default NoDataIcon;
