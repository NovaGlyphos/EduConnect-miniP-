import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 sticky top-0">
      <h2 className="text-xl font-bold">EduConnect</h2>
      <ul className="mt-5 space-y-4">
        <li>
          <Link to="/" className="block p-2 rounded hover:bg-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/subjects" className="block p-2 rounded hover:bg-gray-700">
            Subjects
          </Link>
        </li>
        <li>
          <Link to="/educators" className="block p-2 rounded hover:bg-gray-700">
            Educators
          </Link>
        </li>
        <li>
          <Link to="/discussions" className="block p-2 rounded hover:bg-gray-700">
            Discussions
          </Link>
        </li>
        <li>
          <Link to="/bookmarks" className="block p-2 rounded hover:bg-gray-700">
            Bookmarks
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
