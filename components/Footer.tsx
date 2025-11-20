import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">Anouar Immobilier</h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour la location immobilière de prestige au Maroc. Fondé par M. Anouar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#/" className="hover:text-gold-500">Accueil</a></li>
              <li><a href="#/properties" className="hover:text-gold-500">Tous les Biens</a></li>
              <li><a href="#/about" className="hover:text-gold-500">Notre Histoire</a></li>
              <li><a href="#contact" className="hover:text-gold-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contactez-nous</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold-500 mt-1" />
                <span>Boulevard Mohamed VI, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold-500" />
                <span>+212 6 00 00 00 00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold-500" />
                <span>contact@anouar-immobilier.ma</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anouar Immobilier. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
