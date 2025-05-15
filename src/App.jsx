/* eslint-disable no-unused-vars */
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import ScrollTop from "./components/ScrollTop"
import Stats from "./components/Stats"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);


  return (
    <>
      <div className="index-page">
        <Header />
        <main className="main">
          <Hero />
          {/*
            <About />
            <Stats />
            <Skills />
            <Resume />
            <Portfolio />
            <Services />
            <Testimonials /> 
            <Contact />
          */}
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </>
  )
}

export default App
