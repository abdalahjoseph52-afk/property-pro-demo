import React from 'react';
import Sidebar from './Sidebar';
import { Bell, Search, HelpCircle } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]"> {/* Using a very specific high-end gray */}
      <Sidebar />
      
      <div className="flex-1 ml-64 transition-all duration-300">
        
        {/* Clean Header - No Background, Just Space */}
        <header className="h-20 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-200/60">
          
          {/* Search Field - Subtle & Modern */}
          <div className="relative w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} strokeWidth={2} />
            <input 
              type="text" 
              placeholder="Type to search assets..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 border-none rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all font-medium placeholder:text-slate-400"
            />
          </div>

          {/* Right Actions - Minimalist Icons */}
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-indigo-600 transition-colors">
              <HelpCircle size={20} strokeWidth={1.5} />
            </button>
            
            <button className="relative text-slate-400 hover:text-indigo-600 transition-colors">
              <Bell size={20} strokeWidth={1.5} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
          </div>
        </header>

        {/* Content Container */}
        <main className="p-8 max-w-[1600px] mx-auto">
          {children}
        </main>

      </div>
    </div>
  );
};

export default Layout;