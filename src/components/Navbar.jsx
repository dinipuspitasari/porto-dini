import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-[3px] border-neo-black py-4 px-6 md:px-12 flex justify-between items-center">
      <Link to="/" className="font-h1 text-2xl md:text-3xl font-bold hover:text-neo-salmon transition-colors flex items-center gap-3">
        <div className="w-10 h-10 neo-border bg-neo-yellow overflow-hidden shadow-[2px_2px_0px_#111111]">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        Profile.
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center font-h3 text-xl">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`neo-link-hover ${
              location.pathname === link.path ? 'text-neo-salmon underline font-bold' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href="/CV_Dini_Puspitasari.pdf" 
          download 
          className="neo-border neo-shadow neo-shadow-hover bg-neo-yellow px-4 py-2 font-label text-sm uppercase tracking-wider font-bold"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden neo-border p-2 bg-neo-cream" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b-[3px] border-neo-black p-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-h3 ${
                location.pathname === link.path ? 'text-neo-salmon font-bold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/CV_Dini_Puspitasari.pdf" 
            download 
            className="neo-border neo-shadow bg-neo-yellow px-4 py-3 font-label text-lg uppercase tracking-wider font-bold text-center"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
