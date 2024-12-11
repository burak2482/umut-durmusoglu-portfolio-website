import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Iletisim from './components/Iletisim.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import LayoutPortfolyo from './components/layouts/LayoutPortfolyo.jsx';
import LayoutAdmin from './components/layouts/LayoutAdmin.jsx';
import PortfolyoHome from './components/PortfolyoHome.jsx';
import PortfolyoList from './components/adminpagecomponents/PortfolyoList.jsx';
import AdminLoginPage from './components/AdminLoginPage.jsx';
import { useAuthContext } from './hooks/useAuthContext.js';

const App = () => {

  const {user} = useAuthContext()

  return (
    <Router>
      <Routes>
        {/* Admin panel için LayoutAdmin kullanımı */}
        <Route element={<LayoutAdmin />}>
          <Route path="/user/admin-panel" element={user ? <AdminPanel /> : <Navigate to='/user/login-page'/>} />
          <Route path="/user/portfolyo-list" element={user ? <PortfolyoList /> : <Navigate to='/user/login-page'/> } />
        </Route>

        {/* Portfolyo sayfası için LayoutPortfolyo kullanımı */}
        <Route element={<LayoutPortfolyo />}>
          <Route path="/" element={<PortfolyoHome />} />
          <Route path="/pages/iletisim" element={<Iletisim />} />
          <Route path="/user/login-page" element={!user ? <AdminLoginPage /> : <Navigate to='/'/> }/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
