import React from 'react';
import { Trophy, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Notre Histoire</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            L'alliance de l'expertise internationale et de l'hospitalité marocaine.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Founder Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2">
            <div className="h-[300px] md:h-[400px] relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Mr. Anouar" 
                className="w-full h-full object-cover"
                style={{ maxWidth: '500px' }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">Mr. Anouar</h3>
                <p className="text-gold-400">Fondateur & CEO</p>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Le Mot du Fondateur</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Originaire des Émirats Arabes Unis, je suis tombé amoureux du Maroc, de sa culture vibrante et de son architecture unique. J'ai créé <span className="font-bold text-slate-800">Anouar Immobilier</span> avec une vision simple : apporter les standards de service de classe mondiale des Émirats au marché locatif marocain."
              </p>
              <p className="text-gray-600 leading-relaxed">
                "Notre mission n'est pas seulement de louer des maisons, mais de créer des foyers où nos clients peuvent s'épanouir, que ce soit pour un court séjour ou pour la vie."
              </p>
              <div className="mt-8 flex items-center space-x-4">
                 <div className="bg-slate-100 p-3 rounded-full">
                    <Globe size={24} className="text-gold-500" />
                 </div>
                 <div>
                    <p className="text-sm text-gray-500">Basé à</p>
                    <p className="font-bold text-slate-800">Dubaï & Casablanca</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
              <Trophy size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              Nous visons la perfection dans chaque interaction, offrant des biens vérifiés et un service irréprochable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Client Roi</h3>
            <p className="text-gray-600">
              Votre satisfaction est notre priorité absolue. Nous vous accompagnons avant, pendant et après votre location.
            </p>
          </div>

           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Réseau International</h3>
            <p className="text-gray-600">
              Grâce à nos racines émiraties, nous connectons une clientèle internationale aux meilleures opportunités du Maroc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
