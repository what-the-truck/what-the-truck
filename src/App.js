import React from 'react';
import './App.css';
import CustRoutes from  './routes/CustRoutes'
import TruckRoutes from './routes/TruckRoutes'
import Header from './component/Header'


function App() {
  return (
    <div className="App">
    <Header />  
    {TruckRoutes}
    {CustRoutes}

    </div>
  );
}

export default App;
