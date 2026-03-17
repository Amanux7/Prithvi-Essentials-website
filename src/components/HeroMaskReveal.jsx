'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroMaskReveal() {
    const container = useRef(null);
    const [logoError, setLogoError] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 200]);
    const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

    // Color Transitions: Initially Dark Green / Terracotta, changing to pristine White at 40% scroll
    // when the massive dark nature background covers the viewport.
    const headerColor = useTransform(scrollYProgress, [0.1, 0.4], ['#1A3622', '#FFFFFF']);
    const tagColor = useTransform(scrollYProgress, [0.1, 0.4], ['#C85A40', '#FFFFFF']);

    // Animate the image filter from normal to completely white (bright 200, brightness 0 + invert 1 approach)
    // To turn dark green logo to white: brightness(0) invert(1)
    const logoFilter = useTransform(scrollYProgress, [0.1, 0.4], ['brightness(1) invert(0)', 'brightness(0) invert(1)']);

    return (
        <div ref={container} className="relative h-[400vh] bg-background w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Animated Header */}
                <motion.header
                    style={{ color: headerColor }}
                    className="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex flex-col items-center md:items-start pointer-events-none"
                >
                    <div className="flex flex-col items-center md:items-start gap-0.5">
                        <div className="flex items-center gap-2">
                            {/* Native Image for user's uploaded logo */}
                            {!logoError ? (
                                <motion.img
                                    src="/logo.png"
                                    alt="Prithvi Logo"
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                    style={{ filter: logoFilter }}
                                    onError={() => setLogoError(true)}
                                />
                            ) : (
                                /* Fallback Leaf Globe if image is missing from public/ */
                                <motion.svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: logoFilter }}>
                                    <path d="M12 2a10 10 0 1 0 10 10" />
                                    <path d="M12 12c-2.5 0-4.5 2-4.5 4.5S9.5 21 12 21s4.5-2 4.5-4.5T12 12z" />
                                    <path d="M17 12c.5-2 2-4 4-5-2 4-1 6-4 5z" />
                                    <path d="M7 12c-.5-2-2-4-4-5 2 4 1 6 4 5z" />
                                </motion.svg>
                            )}
                            <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight">Prithvi Essentials</h1>
                        </div>
                        <motion.span
                            style={{ color: tagColor }}
                            className="font-serif text-sm md:text-base tracking-[0.15em] opacity-80 md:ml-[48px]"
                        >
                            Love for nature
                        </motion.span>
                    </div>
                </motion.header>

                {/* 1. Underlying Nature Imagery (Darkened heavily for contrast) */}
                <div className="absolute inset-0 w-full h-full z-0 origin-center bg-[#1A3622]">
                    <img
                        className="w-full h-full object-cover filter saturate-50 brightness-[30%] scale-105"
                        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop"
                        alt="Lush forest"
                    />
                </div>

                {/* 2. Scalable mix-blend overlay 
                    Bone Background (#F4F0EA)
                    Dark Green Cutout (#1A3622) 
                */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-10 flex origin-center items-center justify-center pointer-events-none"
                    style={{ scale, opacity }}
                >
                    <div className="w-[300vw] h-[300vh] flex flex-col items-center justify-center mix-blend-lighten bg-[#F4F0EA] text-[#1A3622]">
                        <h2 className="font-serif font-bold text-[clamp(6rem,22vw,30rem)] leading-none tracking-tighter">
                            PRITHVI
                        </h2>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
