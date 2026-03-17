import '../index.css';
import LenisWrapper from '../components/LenisWrapper';
import MagneticCursor from '../components/MagneticCursor';

export const metadata = {
    title: 'Prithvi Essentials',
    description: 'Premium, sustainable packaging brand.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="antialiased font-sans" suppressHydrationWarning>
            <body className="bg-background text-primary" suppressHydrationWarning>
                <div className="noise-overlay" />
                <MagneticCursor />
                <LenisWrapper>
                    {children}
                </LenisWrapper>
            </body>
        </html>
    );
}
