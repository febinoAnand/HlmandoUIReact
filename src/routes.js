import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './HLMando/Dashboard';
import ProductionMonitor from './HLMando/Productionmonitor';
import ShiftReport from './HLMando/Shiftreport';
import ListEmployee from './HLMando/Listemployees';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/HLMando/dashboard" element={<Dashboard />} />
      <Route path="/HLMando/productionmonitor" element={<ProductionMonitor />} />
      <Route path="/HLMando/shiftreport" element={<ShiftReport />} />
      <Route path="/HLMando/listemployees" element={<ListEmployee />} />
    </Routes>
  );
};

export default RoutesComponent;
