import React from 'react'
import { motion } from 'framer-motion'
export default function Hero(){
  return (
    <section className="hero-bg rounded-2xl p-8 mt-6 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <h2 className="text-4xl font-extrabold leading-tight">Oficina Pro — Serviço Automotivo 5⭐</h2>
          <p className="mt-4 text-neutral-300">Mecânica e elétrica com tecnologia de diagnóstico, garantia e atendimento premium para seu veículo.</p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="bg-yellow-400 text-black px-5 py-3 rounded-lg font-semibold shadow">Solicitar Orçamento</a>
            <a href="#services" className="border border-neutral-600 px-5 py-3 rounded-lg text-neutral-200">Ver Serviços</a>
          </div>
          <div className="mt-6 flex gap-4 text-sm text-neutral-400">
            <div>⏱ Atendimento rápido</div>
            <div>🔧 Equipe certificada</div>
            <div>✅ Garantia de serviço</div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="flex justify-center">
          <img src="/src/assets/banner-logo.png" alt="Carro premium" className="w-full max-w-md rounded-xl shadow-2xl" />
        </motion.div>
      </div>
    </section>
  )
}