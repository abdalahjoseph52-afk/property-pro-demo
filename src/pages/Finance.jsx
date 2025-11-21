import React from 'react';
import { Download, DollarSign, TrendingUp, TrendingDown, CreditCard, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Finance = () => {
  
  // Mock P&L Data (Monthly)
  const data = [
    { name: 'Jan', income: 4000000, expense: 2400000 },
    { name: 'Feb', income: 3000000, expense: 1398000 },
    { name: 'Mar', income: 2000000, expense: 9800000 }, // Big repair cost here
    { name: 'Apr', income: 2780000, expense: 390800 },
    { name: 'May', income: 1890000, expense: 480000 },
    { name: 'Jun', income: 2390000, expense: 380000 },
    { name: 'Jul', income: 3490000, expense: 430000 },
  ];

  // Mock Transaction Ledger
  const transactions = [
    { id: 'TX-001', desc: 'Rent Payment - Unit 101', date: '2025-11-20', amount: '+ 1,200,000', type: 'income' },
    { id: 'TX-002', desc: 'Plumbing Repair - Block A', date: '2025-11-19', amount: '- 450,000', type: 'expense' },
    { id: 'TX-003', desc: 'Security Fee (Monthly)', date: '2025-11-18', amount: '- 300,000', type: 'expense' },
    { id: 'TX-004', desc: 'Rent Payment - Unit B4', date: '2025-11-18', amount: '+ 850,000', type: 'income' },
  ];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Financial Performance</h1>
          <p className="text-slate-500 text-sm">Profit & Loss Overview</p>
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-50">
            <Calendar size={16} /> Last 6 Months
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800">
            <Download size={16} /> Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Income */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <TrendingUp size={20} />
            </div>
            <span className="text-sm font-medium text-slate-500">Total Income (YTD)</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">Tzs 45.2M</p>
          <p className="text-xs text-green-600 mt-1 font-medium">+12% vs last year</p>
        </div>

        {/* Total Expenses */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-red-50 rounded-lg text-red-600">
              <TrendingDown size={20} />
            </div>
            <span className="text-sm font-medium text-slate-500">Total Expenses</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">Tzs 12.8M</p>
          <p className="text-xs text-red-600 mt-1 font-medium">+5% (Maintenance spike)</p>
        </div>

        {/* Net Profit */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
              <DollarSign size={20} />
            </div>
            <span className="text-sm font-medium text-slate-400">Net Profit</span>
          </div>
          <p className="text-3xl font-bold text-white">Tzs 32.4M</p>
          <p className="text-xs text-blue-400 mt-1 font-medium">71% Profit Margin</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart: Income vs Expense */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Cash Flow Analysis</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(value) => `${value/1000000}M`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => `Tzs ${value.toLocaleString()}`}
                />
                <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" name="Income" />
                <Area type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorExpense)" name="Expense" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Ledger (Recent Transactions) */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Recent Ledger</h3>
            <button className="text-xs text-blue-600 font-medium hover:underline">View All</button>
          </div>
          <div className="divide-y divide-slate-100">
            {transactions.map((tx) => (
              <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tx.type === 'income' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{tx.desc}</p>
                    <p className="text-xs text-slate-500">{tx.date}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold ${tx.type === 'income' ? 'text-green-600' : 'text-slate-900'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-50">
            <button className="w-full py-2 border border-dashed border-slate-300 rounded-lg text-slate-500 text-sm hover:bg-white hover:text-slate-700 transition-colors">
              + Add Manual Entry
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Finance;