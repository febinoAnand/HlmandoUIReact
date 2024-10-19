import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layout/Defaultlayout';
import Login from './Pages/Loginpage';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<DefaultLayout />} /> {/* DefaultLayout will handle all other routes */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
