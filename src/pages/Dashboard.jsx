import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  Users, 
  Building2, 
  MoreHorizontal, 
  Download 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const Dashboard = () => {
  
  // Financial Trend Data (Smooth Curve)
  const chartData = [
    { name: 'Jan', revenue: 3200000 },
    { name: 'Feb', revenue: 4100000 },
    { name: 'Mar', revenue: 3800000 },
    { name: 'Apr', revenue: 5200000 },
    { name: 'May', revenue: 4800000 },
    { name: 'Jun', revenue: 6100000 },
    { name: 'Jul', revenue: 7400000 },
  ];

  // High-End Stats
  const stats = [
    { 
      label: 'Total Revenue', 
      value: 'Tzs 45.2M', 
      trend: '+12.5%', 
      isPositive: true,
      icon: <Wallet className="text-indigo-600" size={20} strokeWidth={1.5} />
    },
    { 
      label: 'Active Tenants', 
      value: '124', 
      trend: '+4.2%', 
      isPositive: true, 
      icon: <Users className="text-indigo-600" size={20} strokeWidth={1.5} />
    },
    { 
      label: 'Properties', 
      value: '12', 
      trend: '0%', 
      isPositive: true, 
      icon: <Building2 className="text-indigo-600" size={20} strokeWidth={1.5} />
    },
  ];

  const transactions = [
    { id: 1, desc: 'Rent: Unit 101', date: 'Today, 09:41', amount: '+ 1,200,000', status: 'Cleared' },
    { id: 2, desc: 'Maintenance: Block A', date: 'Yesterday', amount: '- 450,000', status: 'Pending' },
    { id: 3, desc: 'Rent: Unit B4', date: 'Nov 18', amount: '+ 850,000', status: 'Cleared' },
    { id: 4, desc: 'Utility Bill', date: 'Nov 17', amount: '- 120,000', status: 'Cleared' },
  ];

  return (
    <div className="space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Financial Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Global performance report as of Nov 21, 2025</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-50 hover:text-indigo-600 transition-all">
            <Download size={16} strokeWidth={1.5} /> Export PDF
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
            Add Property
          </button>
        </div>
      </div>

      {/* 1. Stats Row (Clean & Minimal) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                {stat.icon}
              </div>
              <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
                stat.isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'
              }`}>
                {stat.isPositive ? <ArrowUpRight size={14} className="mr-1"/> : <ArrowDownRight size={14} className="mr-1"/>}
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT: Revenue Chart (The Hero) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-slate-900">Revenue Growth</h3>
              <p className="text-xs text-slate-500">Monthly recurring revenue (MRR)</p>
            </div>
            <select className="text-sm border-none bg-slate-50 rounded-lg px-3 py-1 text-slate-600 focus:ring-0 cursor-pointer">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} tickFormatter={(value) => `${value/1000000}M`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value) => [`Tzs ${value.toLocaleString()}`, 'Revenue']}
                />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RIGHT: Recent Transactions (The Ledger) */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Recent Activity</h3>
            <button className="text-slate-400 hover:text-indigo-600">
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {transactions.map((tx) => (
              <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${tx.amount.includes('+') ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{tx.desc}</p>
                    <p className="text-xs text-slate-500">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-bold ${tx.amount.includes('+') ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {tx.amount}
                  </span>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-slate-50 mt-auto border-t border-slate-100">
            <button className="w-full py-2.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              View Full Ledger
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;