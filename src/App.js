
import React from 'react';
// import { } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Menu from './page/Menu';
import Service from './page/Service'

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
           <BrowserRouter>
           <Header/>
               <Routes>
                  <Route path ="/" element= {<Home/>} />
                  <Route path ="/menu" element= {<Menu/>} />
                  <Route path ="/about" element= {<About/>} />
                  <Route path = "/service" element= {<Service />} />
                  <Route path ="/contact" element= {<Contact/>} />
               </Routes>
           </BrowserRouter>
      </div>
  );
}

export default App;
