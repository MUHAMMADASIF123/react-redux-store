import './App.css';
// import Header from './containers/Header'
// import Header from './containers/Header'
import Productlisting from './containers/Productlisting';
import { Routes, Route  } from 'react-router-dom';
import ProductDetails from './containers/ProductDetails'
function App() {
  return (
    <div className="App ">
   {/* <Header/> */}
<div className='container'>
     <Routes>
     <Route path='/' element={<Productlisting/>}></Route>
     <Route path='/product/:productid' element={<ProductDetails/>}></Route>
    
     </Routes>
</div>
     
    </div>
  );
}

export default App;
