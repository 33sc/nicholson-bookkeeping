import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { WhoWeHelp } from '../sections/WhoWeHelp'
import { HowItWorks } from '../sections/HowItWorks'
import { About } from '../sections/About'
import { WhyUs } from '../sections/WhyUs'
import { Faq } from '../sections/Faq'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'
// import { Testimonials } from '../sections/Testimonials'
// Testimonials component is built and ready — intentionally not rendered
// until Jackie supplies genuine client reviews (see Testimonials.tsx).

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhoWeHelp />
        <HowItWorks />
        <About />
        <WhyUs />
        {/* <Testimonials /> */}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
