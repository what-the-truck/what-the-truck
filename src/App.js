import React from 'react';
import './App.css';
import './component/Header'
import './routes/CustRoutes'
import './routes/TruckRoutes'

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
