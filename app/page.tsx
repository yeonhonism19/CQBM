'use client'

import Header from './components/layout/Header'
import VideoHero from './components/sections/VideoHero'
import Hero from './components/sections/Hero'
import ServicesHighlight from './components/sections/ServicesHighlight'
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
      <Question />
      <Clients />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}