import Nav from "./Cx/Layout/Nav";
import Footer from "./Cx/Layout/Footer";
import Hero from "./Cx/Sections/Hero";
import Images from "./Cx/Sections/Images";
import Services from "./Cx/Sections/Services";
import CTA1 from "./Cx/Sections/CTA-1";
import Packages from "./Cx/Sections/Packages";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Images/>
      <Services/>
      <CTA1/>
      <Packages/>
      <Footer/>
    </>
  )
}