import React from 'react';
import { Search, UserPlus, Filter, MoreVertical, Phone, Mail, FileText } from 'lucide-react';

const Tenants = () => {
  
  // Mock Database
  const tenants = [
    { id: 1, name: 'Juma Jux', property: 'Sunset Apts, Unit 101', phone: '+255 712 345 678', email: 'juma@email.com', status: 'Active', rentStatus: 'Paid' },
    { id: 2, name: 'Neema Mushi', property: 'Kijitonyama, Unit B4', phone: '+255 754 000 111', email: 'neema@email.com', status: 'Active', rentStatus: 'Late' },
    { id: 3, name: 'Baraka Da Prince', property: 'Mbezi Villa', phone: '+255 655 222 333', email: 'baraka@email.com', status: 'Notice', rentStatus: 'Pending' },
    { id: 4, name: 'Sarah Johnson', property: 'City Center, Office 2', phone: '+255 788 999 000', email: 'sarah@work.com', status: 'Active', rentStatus: 'Paid' },
    { id: 5, name: 'David Mosha', property: 'Sunset Apts, Unit 102', phone: '+255 713 444 555', email: 'david@email.com', status: 'Active', rentStatus: 'Paid' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tenant Directory</h1>
          <p className="text-slate-500 text-sm">Manage leases and tenant information.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search tenants..." 
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 bg-white w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800">
            <UserPlus size={18} /> Add Tenant
          </button>
        </div>
      </div>

      {/* The "Pro" Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Tenant Name</th>
              <th className="px-6 py-4">Property Unit</th>
              <th className="px-6 py-4">Contact Info</th>
              <th className="px-6 py-4 text-center">Rent Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tenants.map((tenant) => (
              <tr key={tenant.id} className="hover:bg-slate-50 transition-colors group">
                
                {/* Name Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                      {tenant.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{tenant.name}</p>
                      <span className={`text-[10px] uppercase px-1.5 py-0.5 rounded font-bold ${
                        tenant.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {tenant.status}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Property Column */}
                <td className="px-6 py-4 text-slate-600 font-medium">
                  {tenant.property}
                </td>

                {/* Contact Column */}
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-slate-400" title="Call">
                      <Phone size={16} />
                    </button>
                    <button className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-slate-400" title="Email">
                      <Mail size={16} />
                    </button>
                  </div>
                </td>

                {/* Rent Status Badge */}
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                    tenant.rentStatus === 'Paid' ? 'bg-green-50 text-green-700 border border-green-100' : 
                    tenant.rentStatus === 'Late' ? 'bg-red-50 text-red-700 border border-red-100' : 
                    'bg-yellow-50 text-yellow-700 border border-yellow-100'
                  }`}>
                    {tenant.rentStatus}
                  </span>
                </td>

                {/* Action Menu */}
                <td className="px-6 py-4 text-center">
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreVertical size={18} />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Footer Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Showing 5 of 124 tenants</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">Previous</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tenants;