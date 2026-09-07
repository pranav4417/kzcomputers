export const dynamic = 'force-dynamic';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import ServicesGrid from '@/components/marketing/ServicesGrid';
import ProductsGrid from '@/components/marketing/ProductsGrid';
import Footer from '@/components/layout/Footer';
import HomepageSlider from '@/components/marketing/HomepageSlider';
import prisma from '@/lib/prisma';

export default async function Home() {
  const services = await prisma.service.findMany();
  const products = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: [
      { featured: 'desc' },
      { displayOrder: 'asc' },
      { createdAt: 'desc' }
    ],
    take: 6
  }).then(rows => rows.map(p => ({
    ...p,
    price: p.price != null ? Number(p.price) : null
  })));

  const sliders = await prisma.slider.findMany({
    where: { isActive: true },
    orderBy: { displayOrder: 'asc' }
  });

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <HomepageSlider sliders={sliders} />
      <Hero />
      <div className="relative">
        <ServicesGrid services={services} />
        <ProductsGrid initialProducts={products} maxProducts={6} showSeeMore />

        {/* About Section - Brief */}
        <section className="section-padding container flex flex-col items-center text-center">
            <div className="glass p-8" style={{ maxWidth: '64rem', borderColor: 'var(--primary-glow)' }}>
                <h2 className="title-lg mb-6">Why Choose <span className="gradient-text">KZ COMPUTERS</span>?</h2>
                <p className="text-dim mb-8" style={{ fontSize: '1.125rem', maxWidth: '48rem', margin: '0 auto 2.5rem' }}>
                    With over a decade of experience in the IT industry, we provide unmatched
                    technical expertise and customer support. Our technicians are certified
                    professionals dedicated to getting your systems back to peak performance.
                    From laptop and printer repairs to CCTV, AMC, and corporate IT solutions,
                    we cover every aspect of your technology needs.
                </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="about-stat"><h4>12+</h4><p>Years Exp</p></div>
              <div className="about-stat"><h4>5k+</h4><p>Repairs Done</p></div>
              <div className="about-stat"><h4>1k+</h4><p>CCTV Setups</p></div>
              <div className="about-stat"><h4>100%</h4><p>Sat Rate</p></div>
            </div>
          </div>
        </section>

        {/* Legal Info */}
        <section className="section-padding container">
          <div className="glass p-6 text-center" style={{ maxWidth: '48rem', margin: '0 auto', borderColor: 'var(--primary-glow)' }}>
            <h3 className="title-md mb-3" style={{ color: 'var(--text-primary)' }}>Company Details</h3>
            <p className="text-dim" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-primary)' }}>KZ COMPUTERS</strong><br />
              NO.483 & 484, Nimishamba, Square Amrutahalli, Amruthahalli, Bangalore, Bangalore North, Karnataka, India, 560092<br />
              <span style={{ color: 'var(--primary-glow)', fontWeight: 600 }}>GSTIN: 29AANCK0673R1ZL</span> | 
              <span style={{ color: 'var(--primary-glow)', fontWeight: 600 }}> CIN: U62099KA2026PTC224499</span><br />
              📞 8971132109 | 📧 sales.kzcomputers@gmail.com
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
