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
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar Header */}
            
  
            {/* Sidebar Items */}
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
      </div>
    );
  };
  
  export default SideBar;