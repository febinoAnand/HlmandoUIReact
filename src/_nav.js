import React from 'react';
import './scss/nav.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
const navigation = [
  {
    name: 'Dashboard',
    path: '/HLMando/dashboard',
    icon: <i className="fas fa-tachometer-alt"></i>, 
  },
  {
    name: 'Production Monitor',
    path: '/HLMando/Productionmonitor',
    icon: <i className="fas fa-cogs"></i>, 
  },
  {
    name: 'Shift Report',
    path: '/HLMando/Shiftreport',
    icon: <i className="fas fa-clipboard-list"></i>, 
  },
  {
    name: 'List Employee',
    path: '/HLMando/Listemployees',
    icon: <i className="fas fa-users"></i>, 
  },
  ];
  
  export default navigation;
