import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './store/slices/AllProducts/AllProducts';
import ProductDetails from './store/slices/OneProduct/ProductDetails';
import './App.css';
import Nav from './Components/Nav/Nav';

const App = () => {
  return (
   <div> 
    <Nav/>
    <Router>
   <Routes>
     <Route path="/" element={<AllProducts />} />
     <Route path="/product/:id" element={<ProductDetails />} />
    
   </Routes>
 </Router>
 </div>
  );
};

export default App;
