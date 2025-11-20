import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Info } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-gold-500 font-semibold' : 'text-gray-600 hover:text-gold-500';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-slate-900">
              Anouar <span className="text-gold-500">Immobilier</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`flex items-center space-x-1 ${isActive('/')}`}>
              <Home size={18} />
              <span>Accueil</span>
            </Link>
            <Link to="/properties" className={`flex items-center space-x-1 ${isActive('/properties')}`}>
              <Building size={18} />
              <span>Nos Biens</span>
            </Link>
            <Link to="/about" className={`flex items-center space-x-1 ${isActive('/about')}`}>
              <Info size={18} />
              <span>À Propos</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3 flex flex-col">
            <Link to="/" onClick={() => setIsOpen(false)} className={`block ${isActive('/')}`}>Accueil</Link>
            <Link to="/properties" onClick={() => setIsOpen(false)} className={`block ${isActive('/properties')}`}>Nos Biens</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`block ${isActive('/about')}`}>À Propos</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
