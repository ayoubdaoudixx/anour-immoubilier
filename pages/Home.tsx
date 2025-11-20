import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Key, Search, ShieldCheck, UserCheck } from 'lucide-react';
import SearchFilters from '../components/SearchFilters';
import PropertyCard from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../constants';
import { FilterState } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<FilterState>({
    type: '',
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    rooms: '',
    location: ''
  });

  const featuredProperties = MOCK_PROPERTIES.filter(p => p.featured).slice(0, 3);

  const handleSearch = () => {
    // Pass filters via state to the properties page
    navigate('/properties', { state: { initialFilters: filters } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop" 
            alt="Moroccan Architecture" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Trouvez Votre <br />
              <span className="text-gold-500">Havre de Paix</span> <br />
              au Maroc
            </h1>
            <p className="text-lg text-gray-200 max-w-md">
              Une sélection exclusive de villas, appartements et riads pour une location de prestige. Expertise et confiance garanties par Anouar Immobilier.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link 
                to="/properties" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center"
              >
                Explorer les biens <ArrowRight size={18} className="ml-2" />
              </Link>
              <a 
                href="#contact" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-md font-medium transition duration-300"
              >
                Nous Contacter
              </a>
            </div>
          </div>
          
          {/* Inline Search Widget for Hero */}
          <div className="hidden md:block">
             <SearchFilters filters={filters} setFilters={setFilters} onSearch={handleSearch} className="bg-white/95 backdrop-blur shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Sélection Exclusive</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Biens à la Une</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/properties" className="inline-flex items-center text-slate-900 font-semibold hover:text-gold-500 transition">
            Voir toutes les offres <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop" 
                alt="Services" 
                className="rounded-lg shadow-2xl z-10 relative" 
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500 rounded-lg -z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-slate-200 rounded-lg -z-0 hidden md:block"></div>
            </div>
            
            <div>
              <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Nos Services</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">Pourquoi choisir Anouar Immobilier ?</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4 text-gold-600">
                    <Search size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Recherche Personnalisée</h4>
                    <p className="text-gray-600">Nous analysons vos besoins pour trouver le bien qui correspond parfaitement à votre style de vie.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4 text-gold-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Sécurité Juridique</h4>
                    <p className="text-gray-600">Tous nos contrats sont vérifiés pour garantir une location sereine et conforme à la loi marocaine.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4 text-gold-600">
                    <Key size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Gestion Locative</h4>
                    <p className="text-gray-600">Pour les propriétaires, nous offrons un service de gestion complet de vos biens.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contactez-Nous</h2>
            <p className="text-gray-400">Prêt à trouver votre logement ? Remplissez le formulaire ci-dessous et notre équipe vous contactera sous 24h.</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:ring-2 focus:ring-gold-500 outline-none" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                  <input type="tel" className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:ring-2 focus:ring-gold-500 outline-none" placeholder="+212 6..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:ring-2 focus:ring-gold-500 outline-none" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:ring-2 focus:ring-gold-500 outline-none" placeholder="Je suis intéressé par..."></textarea>
              </div>
              <button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 rounded-md transition duration-300">
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
