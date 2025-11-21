import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner'; // <--- IMPORT THIS
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';
import Finance from './pages/Finance';

function App() {
  return (
    <Router>
      {/* THE NOTIFICATION POPUP ENGINE */}
      <Toaster position="top-right" richColors /> 
      
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/settings" element={<div className="p-8 text-2xl font-bold">Settings Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;