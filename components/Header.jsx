// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // fecha o menu ao redimensionar para telas maiores
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-2">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-700 p-2 rounded-xl shadow-md">
            {/* logo SVG */}
            <svg width="44" height="44" viewBox="0 0 120 120" className="block">
              <rect width="100%" height="100%" rx="12" fill="#071422" />
              <g fill="#f59e0b">
                <rect x="16" y="32" width="88" height="12" rx="6" />
                <rect x="16" y="68" width="88" height="12" rx="6" />
              </g>
            </svg>
          </div>

          <div>
            <h1 className="text-xl font-semibold">Oficina Pro</h1>
            <p className="text-sm text-neutral-400">Excelência em cada reparo — Fortaleza, CE</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-neutral-300">
          <a href="#services" className="hover:text-yellow-400">Serviços</a>
          <a href="#gallery" className="hover:text-yellow-400">Galeria</a>
          <a href="#contact" className="hover:text-yellow-400">Contato</a>
          <a href="#contact" className="ml-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium">Agendar</a>
        </nav>

        {/* Mobile toggle button */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden p-2 bg-neutral-800 rounded-lg text-neutral-200 z-50"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu (aparece somente em telas pequenas) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="px-4 pt-4 pb-6 max-w-6xl mx-auto flex flex-col gap-3 bg-transparent">
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg hover:bg-neutral-800 text-neutral-100"
          >
            Serviços
          </a>
          <a
            href="#gallery"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg hover:bg-neutral-800 text-neutral-100"
          >
            Galeria
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg hover:bg-neutral-800 text-neutral-100"
          >
            Contato
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block bg-yellow-400 text-black px-4 py-3 rounded-lg font-medium text-center"
          >
            Agendar Serviço
          </a>
        </div>
      </div>
    </header>
  );
}
