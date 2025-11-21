import React from 'react';
import { Search, Filter, Plus, MapPin, Home } from 'lucide-react';

const Properties = () => {
  
  // Mock Data (This would come from your Database later)
  const properties = [
    { id: 1, name: 'Sunset Apartments', type: 'Apartment', units: 12, location: 'Masaki, Dar es Salaam', status: 'Fully Leased', revenue: '12.5M' },
    { id: 2, name: 'Kijitonyama Complex', type: 'Commercial', units: 8, location: 'Kijitonyama', status: '2 Vacant', revenue: '8.2M' },
    { id: 3, name: 'Mbezi Beach Villa', type: 'Residential', units: 1, location: 'Mbezi Beach', status: 'Occupied', revenue: '1.5M' },
    { id: 4, name: 'City Center Office', type: 'Commercial', units: 4, location: 'Posta', status: 'Maintenance', revenue: '0M' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Properties</h1>
          <p className="text-slate-500 text-sm">Manage your real estate assets.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search properties..." 
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 bg-white w-64"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 text-slate-600">
            <Filter size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800">
            <Plus size={18} /> Add Property
          </button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((prop) => (
          <div key={prop.id} className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
            
            {/* Image Area */}
            <div className="h-40 bg-slate-100 relative flex items-center justify-center text-slate-300">
              <Home size={48} />
              <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur rounded text-xs font-bold text-slate-900 shadow-sm">
                {prop.type}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{prop.name}</h3>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
                <MapPin size={16} />
                {prop.location}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Revenue</p>
                  <p className="text-slate-900 font-bold">Tzs {prop.revenue}</p>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-bold ${
                  prop.status.includes('Vacant') ? 'bg-red-50 text-red-600' : 
                  prop.status.includes('Maintenance') ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'
                }`}>
                  {prop.status}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;