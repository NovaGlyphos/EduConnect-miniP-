// Educators.jsx
import React, { useState } from 'react';
import { FaSearch, FaStar, FaGraduationCap, FaUserCircle, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Educators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Sample educator data
  const educators = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      avatar: null, // You could add actual avatar URLs here
      specialty: "Mathematics",
      subjects: ["Calculus", "Linear Algebra"],
      rating: 4.8,
      reviews: 142,
      institution: "Stanford University",
      location: "California, USA",
      bio: "Mathematics professor with 15 years of experience teaching advanced calculus and algebra."
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      avatar: null,
      specialty: "Computer Science",
      subjects: ["Data Structures", "Machine Learning"],
      rating: 4.9,
      reviews: 218,
      institution: "MIT",
      location: "Massachusetts, USA",
      bio: "Computer science researcher specializing in AI and machine learning algorithms."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      avatar: null,
      specialty: "Biology",
      subjects: ["Molecular Biology", "Genetics"],
      rating: 4.7,
      reviews: 98,
      institution: "Johns Hopkins University",
      location: "Maryland, USA",
      bio: "Biologist focused on genetic research with extensive teaching experience in undergraduate programs."
    },
    {
      id: 4,
      name: "Prof. James Wilson",
      avatar: null,
      specialty: "Literature",
      subjects: ["Modern Poetry", "Creative Writing"],
      rating: 4.6,
      reviews: 87,
      institution: "Oxford University",
      location: "Oxford, UK",
      bio: "Published author and professor specializing in 20th century literature and creative writing."
    },
    {
      id: 5,
      name: "Dr. Aisha Patel",
      avatar: null,
      specialty: "Physics",
      subjects: ["Quantum Mechanics", "Theoretical Physics"],
      rating: 4.9,
      reviews: 156,
      institution: "California Institute of Technology",
      location: "California, USA",
      bio: "Theoretical physicist with research focus on quantum computing and a passion for teaching complex concepts."
    }
  ];

  // Filter options
  const filterOptions = [
    { value: 'all', label: 'All Educators' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'science', label: 'Science' },
    { value: 'technology', label: 'Technology' },
    { value: 'humanities', label: 'Humanities' }
  ];

  // Filter educators based on search query and selected filter
  const filteredEducators = educators.filter(educator => {
    const matchesSearch = 
      educator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      educator.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      educator.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
      educator.institution.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      selectedFilter === 'all' || 
      (selectedFilter === 'mathematics' && educator.specialty === 'Mathematics') ||
      (selectedFilter === 'science' && ['Biology', 'Physics', 'Chemistry'].includes(educator.specialty)) ||
      (selectedFilter === 'technology' && educator.specialty === 'Computer Science') ||
      (selectedFilter === 'humanities' && ['Literature', 'History', 'Philosophy'].includes(educator.specialty));
    
    return matchesSearch && matchesFilter;
  });

  // Handle educator profile click
  const handleEducatorClick = (educatorId) => {
    console.log(`Viewing educator profile: ${educatorId}`);
    // Here you would typically navigate to the educator's profile page
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Connect with Educators</h1>
      
      {/* Search and filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search educators by name, subject, or institution..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <select
          className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          {filterOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      {/* Educators list */}
      <div className="space-y-6">
        {filteredEducators.map(educator => (
          <div 
            key={educator.id} 
            className="bg-base-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleEducatorClick(educator.id)}
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Avatar/Image */}
              <div className="flex-shrink-0">
                {educator.avatar ? (
                  <img 
                    src={educator.avatar} 
                    alt={educator.name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="w-20 h-20 text-gray-400" />
                )}
              </div>
              
              {/* Educator details */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{educator.name}</h2>
                    <p className="text-gray-600 flex items-center gap-1 mt-1">
                      <FaGraduationCap />
                      <span>{educator.specialty}</span>
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-medium">{educator.rating}</span>
                    <span className="text-gray-500">({educator.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-gray-700">{educator.bio}</p>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-3">
                  {educator.subjects.map((subject, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {subject}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex flex-col sm:flex-row gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <FaBriefcase />
                    <span>{educator.institution}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt />
                    <span>{educator.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredEducators.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No educators found matching your search criteria.</p>
          </div>
        )}
      </div>
      
      {/* Featured educators section */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Become an Educator</h3>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-gray-700">
            Are you an expert in your field? Join EduConnect as an educator and share your knowledge with students around the world.
          </p>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Educators;