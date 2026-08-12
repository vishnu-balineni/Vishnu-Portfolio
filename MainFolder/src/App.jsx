import React, { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import CursorSparkle from './components/CursorSparkle'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <>
      <CursorSparkle />
      <Preloader />
      <Navbar />
      <Hero onOpenChat={() => setIsChatOpen(!isChatOpen)} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}

export default App
