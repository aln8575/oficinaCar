import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-neutral-800 py-6 text-center">
      <p className="text-neutral-400">© {new Date().getFullYear()} Oficina Pro — Todos os direitos reservados.</p>
    </footer>
  )
}