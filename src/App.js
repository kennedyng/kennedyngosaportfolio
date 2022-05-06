import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  

} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import NotFound from './Component/NotFound.js/NotFound';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'

import { useLocation } from "react-router-dom";

const background = {
  
  background: 'rgba(255, 77, 74, 0.9)',
  backdropFilter: 'blur(20px)'
  



}
function App() {

 const location = useLocation();

  return (


   
      
      <div style={background}>
        
        <AnimatePresence >
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
        </Switch>
        </AnimatePresence>
      </div>
      
    
  );
}

export default App;
