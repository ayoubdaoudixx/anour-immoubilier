import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchFilters from '../components/SearchFilters';
import PropertyCard from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../constants';
import { FilterState, Property } from '../types';
import { SlidersHorizontal } from 'lucide-react';

const Properties: React.FC = () => {
  const location = useLocation();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Initial state from navigation or default
  const initialFilters = location.state?.initialFilters || {
    type: '',
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    rooms: '',
    location: ''
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(MOCK_PROPERTIES);

  const applyFilters = () => {
    let result = MOCK_PROPERTIES;

    if (filters.type) {
      result = result.filter(p => p.type === filters.type);
    }
    if (filters.location) {
      result = result.filter(p => p.location === filters.location);
    }
    if (filters.minPrice > 0) {
      result = result.filter(p => p.price >= filters.minPrice);
    }
    if (filters.maxPrice > 0) {
      result = result.filter(p => p.price <= filters.maxPrice);
    }
    if (filters.minSize > 0) {
      result = result.filter(p => p.size >= filters.minSize);
    }
    if (filters.rooms !== '') {
      result = result.filter(p => p.rooms >= (filters.rooms as number));
    }

    setFilteredProperties(result);
    // On mobile, close filters after applying
    if(window.innerWidth < 768) setShowMobileFilters(false);
  };

  // Apply filters on mount if passed from Home
  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden md:block w-1/4 min-w-[280px]">
            <div className="sticky top-24">
              <SearchFilters 
                filters={filters} 
                setFilters={setFilters} 
                onSearch={applyFilters} 
              />
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-200 p-3 rounded-md shadow-sm text-slate-800 font-medium"
            >
              <SlidersHorizontal size={18} />
              <span>Filtrer les résultats</span>
            </button>
          </div>

          {/* Mobile Filters Modal */}
          {showMobileFilters && (
            <div className="md:hidden fixed inset-0 z-50 bg-black/50 flex justify-end">
              <div className="w-4/5 bg-white h-full overflow-y-auto p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Filtres</h3>
                  <button onClick={() => setShowMobileFilters(false)} className="text-gray-500 text-2xl">&times;</button>
                </div>
                <SearchFilters 
                  filters={filters} 
                  setFilters={setFilters} 
                  onSearch={applyFilters} 
                  className="shadow-none border-0 p-0"
                />
              </div>
            </div>
          )}

          {/* Results Grid */}
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-3xl font-serif font-bold text-slate-900">Nos Biens Disponibles</h1>
              <span className="text-gray-500">{filteredProperties.length} résultats</span>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-500 text-lg">Aucun bien ne correspond à vos critères.</p>
                <button 
                  onClick={() => {
                    setFilters({ type: '', minPrice: 0, maxPrice: 0, minSize: 0, rooms: '', location: '' });
                    setFilteredProperties(MOCK_PROPERTIES);
                  }}
                  className="mt-4 text-gold-600 font-medium hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Properties;
