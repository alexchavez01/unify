"use client"; 

import Image from "next/image";
import React from "react";


export default function home() {
  return (
    <div className="home-page p-6 bg-gray-50">
      {/* Title Section */}
      <div className="title-section text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">UNIFY - ENHANCING STUDENT CONNECTIVITY</h2>
        <p className="text-xl text-gray-700 mb-4">
          A platform designed to improve student networking, academic collaboration, and resource sharing.
        </p>
      </div>

      {/* Add Archie Image Without Background */}
      <div className="archer-image-container mb-12 flex justify-center">
        <Image
          src="/images/UnifyLogo.png" 
          alt="Unify Logo"
          height={200}
          width={400}
        />
      </div>

      {/* Purpose Section */}
      <div className="purpose-section bg-yellow-100 p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Purpose</h3>
        <p className="text-lg text-gray-700">
          Unify brings Wooster students together, enabling collaboration across academic fields, extracurricular activities, and more.
          Our goal is to help students connect, share resources, and support one another in their educational journeys. Whether you're looking
          for study partners, networking opportunities, or advice, Unify is here to help you thrive.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="feature-card bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Networking Opportunities</h4>
          <p className="text-gray-700">
            Discover and connect with your peers, collaborate on projects, or simply meet new people. Networking with fellow students
            has never been easier.
          </p>
        </div>
        <div className="feature-card bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Collaborative Learning</h4>
          <p className="text-gray-700">
            Exchange ideas, study together, and learn from each other's experiences. Unify helps you collaborate on assignments and
            projects to enhance your learning.
          </p>
        </div>
        <div className="feature-card bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Resource Sharing</h4>
          <p className="text-gray-700">
            Share helpful resources, from class notes to study materials, with your peers. Build a community where knowledge and support
            are shared freely.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section bg-gray-200 p-8 rounded-lg shadow-md text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Connect?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Join Unify today and start connecting with Wooster students. Expand your network, collaborate, and share knowledge with ease.
        </p>
        <button className="py-3 px-6 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-400">
          Get Started
        </button>
      </div>
    </div>
  );
}
