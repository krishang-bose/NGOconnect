import { useState, useEffect } from 'react';
import { Heart, Info, ArrowLeft, Home, DollarSign, Users, Leaf, Calendar, MapPin, Filter, Search, X } from 'lucide-react';

export default function AnimalShelterDirectory() {
  const [selectedNGO, setSelectedNGO] = useState(null);
  const [locationFilter, setLocationFilter] = useState('');
  const [animalTypeFilter, setAnimalTypeFilter] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filteredNGOs, setFilteredNGOs] = useState([]);
  
  // Extended NGO data with more detailed location and animal type information
  const ngos = [
    {
      id: 1,
      name: "Paws & Rescue",
      description: "Dedicated to rescuing and rehabilitating stray animals across the country.",
      location: {
        city: "New York",
        state: "NY",
        country: "USA"
      },
      animalTypes: ["Dogs", "Cats", "Small Pets"],
      animals: 120,
      volunteers: 45,
      yearFounded: 2010,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Paws & Rescue is a non-profit organization that focuses on providing shelter, medical care, and finding forever homes for abandoned and neglected animals. Since our founding in 2010, we have rescued over 5,000 animals and successfully rehomed more than 4,500 of them. Our dedicated team of 45 volunteers works tirelessly to ensure each animal receives proper care and attention.",
      needs: ["Food donations", "Volunteer dog walkers", "Foster homes", "Medical supplies"],
      contactInfo: {
        email: "info@pawsrescue.org",
        phone: "(212) 555-1234",
        website: "www.pawsrescue.org"
      }
    },
    {
      id: 2,
      name: "Second Chance Shelter",
      description: "Providing medical care and rehabilitation for injured wildlife and domestic animals.",
      location: {
        city: "Austin",
        state: "TX",
        country: "USA"
      },
      animalTypes: ["Dogs", "Cats", "Wildlife"],
      animals: 85,
      volunteers: 30,
      yearFounded: 2015,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Second Chance Shelter specializes in providing comprehensive care for injured wildlife and domestic animals. Our state-of-the-art rehabilitation center helps animals recover from injuries and prepare them for release back into their natural habitats or adoption into loving homes. Founded in 2015, we have helped over 2,000 animals get a second chance at life.",
      needs: ["Monetary donations", "Medical equipment", "Transport volunteers", "Blankets and towels"],
      contactInfo: {
        email: "contact@secondchanceshelter.org",
        phone: "(512) 555-7890",
        website: "www.secondchanceshelter.org"
      }
    },
    {
      id: 3,
      name: "Global Animal Protection",
      description: "International organization fighting for animal rights and welfare worldwide.",
      location: {
        city: "Seattle",
        state: "WA",
        country: "USA"
      },
      animalTypes: ["All Animals", "Wildlife", "Farm Animals"],
      animals: 200,
      volunteers: 120,
      yearFounded: 2005,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Global Animal Protection is an international advocacy group that works to improve animal welfare standards around the world. Our campaigns focus on ending animal cruelty, promoting humane education, and supporting local animal welfare organizations. With operations in 15 countries, we have helped implement animal protection laws and rescued thousands of animals from abusive situations.",
      needs: ["International volunteers", "Legal experts", "Translators", "Campaign funding"],
      contactInfo: {
        email: "info@globalanimalprotection.org",
        phone: "(206) 555-4321",
        website: "www.globalanimalprotection.org"
      }
    },
    {
      id: 4,
      name: "Whiskers Haven",
      description: "Cat-focused rescue specializing in feral cat rehabilitation and TNR programs.",
      location: {
        city: "Portland",
        state: "OR",
        country: "USA"
      },
      animalTypes: ["Cats", "Kittens"],
      animals: 75,
      volunteers: 25,
      yearFounded: 2012,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Whiskers Haven is dedicated to improving the lives of cats, with a special focus on feral cat populations. Our Trap-Neuter-Return (TNR) programs have successfully managed feral cat colonies across the Portland area, reducing overpopulation and improving community relations. Our shelter provides temporary homes for cats awaiting adoption, with specialized areas for mother cats with kittens and senior cats.",
      needs: ["Cat food donations", "TNR volunteers", "Foster homes", "Grooming supplies"],
      contactInfo: {
        email: "cats@whiskershaven.org",
        phone: "(503) 555-8765",
        website: "www.whiskershaven.org"
      }
    },
    {
      id: 5,
      name: "Desert Animal Sanctuary",
      description: "Specializing in rescue and rehabilitation of desert wildlife and exotic animals.",
      location: {
        city: "Phoenix",
        state: "AZ",
        country: "USA"
      },
      animalTypes: ["Reptiles", "Desert Wildlife", "Exotic Animals"],
      animals: 110,
      volunteers: 35,
      yearFounded: 2008,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Desert Animal Sanctuary provides specialized care for desert wildlife and exotic animals that have been abandoned, confiscated, or injured. Our 15-acre facility includes habitats designed to mimic natural environments, allowing animals to recover and thrive. We also conduct educational programs to teach the public about desert ecosystems and responsible pet ownership for exotic species.",
      needs: ["Heat lamps", "Specialized feed", "Enclosure materials", "Educational volunteers"],
      contactInfo: {
        email: "sanctuary@desertanimals.org",
        phone: "(602) 555-3456",
        website: "www.desertanimalsanctuary.org"
      }
    },
    {
      id: 6,
      name: "Wildlife Recovery Center",
      description: "Specialized in the rehabilitation of injured native wildlife and ecosystem education.",
      location: {
        city: "Denver",
        state: "CO",
        country: "USA"
      },
      animalTypes: ["Birds", "Wildlife", "Mammals"],
      animals: 95,
      volunteers: 40,
      yearFounded: 2007,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Wildlife Recovery Center is dedicated to the rescue, rehabilitation, and release of injured, sick, and orphaned native wildlife. Our team of veterinarians and trained wildlife specialists provide critical care and support for over 2,000 wild animals each year. We also offer educational programs to promote understanding and appreciation of local ecosystems and wildlife conservation.",
      needs: ["Wildlife rehabilitation supplies", "Outdoor enclosure materials", "Educational materials", "Winter warming supplies"],
      contactInfo: {
        email: "help@wildliferecovery.org",
        phone: "(303) 555-9876",
        website: "www.wildliferecovery.org"
      }
    },
    {
      id: 7,
      name: "Coastal Marine Rescue",
      description: "Focused on marine mammal rescue, rehabilitation, and ocean conservation.",
      location: {
        city: "San Diego",
        state: "CA",
        country: "USA"
      },
      animalTypes: ["Marine Mammals", "Sea Turtles", "Aquatic Animals"],
      animals: 60,
      volunteers: 75,
      yearFounded: 2009,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Coastal Marine Rescue specializes in the rescue and rehabilitation of marine mammals and sea turtles along the California coastline. Our specialized facilities include saltwater rehabilitation pools and veterinary care designed specifically for marine species. We respond to over 300 stranding events annually and work closely with oceanographic institutes to study and protect marine ecosystems.",
      needs: ["Marine animal transport equipment", "Water filtration systems", "Volunteer divers", "Boat fuel donations"],
      contactInfo: {
        email: "rescue@coastalmarine.org",
        phone: "(619) 555-3210",
        website: "www.coastalmarinerescue.org"
      }
    },
    {
      id: 8,
      name: "Exotic Bird Sanctuary",
      description: "Providing lifetime care for abandoned and surrendered exotic birds and parrots.",
      location: {
        city: "Miami",
        state: "FL",
        country: "USA"
      },
      animalTypes: ["Birds", "Parrots", "Exotic Birds"],
      animals: 130,
      volunteers: 35,
      yearFounded: 2011,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Exotic Bird Sanctuary provides a permanent home for parrots and other exotic birds that have been abandoned, surrendered, or confiscated. Many of our residents are long-lived species that outlive their owners or require specialized care. Our facilities include climate-controlled aviaries, enrichment programs, and specialized nutrition plans tailored to each species. We also provide educational outreach about the challenges of exotic bird ownership.",
      needs: ["Bird food and supplements", "Aviary construction materials", "Enrichment toys", "Specialized veterinary care funds"],
      contactInfo: {
        email: "birds@exoticsanctuary.org",
        phone: "(305) 555-1122",
        website: "www.exoticbirdsanctuary.org"
      }
    },
    {
      id: 9,
      name: "Delhi Animal Trust",
      description: "Community-focused animal welfare organization helping strays in urban India.",
      location: {
        city: "Delhi",
        state: "Delhi",
        country: "India"
      },
      animalTypes: ["Dogs", "Cats", "Street Animals"],
      animals: 145,
      volunteers: 50,
      yearFounded: 2013,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "Delhi Animal Trust works to improve the welfare of street animals in India's capital city. Our initiatives include sterilization campaigns, vaccination drives, emergency rescue services, and community education programs. We operate mobile veterinary clinics that reach underserved neighborhoods and provide critical care to animals that would otherwise go untreated.",
      needs: ["Medications", "Street feeding volunteers", "Medical equipment", "Transport cages"],
      contactInfo: {
        email: "help@delhianimaltrust.org",
        phone: "+91 98765 43210",
        website: "www.delhianimaltrust.org"
      }
    },
    {
      id: 10,
      name: "London Wildlife Protection",
      description: "Dedicated to preserving and protecting British wildlife in urban environments.",
      location: {
        city: "London",
        state: "Greater London",
        country: "UK"
      },
      animalTypes: ["Foxes", "Hedgehogs", "Birds", "Small Mammals"],
      animals: 90,
      volunteers: 65,
      yearFounded: 2006,
      imageUrl: "/api/placeholder/400/320",
      fullDescription: "London Wildlife Protection works to conserve and protect native British wildlife in London's urban landscape. Our rescue center provides care for injured or orphaned wild animals with the goal of rehabilitation and release. We also maintain wildlife corridors throughout the city and advocate for wildlife-friendly urban planning and development.",
      needs: ["Wildlife food", "Transport volunteers", "Rehabilitation supplies", "Native plant donations"],
      contactInfo: {
        email: "contact@londonwildlifeprotection.org.uk",
        phone: "+44 20 5555 1234",
        website: "www.londonwildlifeprotection.org.uk"
      }
    }
  ];
  
  // Get unique locations and animal types for filters
  const locations = {
    countries: [...new Set(ngos.map(ngo => ngo.location.country))],
    states: [...new Set(ngos.map(ngo => ngo.location.state))],
    cities: [...new Set(ngos.map(ngo => ngo.location.city))]
  };
  
  const animalTypes = [...new Set(ngos.flatMap(ngo => ngo.animalTypes))];
  
  // Apply filters whenever they change
  useEffect(() => {
    filterNGOs();
  }, [locationFilter, animalTypeFilter]);
  
  // Initialize with all NGOs
  useEffect(() => {
    setFilteredNGOs(ngos);
  }, []);
  
  // Filter NGOs based on selected filters
  const filterNGOs = () => {
    let filtered = [...ngos];
    
    // Apply location filter
    if (locationFilter) {
      filtered = filtered.filter(ngo => 
        ngo.location.country.toLowerCase().includes(locationFilter.toLowerCase()) ||
        ngo.location.state.toLowerCase().includes(locationFilter.toLowerCase()) ||
        ngo.location.city.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }
    
    // Apply animal type filter
    if (animalTypeFilter) {
      filtered = filtered.filter(ngo => 
        ngo.animalTypes.some(type => 
          type.toLowerCase().includes(animalTypeFilter.toLowerCase())
        )
      );
    }
    
    setFilteredNGOs(filtered);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setLocationFilter('');
    setAnimalTypeFilter('');
    setFilteredNGOs(ngos);
  };
  
  // Format location for display
  const formatLocation = (location) => {
    return `${location.city}, ${location.state}, ${location.country}`;
  };

  // Handle viewing NGO details
  if (selectedNGO) {
    const ngo = ngos.find(n => n.id === selectedNGO);
    
    return (
      <div className="bg-green-50 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border-t-8 border-green-600">
          <div className="relative h-48 bg-green-200">
            <img src={ngo.imageUrl} alt={ngo.name} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-700/40"></div>
            <button 
              onClick={() => setSelectedNGO(null)}
              className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors"
            >
              <ArrowLeft className="text-green-700" size={20} />
            </button>
          </div>
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-2">{ngo.name}</h1>
            <div className="flex items-center mb-6 text-green-600">
              <MapPin size={16} className="mr-1" />
              <span>{formatLocation(ngo.location)}</span>
            </div>
            
            <div className="mb-4 flex flex-wrap gap-2">
              {ngo.animalTypes.map((type, index) => (
                <span key={index} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                  {type}
                </span>
              ))}
            </div>
            
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="text-lg">{ngo.fullDescription}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Heart className="text-red-500 mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold text-green-800">{ngo.animals}</div>
                <div className="text-sm text-green-600">Animals Cared For</div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Users className="text-green-600 mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold text-green-800">{ngo.volunteers}</div>
                <div className="text-sm text-green-600">Dedicated Volunteers</div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Calendar className="text-green-600 mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold text-green-800">{ngo.yearFounded}</div>
                <div className="text-sm text-green-600">Year Established</div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                <Leaf className="mr-2" size={20} />
                Current Needs
              </h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ngo.needs.map((need, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-green-800">Contact Information</h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="mb-2"><span className="font-semibold">Email:</span> {ngo.contactInfo.email}</p>
                <p className="mb-2"><span className="font-semibold">Phone:</span> {ngo.contactInfo.phone}</p>
                <p><span className="font-semibold">Website:</span> {ngo.contactInfo.website}</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center shadow-lg">
                <DollarSign className="mr-2" size={18} />
                Support Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Main list view with filters
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Animal Shelter Directory</h1>
          <p className="text-green-700">Discover and support animal welfare organizations making a difference</p>
        </header>
        
        {/* Filters section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setFiltersVisible(!filtersVisible)}
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Filter size={16} className="mr-2" />
              {filtersVisible ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {(locationFilter || animalTypeFilter) && (
              <button
                onClick={resetFilters}
                className="flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
              >
                <X size={16} className="mr-2" />
                Clear Filters
              </button>
            )}
          </div>
          
          {filtersVisible && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location filter */}
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Filter by Location</h3>
                  <div className="flex items-center bg-green-50 rounded-lg">
                    <Search size={16} className="ml-3 text-green-600" />
                    <input
                      type="text"
                      placeholder="Search by country, state, or city..."
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      className="w-full p-3 bg-transparent focus:outline-none"
                    />
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    {locations.countries.map((country, index) => (
                      <button
                        key={`country-${index}`}
                        onClick={() => setLocationFilter(country)}
                        className={`text-xs px-3 py-1 rounded-full ${
                          locationFilter === country ? 
                          'bg-green-600 text-white' : 
                          'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Animal type filter */}
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Filter by Animal Type</h3>
                  <div className="flex items-center bg-green-50 rounded-lg">
                    <Search size={16} className="ml-3 text-green-600" />
                    <input
                      type="text"
                      placeholder="Search by animal type..."
                      value={animalTypeFilter}
                      onChange={(e) => setAnimalTypeFilter(e.target.value)}
                      className="w-full p-3 bg-transparent focus:outline-none"
                    />
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    {animalTypes.map((type, index) => (
                      <button
                        key={`type-${index}`}
                        onClick={() => setAnimalTypeFilter(type)}
                        className={`text-xs px-3 py-1 rounded-full ${
                          animalTypeFilter === type ? 
                          'bg-green-600 text-white' : 
                          'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Results count */}
          <div className="text-green-700 mb-4">
            Showing {filteredNGOs.length} organization{filteredNGOs.length !== 1 ? 's' : ''}
            {locationFilter && ` in "${locationFilter}"`}
            {animalTypeFilter && ` for "${animalTypeFilter}"`}
          </div>
        </div>
        
        {/* NGO cards */}
        {filteredNGOs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNGOs.map(ngo => (
              <div 
                key={ngo.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-green-500 flex flex-col"
                onClick={() => setSelectedNGO(ngo.id)}
              >
                <div className="h-40 bg-green-100 relative">
                  <img src={ngo.imageUrl} alt={ngo.name} className="w-full h-full object-cover" />
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg">
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      <span>{ngo.animals}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-green-800 mb-2">{ngo.name}</h2>
                  <div className="flex items-center text-green-600 text-sm mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span>{formatLocation(ngo.location)}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {ngo.animalTypes.slice(0, 3).map((type, index) => (
                      <span key={index} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">
                        {type}
                      </span>
                    ))}
                    {ngo.animalTypes.length > 3 && (
                      <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">
                        +{ngo.animalTypes.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow">{ngo.description}</p>
                  
                  <div className="mt-auto flex justify-between items-center text-sm text-green-700">
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      <span>{ngo.volunteers} volunteers</span>
                    </div>
                    <div className="flex items-center">
                      <Info size={16} className="ml-1" />
                      <span className="ml-1">View Details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-green-800 text-xl mb-2">No organizations found</div>
            <p className="text-gray-600">Try adjusting your filters or search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}