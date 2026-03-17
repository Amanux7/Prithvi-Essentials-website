'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticCursor() {
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Strict spring physics ONLY, no linear easing.
    const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target.closest('[data-cursor="hover"]');
            setIsHovered(!!target);
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
            className={`fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference flex items-center justify-center rounded-full border border-white transition-all duration-300 ${isHovered ? 'w-24 h-24 bg-white border-transparent text-black' : 'w-6 h-6 bg-transparent text-transparent'
                }`}
        >
            <span
                className={`font-sans uppercase tracking-[0.2em] text-[10px] font-bold transition-opacity duration-300 delay-75 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                View
            </span>
        </motion.div>
    );
}
