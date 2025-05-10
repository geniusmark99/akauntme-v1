'use client'

import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti';
import { useEffect } from 'react'

interface Props {
    show: boolean
    onClose: () => void
    countdown: number
}
const ConfettiPopupWidget = ({ show, onClose, countdown }: Props) => {
    useEffect(() => {
        if (show) {
            confetti({
                particleCount: 100,
                spread: 160,
                origin: { y: 0.6 },
            })

            const timeout = setTimeout(() => {
                onClose()
            }, 10000)

            return () => clearTimeout(timeout)
        }
    }, [show, onClose])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-white rounded-lg shadow-lg p-8 text-center max-w-sm">
                        <h2 className="text-xl font-bold text-green-600 mb-2">Success!</h2>
                        <p className="text-gray-700">Check your email for the reset link.</p>
                        <p className="mt-2 text-sm text-gray-500">Closing in {countdown} seconds...</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}


export default ConfettiPopupWidget;