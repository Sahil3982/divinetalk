import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
   <>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 shadow-sm bg-white md:hidden">
      {/* Back Button */}
      <button
        // eslint-disable-next-line no-undef
        onClick={() => Navigate(-1)}
        className="flex items-center text-gray-700 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Title */}
      <h1 className="text-lg font-semibold text-gray-800">
        Connect With Astrologers
      </h1>

      <div></div>

      {/* Menu Icon */}
      <button className="flex items-center text-gray-700 hover:text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
     <nav className="flex items-center justify-between px-8 py-4 shadow-md hidden md:flex">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg text-gray-800">DivineTalk</span>
        <span className="text-sm text-gray-500">ASTROLOGY</span>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-600 hover:text-gray-800">
          Home
        </Link>
        <Link to="/services" className="text-gray-600 hover:text-gray-800">
          Services
        </Link>
        <Link
          to="/astrologers"
          className="text-gray-800 font-bold hover:text-gray-900"
        >
          Astrologers
        </Link>
        <Link to="/blogs" className="text-gray-600 hover:text-gray-800">
          Blogs
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="border border-gray-300 rounded-md px-4 py-1 text-gray-600 hover:bg-gray-100">
            English
          </button>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Get App
        </button>
      </div>
    </nav>
   </>
  );
};

export default Navbar;
