import HeroMaskReveal from '../components/HeroMaskReveal';
import ProductEditorial from '../components/ProductEditorial';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="w-full relative selection:bg-accent selection:text-white">
            <HeroMaskReveal />
            <ProductEditorial />
            <Footer />
        </main>
    );
}
