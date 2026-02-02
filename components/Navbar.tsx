import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { name: 'Soluciones', id: 'soluciones' },
    { name: 'Casos', id: 'casos' },
    { name: 'Proceso', id: 'proceso' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center cursor-pointer" onClick={() => scrollToSection('top')}>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold logo-gradient tracking-tight leading-none">Dive</span>
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none mt-0.5">Automations</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-600 hover:text-[#004d80] transition-colors duration-200 text-sm font-semibold"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-[#004d80] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#003d66] transition-all duration-200 shadow-lg shadow-blue-900/10"
              >
                Agendar llamada
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-[#004d80] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen bg-white border-b border-slate-100 shadow-xl' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map(link => (
            <button
              key={link.name}
              onClick={() => {
                scrollToSection(link.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-4 text-lg font-bold text-slate-700 hover:text-[#004d80] border-b border-slate-50 last:border-0"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                scrollToSection('contacto');
                setIsOpen(false);
              }}
              className="block w-full text-center bg-[#004d80] text-white px-5 py-4 rounded-xl text-lg font-bold"
            >
              Agendar llamada
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
