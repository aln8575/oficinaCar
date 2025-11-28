import React from 'react'
export default function Gallery(){
  const imgs = ['/src/assets/car-1.png','/src/assets/car-2.png','/src/assets/car-2.png','/src/assets/car-2.png']
  return (
    <section id="gallery" className="mt-12">
      <h3 className="text-2xl font-bold text-yellow-400">Galeria de Trabalhos</h3>
      <p className="text-neutral-400 mt-2">Veja alguns serviços realizados em nossa oficina.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {imgs.map((s,i)=> (
          <div key={i} className="rounded-xl overflow-hidden border border-neutral-700">
            <img src={s} alt={'car-'+i} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}