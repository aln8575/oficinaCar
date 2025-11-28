import React from 'react'
export default function Testimonials(){
  const data = [
    {name:'João', text:'Excelente atendimento e serviço rápido. Meu carro ficou novo!', stars:5},
    {name:'Mariana', text:'Equipe muito profissional. Super recomendo!', stars:5}
  ]
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold text-yellow-400">Depoimentos</h3>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {data.map((d,i)=>(
          <div key={i} className="bg-neutral-800 p-4 rounded-lg border border-neutral-700">
            <div className="text-yellow-400">{"★".repeat(d.stars)}</div>
            <p className="mt-2 text-neutral-300">{d.text}</p>
            <p className="mt-3 text-sm text-neutral-400">— {d.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}