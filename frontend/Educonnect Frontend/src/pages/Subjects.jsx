import React, { useState } from 'react';
import { FaSearch, FaBook, FaChalkboardTeacher, FaCalculator, FaFlask, FaGlobe, FaCode, FaPalette } from 'react-icons/fa';

const Subjects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample subject data
  const subjectCategories = [
    {
      id: 1,
      name: "Mathematics",
      icon: <FaCalculator className="text-blue-500" />,
      subjects: ["Algebra", "Calculus", "Geometry", "Statistics", "Trigonometry"]
    },
    {
      id: 2,
      name: "Science",
      icon: <FaFlask className="text-green-500" />,
      subjects: ["Biology", "Chemistry", "Physics", "Earth Science", "Astronomy"]
    },
    {
      id: 3,
      name: "Humanities",
      icon: <FaGlobe className="text-yellow-500" />,
      subjects: ["History", "Literature", "Philosophy", "Psychology", "Sociology"]
    },
    {
      id: 4,
      name: "Technology",
      icon: <FaCode className="text-purple-500" />,
      subjects: ["Computer Science", "Web Development", "Data Science", "AI & Machine Learning", "Cybersecurity"]
    },
    {
      id: 5,
      name: "Arts",
      icon: <FaPalette className="text-pink-500" />,
      subjects: ["Visual Arts", "Music", "Theatre", "Film Studies", "Creative Writing"]
    }
  ];

  // Filter subjects based on search query
  const filteredCategories = subjectCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subjects.some(subject =>
      subject.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Handle subject click
  const handleSubjectClick = (subject) => {
    console.log(`Selected subject: ${subject}`);
    // Here you would typically navigate to the subject page or show more details
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Explore Subjects</h1>

      {/* Search bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for subjects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Subject categories */}
      <div className="space-y-8">
        {filteredCategories.map(category => (
          <div key={category.id} className="bg-base-200 rounded-lg p-5 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.subjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow cursor-pointer flex items-center gap-2"
                  onClick={() => handleSubjectClick(subject)}
                >
                  <FaBook className="text-gray-500" />
                  <span className="text-gray-900 font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No subjects found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      {/* Featured courses or teaching resources */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Popular Learning Resources</h3>
        <div className="p-4 bg-base-200 rounded-lg">
          <p className="text-gray-500 italic">Connect with top educators for these subjects and discover learning materials.</p>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
