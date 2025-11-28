import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07101a] to-[#031022] text-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}