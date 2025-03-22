import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm px-6">
      {/* Logo Section */}
      <div className="flex-1 flex items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
            🚀 EduConnect
          </h1>
          <p className="text-sm text-gray-500 mt-1 italic">
            "Learn. Connect. Grow."
          </p>
        </div>
      </div>

      {/* Search & Profile Section */}
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-32 md:w-56"
        />

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                alt="User Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow z-10 mt-3 w-52 p-2"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;