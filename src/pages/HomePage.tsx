import React, { useState, useEffect } from 'react';
import type { Property } from '../features/properties/types/property.types';
import type { Agent } from '../features/agents/types/agent.types';
import type { BlogPost } from '../features/blog/types/blog.types';
import type { Location } from '../features/locations/types/location.types';
import type { SearchFilters } from '../features/properties/types/property.types';
import PropertyGrid from '../features/properties/components/PropertyGrid';
import SearchForm from '../features/properties/components/SearchForm';
import { formatPrice } from '../shared/utils/formatters';
import { Button } from '../shared/components';

// Mock data imports
import propertiesData from '../assets/data/properties.json';
import agentsData from '../assets/data/agents.json';
import blogData from '../assets/data/blog.json';
import locationsData from '../assets/data/locations.json';

const HomePage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    // Load mock data
    setProperties(propertiesData as Property[]);
    setAgents(agentsData as Agent[]);
    setBlogPosts(blogData as BlogPost[]);
    setLocations(locationsData as Location[]);
  }, []);

  const handleSearch = async (filters: SearchFilters) => {
    setSearchLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Filter properties based on search criteria
      let filteredProperties = propertiesData as Property[];
      
      if (filters.propertyType) {
        filteredProperties = filteredProperties.filter(p => p.type === filters.propertyType);
      }
      if (filters.status) {
        filteredProperties = filteredProperties.filter(p => p.status === filters.status);
      }
      if (filters.location) {
        filteredProperties = filteredProperties.filter(p => p.location.city === filters.location);
      }
      if (filters.bedrooms) {
        filteredProperties = filteredProperties.filter(p => p.bedrooms >= filters.bedrooms!);
      }
      if (filters.bathrooms) {
        filteredProperties = filteredProperties.filter(p => p.bathrooms >= filters.bathrooms!);
      }
      if (filters.minPrice) {
        filteredProperties = filteredProperties.filter(p => p.price >= filters.minPrice!);
      }
      if (filters.maxPrice) {
        filteredProperties = filteredProperties.filter(p => p.price <= filters.maxPrice!);
      }
      
      setProperties(filteredProperties);
      setSearchLoading(false);
    }, 1000);
  };

  const featuredProperties = properties.filter(p => p.featured).slice(0, 6);
  const recentProperties = properties.slice(0, 9);
  const featuredLocations = locations.filter(l => l.featured);
  const recentBlogPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&crop=center)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Your Perfect Property
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your Gateway to Exceptional Real Estate
            </p>
          </div>
          
          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <SearchForm onSearch={handleSearch} loading={searchLoading} />
          </div>
        </div>
      </section>

      {/* Recent Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Properties</h2>
            <p className="text-lg text-gray-600">Discover our latest property listings</p>
          </div>
          
          <PropertyGrid properties={recentProperties} loading={searchLoading} />
          
          <div className="text-center mt-12">
            <Button size="lg">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">We offer perfect real estate services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Your Home</h3>
              <p className="text-gray-600">Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted by thousands</h3>
              <p className="text-gray-600">Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financing made easy</h3>
              <p className="text-gray-600">Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 support</h3>
              <p className="text-gray-600">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Places */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Places</h2>
            <p className="text-lg text-gray-600">Properties In Most Popular Places</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLocations.map((location, index) => {
              const locationImages = [
                'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop&crop=center', // NYC
                'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&crop=center', // Houston
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center', // LA
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop&crop=center', // SF
                'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop&crop=center', // Miami
                'https://images.unsplash.com/photo-1513642621452-729a15d5a7ad?w=800&h=600&fit=crop&crop=center'  // Chicago
              ];
              
              return (
                <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${locationImages[index % locationImages.length]})` }}>
                    <div className="h-full bg-black/20 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-semibold">{location.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-2">{location.propertiesCount} Properties</p>
                    <p className="text-lg font-semibold text-blue-600">{formatPrice(location.averagePrice)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apartment for Rent Banner */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&crop=center)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Apartment for rent
              </h2>
              <p className="text-2xl font-semibold text-blue-300 mb-6">
                $6,400/month
              </p>
              <p className="text-lg text-gray-200 mb-8">
                We Help you find the best places and offer near you. Bring to the table win-win survival strategies to ensure proactive domination going forward.
              </p>
              <Button size="lg">
                Get Started
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Properties Available</span>
                    <span className="font-semibold">1,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Happy Customers</span>
                    <span className="font-semibold">5,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Years Experience</span>
                    <span className="font-semibold">15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Agents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Agents</h2>
            <p className="text-lg text-gray-600">Professional real estate agents ready to help you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.slice(0, 6).map((agent) => (
              <div key={agent.id} className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={agent.avatar}
                    alt={`${agent.firstName} ${agent.lastName}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{agent.firstName} {agent.lastName}</h3>
                <p className="text-gray-600 mb-2">Real Estate Agent</p>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">{agent.rating}</span>
                </div>
                <p className="text-sm text-gray-500">{agent.propertiesCount} Properties</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Articles & Tips</h2>
            <p className="text-lg text-gray-600">Read the latest news from our blog</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="h-full bg-black/20"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face';
                        }}
                      />
                      <span className="text-sm text-gray-600">By {post.author.name}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
