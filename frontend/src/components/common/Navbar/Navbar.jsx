import React from "react";
import SearchBar from "./SearchBar";
import { Globe, User, Menu } from "lucide-react"; // Optional: for the profile section
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleBecomeHost  = () => {
    navigate("/WelcomeListing");
  };
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      {/* Container to keep content centered on large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-1 gap-4 md:gap-0">
          {/* 1. Logo Section */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="text-2xl font-black tracking-tighter text-black uppercase">
              Saraey
            </h1>
          </div>

          {/* 2. Search Bar Section (Center) */}
          <div className="w-full md:w-auto md:flex-1 md:max-w-2xl px-0 md:px-8">
            <SearchBar />
          </div>

          {/* 3. Profile & Utility Section (Right) */}
          <div className="hidden md:flex items-center space-x-4">

            <Link to="/create-listing">
              <button
              className="text-sm font-semibold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Become a host
            </button>
            </Link>
            <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
              <Globe size={18} />
            </button>

            {/* User Menu Button */}
            <button className="flex items-center gap-3 p-2 pl-3 border border-gray-200 rounded-full hover:shadow-md transition-shadow">
              <Menu size={18} strokeWidth={2.5} />
              <div className="bg-black text-white p-2 rounded-full">
                <User size={18} fill="currentColor" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
