import React from 'react'
import Navbar from './Navbar'
import MainBanner from './MainBanner'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <Navbar />
        <MainBanner />
        <About />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}
