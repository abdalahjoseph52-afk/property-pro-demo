import React from 'react';
import { LayoutGrid, Building2, Users, Banknote, Settings, LogOut, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { icon: <LayoutGrid size={20} strokeWidth={1.5} />, label: 'Overview', path: '/' },
    { icon: <Building2 size={20} strokeWidth={1.5} />, label: 'Properties', path: '/properties' },
    { icon: <Users size={20} strokeWidth={1.5} />, label: 'Tenants', path: '/tenants' },
    { icon: <Banknote size={20} strokeWidth={1.5} />, label: 'Financials', path: '/finance' },
    { icon: <Settings size={20} strokeWidth={1.5} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay (Darkens background when menu is open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* The Sidebar Itself */}
      <aside 
        className={`
          fixed top-0 left-0 h-screen w-64 bg-[#0f172a] text-slate-300 
          flex flex-col border-r border-slate-800 font-sans z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0
        `}
      >
        
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800/50">
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-900/50">
              <Building2 size={20} className="text-white" />
            </div>
            <div className="leading-none">
              <h1 className="text-lg font-bold tracking-tight text-white">PropertyPro</h1>
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-semibold">Enterprise</span>
            </div>
          </div>
          
          {/* Close Button (Mobile Only) */}
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-8 space-y-1 overflow-y-auto">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Menu</p>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => onClose()} // Close menu when link clicked on mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActive 
                    ? 'bg-white/5 text-white border-l-4 border-indigo-500' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <span className="group-hover:text-indigo-400 transition-colors">
                {item.icon}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800/50">
          <div className="flex items-center gap-4 p-3 bg-slate-900 rounded-xl border border-slate-800">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-lg">
              AW
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-white">Abdalah W.</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </div>
        
      </aside>
    </>
  );
};

export default Sidebar;