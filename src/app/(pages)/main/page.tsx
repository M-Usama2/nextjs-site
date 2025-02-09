import Banner from "@/components/Banner"
import { Features } from "@/components/Features"
import Hero from "@/components/Hero"
import { LogoTicker } from "@/components/LogoTicker"
import Navbar from "@/components/Navbar"

const Main = () => {
  return (
    <>
        <Banner />
        <Navbar />
        <Hero />
        <LogoTicker />
        <Features />
    </>
  )
}

export default Main