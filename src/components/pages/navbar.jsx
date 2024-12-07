import { Link, useNavigate } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  // Check if JWT token exists in local storage
  const token = localStorage.getItem("jwtToken");
  
  // useNavigate hook to programmatically navigate after logout
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("jwtToken"); // Remove token from local storage
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-12 w-auto mr-3" />
          <span className="text-2xl font-bold text-black">
            Launch Your Future
          </span>
        </div>

        {/* Links Section */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-black text-lg font-light hover:text-gray-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black text-lg font-light hover:text-gray-600 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/jobs"
            className="text-black text-lg font-light hover:text-gray-600 transition duration-300"
          >
           Explore Jobs
          </Link>
          <Link
            to="/joinnetwork"
            className="text-black text-lg font-light hover:text-gray-600 transition duration-300"
          >
            JoinOurNetwork
          </Link>
          
        </div>

        {/* Account Section */}
        <div className="relative group">
          {/* Account Icon (Card Trigger) */}
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-all duration-300">
            <FiUser className="text-2xl text-black" />
          </div>

          {/* Card (Appears when the account icon is hovered) */}
          <div className="absolute right-0 top-16 w-64 p-6 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100 z-50">
            {!token ? (
              <>
                {/* Sign Up Button */}
                <Link
                  to="/signup"
                  className="block px-6 py-3 bg-blue-500 text-white rounded-md text-center hover:bg-gray-900 transition duration-300"
                >
                  Sign Up
                </Link>

                {/* Already have an account text with the arrow icon */}
                <div className="mt-4 text-center text-blue-500 hover:text-blue-600 cursor-pointer">
                  <Link to="/login" className="flex items-center justify-center space-x-2">
                    <span>Already have an account? Click here to login</span>
                    <FaArrowRight className="text-xl" />
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Profile Link for Logged-in Users */}
                <Link
                  to="/profile"
                  className="block px-6 py-3 bg-green-500 text-white rounded-md text-center hover:bg-gray-900 transition duration-300"
                >
                  Profile
                </Link>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="mt-4 block w-full px-6 py-3 bg-red-500 text-white rounded-md text-center hover:bg-gray-900 transition duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
