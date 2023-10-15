import Header from './components/Header';
import AddProducts from './components/AddProducts';
import AllProducts from './components/AllProducts';
import AddOrders from './components/AddOrders';
import AllOrders from './components/AllOrders';
import AllFinance from './components/AllFinance';
import AddFinance from './components/AddFinance';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
function App() {
  return (
    
    <Router>
    <div>
      <Header/>
      
      <Routes>
        
      
      <Route path="/add"element={<AddProducts/>}/> 
      <Route path="/"element={<AllProducts/>}/>
      <Route path="/Oadd"element={<AddOrders/>}/>
      <Route path="/orders"element={<AllOrders/>}/>
      <Route path="/finance"element={<AllFinance/>}/>
      <Route path="/fadd"element={<AddFinance/>}/>
      
      
     </Routes>
    </div>
    </Router>
  );
}

export default App;
