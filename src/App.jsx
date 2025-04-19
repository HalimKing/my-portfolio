import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Service from './components/Service/Service'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Service />
          <Contact />
          <Footer />
      </div>
    </>
  )
}

export default App
