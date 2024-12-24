import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/scroll-to-top/ScrollToTop'; 
import Web_Development from './components/services/Web_Development';
import App_Development from './components/services/App_Development';
import UIDesign from './components/services/UIDesign';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Careers from './pages/Careers';
function App() {
  return (
    <Router>
    <ScrollToTop /> {/* Include ScrollToTop component here */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<Web_Development />} />
            <Route path="/services/app-development" element={<App_Development />} />
            <Route path="/services/ui-ux-design" element={<UIDesign />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;