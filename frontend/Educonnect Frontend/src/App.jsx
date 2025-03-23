// App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import Subjects from "./pages/Subjects";
import Educators from "./pages/Educators";
import Discussions from "./pages/Discussions";
import Bookmarks from "./pages/Bookmarks";
import Feed from "./Feed";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <NavBar />
      <div className="flex justify-start">
        <SideBar /> {/* No Router wrapper here */}
        <div className="flex-1 p-5">
          <Routes>
            <Route path="/" element={<MainContent posts={posts} setPosts={setPosts} />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/educators" element={<Educators />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
          {/* Feed is always visible */}
          <Feed posts={posts} />
        </div>
      </div>
    </>
  );
}

export default App;
