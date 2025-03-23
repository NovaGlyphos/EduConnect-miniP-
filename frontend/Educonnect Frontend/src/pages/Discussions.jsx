// Discussions.jsx
import React, { useState } from 'react';
import { FaUserCircle, FaHeart, FaComment, FaShare, FaBookmark, FaSearch, FaFilter } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

const Discussions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample discussions data
  const discussionsData = [
    {
      id: 1,
      author: "Alex Johnson",
      avatar: null,
      title: "Understanding Quantum Computing Fundamentals",
      content: "I've been studying quantum computing basics and I'm struggling with the concept of quantum entanglement. Can anyone explain it in simpler terms?",
      tags: ["quantum computing", "physics", "computer science"],
      likes: 24,
      comments: 8,
      timestamp: new Date(Date.now() - 3600000 * 2), // 2 hours ago
      category: "Technology"
    },
    {
      id: 2,
      author: "Maria Garcia",
      avatar: null,
      title: "Best Resources for Learning Calculus?",
      content: "I'm preparing for my calculus exam next month and looking for comprehensive resources. What books, videos, or online courses would you recommend for a deep understanding of integration techniques?",
      tags: ["mathematics", "calculus", "study resources"],
      likes: 19,
      comments: 15,
      timestamp: new Date(Date.now() - 3600000 * 8), // 8 hours ago
      category: "Mathematics"
    },
    {
      id: 3,
      author: "David Lee",
      avatar: null,
      title: "Analyzing Shakespeare's Use of Iambic Pentameter",
      content: "I'm writing a paper on Shakespeare's sonnets and I'm analyzing his use of iambic pentameter. I've noticed some interesting patterns but would love to hear others' thoughts on how his meter relates to the emotional content.",
      tags: ["literature", "shakespeare", "poetry"],
      likes: 32,
      comments: 21,
      timestamp: new Date(Date.now() - 3600000 * 24), // 1 day ago
      category: "Literature"
    },
    {
      id: 4,
      author: "Priya Patel",
      avatar: null,
      title: "Ethical Considerations in AI Development",
      content: "As AI becomes more prevalent in society, what ethical frameworks should we be developing to ensure these technologies benefit humanity? I'm particularly concerned about bias in training data.",
      tags: ["artificial intelligence", "ethics", "technology"],
      likes: 45,
      comments: 27,
      timestamp: new Date(Date.now() - 3600000 * 36), // 1.5 days ago
      category: "Technology"
    }
  ];

  // Filter categories
  const filterOptions = [
    { value: 'all', label: 'All Topics' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Science', label: 'Science' },
    { value: 'Literature', label: 'Literature' }
  ];

  // Filter discussions
  const filteredDiscussions = discussionsData.filter(discussion => {
    const matchesSearch = 
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === 'all' || discussion.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  // Handle creating a new discussion
  const handleNewDiscussion = () => {
    console.log("Creating new discussion");
    // Here you would typically open a form or navigate to a new discussion page
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Academic Discussions</h1>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={handleNewDiscussion}
        >
          Start Discussion
        </button>
      </div>
      
      {/* Search and filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center">
          <FaFilter className="mr-2 text-gray-500" />
          <select
            className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            {filterOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Discussions list */}
      <div className="space-y-6">
        {filteredDiscussions.map(discussion => (
          <div key={discussion.id} className="bg-base-200 rounded-lg p-5 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              {discussion.avatar ? (
                <img 
                  src={discussion.avatar} 
                  alt={discussion.author} 
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 text-gray-400" />
              )}
              <div>
                <span className="font-semibold">{discussion.author}</span>
                <p className="text-sm text-gray-500">
                  {formatDistanceToNow(discussion.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-2">{discussion.title}</h2>
            <p className="mb-4">{discussion.content}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {discussion.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                  <FaHeart />
                  <span>{discussion.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                  <FaComment />
                  <span>{discussion.comments}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                  <FaShare />
                </button>
              </div>
              <button className="text-gray-600 hover:text-blue-600">
                <FaBookmark />
              </button>
            </div>
          </div>
        ))}
        
        {filteredDiscussions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No discussions found matching your search criteria.</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={handleNewDiscussion}
            >
              Start a New Discussion
            </button>
          </div>
        )}
      </div>
      
      {/* Discussion guidelines */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Community Guidelines</h3>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-gray-700">
            Please keep discussions respectful and on-topic. Share sources when applicable and be open to different perspectives.
            Remember that EduConnect is an academic community focused on collaborative learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discussions;