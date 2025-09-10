import React from 'react';
import { Link } from 'react-router-dom';
import type { Property } from '../types/property.types';
import { formatPrice, formatArea, formatPropertyType, formatPropertyStatus } from '../../../shared/utils/formatters';
import { Card, Badge } from '../../../shared/components';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative">
        <img
          src={property.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center'}
          alt={property.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center';
          }}
        />
        {property.featured && (
          <Badge variant="primary" className="absolute top-2 left-2">
            Featured
          </Badge>
        )}
        <Badge 
          variant={property.status === 'for-sale' ? 'success' : 'warning'}
          className="absolute top-2 right-2"
        >
          {formatPropertyStatus(property.status)}
        </Badge>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {property.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-4">
            <span>{property.bedrooms} Bed</span>
            <span>{property.bathrooms} Bath</span>
            <span>{formatArea(property.area)}</span>
          </div>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {formatPropertyType(property.type)}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span>{property.location.city}, {property.location.state}</span>
          </div>
          <Link
            to={`/properties/${property.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
