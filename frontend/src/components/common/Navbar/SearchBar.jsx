import React from 'react';
import { Search } from 'lucide-react'; // Optional: Install lucide-react for icons

function SearchBar() {
  return (
    <div className="flex items-center justify-center p-6">
      {/* Main Container: The "Pill" */}
      <div className="flex flex-row items-center w-full max-w-4xl bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        
        {/* Location Section */}
        <button className="flex flex-col flex-grow px-8 py-3 text-left rounded-full hover:bg-gray-100 transition-colors group">
          <span className="text-xs font-bold uppercase tracking-wider text-black">Location</span>
          <input 
            type="text" 
            placeholder="Search destinations" 
            className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
          />
        </button>

        {/* Vertical Divider */}
        <div className="h-8 w-[1px] bg-gray-200"></div>

        {/* Timeline Section */}
        <button className="flex flex-col flex-grow px-8 py-3 text-left rounded-full hover:bg-gray-100 transition-colors">
          <span className="text-xs font-bold uppercase tracking-wider text-black">Timeline</span>
          <span className="text-sm text-gray-400">Add dates</span>
        </button>

        {/* Vertical Divider */}
        <div className="h-8 w-[1px] bg-gray-200"></div>

        {/* Guests Section + Search Button */}
        <div className="flex items-center flex-grow pl-8 pr-2 py-2 rounded-full hover:bg-gray-100 transition-colors group">
          <div className="flex flex-col flex-grow text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-black">Guests</span>
            <span className="text-sm text-gray-400">Add guests</span>
          </div>
          
          {/* Black Search Button */}
          <button className="flex items-center justify-center p-4 bg-black text-white rounded-full hover:bg-zinc-800 transition-all transform active:scale-95">
            <Search size={18} strokeWidth={3} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default SearchBar;