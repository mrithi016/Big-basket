import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Pro1 from './product/Pro1';
import Pro2 from './product/Pro2';
import Pro3 from './product/Pro3';
import Pro5 from './product/Pro5';
import Pro6 from './product/Pro6';
import Pro7 from './product/Pro7';
import Cart from './redux/Cart';
import Foot from './footer/Foot';
import Fav from './redux/Fav'
import Fileupload from './pages/Fileupload';
import Fileupdate from './pages/Fileupdate';
import Edit from './pages/Edit';
import Validation from'./pages/Validation';
import ProtectedRoute from './pages/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Fetchfile from './pages/Single';
import { useState } from 'react';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {


  return (
    <div>
     
      
     <HelmetProvider>
      <BrowserRouter>
      <Nav/>
      <Routes>
         
             <Route path='/' element={
              <ProtectedRoute>
              <Home/>
             </ProtectedRoute>
            }/>
        <Route path="/product1" element={<Pro1/>}/>
        <Route path="/product2" element={<Pro2/>}/>
         <Route path="/product3" element={<Pro3/>}/>
          <Route path="/product5" element={<Pro5/>}/>
           <Route path="/product6" element={<Pro6/>}/>
            <Route path="/product7" element={<Pro7/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/fav" element={<fav/>}/>
           <Route path="/upload" element={<Fileupload/>} />
           <Route path="/update" element={<Fileupdate/>}/>
           <Route path="/edit/:id" element={<Edit/>}/>
             <Route path="/val" element={<Validation/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/reg" element={<Register/>}/>
                <Route path="/singlecrud" element={<Fetchfile/>}/>
             
            
           

      </Routes>
      <Foot/>
      </BrowserRouter>
      </HelmetProvider>


    </div>
  );
}

export default App;
