"use client";
import React from 'react';
import {useParams} from 'react-router-dom';

// Example detailed dorm data (could be fetched dynamically or added statically)
const dormDetailsData = {
  1: {
    name: 'Dorm A',
    floorPlans: [
      '/path-to-floorplan1',
      '/path-to-floorplan2'
    ],
    availableRooms: [
      { roomNumber: '101', description: 'Single Room' },
      { roomNumber: '102', description: 'Double Room' }
    ]
  },
  2: {
    name: 'Dorm B',
    floorPlans: [
      '/path-to-floorplan1',
      '/path-to-floorplan2'
    ],
    availableRooms: [
      { roomNumber: '201', description: 'Single Room' },
      { roomNumber: '202', description: 'Double Room' }
    ]
  },
  // More dorm details...
};

function DormDetails() {
  const { id } = useParams();  // Use the dynamic ID from the URL
  const dorm = dormDetailsData[id];

  if (!dorm) {
    return <div className="text-red-500">Dorm not found</div>;
  }

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">{dorm.name}</h2>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Floor Plans</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dorm.floorPlans.map((plan, index) => (
            <div key={index} className="p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md">
              <img src={plan} alt={`Floor plan ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Available Rooms</h3>
        <div className="space-y-4">
          {dorm.availableRooms.map((room, index) => (
            <div key={index} className="p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Room {room.roomNumber}</h4>
              <p className="text-gray-600">{room.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DormDetails;
