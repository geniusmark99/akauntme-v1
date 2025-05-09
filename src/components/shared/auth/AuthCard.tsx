import React, { ReactNode } from "react";

interface AuthCardProps {
    LeftPane: ReactNode;
    RightPane: ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ LeftPane, RightPane }) => {
    return <>
        <div className="flex flex-col lg:flex-row  overflow-y- lg:overflow-hidden selection:bg-transparent">
            <div className="w-full lg:w-6/12">{LeftPane}</div>
            <div className="hidden lg:block w-full lg:w-6/12">{RightPane}</div>
        </div>
    </>
}

export default AuthCard;

