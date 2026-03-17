import { Instagram, Twitter, Facebook } from 'lucide-react';
import { SpecsText } from './Typography';

export default function Footer() {
    return (
        <footer className="w-full bg-[#1A3622] text-[#F4F0EA] py-16 px-8 md:px-16 flex flex-col items-center">

            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between mb-16 gap-12 md:gap-8">
                {/* Brand & Mission */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="flex items-center gap-3">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                            <path d="M12 2a10 10 0 1 0 10 10" />
                            <path d="M12 12c-2.5 0-4.5 2-4.5 4.5S9.5 21 12 21s4.5-2 4.5-4.5T12 12z" />
                            <path d="M17 12c.5-2 2-4 4-5-2 4-1 6-4 5z" />
                            <path d="M7 12c-.5-2-2-4-4-5 2 4 1 6 4 5z" />
                        </svg>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Prithvi Essentials</h2>
                    </div>
                    <p className="font-sans text-sm opacity-80 leading-relaxed">
                        Engineered without plastic. Utilizing sugarcane bagasse and kraft paper to deliver a premium, tactile, and eco-friendly experience. Love for nature.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="flex flex-col gap-4">
                        <SpecsText className="opacity-60 mb-2">Explore</SpecsText>
                        <a href="#" className="font-sans text-sm hover:text-accent transition-colors">Our Products</a>
                        <a href="#" className="font-sans text-sm hover:text-accent transition-colors">Sustainability</a>
                        <a href="#" className="font-sans text-sm hover:text-accent transition-colors">About Us</a>
                        <a href="#" className="font-sans text-sm hover:text-accent transition-colors">Contact</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <SpecsText className="opacity-60 mb-2">Legal</SpecsText>
                        <a href="#" className="font-sans text-sm hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="font-sans text-sm hover:text-accent transition-colors">Terms of Service</a>
                        <a href="#" className="font-sans text-sm hover:text-accent transition-colors">Refund Policy</a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Socials & Copyright */}
            <div className="w-full max-w-7xl pt-8 border-t border-[#F4F0EA]/20 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Social Media */}
                <div className="flex items-center gap-6">
                    <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors" aria-label="Instagram">
                        <Instagram size={20} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors" aria-label="Twitter">
                        <Twitter size={20} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors" aria-label="Facebook">
                        <Facebook size={20} strokeWidth={1.5} />
                    </a>
                </div>

                {/* Copyright Phrase */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-sans text-xs opacity-60 uppercase tracking-widest text-center">
                    <span>© {new Date().getFullYear()} Prithvi Essentials.</span>
                    <span className="hidden md:inline">•</span>
                    <span>design and develop by Aman Singh</span>
                </div>
            </div>

        </footer>
    );
}
