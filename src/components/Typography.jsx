export function DisplayHeading({ children, className = '', as: Component = 'h1' }) {
    // Massive, tightly tracked Serif
    return (
        <Component className={`font-serif text-[clamp(4rem,10vw,14rem)] leading-[0.85] tracking-tighter ${className}`}>
            {children}
        </Component>
    );
}

export function SpecsText({ children, className = '', as: Component = 'span' }) {
    // Micro-sized, technical Sans-Serif, uppercase, tracking-widest
    return (
        <Component className={`font-sans text-[clamp(0.6rem,1vw,0.75rem)] uppercase tracking-[0.25em] font-medium opacity-80 ${className}`}>
            {children}
        </Component>
    );
}
