import React, {Component} from 'react';
import './App.css';
import CustRoutes from  './routes/CustRoutes'
import TruckRoutes from './routes/TruckRoutes'
import Header from './component/Header'
import axios from 'axios'


class App extends Component {
constructor(){
super()

}
componentDidMount(){
  axios.get('/auth/check').then(res=> {
  console.log(res.data)}
)
}

render() {
  return (
    <div className="App">
    <Header />  
    {CustRoutes}
    {TruckRoutes}

    </div>
  );
}
}

export default App;
