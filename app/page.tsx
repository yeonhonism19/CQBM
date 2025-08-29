'use client'

import Header from './components/layout/Header'
import VideoHero from './components/sections/VideoHero'
import Hero from './components/sections/Hero'
import ServicesHighlight from './components/sections/ServicesHighlight'
import About from './components/sections/About'
import Question from './components/sections/Question'
import Clients from './components/sections/Clients'
import Newsletter from './components/sections/Newsletter'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <VideoHero />
      <Hero />
      <ServicesHighlight />
      <About />
      <Question />
      <Clients />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}