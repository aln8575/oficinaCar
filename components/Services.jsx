import React from 'react'
import { Wrench, Zap } from 'lucide-react'
const services = [
  {id:1, icon: <Wrench />, title:'Mecânica Geral', desc:'Freios, suspensão, óleo, alinhamento e manutenção preventiva.'},
  {id:2, icon: <Zap />, title:'Elétrica Automotiva', desc:'Baterias, alternadores, sensores e diagnóstico eletrônico.'},
  {id:3, icon: <Wrench />, title:'Injeção Eletrônica', desc:'Leitura de falhas, limpeza e calibração.'},
  {id:4, icon: <Zap />, title:'Ar-Condicionado', desc:'Revisão completa, recarga e reparos.'},
]
export default function Services(){
  return (
    <section id="services" className="mt-10">
      <h3 className="text-2xl font-bold text-yellow-400">Nossos Serviços</h3>
      <p className="text-neutral-400 mt-2">Soluções completas para veículos leves e comerciais.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {services.map(s=> (
          <div key={s.id} className="bg-neutral-800 p-5 rounded-xl border border-neutral-700">
            <div className="text-yellow-400">{s.icon}</div>
            <h4 className="mt-4 font-semibold">{s.title}</h4>
            <p className="text-sm text-neutral-300 mt-2">{s.desc}</p>
            <a href="#contact" className="inline-block mt-4 text-yellow-400 font-medium">Solicitar</a>
          </div>
        ))}
      </div>
    </section>
  )
}