import React from 'react';
import { FilterState, PropertyType } from '../types';
import { CITIES } from '../constants';

interface SearchFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onSearch: () => void;
  className?: string;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, setFilters, onSearch, className = '' }) => {
  const handleChange = (field: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${className}`}>
      <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b pb-2 border-gray-100">Filtrer votre recherche</h3>
      
      <div className="space-y-4">
        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type de bien</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
          >
            <option value="">Tous les types</option>
            {Object.values(PropertyType).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
          >
            <option value="">Toutes les villes</option>
            {CITIES.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Rooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Chambres (Min)</label>
          <input 
            type="number" 
            min="0"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
            placeholder="Ex: 2"
            value={filters.rooms === '' ? '' : filters.rooms}
            onChange={(e) => handleChange('rooms', e.target.value ? parseInt(e.target.value) : '')}
          />
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget (DH)</label>
          <div className="flex space-x-2">
            <input 
              type="number" 
              placeholder="Min"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 outline-none text-sm"
              value={filters.minPrice || ''}
              onChange={(e) => handleChange('minPrice', parseInt(e.target.value) || 0)}
            />
            <input 
              type="number" 
              placeholder="Max"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 outline-none text-sm"
              value={filters.maxPrice || ''}
              onChange={(e) => handleChange('maxPrice', parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Surface Min (m²)</label>
           <input 
              type="number" 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
              value={filters.minSize || ''}
              onChange={(e) => handleChange('minSize', parseInt(e.target.value) || 0)}
            />
        </div>

        <button 
          onClick={onSearch}
          className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 rounded-md transition duration-300 mt-4"
        >
          Rechercher
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
