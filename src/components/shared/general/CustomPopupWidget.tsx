'use client'
import { motion, AnimatePresence, Variants } from "framer-motion";
import React, { useState } from "react";

interface PopupModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    motionType?: "slide-down" | "slide-up" | "fade" | "scale";
    confirmOnClose?: boolean;
    confirmMessage?: string;
}

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants: Record<string, Variants> = {
    "slide-down": {
        hidden: { y: "-100vh", opacity: 0 },
        visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
        exit: { y: "-100vh", opacity: 0 },
    },
    "slide-up": {
        hidden: { y: "100vh", opacity: 0 },
        visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
        exit: { y: "100vh", opacity: 0 },
    },
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.1 } },
        exit: { opacity: 0 },
    },
    scale: {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 0.1 } },
        exit: { scale: 0.8, opacity: 0 },
    },
};

const CustomPopupWidget: React.FC<PopupModalProps> = ({
    isOpen,
    onClose,
    children,
    motionType = "slide-down",
    confirmOnClose = false,
    confirmMessage = "Are you sure you want to close this modal?",
}) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleAttemptClose = () => {
        if (confirmOnClose) {
            setShowConfirm(true);
        } else {
            onClose();
        }
    };

    const variants = modalVariants[motionType] || modalVariants["slide-down"];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[2000] flex justify-center items-center"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={handleAttemptClose}>
                    <motion.div
                        className="relative bg-white dark:bg-zinc-900 w-[95%] max-w-4xl  overflow-hidden rounded-2xl shadow-2xl"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="overflow-x-hidden relative overflow-y-auto h-[60vh] p-6 mb-10">
                            {children}
                        </div>
                    </motion.div>
                    <AnimatePresence>
                        {showConfirm && (
                            <motion.div
                                className="absolute bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-xl w-11/12 max-w-sm text-center z-[60]"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <p className="text-gray-800 text-sm dark:text-white mb-4">{confirmMessage}</p>
                                <div className="flex justify-center gap-4">
                                    <button
                                        className="px-4 py-2 rounded-full bg-rose-500 dark:bg-rose-500/80 cursor-pointer text-white hover:bg-rose-700"
                                        onClick={() => {
                                            setShowConfirm(false);
                                            onClose();
                                        }}
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        className="px-4 py-2 rounded-full bg-green-500 dark:bg-green-500/80 cursor-pointer text-white hover:bg-green-600"
                                        onClick={() => setShowConfirm(false)}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CustomPopupWidget;
