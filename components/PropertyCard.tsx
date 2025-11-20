import React from 'react';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {property.type}
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Coup de Cœur
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
           <span className="text-white font-bold text-lg">{property.price.toLocaleString()} DH <span className="text-sm font-normal">/ mois</span></span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1 text-gold-500" />
          {property.location}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 truncate" title={property.title}>{property.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 h-10">{property.description}</p>
        
        <div className="flex justify-between items-center border-t pt-4 text-gray-500 text-sm">
          <div className="flex items-center space-x-1">
            <Bed size={16} />
            <span>{property.rooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath size={16} />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize size={16} />
            <span>{property.size} m²</span>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-slate-900 text-white py-2 rounded-md hover:bg-gold-500 transition-colors duration-300 font-medium">
          Voir Détails
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
