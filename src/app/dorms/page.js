import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

// Example dorm data
const dormData = [
    { 
      id: 1, 
      name: 'Andrews Hall', 
      description: 'A first-year residence hall featuring double rooms with a vibrant community atmosphere. Known for its central location and active hall council.', 
      imageUrl: '/images/ADRW-Out2.jpg' 
    },
    { 
      id: 2, 
      name: 'Armington Hall', 
      description: 'First-year hall with suite-style living (two double rooms connected by a bathroom). Features large common areas and proximity to academic buildings.', 
      imageUrl: '/images/Armington.jpg' 
    },
    { 
      id: 3, 
      name: 'Bornhuetter Hall', 
      description: 'First-year hall with traditional doubles and hallway bathrooms. Offers great views of the campus and easy access to Lowry Center.', 
      imageUrl: '/images/BORNEdited.jpg' 
    },
    { 
      id: 4, 
      name: 'Bissman Hall (Greek life and general housing)', 
      description: 'Upperclass housing with singles and doubles. Home to Greek organizations and themed housing options. Features apartment-style kitchens.', 
      imageUrl: '/images/Resized-Bissman.jpg' 
    },
    { 
      id: 5, 
      name: 'Brush Hall', 
      description: 'Upperclass hall with singles and doubles. Known for its quiet atmosphere and proximity to the science quad. Features a community kitchen.', 
      imageUrl: '/images/brush_M8D4408.jpg' 
    },
    { 
      id: 6, 
      name: 'Compton Hall', 
      description: 'First-year hall with traditional doubles. Features gender-inclusive housing options and a central campus location near the library.', 
      imageUrl: '/images/COMPTEdited.jpg' 
    },
    { 
      id: 7, 
      name: 'Douglass Hall', 
      description: 'First-year hall with traditional doubles and triples. Known for its strong community spirit and proximity to campus dining.', 
      imageUrl: '/images/douglass.jpg' 
    },
    { 
      id: 8, 
      name: 'Gault Manor', 
      description: 'Upperclass hall featuring apartment-style living with single bedrooms. Includes full kitchens and private bathrooms.', 
      imageUrl: '/images/gault_Manor.jpg' 
    },
    { 
      id: 9, 
      name: 'Gault Schoolhouse', 
      description: 'Unique upperclass housing in a historic building. Features singles and doubles with character-rich architecture.', 
      imageUrl: '/images/gault-schoolhouse.jpg' 
    },
    { 
      id: 10, 
      name: 'Holden Hall', 
      description: 'First-year hall with traditional doubles. Known for its welcoming community and proximity to the Scot Center.', 
      imageUrl: '/images/holden.jpg' 
    },
    { 
      id: 11, 
      name: 'Kenarden Lodge', 
      description: 'Upperclass housing with a lodge-like atmosphere. Features singles and doubles with spacious common areas.', 
      imageUrl: '/images/kenarden_MD31042.jpg' 
    },
    { 
      id: 12, 
      name: 'Luce Hall', 
      description: 'First-year hall with traditional doubles. Features gender-inclusive housing and easy access to academic buildings.', 
      imageUrl: '/images/luce_DSC1029.jpg' 
    },
    { 
      id: 13, 
      name: 'Miller Manor', 
      description: 'Upperclass hall with apartment-style living. Features single rooms with shared kitchens and lounges.', 
      imageUrl: '/images/Miller_Manor.png' 
    },
    { 
      id: 14, 
      name: 'Stevenson Hall', 
      description: 'Upperclass hall with suite-style living. Known for its quiet atmosphere and proximity to the art museum.', 
      imageUrl: '/images/stevenson.jpg' 
    },
    { 
      id: 15, 
      name: 'Wagner Hall', 
      description: 'First-year hall with traditional doubles. Features an active community and easy access to campus amenities.', 
      imageUrl: '/images/WAGEdited.jpg' 
    }
  ];

function Dorms() {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dorms</h2>

      {/* Grid of Dorms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dormData.map((dorm) => (
          <div key={dorm.id} className="p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md">
            {/* Dorm Image */}
            <img src={dorm.imageUrl} alt={dorm.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            
            {/* Dorm Name and Description */}
            <h4 className="text-xl font-semibold text-gray-800">{dorm.name}</h4>
            <p className="text-gray-600 mb-4">{dorm.description}</p>

            {/* Link to Detailed Dorm Page */}
            <Link to={`/dorm/${dorm.id}`} className="text-yellow-500 hover:text-yellow-600">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dorms;
