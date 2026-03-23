export const dynamic = 'force-dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ProductsGrid from '@/components/ProductsGrid';
import Footer from '@/components/Footer';
import prisma from '@/lib/prisma';

export default async function Home() {
  const services = await prisma.service.findMany();

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Hero />
      <div className="relative">
        <ServicesGrid services={services} />
        <ProductsGrid />

        {/* About Section - Brief */}
        <section className="section-padding container flex flex-col items-center text-center">
          <div className="glass p-8" style={{ maxWidth: '64rem', borderColor: 'var(--primary-glow)' }}>
            <h2 className="title-lg mb-6">Why Choose <span className="gradient-text">Suraksha</span>?</h2>
            <p className="text-dim mb-8" style={{ fontSize: '1.125rem', maxWidth: '48rem', margin: '0 auto 2.5rem' }}>
              With over a decade of experience in the IT industry, we provide unmatched
              technical expertise and customer support. Our technicians are certified
              professionals dedicated to getting your systems back to peak performance.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="about-stat"><h4>12+</h4><p>Years Exp</p></div>
              <div className="about-stat"><h4>5k+</h4><p>Repairs Done</p></div>
              <div className="about-stat"><h4>1k+</h4><p>CCTV Setups</p></div>
              <div className="about-stat"><h4>100%</h4><p>Sat Rate</p></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
