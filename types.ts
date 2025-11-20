export enum PropertyType {
  VILLA = 'Villa',
  APPARTEMENT = 'Appartement',
  STUDIO = 'Studio',
  RIAD = 'Riad',
  BUREAU = 'Bureau'
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: PropertyType;
  rooms: number;
  bathrooms: number;
  size: number; // in m²
  location: string; // City
  imageUrl: string;
  featured: boolean;
}

export interface FilterState {
  type: PropertyType | '';
  minPrice: number;
  maxPrice: number;
  minSize: number;
  rooms: number | '';
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
