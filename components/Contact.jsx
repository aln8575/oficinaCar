import React from 'react'
export default function Contact(){
  return (
    <section id="contact" className="mt-12 pb-12">
      <h3 className="text-2xl font-bold text-yellow-400">Contato & Agendamento</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
          <h4 className="font-semibold">Agende via WhatsApp</h4>
          <p className="text-neutral-300 mt-2">Atendimento rápido pelo número abaixo.</p>
          <a className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg" href="https://wa.me/5585987594444" target="_blank" rel="noreferrer">Abrir WhatsApp</a>
        </div>
        <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
          <h4 className="font-semibold">Visite nossa oficina</h4>
          <p className="text-neutral-300 mt-2">Fortaleza — CE</p>
          <p className="text-neutral-400 mt-4 text-sm">Seg — Sex: 8h — 18h</p>
        </div>
      </div>
    </section>
  )
}