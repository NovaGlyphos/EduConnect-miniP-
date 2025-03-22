import {
  FaHome,
  FaBook,
  FaChalkboardTeacher,
  FaComments,
  FaBookmark,
  FaSignOutAlt,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="w-64 min-h-screen bg-base-300 text-base-content p-4">
      <ul className="menu">
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
            <FaBook /> Subjects
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
            <FaChalkboardTeacher /> Educators
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
            <FaComments /> Discussions
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
            <FaBookmark /> Bookmarks
          </a>
        </li>
        <li className="mt-auto">
          <a className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all">
            <FaSignOutAlt /> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
