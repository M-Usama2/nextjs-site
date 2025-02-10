import Banner from "@/components/Banner"
import CallToAction from "@/components/CallToAction"
import { FAQs } from "@/components/FAQs"
import { Features } from "@/components/Features"
import Hero from "@/components/Hero"
import { LogoTicker } from "@/components/LogoTicker"
import Navbar from "@/components/Navbar"
import ProductShowcase from "@/components/ProductShowcase"

const Main = () => {
  return (
    <>
        <Banner />
        <Navbar />
        <Hero />
        <LogoTicker />
        <Features />
        <ProductShowcase />
        <FAQs />
        <CallToAction />
    </>
  )
}

export default Main