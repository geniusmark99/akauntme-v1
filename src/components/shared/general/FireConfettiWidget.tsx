import confetti from 'canvas-confetti';

export const FireConfettiWidget = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
};

export default FireConfettiWidget;