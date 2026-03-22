import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomeListing() {
  const navigate = useNavigate();
  
  const HandleBack = () => {
    navigate("/");
  };

  const HandleNext = () => {
    navigate("/HomeCategories");
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
<button 
  onClick={HandleBack}
  className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-5 h-5"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" 
    />
  </svg>

  <span>Back</span>
</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="text-center space-y-6">
            {/* Saraey Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-black uppercase">
                Saraey
              </h1>
              <div className="h-0.5 w-16 bg-black mx-auto mt-4"></div>
            </div>
            
            {/* Welcome Message */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                Welcome to Saraey
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Join a community of hosts who share their space and create unforgettable experiences
              </p>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">10k+</div>
                <div className="text-sm text-gray-500 mt-1">Active Hosts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">50k+</div>
                <div className="text-sm text-gray-500 mt-1">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">100+</div>
                <div className="text-sm text-gray-500 mt-1">Cities Worldwide</div>
              </div>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div className="mt-16 space-y-8">
            <h3 className="text-xl font-semibold text-black text-center">
              Why host with Saraey?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="white" 
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Earn Extra Income</h4>
                <p className="text-sm text-gray-600">
                  Turn your extra space into a source of income. Set your own price and earn what you deserve.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="white" 
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Full Control</h4>
                <p className="text-sm text-gray-600">
                  Choose your availability, set house rules, and decide who stays. You're in complete control.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="white" 
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600">
                  Our dedicated support team is here to help you every step of the way, day or night.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="white" 
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Host Protection</h4>
                <p className="text-sm text-gray-600">
                  Comprehensive protection for you and your property with every booking.
                </p>
              </div>
            </div>
          </div>

          {/* Footer with Next Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="text-xs text-gray-500">
                  Step 1 of 8
                </div>
                <button 
                  onClick={HandleNext}
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeListing;