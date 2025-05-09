import React, { useEffect } from "react";

type DialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
};

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onOpenChange(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onOpenChange]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <DialogOverlay />
            <div className="relative z-50">{children}</div>
        </div>
    );
};

const DialogOverlay = () => (
    <div className="fixed inset-0 bg-black/80" />
);

const DialogContent = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={`relative z-50 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg ${className}`}
    >
        {children}
    </div>
);

const DialogClose = ({
    onClick,
}: {
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
    >
        <div className="size-4">
            &times;
        </div>
        <span className="sr-only">Close</span>
    </button>
);

const DialogHeader = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={`mb-4 text-center sm:text-left ${className}`}>
        {children}
    </div>
);

const DialogFooter = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={`flex flex-col-reverse sm:flex-row sm:justify-end gap-2 ${className}`}>
        {children}
    </div>
);

const DialogTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <h2 className={`text-lg font-semibold  ${className} `}>{children}</h2>
);

const DialogDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
);

const DialogTrigger = ({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick: () => void;
}) => (
    <button onClick={onClick}>{children}</button>
);

export {
    Dialog,
    DialogTrigger,
    DialogOverlay,
    DialogContent,
    DialogClose,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
