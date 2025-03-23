// Bookmarks.jsx
import React, { useState } from 'react';
import { FaUserCircle, FaTrash, FaFolder, FaSearch, FaExternalLinkAlt, FaBook, FaComment, FaVideo } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

const Bookmarks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFolder, setActiveFolder] = useState('all');
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      title: "Advanced Machine Learning Techniques",
      source: "AI Research Journal",
      type: "article",
      url: "#",
      folder: "Research",
      thumbnail: null,
      savedAt: new Date(Date.now() - 3600000 * 24), // 1 day ago
      creator: "Dr. Alan Turing"
    },
    {
      id: 2,
      title: "Understanding Calculus: Integration Methods",
      source: "Khan Academy",
      type: "video",
      url: "#",
      folder: "Study Materials",
      thumbnail: null,
      savedAt: new Date(Date.now() - 3600000 * 48), // 2 days ago
      creator: "Sal Khan"
    },
    {
      id: 3,
      title: "Interpreting Shakespeare's Hamlet",
      source: "EduConnect Discussion",
      type: "discussion",
      url: "#",
      folder: "Literature",
      thumbnail: null,
      savedAt: new Date(Date.now() - 3600000 * 72), // 3 days ago
      creator: "Prof. Emily Wilson"
    },
    {
      id: 4,
      title: "Introduction to Quantum Physics",
      source: "MIT OpenCourseWare",
      type: "course",
      url: "#",
      folder: "Study Materials",
      thumbnail: null,
      savedAt: new Date(Date.now() - 3600000 * 120), // 5 days ago
      creator: "Prof. Walter Lewin"
    }
  ]);

  // Folders
  const folders = [
    { id: 'all', name: 'All Bookmarks', count: bookmarks.length },
    { id: 'Research', name: 'Research', count: bookmarks.filter(b => b.folder === 'Research').length },
    { id: 'Study Materials', name: 'Study Materials', count: bookmarks.filter(b => b.folder === 'Study Materials').length },
    { id: 'Literature', name: 'Literature', count: bookmarks.filter(b => b.folder === 'Literature').length }
  ];

  // Filter bookmarks
  const filteredBookmarks = bookmarks.filter(bookmark => {
    const matchesSearch = 
      bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      bookmark.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.source.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFolder = activeFolder === 'all' || bookmark.folder === activeFolder;
    
    return matchesSearch && matchesFolder;
  });

  // Remove bookmark
  const handleRemoveBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  // Get icon based on content type
  const getTypeIcon = (type) => {
    switch(type) {
      case 'article':
        return <FaBook className="text-blue-500" />;
      case 'video':
        return <FaVideo className="text-red-500" />;
      case 'discussion':
        return <FaComment className="text-green-500" />;
      case 'course':
        return <FaBook className="text-purple-500" />;
      default:
        return <FaBook className="text-gray-500" />;
    }
  };

  // Create new folder
  const handleCreateFolder = () => {
    console.log("Creating new folder");
    // Here you would typically open a dialog to create a new folder
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Bookmarks</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Folders sidebar */}
        <div className="w-full md:w-64 bg-base-200 p-4 rounded-lg h-min">
          <h2 className="font-semibold mb-4">Folders</h2>
          <ul className="space-y-2">
            {folders.map(folder => (
              <li key={folder.id}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md flex justify-between items-center ${
                    activeFolder === folder.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveFolder(folder.id)}
                >
                  <div className="flex items-center gap-2">
                    <FaFolder className={activeFolder === folder.id ? 'text-blue-500' : 'text-gray-400'} />
                    <span>{folder.name}</span>
                  </div>
                  <span className="text-sm bg-gray-200 text-gray-700 px-2 rounded-full">
                    {folder.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <button 
            className="w-full mt-4 px-3 py-2 text-center border border-dashed border-gray-400 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={handleCreateFolder}
          >
            + New Folder
          </button>
        </div>
        
        {/* Bookmarks list */}
        <div className="flex-1">
          {/* Search */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search bookmarks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Bookmarks */}
          <div className="space-y-4">
            {filteredBookmarks.map(bookmark => (
              <div key={bookmark.id} className="bg-base-200 rounded-lg p-4 shadow-md flex">
                <div className="mr-4 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded">
                  {bookmark.thumbnail ? (
                    <img 
                      src={bookmark.thumbnail} 
                      alt={bookmark.title} 
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    getTypeIcon(bookmark.type)
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">
                      {bookmark.title}
                    </h3>
                    <button 
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => handleRemoveBookmark(bookmark.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                    <span>{bookmark.source}</span>
                    <span>•</span>
                    <span>by {bookmark.creator}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">
                      Saved {formatDistanceToNow(bookmark.savedAt, { addSuffix: true })}
                    </span>
                    <a 
                      href={bookmark.url} 
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredBookmarks.length === 0 && (
              <div className="text-center py-8 bg-base-200 rounded-lg">
                <p className="text-gray-500">No bookmarks found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Info section */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Save Content for Later</h3>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-gray-700">
            Bookmark posts, discussions, resources, and other content across EduConnect to build your personal learning library.
            Use folders to organize your bookmarks by subject or project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;