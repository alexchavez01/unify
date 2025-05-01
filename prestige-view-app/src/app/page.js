"use client"

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import Home from './Home/page.js';
import Network from './network/page.js';
import AcademicExchange from './ARE/acedemic-tab.jsx';
import Search from './search/page.js';
import ScottyAI from './scottyAi/page.js';
import Dorms from './dorms/page.js';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <header className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Unify</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-yellow-500">Home</Link>
            <Link to="/network" className="hover:text-yellow-500">Networking</Link>
            <Link to="/search" className="hover:text-yellow-500">Search</Link>
            <Link to="/are" className="hover:text-yellow-500">A.R.E</Link>
            <Link to="/dorms" className="hover:text-yellow-500">Dorms</Link>
            <Link to="/scottyai" className="hover:text-yellow-500">Scotty AI</Link>
          </nav>
          <div className="text-xl">👤</div> {/* Placeholder for user icon */}
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-100 min-h-screen py-6 text-gray-600">
        <div className="container mx-auto px-6">
          <Routes>
            {/* Define Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/network" element={<Network />} />
            <Route path="/search" element={<Search />} />
            <Route path="/are" element={<AcademicExchange />} />
            <Route path="/dorms" element={<Dorms />} />
            <Route path="/scottyai" element={<ScottyAI />} />
            {/* <Route path="/dorm/:id" element={<Dorms />} /> */}
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
