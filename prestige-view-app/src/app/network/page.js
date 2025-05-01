"use client" ;
import React, { useState } from "react";

function Network() {
  // State to keep track of the selected profile and whether it's open
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Sample student data (you can replace it with dynamic data)
  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      major: "Computer Science",
      interests: "AI, Programming, Machine Learning",
      clubs: "Robotics Club, Coding Bootcamp",
      jobInterests: "Software Engineer, Data Scientist",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Bob Smith",
      major: "Biology",
      interests: "Medical School, Sports, Volunteering",
      clubs: "Pre-Med Club, Basketball Club",
      jobInterests: "Doctor, Researcher",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Charlie Lee",
      major: "Psychology",
      interests: "Mental Health, Research, Counseling",
      clubs: "Mental Health Awareness Club",
      jobInterests: "Counselor, Psychologist",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "David Brown",
      major: "Engineering",
      interests: "Robotics, Innovation, Startups",
      clubs: "Engineering Society, Startup Club",
      jobInterests: "Mechanical Engineer, Product Designer",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Eva Green",
      major: "Economics",
      interests: "International Development, Policy Analysis",
      clubs: "Economic Policy Club",
      jobInterests: "Economic Analyst, Policy Maker",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      name: "Frank White",
      major: "Philosophy",
      interests: "Ethics, Critical Thinking, Debate",
      clubs: "Philosophy Club, Debate Team",
      jobInterests: "Philosopher, Ethics Consultant",
      photo: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      name: "Grace Adams",
      major: "English Literature",
      interests: "Creative Writing, Poetry, Drama",
      clubs: "Creative Writing Club, Drama Club",
      jobInterests: "Writer, Editor",
      photo: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 8,
      name: "Henry Walker",
      major: "Chemistry",
      interests: "Biochemistry, Environmental Science, Lab Research",
      clubs: "Chemistry Club, Environmental Club",
      jobInterests: "Biochemist, Environmental Scientist",
      photo: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      name: "Isla Mitchell",
      major: "Mathematics",
      interests: "Statistics, Data Science, Cryptography",
      clubs: "Math Club, Data Science Club",
      jobInterests: "Data Scientist, Cryptographer",
      photo: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      id: 10,
      name: "Jack Harris",
      major: "History",
      interests: "World History, Archaeology, Museum Studies",
      clubs: "History Club, Archaeology Club",
      jobInterests: "Historian, Archaeologist",
      photo: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 11,
      name: "Lily Evans",
      major: "Political Science",
      interests: "Law, Human Rights, Debate",
      clubs: "Model UN, Debate Team",
      jobInterests: "Lawyer, Policy Advisor",
      photo: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 12,
      name: "Max Turner",
      major: "Business Administration",
      interests: "Entrepreneurship, Finance, Marketing",
      clubs: "Business Club, Investment Society",
      jobInterests: "Entrepreneur, Financial Analyst",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  // Handle clicking a profile box
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  // Handle adding a user
  const handleAddUser = () => {
    alert(`${selectedProfile.name} has been added to your network!`);
    setSelectedProfile(null); // Close the modal after adding
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Networking</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {students.map((student) => (
          <div
          key={student.id}
          className="flex flex-col items-center justify-center h-40 bg-gray-200 rounded-lg shadow-md cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105"
          onClick={() => handleProfileClick(student)}
        >
            <img
              src={student.photo}
              alt={student.name}
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <span>{student.name}</span>
          </div>
        ))}
      </div>

      {/* Modal to display selected profile */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full flex">
            <div className="w-1/3 mr-6">
              <img
                src={selectedProfile.photo}
                alt={selectedProfile.name}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedProfile.name}</h3>
              <p className="text-gray-600 mb-2"><strong>Major:</strong> {selectedProfile.major}</p>
              <p className="text-gray-600 mb-2"><strong>Interests:</strong> {selectedProfile.interests}</p>
              <p className="text-gray-600 mb-2"><strong>Clubs:</strong> {selectedProfile.clubs}</p>
              <p className="text-gray-600 mb-4"><strong>Job Interests:</strong> {selectedProfile.jobInterests}</p>
              <button
                onClick={handleAddUser}
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 mb-4"
              >
                Add to Network
              </button>
              <button
                onClick={closeModal}
                className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Network;
