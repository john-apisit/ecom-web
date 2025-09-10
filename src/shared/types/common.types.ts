// Common types used across the application

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: 'user' | 'agent' | 'admin';
  createdAt: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'house' | 'apartment' | 'condo' | 'villa';
  status: 'for-sale' | 'for-rent';
  bedrooms: number;
  bathrooms: number;
  area: number; // in sq ft
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  amenities: string[];
  agentId: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Agent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  specialties: string[];
  experience: number; // years
  rating: number;
  propertiesCount: number;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number; // minutes
  likes: number;
  comments: number;
  shares: number;
}

export interface Location {
  id: string;
  name: string;
  state: string;
  propertiesCount: number;
  averagePrice: number;
  image: string;
  featured: boolean;
}

export interface SearchFilters {
  propertyType?: string;
  status?: 'for-sale' | 'for-rent';
  bedrooms?: number;
  bathrooms?: number;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  location?: string;
  amenities?: string[];
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
