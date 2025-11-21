import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';
import Finance from './pages/Finance'; // <--- IMPORT THIS

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/finance" element={<Finance />} /> {/* <--- ADD THIS */}
          
          {/* Placeholder */}
          <Route path="/settings" element={<div className="p-8 text-2xl font-bold">Settings Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;