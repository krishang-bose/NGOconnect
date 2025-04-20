import { useState } from 'react';
import { Heart, Info, ArrowLeft, Home, DollarSign, Users, Leaf, Calendar, MapPin } from 'lucide-react';

export default function AnimalShelterDirectory() {
  const [selectedNGO, setSelectedNGO] = useState(null);
  
  // Extended NGO data with more information
  const ngos = [
    {
      id: 1,
      name: "Paws & Rescue",
      description: "Dedicated to rescuing and rehabilitating stray animals across the country.",
      location: "New York, NY",
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
      location: "Austin, TX",
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
      location: "Seattle, WA",
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
      location: "Portland, OR",
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
      location: "Phoenix, AZ",
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
      location: "Denver, CO",
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
      location: "San Diego, CA",
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
      location: "Miami, FL",
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
    }
  ];

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
              <span>{ngo.location}</span>
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
  
  // Main list view
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Animal Shelter Directory</h1>
          <p className="text-green-700">Discover and support animal welfare organizations making a difference</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngos.map(ngo => (
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
                <div className="flex items-center text-green-600 text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  <span>{ngo.location}</span>
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
      </div>
    </div>
  );
}