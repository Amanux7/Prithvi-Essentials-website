'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { DisplayHeading, SpecsText } from './Typography';

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: 1,
        name: "8x8 3CP Clamshell",
        focus: "Office meals, leak-proof, microwave-safe",
        specs: "12% GST • Eco-Fiber Bagasse",
        img: "/clamshell.png",
        description: "Our best-selling 3-compartment container. Engineered from 100% compostable sugarcane pulp, it features a secure locking mechanism designed to handle hot, greasy, and liquid-heavy premium meals without compromising structural integrity."
    },
    {
        id: 2,
        name: "10-inch 3CP Round Plate",
        focus: "Premium events, rigid 22g fiber",
        specs: "12% GST • Eco-Fiber Bagasse",
        img: "/plate.png",
        description: "The quintessential plate for large gatherings and high-end catering. Pressed at high temperatures to achieve a dense 22g weight, it offers ceramic-like rigidity while remaining fully biodegradable within 90 days."
    },
    {
        id: 3,
        name: "4-Pc Kraft Window Box",
        focus: "Home bakers, premium window",
        specs: "18% GST • High-Transparency PET",
        img: "/kraft.png",
        description: "Artisanal bakery packaging elevated. Constructed from unbleached, high-GSM virgin kraft paper with an ultra-clear PET window. Designed specifically to frame your dense brownies and intricate pastries like artwork."
    }
];

export default function ProductEditorial() {
    const containerRef = useRef(null);
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin Left Side
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                pin: leftSideRef.current,
                pinSpacing: false,
            });

            // Simple parallax on right side images
            const images = gsap.utils.toArray('.product-image-container');
            images.forEach((img, i) => {
                gsap.to(img, {
                    yPercent: -20, // 1.2x Parallax Speed Difference effectively
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[300vh] bg-background text-primary grid grid-cols-1 md:grid-cols-2">

            {/* Left Side: Sticky Metadata */}
            <div
                ref={leftSideRef}
                className="w-full h-screen flex flex-col justify-center py-20 px-8 lg:px-24"
            >
                <SpecsText className="mb-4">E-Commerce Assortment</SpecsText>
                <DisplayHeading as="h2" className="!text-[clamp(3rem,6vw,8rem)] mb-12">
                    Designed<br />for Impact
                </DisplayHeading>

                {/* Dynamic List corresponding to scroll could be added, but standard layout maps them below */}
                <div className="space-y-6 max-w-sm mt-auto">
                    <p className="font-sans text-sm leading-relaxed opacity-80">
                        Engineered completely without plastic. We utilize sugarcane bagasse and kraft paper to deliver a premium, tactile experience.
                    </p>
                </div>
            </div>

            {/* Right Side: Massive Images */}
            <div ref={rightSideRef} className="w-full relative z-10 flex flex-col pt-[50vh] pb-[50vh] px-4 md:px-12 gap-[40vh]">
                {products.map((p, idx) => (
                    <ProductCard key={p.id} product={p} index={idx} />
                ))}
            </div>
        </section>
    );
}

// Separate component for the Product display
function ProductCard({ product, index }) {
    const containerRef = useRef(null);

    return (
        <div className="product-image-container relative flex flex-col w-full group">
            {/* Editorial Meta Overlay placed right above Image */}
            <div className="mb-4 flex flex-col md:flex-row md:items-end justify-between">
                <div>
                    <SpecsText className="block mb-2 text-accent">0{index + 1}</SpecsText>
                    <h3 className="font-serif text-3xl md:text-5xl">{product.name}</h3>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0 max-w-sm">
                    <SpecsText>{product.specs}</SpecsText>
                    <p className="font-sans text-[10px] uppercase tracking-widest mt-1 opacity-60">{product.focus}</p>
                    <p className="font-sans text-xs leading-relaxed opacity-80 mt-4 normal-case tracking-normal">{product.description}</p>
                </div>
            </div>

            {/* Image Reveal Container */}
            <div
                ref={containerRef}
                data-cursor="hover"
                className="relative w-full aspect-[4/5] overflow-hidden bg-[#e0dcd2]"
            >
                {/* Image Layer: Grayscale initially, full vibrant color on hover */}
                <img
                    src={product.img}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale sepia-[0.3] transition-all duration-[800ms] ease-out group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105"
                />

                {/* Brand Watermark Overlay slightly fading out when product is in focus */}
                <div className="absolute bottom-4 right-4 z-20 pointer-events-none opacity-40 mix-blend-multiply transition-opacity duration-[800ms] group-hover:opacity-20">
                    <img src="/logo.png" alt="Prithvi Logo" className="w-16 h-16 md:w-24 md:h-24 object-contain filter grayscale invert" />
                </div>
            </div>
        </div>
    );
}
