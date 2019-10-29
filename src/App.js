import React from 'react';
import './App.css';
import Header from './component/Header'
import CustRoutes from './routes/CustRoutes'
import TruckRoutes from'./routes/TruckRoutes'

function App() {
  return (
    <div className="App">
      <Header />  
      {CustRoutes}
      {TruckRoutes}
    </div>
  );
}

export default App;
