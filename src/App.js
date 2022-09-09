import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Speakers from './pages/speakers.js';
import Sponsors from './pages/sponsors.js';
import Schedule from './pages/schedule.js'
import Location from './pages/location.js'
import Policy from './pages/code-conduct-policy.js';
import FAQ from './pages/faq.js';
import Volunteer from './pages/volunteer.js';
import ScrollToTop from "./components/scrolltotop.js";


function App() {
  return (
    
        <Router>
          <Header />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/location" element={<Location />} />
                <Route path="/code-of-conduct" element={<Policy />} />
                <Route path="/faq" element={<FAQ />} />  
                <Route path="/volunteer" element={<Volunteer />} />  
              </Routes>
            </ScrollToTop>
          <Footer />
       </Router>
        
     
  );
}

export default App;
