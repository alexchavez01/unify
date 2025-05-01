"use client";

import React, { useState } from 'react';

const sampleData = [
  { id: 1, name: 'John Doe', major: 'Computer Science' },
  { id: 2, name: 'Jane Smith', major: 'Data Science' },
  { id: 3, name: 'Alice Johnson', major: 'Cybersecurity' },
  { id: 4, name: 'Bob Lee', major: 'Computer Science' },
  { id: 5, name: 'Emma Wilson', major: 'Software Engineering' },
  { id: 6, name: 'Michael Brown', major: 'Information Technology' },
  { id: 7, name: 'Sophia Davis', major: 'Data Science' },
  { id: 8, name: 'Daniel Garcia', major: 'Cybersecurity' },
  { id: 9, name: 'Olivia Martinez', major: 'Software Engineering' },
  { id: 10, name: 'Ethan Thomas', major: 'Computer Science' },
  { id: 11, name: 'Mia Hernandez', major: 'Information Systems' },
  { id: 12, name: 'James White', major: 'Data Analytics' },
  { id: 13, name: 'Charlotte Lewis', major: 'Artificial Intelligence' },
  { id: 14, name: 'Benjamin Walker', major: 'Cybersecurity' },
  { id: 15, name: 'Amelia Hall', major: 'Human-Computer Interaction' },
  { id: 16, name: 'Alexander Allen', major: 'Computer Science' },
  { id: 17, name: 'Harper Young', major: 'Data Science' },
  { id: 18, name: 'William King', major: 'Software Engineering' },
  { id: 19, name: 'Evelyn Scott', major: 'Cybersecurity' },
  { id: 20, name: 'Lucas Green', major: 'Information Technology' }
];

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = sampleData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.major.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Search Profiles</h2>

      <input
        type="text"
        placeholder="Search by name or major..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-400 rounded-lg px-4 py-2 w-80 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="w-full max-w-2xl">
        {filteredData.length === 0 ? (
          <p className="text-gray-600 text-center">No results found</p>
        ) : (
          filteredData.map(item => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold">{item.name}</h4>
              <p className="text-gray-600">{item.major}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
