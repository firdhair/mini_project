import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './View/Home';
import About from './View/About';
import Product from './View/Product';
import React from 'react';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        {/* <ul>
          <li>
            <Link to="/" className='text-blue-500'>Home</Link>
          </li>
          <li>  
            <Link to="/about" className='text-blue-500'>About</Link>
          </li>
        </ul> */}
        
        <Header/>
        {/* <HelloWorld name="Fira"/> */}
        <div className="p-3">   
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products/:id" element={<Product/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
